// @ts-expect-error — Vite YAML plugin provides this at build time
import configsData from '../../../_data/configs.yml';

export interface Config {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export interface Platform {
  name: string;
  slug: string;
  description: string;
  configs: Config[];
}

export interface ConfigsData {
  platforms: Platform[];
}

export const data: ConfigsData = configsData as ConfigsData;

export function getTotalConfigCount(): number {
  return data.platforms.reduce((sum, p) => sum + p.configs.length, 0);
}

export function getPlatformBySlug(slug: string): Platform | undefined {
  return data.platforms.find((p) => p.slug === slug);
}

export function getAllConfigs(): Array<{ platform: Platform; config: Config }> {
  return data.platforms.flatMap((platform) =>
    platform.configs.map((config) => ({ platform, config }))
  );
}
