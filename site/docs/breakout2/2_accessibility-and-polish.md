---
sidebar_position: 2
---

# Part B: Accessibility & Polish

*~10 minutes*

Dashboards are viewed by diverse teams. In Breakout 1, we manually adjusted the Latency panel with dashed lines and color overrides for colorblind accessibility. That took roughly 10 steps for one panel. Let's take a broader approach.

## Exercise 4: Improve colorblind accessibility

```
Review this dashboard for colorblind accessibility. Where panels use color to
distinguish between series or states, suggest and apply changes like different
line styles, patterns, or higher-contrast color combinations so the data is
readable for people with color vision deficiency.
```

Compare what Assistant does to the manual overrides you configured in Breakout 1 for the Latency panel.

![Colorblind Accessibility Audit](/img/breakout2/exercise4-colorblind-accessibility-audit.png)

## Exercise 5: Fine-tune a visualization type

Sometimes you want to experiment with how data is presented without going through the full panel editing workflow.

```
Switch the Server Request Rates per Second panel to a gradient bar gauge instead
of retro LCD and show me how it looks.
```

You can choose which variant you prefer; Grafana Assistant makes it simple to try different styles out.

![Gradient Bar Gauge](/img/breakout2/exercise5-gradient-bar-gauge.png)
