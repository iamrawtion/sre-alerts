# Runbooks & Troubleshooting Guides

Per-service runbooks linked to the Prometheus alerting rules in `_data/rules.yml`.
Each runbook explains what an alert means, how to investigate it, and step-by-step
resolution procedures.

## Structure

| Directory | Services | Status |
|---|---|---|
| `databases/` | MySQL, PostgreSQL, Redis, MongoDB, Elasticsearch, Cassandra, etc. | 🔜 Planned |
| `infrastructure/` | Host & hardware, Docker, Kubernetes, Systemd, etc. | 🔜 Planned |
| `message-brokers/` | Kafka, RabbitMQ, Pulsar, NATS, Zookeeper | 🔜 Planned |
| `orchestrators/` | Kubernetes, Nomad, Consul, Etcd | 🔜 Planned |
| `observability/` | Prometheus, Thanos, Loki, Grafana, Tempo, Mimir | 🔜 Planned |

## Runbook Template

Each runbook file should follow this structure:

```markdown
# <Alert Name>

## What this alert means
One paragraph — what condition triggered the alert and why it matters.

## Possible causes
- Bullet list of root causes, most likely first

## Investigation steps
1. Step-by-step commands to diagnose the issue
2. Include the exact commands, not just descriptions
3. Note what "normal" output looks like vs. "bad" output

## Resolution
1. Step-by-step fix for each cause above
2. Include rollback steps where relevant

## Prevention
- What to change to avoid this in the future (config, capacity, process)

## Related alerts
- Links to other alerts that commonly fire alongside this one
```

## Naming convention

One file per alert, named after the alert in kebab-case:
`runbooks/databases/mysql-too-many-connections.md`
