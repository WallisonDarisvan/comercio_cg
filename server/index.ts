import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool, initDb } from './db';
import { seedDb } from './seed';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || (process.env.NODE_ENV === 'production' ? 3000 : 3001);

app.use(cors());
app.use(express.json());

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

// Serve frontend build in production
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[SERVER] API do Comércio Campina rodando na porta ${PORT}`);
});
