---
sidebar_position: 1
---

# Part A: Bulk Refinement

*~10 minutes*

Remember how long it took to manually configure value mappings, thresholds, and color modes panel by panel? Let's see Assistant handle that kind of work across the entire dashboard at once.

## Exercise 1: Add descriptions to every panel

Good dashboards are self-documenting. Adding descriptions to each panel helps new team members understand what they're looking at without needing to ask. Doing this manually means editing each panel one at a time. Let's do them all at once.

Type this into Assistant:

```
Add a short, helpful description to every panel on this dashboard that explains
what the panel shows and why it matters for monitoring our service.
```

Once Assistant finishes, hover over any panel title; you should see an "i" icon. Click it to verify the description was added.

![Panel Descriptions Added](/img/breakout2/exercise1-panel-descriptions-added.png)

## Exercise 2: Standardize threshold colors across panels

In Breakout 1, we set thresholds on individual panels with different color choices. In a real environment, you'd want consistent color language across your dashboard so that "blue means OK" and "orange means trouble" everywhere.

Type this into Assistant:

```
Update the threshold colors on all panels in this dashboard to use a consistent
scheme: blue for OK/normal values, yellow for warning states, and orange for
critical states. Omit the geo map for this change.
```

Review the panels to see the color changes applied uniformly.

![Standardized Thresholds](/img/breakout2/exercise2-standardized-thresholds.png)

## Exercise 3: Batch rename panels for clarity

Clear, consistent naming makes dashboards scannable at a glance. Instead of editing each panel title individually:

```
Rename the panels on this dashboard to follow a clearer naming pattern. Each title
should describe the metric and its context, for example "Request Rate - Per Second
by Service" or "Pod Status - Kubernetes Containers".
```

Check the dashboard to see the updated panel titles.

![Renamed Panels](/img/breakout2/exercise3-renamed-panels.png)

:::tip Pause and reflect

You just made three sweeping changes to your dashboard (descriptions, thresholds, and naming) in about three prompts. In Breakout 1, a single panel's threshold configuration took multiple steps. That's the power of conversational refinement.

:::
