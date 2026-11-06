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

