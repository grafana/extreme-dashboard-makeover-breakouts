# Grafana Assistant & Dashboarding: Comprehensive Summary

> Your original 10 capabilities plus supplemental details from Grafana documentation (as of April 2026).

---

## Core Dashboarding Capabilities

### 1. Natural Language Dashboard Creation

Engineers describe what they want in plain English, and Assistant builds a complete dashboard — no PromQL, LogQL, or manual panel configuration required.

**Proven prompt:** "Discover what services, metrics, and logs are available in my environment and create a dashboard that gives a high-level overview of system health and performance."

**Additional details from docs:**
- Users can specify data sources inline using `@datasource-name` syntax (e.g., `@prometheus-prod`, `@loki-prod`)
- Assistant validates panels during creation to catch "No Data" issues and reports configuration errors before saving
- AI-generated dashboard titles and descriptions are supported
- Drilldown buttons are included on metric panels to navigate to Explore mode with queries pre-filled

**Proof point:** "Grafana Assistant was able to create a custom dashboard for me... if I had done it manually myself I would have done it in like two or three hours... Grafana Assistant created it for me instantly." — Naga Polamarasetty, Senior Software Engineer, MasterControl

---

### 2. Environment-Aware Discovery

Before building anything, Assistant can inventory your entire Grafana environment — connected datasources, monitored services, and existing dashboards — so it creates panels grounded in what's actually available, not guesswork.

**Proven prompt:** "I'm new to this Grafana environment. What datasources are connected, which services are being monitored, and what dashboards already exist for production?"

**Additional details from docs:**
- Semantic dashboard search lets users find dashboards even when they can't recall exact names, using content and tag-based matching
- Context-aware answers are tailored to the user's specific observability stack, not generic documentation
- Supports cross-platform concept translation for teams migrating from competing tools

---

### 3. Bulk Dashboard Editing

Assistant doesn't just create — it edits panels and dashboards at scale. This turns multi-day manual projects into minutes.

**Additional details from docs:**
- Multi-select panels via Cmd/Ctrl+click for batch changes
- Batch operations include: changing thresholds across all panels, updating color schemes dashboard-wide, toggling "hide missing data" across all graphs
- Internal Grafana Labs engineers report this saves "several minutes of tedious work" completed "almost instantly"

**Proof point:** A fintech customer saved 3 days on bulk dashboard edits using Assistant, something that required painstaking panel-by-panel work before.

---

### 4. Dashboard Panel Editing & Refinement

Beyond creation, Assistant can modify existing panels directly — changing queries, adjusting visualizations, updating thresholds — all through conversational interaction. It acts as an infrastructure layer that executes changes, not just a chatbot that tells you how to make changes.

**Additional details from docs:**
- Visualization type changes: "Change the Error Rate panel to a bar gauge"
- Query refinement: "Update the Latency query to filter out 4xx errors"
- Panel descriptions can be added conversationally for documentation
- Supports adding region filters, service variables with "All" options, and panel arrangement for readability

---

### 5. Eliminating the Query Language Barrier (20+ Data Sources)

Dashboarding historically required query language expertise. Assistant removes this bottleneck entirely — and for far more than just PromQL and LogQL:

**Supported query languages:**
| Category | Languages / Data Sources |
|----------|------------------------|
| **Metrics** | PromQL (Prometheus), Graphite, InfluxDB SQL, CloudWatch MetricStat/Metric Insights SQL |
| **Logs** | LogQL (Loki), Elasticsearch (Lucene, aggregations), CloudWatch Logs Insights |
| **Traces/Profiles** | TraceQL (Tempo), FlameQL (Pyroscope) |
| **Databases** | PostgreSQL, MySQL, MSSQL, ClickHouse, BigQuery, Athena, Snowflake, Databricks (all SQL), MongoDB (NoSQL), Dynatrace (DQL/USQL) |
| **Specialized** | Cube (semantic layer), Infinity (JSON APIs with jq transforms), k6 Cloud, Honeycomb, Synthetic Monitoring |

**Query optimization capabilities:**
- Reviews existing queries for performance and correctness
- Removes high-cardinality labels
- Suggests alternative approaches
- Converts inefficient patterns (e.g., line filters to stream selectors in LogQL)
- Explains existing queries and translates between query forms

**Quote:** "I'm sad this tool didn't exist two years ago... it would have cut out probably 50% of the questions we got." — Chris Carter, Lead Software Engineer, OutSystems

---

### 6. Accelerating New Engineer Onboarding

New team members can build production-quality dashboards on day one instead of spending weeks shadowing senior engineers to learn the environment and query syntax.

**Additional details from docs:**
- Assistant serves as an interactive mentor with context-aware answers tailored to the user's stack
- Interactive step-by-step tutorials that adapt as users make changes
- Internal Grafana Labs usage: new employees use Assistant for guided dashboard creation and query configuration, "reducing hours of documentation review"

**Proof point:** Customers report 1 week of onboarding time saved — new engineers use Assistant as an interactive mentor to understand and visualize their environment immediately.

---

### 7. Shielding Senior Engineers from Routine Dashboard Requests

The "expert-shield" pattern: Junior engineers who previously filed tickets or pinged senior SREs for dashboard help can now self-serve. This protects expert time for innovation.

**Proof point:** One enterprise software customer saw a 90% reduction in internal "how-to" support tickets after adopting Assistant.

---

### 8. Identifying Monitoring Gaps

Assistant can proactively spot gaps in dashboard coverage. Developers ask the AI where observability gaps exist, and it suggests what's missing — reinforcing stronger product ownership.

**Evidence from a banking customer:** "Developers now ask the AI assistant where gaps exist, and it's going to spot every gap and make so many suggestions."

---

### 9. Multi-Source Correlation for Dashboard Context

Assistant reasons across Prometheus, Loki, Tempo, Pyroscope, and other connected datasources simultaneously. Dashboards can be created with correlated panels (metrics + logs + traces + profiles) that would otherwise require deep expertise to wire together manually.

---

### 10. Cross-Platform Interoperability (via MCP)

Assistant works across your entire toolchain via the Model Context Protocol (MCP).

**Supported MCP integrations include:**
- GitHub, Linear, Asana, Notion (project management)
- Netlify, Vercel, Cloudflare (deployment platforms)
- Polar Signals, Honeycomb, New Relic (observability)
- Cursor Cloud Agents (IDE integration)
- Custom MCP servers (any MCP-compatible tool)

**Key MCP details from docs:**
- Open-source Grafana MCP server at `github.com/grafana/mcp-grafana`
- Authentication options: OAuth (dynamic client registration), Bearer/API key, or unauthenticated
- Recommended 1-5 tools per server for optimal performance; more than 16 impacts accuracy
- All MCP tool calls require user approval before execution (safety guardrail)
- Scope options: "Just me" (personal) or "Everybody" (organization-wide)

**Documented workflow example:** Assistant analyzes cloud costs via Prometheus metrics, identifies waste, then uses GitHub MCP server to automatically open PRs with Helm `values.yaml` changes to right-size workloads — "instantly applied an optimization to realize thousands of dollars in identified savings."

---

## Capabilities Beyond Dashboarding (from Documentation)

These capabilities extend the Assistant's value proposition beyond dashboard creation/editing:

### 11. Assistant Investigations (Multi-Agent Incident Response)

A distinct multi-agent framework (public preview October 2025) that coordinates specialized AI agents in parallel for incident analysis.

**Agent types:** Metrics agent (Prometheus), Logging agent (Loki), Tracing agent (Tempo), Profiling agent (Pyroscope), plus a lead investigator coordinator and reporter agent.

**Output:** Structured artifacts — Summary, detailed Report, Timeline, and Activity log with confidence scoring.

**Quantitative result:** 3.5x faster root cause identification (8 minutes vs. 28 minutes for human on-call team in a documented incident, 0.91 confidence score).

**IRM integration:** Investigations can be automatically triggered from incidents and alert groups, with updates posted to incident timelines and communication channels.

---

### 12. Slack Integration

Full Assistant capabilities available via `@Grafana` mention in Slack channels — dashboard creation, querying, alert analysis, incident management.

- Public preview: January 15, 2026
- GA: March 17, 2026

---

### 13. Infrastructure Memory

Assistant automatically builds and maintains service context about your systems to accelerate future issue resolution. Context persists across conversations. (Grafana Cloud only.)

---

### 14. Skills (Custom Automation)

Users can create custom skills that guide agents to perform specific actions when conditions are met — e.g., creating Linear tickets, sending Slack notifications when specific alerts fire. GA March 17, 2026.

---

### 15. Fleet Management via Natural Language

Manage telemetry collectors via natural language. Preconfigured prompts to explain, validate, fix, optimize, or visualize pipelines.

---

### 16. Alerting Management

Manage firing alerts and contact points through natural language conversation.

---

### 17. Trace and Log Explanation

"Analyze in Assistant" for traces, "Explain this log line" for logs. Translates traces into plain language and highlights where time is lost.

---

### 18. AI-Assisted Flame Graph Parsing

Natural language analysis of continuous profiling data via Pyroscope integration.

---

### 19. Shareable Conversations

Copy findings or create read-only conversation links for team members.

---

### 20. Knowledge Graph

Context-specific root-cause analysis leveraging a knowledge graph of your infrastructure.

---

### 21. AI Observability Monitoring

Monitor LLM and agent behavior — Anthropic integration tracking Claude usage/costs, visibility into prompts/responses/latency/model performance, vector database and GPU monitoring.

---

### 22. Cursor Cloud Agents Integration

Links telemetry analysis with pull request generation directly from the IDE.

---

## Architecture Highlights

- **Context-aware sidebar agent** receives page context via updated system prompts
- **Multi-agent architecture:** Specialized "expert agents" (dashboard, query, support) coordinated by a central root coordinator
- **Self-correction:** Errors are automatically fed back into the conversation for the LLM to correct
- **Token optimization:** Pre-processing API responses into semantically rich sentences reduces token usage by up to 4x
- **Evaluation framework:** Reproducible evaluations against controlled Grafana scenarios
- **Data handling:** Conversations processed through third-party AI providers; content is NOT used for external model training

---

## Business Impact Summary

| Metric | Impact | Source |
|--------|--------|--------|
| Dashboard build time | 50% faster | Transmute Data |
| Bulk dashboard edits | 3 days saved | Fintech customer |
| Support tickets for dashboard help | 90% reduction | Enterprise software customer |
| New engineer time-to-productivity | 1 week saved | Multiple customers |
| Root cause identification | 3.5x faster (8 min vs 28 min) | Grafana Labs internal incident |
| User base growth | 10x in 90 days after public preview | Grafana Labs |

---

## Pricing (as of January 2026)

| Tier | Cost | Limits |
|------|------|--------|
| **Free** | $0 | 3 active AI users/month, 5 messages/user/month (hard limit) |
| **Pro** | $20/active user/month ($19/month platform fee includes 3 users) | 2,000 messages/user/month (soft limit) |
| **Enterprise** | Custom (min $25k/year) | Premium support, observability architect, flexible deployment |

**Active user definition:** Anyone who sends a message, presses an action button (e.g., "Explain this panel"), connects through an MCP server, or uses any Assistant feature in the billing period.

---

## Timeline & Milestones

| Date | Milestone |
|------|-----------|
| March 2025 | Won Grafana Labs' 12th internal hackathon |
| May 2025 | Featured at GrafanaCON 2025 keynote |
| August 14, 2025 | Public preview launched |
| October 8, 2025 | GA of Assistant; public preview of Investigations |
| November 7, 2025 | AI-powered investigations available for IRM |
| January 1, 2026 | Billing commenced |
| January 15, 2026 | Slack integration public preview |
| March 17, 2026 | Slack integration GA; Skills GA |

---

## Compliance & Security

FedRAMP, NATSEC100, PCI DSS, SOC Type II, GDPR compliant. No data sent to any AI/LLM provider until a user actively uses a feature.

---

## Key Documentation Sources

- [Grafana Assistant Introduction](https://grafana.com/docs/grafana-cloud/machine-learning/assistant/introduction/)
- [Create a Dashboard](https://grafana.com/docs/grafana-cloud/machine-learning/assistant/dashboards/create-dashboard/)
- [Query Assistance](https://grafana.com/docs/grafana-cloud/machine-learning/assistant/query-assistance/)
- [MCP Servers](https://grafana.com/docs/grafana-cloud/machine-learning/assistant/mcp/understand-mcp-servers/)
- [Pricing](https://grafana.com/docs/grafana-cloud/machine-learning/assistant/pricing/)
- [Agentic Architecture Blog](https://grafana.com/blog/going-beyond-ai-chat-response-how-were-building-an-agentic-system-to-drive-grafana/)
- [3.5x Faster Incident Response](https://grafana.com/blog/2025/11/17/a-tale-of-two-incident-responses-how-our-ai-assist-helped-us-find-the-cause-3-5x-faster/)
- [Cost Optimization with MCP](https://grafana.com/blog/from-signals-to-savings-optimizing-cloud-costs-with-grafana-assistant-and-mcp-servers/)
- [Onboarding Blog](https://grafana.com/blog/2025/08/14/ai-for-grafana-onboarding-get-your-teams-started-quicker-with-grafana-assistant/)
