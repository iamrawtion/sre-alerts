// site/src/data/tools.ts

export interface Tool {
  slug: string;
  name: string;
  logo: string;      // img src — CDN URL or empty string; use emoji if empty
  emoji: string;     // fallback when logo is empty string
  status: 'live' | 'planned';
  paths: {
    hub: string;       // e.g. '/prometheus/'
    rules?: string;    // e.g. '/rules/'
    configs?: string;
    runbooks?: string;
  };
}

export const tools: Tool[] = [
  {
    slug: 'prometheus',
    name: 'Prometheus',
    logo: 'https://cdn.simpleicons.org/prometheus',
    emoji: '🔥',
    status: 'live',
    paths: { hub: '/prometheus/', rules: '/rules/', configs: '/configs/', runbooks: '/runbooks/' },
  },
  {
    slug: 'datadog',
    name: 'Datadog',
    logo: 'https://cdn.simpleicons.org/datadog',
    emoji: '🐶',
    status: 'planned',
    paths: { hub: '/datadog/' },
  },
  {
    slug: 'newrelic',
    name: 'New Relic',
    logo: 'https://cdn.simpleicons.org/newrelic',
    emoji: '🟦',
    status: 'planned',
    paths: { hub: '/newrelic/' },
  },
  {
    slug: 'nagios',
    name: 'Nagios',
    logo: '',
    emoji: '🔴',
    status: 'planned',
    paths: { hub: '/nagios/' },
  },
  {
    slug: 'zabbix',
    name: 'Zabbix',
    logo: '',
    emoji: '🔷',
    status: 'planned',
    paths: { hub: '/zabbix/' },
  },
  {
    slug: 'uptimerobot',
    name: 'UptimeRobot',
    logo: '',
    emoji: '🟢',
    status: 'planned',
    paths: { hub: '/uptimerobot/' },
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export const prometheusTools = tools.find((t) => t.slug === 'prometheus')!;
