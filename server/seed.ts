import crypto from 'crypto';
import { pool } from './db';
import {
  STORES_DATA,
  INITIAL_BANNERS,
  INITIAL_LEADS,
  NEWS_ARTICLES,
  TV_PROGRAMS,
} from '../src/data/mockData';

export async function seedDb() {
  const client = await pool.connect();
  try {
    // 1. Check & seed stores (garante que todas as 100 lojas estejam presentes)
    console.log(`[DB] Sincronizando tabela stores (${STORES_DATA.length} lojas)...`);
    for (const s of STORES_DATA) {
      await client.query(`
        INSERT INTO stores (
          id, name, category, category_id, image, tag_tv, description, offer, rating,
          reviews_count, neighborhood, address, phone, whatsapp, instagram, featured_in_show,
          discount_coupon, highlights, is_verified_tv, opening_hours, website,
          about_text, about_image, services, testimonials, gallery, process_steps, faq,
          cta_title, cta_subtitle, visible_sections
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
          $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
          $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31
        )
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          category = EXCLUDED.category,
          category_id = EXCLUDED.category_id,
          image = EXCLUDED.image,
          tag_tv = EXCLUDED.tag_tv,
          description = EXCLUDED.description,
          offer = EXCLUDED.offer,
          rating = EXCLUDED.rating,
          reviews_count = EXCLUDED.reviews_count,
          neighborhood = EXCLUDED.neighborhood,
          address = EXCLUDED.address,
          phone = EXCLUDED.phone,
          whatsapp = EXCLUDED.whatsapp,
          instagram = EXCLUDED.instagram,
          featured_in_show = EXCLUDED.featured_in_show,
          discount_coupon = EXCLUDED.discount_coupon,
          highlights = EXCLUDED.highlights,
          is_verified_tv = EXCLUDED.is_verified_tv,
          opening_hours = EXCLUDED.opening_hours,
          website = EXCLUDED.website,
          about_text = COALESCE(stores.about_text, EXCLUDED.about_text),
          about_image = COALESCE(stores.about_image, EXCLUDED.about_image),
          services = CASE WHEN stores.services IS NULL OR stores.services = '[]'::jsonb THEN EXCLUDED.services ELSE stores.services END,
          testimonials = CASE WHEN stores.testimonials IS NULL OR stores.testimonials = '[]'::jsonb THEN EXCLUDED.testimonials ELSE stores.testimonials END,
          gallery = CASE WHEN stores.gallery IS NULL OR stores.gallery = '[]'::jsonb THEN EXCLUDED.gallery ELSE stores.gallery END,
          process_steps = CASE WHEN stores.process_steps IS NULL OR stores.process_steps = '[]'::jsonb THEN EXCLUDED.process_steps ELSE stores.process_steps END,
          faq = CASE WHEN stores.faq IS NULL OR stores.faq = '[]'::jsonb THEN EXCLUDED.faq ELSE stores.faq END,
          cta_title = COALESCE(stores.cta_title, EXCLUDED.cta_title),
          cta_subtitle = COALESCE(stores.cta_subtitle, EXCLUDED.cta_subtitle),
          visible_sections = CASE WHEN stores.visible_sections IS NULL OR stores.visible_sections = '{}'::jsonb THEN EXCLUDED.visible_sections ELSE stores.visible_sections END
      `, [
        s.id, s.name, s.category, s.categoryId, s.image, s.tagTv, s.description, s.offer, s.rating,
        s.reviewsCount, s.neighborhood, s.address, s.phone, s.whatsapp, s.instagram, s.featuredInShow,
        s.discountCoupon || null, JSON.stringify(s.highlights || []), s.isVerifiedTv, s.openingHours, s.website || null,
        s.aboutText || null, s.aboutImage || null, JSON.stringify(s.services || []),
        JSON.stringify(s.testimonials || []), JSON.stringify(s.gallery || []),
        JSON.stringify(s.processSteps || []), JSON.stringify(s.faq || []),
        s.ctaTitle || null, s.ctaSubtitle || null, JSON.stringify(s.visibleSections || {})
      ]);
    }
    console.log(`[DB] Todas as ${STORES_DATA.length} lojas sincronizadas.`);

    // 2. Check & seed banners
    const { rows: bannerRows } = await client.query('SELECT COUNT(*) FROM banners');
    if (parseInt(bannerRows[0].count, 10) === 0) {
      console.log('[DB] Populando tabela banners...');
      for (let i = 0; i < INITIAL_BANNERS.length; i++) {
        const b = INITIAL_BANNERS[i];
        await client.query(`
          INSERT INTO banners (
            id, title, subtitle, badge, cta_text, cta_link, media_type, media_url,
            sponsor, show_name, air_time, display_order, active
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
          ON CONFLICT (id) DO NOTHING
        `, [
          b.id, b.title, b.subtitle, b.badge, b.ctaText, b.ctaLink, b.mediaType || 'image',
          b.mediaUrl, b.sponsor, b.showName, b.airTime, i, true
        ]);
      }
      console.log(`[DB] ${INITIAL_BANNERS.length} banners inseridos.`);
    }

    // 3. Check & seed leads
    const { rows: leadRows } = await client.query('SELECT COUNT(*) FROM leads');
    if (parseInt(leadRows[0].count, 10) === 0) {
      console.log('[DB] Populando tabela leads...');
      for (const l of INITIAL_LEADS) {
        await client.query(`
          INSERT INTO leads (
            id, company_name, owner_name, whatsapp, category,
            neighborhood, selected_plan, status, notes
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
          ON CONFLICT (id) DO NOTHING
        `, [
          l.id, l.companyName, l.ownerName, l.whatsapp, l.category,
          l.neighborhood, l.selectedPlan, l.status, l.notes || null
        ]);
      }
      console.log(`[DB] ${INITIAL_LEADS.length} leads inseridos.`);
    }

    // 4. Check & seed news articles
    const { rows: newsRows } = await client.query('SELECT COUNT(*) FROM news_articles');
    if (parseInt(newsRows[0].count, 10) === 0) {
      console.log('[DB] Populando tabela news_articles...');
      for (const n of NEWS_ARTICLES) {
        await client.query(`
          INSERT INTO news_articles (
            id, title, summary, content, date, read_time, category, image, reporter
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
          ON CONFLICT (id) DO NOTHING
        `, [
          n.id, n.title, n.summary, n.content, n.date, n.readTime, n.category, n.image, n.reporter
        ]);
      }
      console.log(`[DB] ${NEWS_ARTICLES.length} notícias inseridas.`);
    }

    // 5. Check & seed TV programs
    const { rows: tvRows } = await client.query('SELECT COUNT(*) FROM tv_programs');
    if (parseInt(tvRows[0].count, 10) === 0) {
      console.log('[DB] Populando tabela tv_programs...');
      for (const p of TV_PROGRAMS) {
        await client.query(`
          INSERT INTO tv_programs (
            id, title, time_slot, anchor, description, is_live_now, thumbnail
          ) VALUES ($1, $2, $3, $4, $5, $6, $7)
          ON CONFLICT (id) DO NOTHING
        `, [
          p.id, p.title, p.timeSlot, p.anchor, p.description, p.isLiveNow, p.thumbnail
        ]);
      }
      console.log(`[DB] ${TV_PROGRAMS.length} programas da TV inseridos.`);
    }

    // 6. Check & seed demo merchant
    const { rows: merchantRows } = await client.query('SELECT COUNT(*) FROM merchants');
    if (parseInt(merchantRows[0].count, 10) === 0) {
      console.log('[DB] Criando conta de lojista de demonstração...');
      const salt = crypto.randomBytes(16).toString('hex');
      const passwordHash = crypto.pbkdf2Sync('lojista123', salt, 10000, 64, 'sha512').toString('hex');
      await client.query(`
        INSERT INTO merchants (id, name, email, password_hash, salt, whatsapp, store_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO NOTHING
      `, [
        'merchant-demo-1',
        'Carlos Eduardo',
        'lojista@comerciocg.com.br',
        passwordHash,
        salt,
        '83998881234',
        'tudo-celular-cg'
      ]);
      console.log('[DB] Lojista demo criado: lojista@comerciocg.com.br / lojista123');
    } else {
      // Atualizar demo merchant para garantir associação com tudo-celular-cg
      await client.query(`
        UPDATE merchants SET store_id = 'tudo-celular-cg' WHERE id = 'merchant-demo-1' AND (store_id = 'store-1' OR store_id IS NULL)
      `);
    }
  } finally {
    client.release();
  }
}
