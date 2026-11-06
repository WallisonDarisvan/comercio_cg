import express from 'express';
import cors from 'cors';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { pool, initDb } from './db';
import { seedDb } from './seed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || (process.env.NODE_ENV === 'production' ? 3000 : 3001);

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Initialize DB and Seed on Start
async function bootstrap() {
  try {
    await initDb();
    await seedDb();
  } catch (error: any) {
    console.warn('[DB WARNING] Falha ao conectar no PostgreSQL:', error.message);
    console.warn('[DB WARNING] O servidor continuará executando em modo fallback.');
  }
}
bootstrap();

// Health Check
app.get('/api/health', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW() as now');
    res.json({ status: 'ok', time: rows[0].now, postgres: true });
  } catch (e: any) {
    res.json({ status: 'ok', postgres: false, error: e.message });
  }
});

// STORES
app.get('/api/stores', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM stores ORDER BY name ASC');
    const mapped = rows.map(r => ({
      id: r.id,
      name: r.name,
      category: r.category,
      categoryId: r.category_id,
      image: r.image,
      tagTv: r.tag_tv,
      description: r.description,
      offer: r.offer,
      rating: parseFloat(r.rating),
      reviewsCount: r.reviews_count,
      neighborhood: r.neighborhood,
      address: r.address,
      phone: r.phone,
      whatsapp: r.whatsapp,
      instagram: r.instagram,
      featuredInShow: r.featured_in_show,
      discountCoupon: r.discount_coupon,
      highlights: r.highlights || [],
      isVerifiedTv: r.is_verified_tv,
      openingHours: r.opening_hours,
      website: r.website,
      viewsCount: parseInt(r.views_count, 10) || 0,
      whatsappClicks: parseInt(r.whatsapp_clicks, 10) || 0,
      aboutText: r.about_text,
      aboutImage: r.about_image,
      services: r.services || [],
      testimonials: r.testimonials || [],
      gallery: r.gallery || [],
      processSteps: r.process_steps || [],
      faq: r.faq || [],
      ctaTitle: r.cta_title,
      ctaSubtitle: r.cta_subtitle,
      visibleSections: r.visible_sections || {},
    }));
    res.json(mapped);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/stores', async (req, res) => {
  try {
    const s = req.body;
    const id = s.id || `store-${Date.now()}`;
    await pool.query(`
      INSERT INTO stores (
        id, name, category, category_id, image, tag_tv, description, offer, rating,
        reviews_count, neighborhood, address, phone, whatsapp, instagram, featured_in_show,
        discount_coupon, highlights, is_verified_tv, opening_hours, website
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
    `, [
      id, s.name, s.category, s.categoryId, s.image, s.tagTv || 'Parceiro TV', s.description, s.offer,
      s.rating || 5.0, s.reviewsCount || 0, s.neighborhood, s.address, s.phone, s.whatsapp,
      s.instagram, s.featuredInShow || 'Momento Comercial', s.discountCoupon || null,
      JSON.stringify(s.highlights || []), s.isVerifiedTv !== false, s.openingHours || '08h às 18h', s.website || null
    ]);
    res.status(201).json({ id, ...s });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/stores/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const s = req.body;
    await pool.query(`
      UPDATE stores SET
        name = $1, category = $2, category_id = $3, image = $4, tag_tv = $5,
        description = $6, offer = $7, rating = $8, reviews_count = $9, neighborhood = $10,
        address = $11, phone = $12, whatsapp = $13, instagram = $14, featured_in_show = $15,
        discount_coupon = $16, highlights = $17, is_verified_tv = $18, opening_hours = $19,
        website = $20, updated_at = CURRENT_TIMESTAMP
      WHERE id = $21
    `, [
      s.name, s.category, s.categoryId, s.image, s.tagTv, s.description, s.offer,
      s.rating, s.reviewsCount, s.neighborhood, s.address, s.phone, s.whatsapp,
      s.instagram, s.featuredInShow, s.discountCoupon || null, JSON.stringify(s.highlights || []),
      s.isVerifiedTv, s.openingHours, s.website || null, id
    ]);
    res.json({ id, ...s });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/stores/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM stores WHERE id = $1', [id]);
    res.json({ success: true, id });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// STORE ANALYTICS TRACKING
app.post('/api/stores/:id/view', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(`
      UPDATE stores 
      SET views_count = COALESCE(views_count, 0) + 1 
      WHERE id = $1 
      RETURNING views_count, whatsapp_clicks
    `, [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Loja não encontrada' });
    res.json({ success: true, viewsCount: parseInt(rows[0].views_count, 10), whatsappClicks: parseInt(rows[0].whatsapp_clicks, 10) });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/stores/:id/whatsapp-click', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(`
      UPDATE stores 
      SET whatsapp_clicks = COALESCE(whatsapp_clicks, 0) + 1 
      WHERE id = $1 
      RETURNING views_count, whatsapp_clicks
    `, [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Loja não encontrada' });
    res.json({ success: true, viewsCount: parseInt(rows[0].views_count, 10), whatsappClicks: parseInt(rows[0].whatsapp_clicks, 10) });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// BANNERS
app.get('/api/banners', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM banners WHERE active = true ORDER BY display_order ASC, created_at ASC');
    const mapped = rows.map(r => ({
      id: r.id,
      title: r.title,
      subtitle: r.subtitle,
      badge: r.badge,
      ctaText: r.cta_text,
      ctaLink: r.cta_link,
      mediaType: r.media_type,
      mediaUrl: r.media_url,
      sponsor: r.sponsor,
      showName: r.show_name,
      airTime: r.air_time,
      order: r.display_order,
      active: r.active
    }));
    res.json(mapped);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/banners', async (req, res) => {
  try {
    const banners: any[] = req.body;
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      await client.query('DELETE FROM banners');
      for (let i = 0; i < banners.length; i++) {
        const b = banners[i];
        await client.query(`
          INSERT INTO banners (
            id, title, subtitle, badge, cta_text, cta_link, media_type, media_url,
            sponsor, show_name, air_time, display_order, active
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        `, [
          b.id, b.title, b.subtitle, b.badge, b.ctaText, b.ctaLink, b.mediaType || 'image',
          b.mediaUrl, b.sponsor, b.showName, b.airTime, i, b.active !== false
        ]);
      }
      await client.query('COMMIT');
      res.json(banners);
    } catch (err: any) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// LEADS
app.get('/api/leads', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM leads ORDER BY created_at DESC');
    const mapped = rows.map(r => ({
      id: r.id,
      companyName: r.company_name,
      ownerName: r.owner_name,
      whatsapp: r.whatsapp,
      category: r.category,
      neighborhood: r.neighborhood,
      selectedPlan: r.selected_plan,
      status: r.status,
      notes: r.notes,
      createdAt: r.created_at.toISOString(),
    }));
    res.json(mapped);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/leads', async (req, res) => {
  try {
    const l = req.body;
    const id = l.id || `lead-${Date.now()}`;
    await pool.query(`
      INSERT INTO leads (
        id, company_name, owner_name, whatsapp, category,
        neighborhood, selected_plan, status, notes
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `, [
      id, l.companyName, l.ownerName, l.whatsapp, l.category,
      l.neighborhood, l.selectedPlan, l.status || 'novo', l.notes || null
    ]);
    res.status(201).json({ id, ...l, createdAt: new Date().toISOString() });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.patch('/api/leads/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await pool.query('UPDATE leads SET status = $1 WHERE id = $2', [status, id]);
    res.json({ id, status });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// NEWS & TV PROGRAMS
app.get('/api/news', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM news_articles ORDER BY created_at DESC');
    res.json(rows.map(r => ({
      id: r.id,
      title: r.title,
      summary: r.summary,
      content: r.content,
      date: r.date,
      readTime: r.read_time,
      category: r.category,
      image: r.image,
      reporter: r.reporter
    })));
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/tv-programs', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tv_programs ORDER BY created_at ASC');
    res.json(rows.map(r => ({
      id: r.id,
      title: r.title,
      timeSlot: r.time_slot,
      anchor: r.anchor,
      description: r.description,
      isLiveNow: r.is_live_now,
      thumbnail: r.thumbnail
    })));
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// MERCHANT AUTH & STORE MANAGEMENT (PAINEL EXCLUSIVO DO LOJISTA)
function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

function mapStore(r: any) {
  if (!r) return null;
  return {
    id: r.id,
    name: r.name,
    category: r.category,
    categoryId: r.category_id,
    image: r.image,
    tagTv: r.tag_tv,
    description: r.description,
    offer: r.offer,
    rating: parseFloat(r.rating) || 5.0,
    reviewsCount: r.reviews_count || 0,
    neighborhood: r.neighborhood,
    address: r.address,
    phone: r.phone,
    whatsapp: r.whatsapp,
    instagram: r.instagram,
    featuredInShow: r.featured_in_show,
    discountCoupon: r.discount_coupon,
    highlights: r.highlights || [],
    isVerifiedTv: r.is_verified_tv,
    openingHours: r.opening_hours,
    website: r.website,
    viewsCount: parseInt(r.views_count, 10) || 0,
    whatsappClicks: parseInt(r.whatsapp_clicks, 10) || 0,
    aboutText: r.about_text,
    aboutImage: r.about_image,
    services: r.services || [],
    testimonials: r.testimonials || [],
    gallery: r.gallery || [],
    processSteps: r.process_steps || [],
    faq: r.faq || [],
    ctaTitle: r.cta_title,
    ctaSubtitle: r.cta_subtitle,
    visibleSections: r.visible_sections || {},
  };
}

async function getMerchantFromToken(authHeader?: string) {
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.substring(7).trim();
  if (!token) return null;

  const { rows } = await pool.query(`
    SELECT m.id, m.name, m.email, m.whatsapp, m.store_id
    FROM merchant_sessions s
    JOIN merchants m ON s.merchant_id = m.id
    WHERE s.token = $1 AND s.expires_at > CURRENT_TIMESTAMP
  `, [token]);

  if (rows.length === 0) return null;
  return { ...rows[0], token };
}

// 1. Merchant Register
app.post('/api/merchant/register', async (req, res) => {
  try {
    const { name, email, password, whatsapp, storeName, category, categoryId, neighborhood, address } = req.body;

    if (!name || !email || !password || !storeName) {
      return res.status(400).json({ error: 'Preencha todos os campos obrigatórios (nome, e-mail, senha e nome da loja).' });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Verifica se e-mail já existe
    const existing = await pool.query('SELECT id FROM merchants WHERE LOWER(email) = $1', [normalizedEmail]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Este e-mail já está em uso por outro lojista.' });
    }

    const storeId = `store-${Date.now()}`;
    const merchantId = `merchant-${Date.now()}`;
    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = hashPassword(password, salt);
    const token = crypto.randomBytes(32).toString('hex');

    const defaultImage = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80';

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // 1. Cria a loja do lojista
      await client.query(`
        INSERT INTO stores (
          id, name, category, category_id, image, tag_tv, description, offer, rating,
          reviews_count, neighborhood, address, phone, whatsapp, instagram, featured_in_show,
          discount_coupon, highlights, is_verified_tv, opening_hours, website
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
      `, [
        storeId,
        storeName.trim(),
        category || 'Comércio Geral',
        categoryId || 'outros',
        defaultImage,
        'Lojista Parceiro',
        `Bem-vindo(a) à ${storeName.trim()}! Atendimento especializado em Campina Grande.`,
        'Visite nosso espaço ou faça seu pedido diretamente pelo WhatsApp!',
        5.0,
        1,
        neighborhood || 'Centro',
        address || 'Campina Grande - PB',
        whatsapp || '',
        whatsapp || '',
        '@' + storeName.trim().toLowerCase().replace(/[^a-z0-9]/g, ''),
        'Destaque do Comércio',
        null,
        JSON.stringify(['Atendimento com Excelência', 'Qualidade Garantida']),
        true,
        'Seg a Sáb: 08h às 18h',
        null
      ]);

      // 2. Cria o registro do comerciante associado à sua loja
      await client.query(`
        INSERT INTO merchants (id, name, email, password_hash, salt, whatsapp, store_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [
        merchantId,
        name.trim(),
        normalizedEmail,
        passwordHash,
        salt,
        whatsapp || '',
        storeId
      ]);

      // 3. Cria sessão de login
      await client.query(`
        INSERT INTO merchant_sessions (token, merchant_id)
        VALUES ($1, $2)
      `, [token, merchantId]);

      await client.query('COMMIT');

      const { rows: storeRows } = await pool.query('SELECT * FROM stores WHERE id = $1', [storeId]);
      const createdStore = mapStore(storeRows[0]);

      res.status(201).json({
        success: true,
        token,
        merchant: {
          id: merchantId,
          name: name.trim(),
          email: normalizedEmail,
          whatsapp: whatsapp || '',
          storeId,
        },
        store: createdStore,
      });
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Merchant Login
app.post('/api/merchant/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Informe e-mail e senha para acessar.' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const { rows } = await pool.query('SELECT * FROM merchants WHERE LOWER(email) = $1', [normalizedEmail]);
    if (rows.length === 0) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
    }

    const merchant = rows[0];
    const incomingHash = hashPassword(password, merchant.salt);
    if (incomingHash !== merchant.password_hash) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
    }

    // Cria nova sessão
    const token = crypto.randomBytes(32).toString('hex');
    await pool.query(`
      INSERT INTO merchant_sessions (token, merchant_id)
      VALUES ($1, $2)
    `, [token, merchant.id]);

    // Busca a loja do lojista
    let storeData = null;
    if (merchant.store_id) {
      const { rows: storeRows } = await pool.query('SELECT * FROM stores WHERE id = $1', [merchant.store_id]);
      if (storeRows.length > 0) {
        storeData = mapStore(storeRows[0]);
      }
    }

    res.json({
      success: true,
      token,
      merchant: {
        id: merchant.id,
        name: merchant.name,
        email: merchant.email,
        whatsapp: merchant.whatsapp,
        storeId: merchant.store_id,
      },
      store: storeData,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Merchant Me (Validação da sessão atual)
app.get('/api/merchant/me', async (req, res) => {
  try {
    const merchant = await getMerchantFromToken(req.headers.authorization);
    if (!merchant) {
      return res.status(401).json({ error: 'Sessão expirada ou inválida.' });
    }

    let storeData = null;
    if (merchant.store_id) {
      const { rows } = await pool.query('SELECT * FROM stores WHERE id = $1', [merchant.store_id]);
      if (rows.length > 0) {
        storeData = mapStore(rows[0]);
      }
    }

    res.json({
      merchant: {
        id: merchant.id,
        name: merchant.name,
        email: merchant.email,
        whatsapp: merchant.whatsapp,
        storeId: merchant.store_id,
      },
      store: storeData,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Update Merchant's Own Store (Exclusivo para a sua página)
app.put('/api/merchant/my-store', async (req, res) => {
  try {
    const merchant = await getMerchantFromToken(req.headers.authorization);
    if (!merchant) {
      return res.status(401).json({ error: 'Acesso não autorizado. Faça login novamente.' });
    }

    if (!merchant.store_id) {
      return res.status(400).json({ error: 'Nenhuma loja associada a esta conta.' });
    }

    const s = req.body;
    // O lojista só tem permissão para alterar a loja dele (merchant.store_id)
    await pool.query(`
      UPDATE stores SET
        name = COALESCE($1, name),
        category = COALESCE($2, category),
        category_id = COALESCE($3, category_id),
        image = COALESCE($4, image),
        description = COALESCE($5, description),
        offer = COALESCE($6, offer),
        neighborhood = COALESCE($7, neighborhood),
        address = COALESCE($8, address),
        phone = COALESCE($9, phone),
        whatsapp = COALESCE($10, whatsapp),
        instagram = COALESCE($11, instagram),
        discount_coupon = $12,
        highlights = COALESCE($13, highlights),
        opening_hours = COALESCE($14, opening_hours),
        website = $15,
        about_text = COALESCE($16, about_text),
        about_image = COALESCE($17, about_image),
        services = COALESCE($18, services),
        testimonials = COALESCE($19, testimonials),
        gallery = COALESCE($20, gallery),
        process_steps = COALESCE($21, process_steps),
        faq = COALESCE($22, faq),
        cta_title = COALESCE($23, cta_title),
        cta_subtitle = COALESCE($24, cta_subtitle),
        visible_sections = COALESCE($25, visible_sections),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $26
    `, [
      s.name,
      s.category,
      s.categoryId,
      s.image,
      s.description,
      s.offer,
      s.neighborhood,
      s.address,
      s.phone,
      s.whatsapp,
      s.instagram,
      s.discountCoupon !== undefined ? s.discountCoupon : null,
      s.highlights ? JSON.stringify(s.highlights) : null,
      s.openingHours,
      s.website !== undefined ? s.website : null,
      s.aboutText !== undefined ? s.aboutText : null,
      s.aboutImage !== undefined ? s.aboutImage : null,
      s.services ? JSON.stringify(s.services) : null,
      s.testimonials ? JSON.stringify(s.testimonials) : null,
      s.gallery ? JSON.stringify(s.gallery) : null,
      s.processSteps ? JSON.stringify(s.processSteps) : null,
      s.faq ? JSON.stringify(s.faq) : null,
      s.ctaTitle !== undefined ? s.ctaTitle : null,
      s.ctaSubtitle !== undefined ? s.ctaSubtitle : null,
      s.visibleSections ? JSON.stringify(s.visibleSections) : null,
      merchant.store_id
    ]);

    const { rows } = await pool.query('SELECT * FROM stores WHERE id = $1', [merchant.store_id]);
    res.json({ success: true, store: mapStore(rows[0]) });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Merchant Logout
app.post('/api/merchant/logout', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7).trim();
      await pool.query('DELETE FROM merchant_sessions WHERE token = $1', [token]);
    }
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Serve frontend build in production
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[SERVER] API do Comércio Campina rodando na porta ${PORT}`);
});
