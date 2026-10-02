// @ts-ignore — Vite glob import, types provided below
const modules = import.meta.glob('../../../_data/runbooks/**/*.yml', { eager: true });

export interface Screenshot {
  file: string;
  caption: string;
}

export interface Link {
  name: string;
  url: string;
}

export interface ServiceLink {
  name: string;
  overview_url: string;
  team: string;
}

export interface RunbookAlert {
  name: string;
  slug: string;
  severity: 'critical' | 'warning' | 'info';
  overview: {
    what: string;
    contributing_factors: string[];
    affected_components: string[];
    expected_action: string;
  };
  services: ServiceLink[];
  metrics: {
    name: string;
    description: string;
    unit: string;
    threshold_rationale: string;
    normal_behavior: string;
    screenshots: Screenshot[];
  };
  alert_behavior: {
    silencing: string;
    frequency: string;
  };
  severities: {
    guidance: string;
    impacted_users: string;
    things_to_check: string[];
  };
  verification: {
    prometheus_query: string;
    dashboards: Link[];
    log_queries: Link[];
  };
  troubleshooting: {
    steps: string[];
    dashboards: Link[];
    commands: string[];
  };
  resolutions: Array<{ description: string; incident_url: string }>;
  dependencies: string[];
  escalation: {
    guidance: string;
    slack_channels: Array<{ name: string; url: string }>;
  };
  definitions: {
    alert_url: string;
    tuning_notes: string;
    playbook_url: string;
  };
  related: {
    alerts: Link[];
    docs: Link[];
  };
  credits: string;
}

export interface RunbookService {
  service: string;
  slug: string;
  category: string;
  category_name: string;
  description: string;
  alerts: RunbookAlert[];
}

export interface Category {
  name: string;
  slug: string;
  services: RunbookService[];
}

function buildCategories(): Category[] {
  const categoryMap = new Map<string, Category>();

  for (const mod of Object.values(modules) as Array<{ default: RunbookService }>) {
    const svc = mod.default;
    if (!categoryMap.has(svc.category)) {
      categoryMap.set(svc.category, {
        name: svc.category_name,
        slug: svc.category,
        services: [],
      });
    }
    categoryMap.get(svc.category)!.services.push(svc);
  }

  return Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export const categories: Category[] = buildCategories();

export function getTotalServiceCount(): number {
  return categories.reduce((sum, c) => sum + c.services.length, 0);
}

export function getTotalAlertCount(): number {
  return categories.reduce(
    (sum, c) => sum + c.services.reduce((s, svc) => s + svc.alerts.length, 0),
    0
  );
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getServiceBySlug(categorySlug: string, serviceSlug: string): RunbookService | undefined {
  return getCategoryBySlug(categorySlug)?.services.find((s) => s.slug === serviceSlug);
}

export function getAllAlerts(): Array<{ category: Category; service: RunbookService; alert: RunbookAlert }> {
  return categories.flatMap((category) =>
    category.services.flatMap((service) =>
      service.alerts.map((alert) => ({ category, service, alert }))
    )
  );
}
