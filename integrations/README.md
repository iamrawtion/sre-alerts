# Integrations

Alert routing and integration configs for third-party monitoring and observability platforms.
Each subdirectory covers one platform end-to-end: how to connect it, how to route alerts,
and example configs.

## Structure

| Directory | Platform | Status |
|---|---|---|
| `newrelic/` | Alert policies, NRQL conditions, notification channels | 🔜 Planned |
| `nagios/` | Service checks, escalation configs, host definitions | 🔜 Planned |
| `zabbix/` | Templates, triggers, actions, media types | 🔜 Planned |
| `uptimerobot/` | Monitor configs, status pages, alert contacts | 🔜 Planned |

## Conventions

- Each platform directory should have a `README.md` explaining prerequisites and setup steps
- Configs should be importable/copy-pasteable with minimal modification
- Note the platform version the config was tested against
