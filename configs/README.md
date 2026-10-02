# Monitoring Platform Configs

Reference configuration files for deploying and tuning monitoring stacks.
Each subdirectory is a self-contained platform. Files are real, copy-pasteable configs
(not pseudocode), annotated with comments explaining non-obvious settings.

## Structure

| Directory | Platform | Status |
|---|---|---|
| `prometheus/` | Prometheus scrape configs, recording rules, federation, remote write | 🔜 Planned |
| `thanos/` | Thanos sidecar, querier, ruler, compactor, store gateway | 🔜 Planned |
| `victoriametrics/` | VictoriaMetrics single-node and cluster, vmagent, vmrule | 🔜 Planned |

## Conventions

- One file per concern (e.g. `scrape-configs.yml`, `recording-rules.yml`, not one giant file)
- Every non-obvious config line gets a `#` comment explaining why, not what
- Include a `README.md` in each platform directory listing the files and their purpose
