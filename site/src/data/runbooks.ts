// @ts-expect-error — Vite YAML plugin provides this at build time
import runbooksData from '../../../_data/runbooks.yml';

export interface RunbookAlert {
  name: string;
  severity: 'critical' | 'warning' | 'info';
  symptoms: string;
  causes: string[];
  steps: string[];
}

export interface Runbook {
  slug: string;
  title: string;
  description: string;
  alerts: RunbookAlert[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  runbooks: Runbook[];
}

export interface RunbooksData {
  categories: Category[];
}

export const data: RunbooksData = runbooksData as RunbooksData;

export function getTotalRunbookCount(): number {
  return data.categories.reduce((sum, c) => sum + c.runbooks.length, 0);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return data.categories.find((c) => c.slug === slug);
}

export function getAllRunbooks(): Array<{ category: Category; runbook: Runbook }> {
  return data.categories.flatMap((category) =>
    category.runbooks.map((runbook) => ({ category, runbook }))
  );
}
