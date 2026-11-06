import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:2b89a837b6fbb0e908469019@comerciocg-db:5432/comercio_cg';

export const pool = new Pool({
  connectionString,
  ssl: false,
  connectionTimeoutMillis: 5000,
});

export async function initDb() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS stores (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        category_id VARCHAR(100) NOT NULL,
        image TEXT NOT NULL,
        tag_tv VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        offer TEXT NOT NULL,
        rating NUMERIC(3, 1) DEFAULT 5.0,
        reviews_count INT DEFAULT 0,
        neighborhood VARCHAR(100) NOT NULL,
        address TEXT NOT NULL,
        phone VARCHAR(50) NOT NULL,
        whatsapp VARCHAR(50) NOT NULL,
        instagram VARCHAR(100) NOT NULL,
        featured_in_show VARCHAR(200) NOT NULL,
        discount_coupon VARCHAR(50),
        highlights JSONB DEFAULT '[]'::jsonb,
        is_verified_tv BOOLEAN DEFAULT true,
        opening_hours VARCHAR(100) NOT NULL,
        website TEXT,
        views_count INT DEFAULT 0,
        whatsapp_clicks INT DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      ALTER TABLE stores ADD COLUMN IF NOT EXISTS views_count INT DEFAULT 0;
      ALTER TABLE stores ADD COLUMN IF NOT EXISTS whatsapp_clicks INT DEFAULT 0;

      CREATE TABLE IF NOT EXISTS banners (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        subtitle TEXT NOT NULL,
        badge VARCHAR(100) NOT NULL,
        cta_text VARCHAR(100) NOT NULL,
        cta_link TEXT NOT NULL,
        media_type VARCHAR(50) DEFAULT 'image',
        media_url TEXT NOT NULL,
        sponsor VARCHAR(200) NOT NULL,
        show_name VARCHAR(200) NOT NULL,
        air_time VARCHAR(100) NOT NULL,
        display_order INT DEFAULT 0,
        active BOOLEAN DEFAULT true,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS leads (
        id VARCHAR(100) PRIMARY KEY,
        company_name VARCHAR(255) NOT NULL,
        owner_name VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(50) NOT NULL,
        category VARCHAR(100) NOT NULL,
        neighborhood VARCHAR(100) NOT NULL,
        selected_plan VARCHAR(100) NOT NULL,
        status VARCHAR(50) DEFAULT 'novo',
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS news_articles (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        summary TEXT NOT NULL,
        content TEXT NOT NULL,
        date VARCHAR(50) NOT NULL,
        read_time VARCHAR(50) NOT NULL,
        category VARCHAR(100) NOT NULL,
        image TEXT NOT NULL,
        reporter VARCHAR(100) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS tv_programs (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        time_slot VARCHAR(100) NOT NULL,
        anchor VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        is_live_now BOOLEAN DEFAULT false,
        thumbnail TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS merchants (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        salt VARCHAR(64) NOT NULL,
        whatsapp VARCHAR(50),
        store_id VARCHAR(100) REFERENCES stores(id) ON DELETE SET NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS merchant_sessions (
        token VARCHAR(128) PRIMARY KEY,
        merchant_id VARCHAR(100) NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP WITH TIME ZONE DEFAULT (CURRENT_TIMESTAMP + INTERVAL '30 days')
      );
    `);
    console.log('[DB] Tabelas PostgreSQL inicializadas com sucesso.');
  } finally {
    client.release();
  }
}
