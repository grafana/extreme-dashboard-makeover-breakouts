---
sidebar_position: 3
---

# Part C: Enhancements Beyond the Manual Workshop

*~10 minutes*

Now we'll use Assistant for tasks that go beyond what we covered in Breakout 1: things that would require deeper Grafana expertise or significantly more time to do manually.

## Exercise 6: Add a dashboard variable for filtering

Dashboard variables let users filter all panels at once. Configuring them manually requires understanding query syntax for variable population and modifying each panel's queries. Let's let Assistant handle it.

```
I want a service filter dropdown at the top of this dashboard. Pull the service names from the Sockshop Prometheus metrics, just showing the short names like "carts" and "orders", not the full namespace path. Let me select multiple services or all at once, and sort them alphabetically. Wire the filter into the Request Latency and K8s Service Status panels expressions.
```

After Assistant creates the variable, you should see a dropdown at the top of your dashboard. Try selecting different services and watch the panels update.

![Service Variable Dropdown](/img/breakout2/exercise6-variable-dropdown.png)

Notice how the filter cascades through: the Latency panel shows only the selected service, and the polystat updates to show just that container's status.

<p float="left">
  <img src="/img/breakout2/exercise6-latency-filtered-carts.png" width="350" height="350" alt="Latency Filtered to Carts" />
  <img src="/img/breakout2/exercise6-polystat-carts-up.png" width="350" height="350" alt="Polystat Filtered to Carts" />
</p>

## Exercise 7: Add a drilldown data link

In Breakout 1, adding a single data link to the SLO Status panel took several steps: finding the Data Links section, typing the URL, toggling options, and saving. Let's do the same thing with one sentence.

```
Add a data link to the Request Latency panel titled "Sockshop Service Details"
that navigates to the Sockshop Performance dashboard and opens in a new tab.
```

Click anywhere on the Request Latency panel to verify the drilldown link appears and navigates to the Sockshop Performance dashboard.

![Drilldown Data Link](/img/breakout2/exercise7-data-link.png)

## Exercise 8: Query review and optimization

This is something that's hard to do manually unless you're already fluent in PromQL and LogQL. Ask Assistant to audit the queries powering your dashboard.

```
Review the queries on this dashboard. Are there any that could be optimized for
better performance or clarity? Explain what each query does in plain language.
```

Read through Assistant's analysis. Even if you don't change anything, this is the kind of insight that normally requires an in-depth review.

![Query Optimization Review](/img/breakout2/exercise8-query-optimization-review.png)

## Exercise 9: Discover what you're missing

One of Assistant's most valuable capabilities is identifying monitoring gaps: metrics and data that are available in your environment but not yet visualized.

```
What Prometheus metrics are available in this environment that aren't currently
shown on this dashboard? Suggest 2-3 additional panels that would improve our
monitoring coverage.
```

If Assistant suggests panels that look useful, you can follow up:

```
Add those suggested panels to the dashboard.
```

![Gap Analysis with Settings](/img/breakout2/exercise9-gap-analysis-with-settings.png)

![New Panel Added](/img/breakout2/exercise9-new-panel-added.png)
