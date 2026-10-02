# 🚨 SRE Alerts & Runbooks

> A growing SRE reference: production-ready Prometheus alerting rules, multi-platform monitoring configs, and operational runbooks for 90+ services.

This repository starts with 940+ battle-tested Prometheus alerting rules and is expanding into a full SRE reference covering monitoring platform configurations, third-party integrations, and per-service runbooks with step-by-step troubleshooting guides.

## 📦 What's Inside

| Section | Status |
|---|---|
| <img src="https://cdn.simpleicons.org/prometheus" width="16"/> **Prometheus Alerting Rules** (940+ rules, 90+ services) | ✅ Available |
| <img src="https://cdn.simpleicons.org/prometheus" width="16"/> **Prometheus Configuration Guides** | 🔜 Planned |
| <img src="https://cdn.simpleicons.org/grafana" width="16"/> **Thanos Configuration** | 🔜 Planned |
| <img src="https://cdn.simpleicons.org/victoriametrics" width="16"/> **VictoriaMetrics Configuration** | 🔜 Planned |
| <img src="https://cdn.simpleicons.org/newrelic" width="16"/> **NewRelic Integration** | 🔜 Planned |
| <img src="https://cdn.simpleicons.org/nagios" width="16"/> **Nagios Configuration** | 🔜 Planned |
| <img src="https://cdn.simpleicons.org/zabbix" width="16"/> **Zabbix Configuration** | 🔜 Planned |
| <img src="https://cdn.simpleicons.org/uptimerobot" width="16"/> **UptimeRobot Integration** | 🔜 Planned |
| 📖 **Runbooks & Troubleshooting Guides** | 🔜 Planned |

## 🔥 Prometheus Alerting Rules

940+ production-ready alerting rules covering 90+ services across 13 categories.
Each rule ships as a copy-pasteable PromQL snippet with a documented threshold.

#### Basic resource monitoring

- Prometheus self-monitoring
- Host and hardware
- S.M.A.R.T Device Monitoring
- IPMI
- Docker containers
- Blackbox
- Windows Server
- VMware
- Proxmox VE
- Netdata
- eBPF
- Process Exporter
- Systemd

#### Databases

- MySQL
- PostgreSQL
- SQL Server
- Oracle Database
- Patroni
- PGBouncer
- Redis
- Memcached
- MongoDB
- Elasticsearch
- OpenSearch
- Meilisearch
- Cassandra
- Clickhouse
- CouchDB
- Solr

#### Message brokers

- RabbitMQ
- Zookeeper
- Kafka
- Pulsar
- Nats

#### Proxies, load balancers and service meshes

- Nginx
- Apache
- HaProxy
- Traefik
- Caddy
- Envoy
- Linkerd
- Istio

#### Runtimes

- PHP-FPM
- JVM
- Golang
- Ruby
- Python
- Sidekiq

#### Data engineering

- Apache Flink
- Apache Spark
- Hadoop

#### Orchestrators

- Kubernetes
- Nomad
- Consul
- Etcd
- OpenStack

#### CI/CD

- Jenkins
- ArgoCD
- FluxCD
- GitLab CI
- Spinnaker

#### Network and security

- SpeedTest
- SSL/TLS
- cert-manager
- Juniper
- CoreDNS
- Freeswitch
- Hashicorp Vault
- sip-exporter
- Keycloak
- Cloudflare
- SNMP
- Cilium
- WireGuard

#### Storage

- Ceph
- ZFS
- OpenEBS
- Minio

#### Cloud providers

- AWS CloudWatch
- Google Cloud Stackdriver
- DigitalOcean
- Azure

#### Observability

- Thanos
- Loki
- Promtail
- Cortex
- Grafana Tempo
- Grafana Mimir
- Grafana Alloy
- OpenTelemetry Collector
- Jaeger

#### Other

- APC UPS
- Graph Node
- LiteLLM

## 🗺️ Roadmap

This repo is actively expanding beyond Prometheus alerting rules into a full SRE reference.
Here's what's being built out:

### ⚙️ Monitoring Platform Configs

Configuration guides and reference files for deploying and tuning monitoring stacks:

- **Prometheus** — scrape configs, recording rules, federation, remote write
- **Thanos** — sidecar, querier, ruler, compactor, store gateway setup
- **VictoriaMetrics** — single-node and cluster configs, vmagent, vmrule

### 🔗 Integrations

Alert routing and integration configs for third-party platforms:

- **NewRelic** — alert policies, NRQL conditions, notification channels
- **Nagios** — service checks, escalation configs
- **Zabbix** — templates, triggers, actions
- **UptimeRobot** — monitor configs, status pages, alert contacts

### 📖 Runbooks & Troubleshooting Guides

Per-service runbooks linked to alerting rules — what the alert means, how to investigate,
and step-by-step resolution procedures.
