// Prices and limits come from src/data/plans.json, a copy of corev2's
// backend/LicenseServer/Catalog/plans.json — the catalog the license server
// sells. `npm run build` refreshes the copy when corev2 sits next to this repo.
import catalog from '../data/plans.json';

export type Plan = (typeof catalog.plans)[number];

export const currency = catalog.currency;

export function plan(id: string): Plan {
  const found = catalog.plans.find((p) => p.id === id);
  if (!found) throw new Error(`plans.json has no plan '${id}'`);
  return found;
}

const limit = (p: Plan, key: string): number | undefined =>
  (p.limits as Record<string, number | undefined>)[key];

// 1000 → 1'000, as Swiss German writes it.
const count = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "'");

export function price(p: Plan): string {
  if (p.priceMonthly === null) return 'Auf Anfrage';
  return `${currency} ${p.priceMonthly}`;
}

export function objectLimit(p: Plan): string {
  const max = limit(p, 'objects.max');
  if (max === undefined) return 'Individuell';
  return `Bis ${count(max)} Objekte`;
}

export function users(p: Plan): string {
  const max = limit(p, 'users.max');
  if (max === undefined) return 'Unbegrenzte Benutzer';
  return `${max} Benutzer`;
}
