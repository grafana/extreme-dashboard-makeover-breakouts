---
sidebar_position: 4
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
5. We now want to make it easier for our colorblind colleagues to read.
    - For all lines in the graph: use the *Graph Styles*, choose a Line Width of 2 and a Fill opacity of 0.

        ![Graph styles](/img/breakout1/Graph-styles.png)

    - Let's make dataset *user* a dashed line. In the upper right, click on *Overrides* and *Add field override*. Then, choose "Fields with Name" *user*. Next, add override property *Graph styles > Line style*. Change from Solid to *Dash*. Keep *10,10* as the *line,space* setting.
    - We will make field *payment* a dashed line as well. Again, click on *Add field override*, choosing "Fields with Name" *payment*. Next, add override property *Graph styles > Line style*. Change from Solid to *Dash*. Use a *5,10* dash line style.
    - Let's make dataset *catalogue* a dashed line. Add an override for Fields with name *catalogue*, adding a Line Style override. For the dash pattern, we want to see long-short-short, and so to do this, we choose *30,3,3*, the last item in the dropdown.
    - Choose field with name *carts* and Add override property. In search, find *Graph styles > Line style*. Change from Solid to *Dots* and keep the *0,10* *line,space* setting.
    - We will keep *orders* as-is.
6. Click *Save Dashboard*. Below is what your panel should look like:

    ![Sockshop App](/img/breakout1/sockshop-app.png)

7. One more fix! We notice that the two blue colors are just too similar, and we want to make it obvious. So, right from the dashboard, we click on the blue line associated with *user* in the legend, and a set of default colors appear. Choose Purple.
8. Save the dashboard.
