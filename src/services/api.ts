import { Store, CommercialBanner, LeadSubmission } from '../data/mockData';

const BASE_URL = '/api';

export async function checkBackendHealth(): Promise<{ ok: boolean; postgres: boolean }> {
  try {
    const res = await fetch(`${BASE_URL}/health`);
    if (!res.ok) return { ok: false, postgres: false };
    const data = await res.json();
    return { ok: true, postgres: !!data.postgres };
  } catch {
    return { ok: false, postgres: false };
  }
}

export async function fetchStoresApi(): Promise<Store[] | null> {
  try {
    const res = await fetch(`${BASE_URL}/stores`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function saveStoreApi(store: Store): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/stores`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(store),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function updateStoreApi(id: string, store: Store): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/stores/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(store),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function deleteStoreApi(id: string): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/stores/${id}`, {
      method: 'DELETE',
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function recordStoreViewApi(storeId: string): Promise<{ viewsCount?: number; whatsappClicks?: number } | null> {
  try {
    const res = await fetch(`${BASE_URL}/stores/${storeId}/view`, {
      method: 'POST',
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function recordStoreWhatsappClickApi(storeId: string): Promise<{ viewsCount?: number; whatsappClicks?: number } | null> {
  try {
    const res = await fetch(`${BASE_URL}/stores/${storeId}/whatsapp-click`, {
      method: 'POST',
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchBannersApi(): Promise<CommercialBanner[] | null> {
  try {
    const res = await fetch(`${BASE_URL}/banners`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function updateBannersApi(banners: CommercialBanner[]): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/banners`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(banners),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function fetchLeadsApi(): Promise<LeadSubmission[] | null> {
  try {
    const res = await fetch(`${BASE_URL}/leads`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function createLeadApi(lead: Partial<LeadSubmission>): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function updateLeadStatusApi(id: string, status: string): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/leads/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// MERCHANT AUTH & STORE API
export interface MerchantUser {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  storeId: string;
}

export interface MerchantAuthResponse {
  success: boolean;
  token: string;
  merchant: MerchantUser;
  store: Store;
}

export async function merchantRegisterApi(payload: {
  name: string;
  email: string;
  password: string;
  whatsapp: string;
  storeName: string;
  category: string;
  categoryId: string;
  neighborhood: string;
  address?: string;
}): Promise<{ ok: boolean; data?: MerchantAuthResponse; error?: string }> {
  try {
    const res = await fetch(`${BASE_URL}/merchant/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      return { ok: false, error: data.error || 'Erro ao registrar comerciante.' };
    }
    return { ok: true, data };
  } catch (err: any) {
    return { ok: false, error: err.message || 'Falha de conexão com o servidor.' };
  }
}

export async function merchantLoginApi(payload: {
  email: string;
  password: string;
}): Promise<{ ok: boolean; data?: MerchantAuthResponse; error?: string }> {
  try {
    const res = await fetch(`${BASE_URL}/merchant/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      return { ok: false, error: data.error || 'Credenciais inválidas.' };
    }
    return { ok: true, data };
  } catch (err: any) {
    return { ok: false, error: err.message || 'Falha de conexão com o servidor.' };
  }
}

export async function merchantGetMeApi(token: string): Promise<{ ok: boolean; data?: { merchant: MerchantUser; store: Store }; error?: string }> {
  try {
    const res = await fetch(`${BASE_URL}/merchant/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) return { ok: false };
    const data = await res.json();
    return { ok: true, data };
  } catch {
    return { ok: false };
  }
}

export async function merchantUpdateMyStoreApi(
  token: string,
  storeData: Partial<Store>
): Promise<{ ok: boolean; store?: Store; error?: string }> {
  try {
    const res = await fetch(`${BASE_URL}/merchant/my-store`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(storeData),
    });
    const data = await res.json();
    if (!res.ok) {
      return { ok: false, error: data.error || 'Erro ao salvar alterações da loja.' };
    }
    return { ok: true, store: data.store };
  } catch (err: any) {
    return { ok: false, error: err.message || 'Erro de conexão com o servidor.' };
  }
}

export async function merchantLogoutApi(token: string): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/merchant/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.ok;
  } catch {
    return false;
  }
}

