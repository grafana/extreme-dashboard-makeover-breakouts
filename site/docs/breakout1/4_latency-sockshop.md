---
sidebar_position: 4
sidebar_custom_props:
  icon: ⏱️
---

# 4. Update the Latency for Sockshop App panel

Since this service latency graph is viewed by dozens of people, we know statistically that at least 2 people viewing this graph are colorblind. That said, the Product owner of Sockshop called the colors "uninspiring". You also notice that the legend is rough around the edges.

1. Edit the *Latency for Sockshop App* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*).
2. Switch the Visualization Type to *Time Series*, if it isn't already.
3. Let's fix the legend first:
    - Under the query on the left, in the Options panel, change the Legend type from Verbose to *Custom* and enter `{{ job }}`. You will notice that the name of the job is displayed at the bottom of the graph, instead of the raw key/value pair. But we still don't like the fact that the namespace of *development* still appears. So, let's use a *transformation* to rename our fields.
    - Click on *Transform* and then *Rename fields by Regex* (use the 'Add transformation' search to find it). For match, let's do 2 string captures: before and after the `/`.
    - For match, type in `.+/(.+)`
    - For the *Replace* field, type in `$1`
4. Someone else said this graph, denoted in seconds, would be easier to understand if it were in milliseconds.
    - Let's change the query on the left hand side by adding `* 1000` to the end of the query.
    - Add a unit to the y-axis: under the panel's search options (top right), type in *Unit*. For the unit, use *Time / milliseconds (ms)*.
5. Apply a baseline graph style for all lines: use *Graph Styles*, set Line Width to 2 and Fill opacity to 0.

    ![Graph styles](/img/breakout1/Graph-styles.png)

## Make it readable for colorblind viewers

To address the accessibility concern, we can give each series a distinct *line style* in addition to a distinct color. Dashes, dots, and dash-dot patterns remain readable in greyscale, so the chart works for viewers with color vision deficiency.

Configuring this manually means adding **five different field overrides**, each with its own line-style choice. That's exactly the kind of repetitive, look-up-the-same-menu work Assistant handles well.

```assistant title="Suggested prompt"
On the Latency for Sockshop App panel, add field overrides to make the series readable for colorblind viewers. user: dashed line (10,10) and change its color from blue to purple. payment: dashed line (5,10). catalogue: dash-dot-dot pattern (30,3,3). carts: dots (0,10). Leave orders as the solid baseline.
```

After Assistant finishes, click *Save Dashboard*. Your panel should look like this:

![Sockshop App](/img/breakout1/sockshop-app.png)

<details>
  <summary>Curious how to do this without Grafana Assistant?</summary>

  6. *user*: in the upper right, click *Overrides* and *Add field override*. Choose "Fields with Name" *user*. Add override property *Graph styles > Line style*. Change Solid to *Dash*, keeping *10,10* as the *line,space* setting.
  7. *payment*: *Add field override*, "Fields with Name" *payment*, *Graph styles > Line style*, *Dash* with *5,10*.
  8. *catalogue*: *Add field override*, Fields with name *catalogue*, *Graph styles > Line style*. For dash pattern, choose *30,3,3* (long-short-short, last in the dropdown).
  9. *carts*: *Add field override*, Fields with name *carts*, *Graph styles > Line style*, *Dots* with *0,10*.
  10. *orders*: leave as-is.
  11. Click *Save Dashboard*.
  12. The two blue lines (*user* and *orders*) are still too similar. From the dashboard, click the blue dot next to *user* in the legend and choose Purple from the color picker.
  13. Save the dashboard.

</details>

