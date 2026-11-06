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
    // 1. Check & seed stores
    const { rows: storeRows } = await client.query('SELECT COUNT(*) FROM stores');
    if (parseInt(storeRows[0].count, 10) === 0) {
      console.log('[DB] Populando tabela stores...');
      for (const s of STORES_DATA) {
        await client.query(`
          INSERT INTO stores (
            id, name, category, category_id, image, tag_tv, description, offer, rating,
            reviews_count, neighborhood, address, phone, whatsapp, instagram, featured_in_show,
            discount_coupon, highlights, is_verified_tv, opening_hours, website
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
          ON CONFLICT (id) DO NOTHING
        `, [
          s.id, s.name, s.category, s.categoryId, s.image, s.tagTv, s.description, s.offer, s.rating,
          s.reviewsCount, s.neighborhood, s.address, s.phone, s.whatsapp, s.instagram, s.featuredInShow,
          s.discountCoupon || null, JSON.stringify(s.highlights || []), s.isVerifiedTv, s.openingHours, s.website || null
        ]);
      }
      console.log(`[DB] ${STORES_DATA.length} lojas inseridas.`);
    }

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
  } finally {
    client.release();
  }
}
