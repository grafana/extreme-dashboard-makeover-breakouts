---
sidebar_position: 8
---

# 8. Polish the dashboard with Assistant

Your dashboard is built and arranged. Time for the final pass: sweeping consistency edits across every panel.

Bulk edits across panels are a great fit for Assistant. Each of the prompts below would normally mean opening every panel, finding the right setting, and clicking through it. Instead, one sentence covers the whole dashboard.

## Add descriptions to every panel

Good dashboards are self-documenting. A short description on each panel helps new team members understand what they're looking at without needing to ask.

```assistant title="Suggested prompt"
Add a short, helpful description to every panel on this dashboard that explains what the panel shows and why it matters for monitoring our service.
```

Hover over any panel title; you should see an "i" icon. Click it to verify the description was added.

![Panel Descriptions Added](/img/breakout2/exercise1-panel-descriptions-added.png)

## Standardize threshold colors

We chose threshold colors panel-by-panel during the manual makeover. In a real environment you want one consistent color language so that "blue means OK" and "orange means trouble" everywhere.

```assistant title="Suggested prompt"
Update the threshold colors on all panels in this dashboard to use a consistent scheme: blue for OK/normal values, yellow for warning states, and orange for critical states. Omit the geo map for this change.
```

Glance through the panels: the threshold-colored UI (Stat, Polystat, Bar Gauge) should now share one palette.

![Standardized Thresholds](/img/breakout2/exercise2-standardized-thresholds.png)

## Batch-rename panels for consistency

We renamed a couple of panels during the manual makeover, but the rest still use their original titles. Let's apply one naming convention to all of them.

```assistant title="Suggested prompt"
Rename the panels on this dashboard to follow a clearer naming pattern. Each title should describe the metric and its context, for example "Request Rate - Per Second by Service" or "Pod Status - Kubernetes Containers".
```

![Renamed Panels](/img/breakout2/exercise3-renamed-panels.png)

Three sweeping changes, three prompts. That same work as a sequence of manual edits would mean opening every panel, navigating to the same setting, and applying the same change one at a time. Multiply that across 10 panels and you can feel the difference.

Save the dashboard.
