# Solo Makeover part II
We will continue to revamp our dashboard.

![Dull Dashboard](img/dull-dashboard.png)

## Update the 'Latency for Sockshop App' panel
Since this service latency graph is viewed by dozens of people, we know statistically that at least 2 people viewing this graph are colorblind.  That said, the Product owner of Sockshop called the colors 'uninspiring'.  You also notice that the legend is rough around the edges.
1. Edit the *Latency for Sockshop App* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*)
2. Switch the Visualization Type to *Time Series*, if it isn't already.
3. Let's fix the legend first:
    * Under the query on the left, in the Options panel, change the Legend type from Verbose to *Custom* and enter `{{ job }}`.  You will notice that the name of the job is displayed at the bottom of the graph, instead of the raw key/value pair.  But we still don't like the fact that the namespace of _development_ still appears.  So, let's use a _transformation_ to rename our fields.
    * Click on _Transform_ and then _Rename by Regex_ (scroll down the list or use the 'Add transformation' search).  For match, let's do 2 string captures - before and after the */*.
    * For match, type in `.+/(.+)`
    * For the _Replace_ field, type in `$1`
4. Someone else said this graph, denoted in seconds, would be easier to understand if it were in milliseconds.
    * Let's change the query on the left hand side by adding *\* 1000* to the end of the query
    * Add a unit to the y-axis: Under the panel's search options (top right), type in _Unit_.  For the unit, use _Time / milliseconds (ms)_.
5. We now want to make it easier for our colorblind colleagues to read.
    * For all lines in the graph: Use the  *Graph Styles*, choose a Line Width of 2 and a Fill opacity of 0

        ![Graph styles](img/Graph-styles.png)

    * Let's make dataset _user_ a dashed line.  In the upper right, click on *Overrides* and _Add field override_. Then, choose "Fields with Name" _user_. Next, add override property _Graph styles > Line style_. Change from Solid to *Dash*. Keep *10,10* as the *line,space* setting.
    * We will make field _payment_ a dashed line as well. Again, click on _Add field override_, choosing "Fields with Name" _payment_. Next, add override property _Graph styles > Line style_. Change from Solid to *Dash*. Use a *5,10* dash line style.
    * Let's make dataset _catalogue_ a dashed line. Add an override for Fields with name _catalogue_, adding a Line Style override. For the dash pattern, we want to see long-short-short, and so to do this, we choose *30,3,3*, the last item in the dropdown.
    * Choose field with name _carts_ and Add override property.  In search, find _Graph styles > Line style_. Change from Solid to *Dots* and keep the *0,10* *line,space* setting.
    * We will keep _orders_ as-is.
6. Click *Save Dashboard*. Below is what your panel should look like:

    ![Sockshop App](img/sockshop-app.png)

7. One more fix!  We notice that the two blue colors are just too similar, and we want to make it obvious.  So, right from the dashboard, we click on the blue line associated with _user_ in the legend, and a set of default colors appear.  Choose Purple.
8. Save the dashboard.
## Convert the 'Server Request Rates' panel from a time series to a bar gauge panel
Like our first panel, we want context to understand what good looks like.  Knowing our internal data patterns, we want to avoid service overload conditions where end-user performance can be affected.
1. Edit the *Server Request Rates* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*)
2. Change the Panel Title to *Server Request Rates per Second* (i.e. add "per Second" for clarity)
3. Switch the Visualization Type from *Time Series* to *Bar Gauge*
4. Under *Bar Gauge*:
    * Change Orientation (Layout Orientation) from Auto to Horizontal.
    * Change Display Mode from *Gradient* to *Retro LCD*
5. Under Thresholds (At the bottom of the menu panel on the right):
    * Change the base color from Green to Blue
    * Change the 2nd color from Red to Yellow and the threshold level from 80 to 45.
    * Add a third threshold level, 55.  Set color to Orange.
    * Select Save Dashboard to apply your panel settings.

Below is what your panel should look like:

![Webserver Request Rates](img/webserver-request-rates.png)

## Add existing library panels
Remembering that someone saved some valuable service KPI panels to your Panel Library, adding them will give our users a better picture of how our service is being delivered.

1. From your dashboard, click the _Add_ button at the top of the screen, and then _Import from Library_. 

2. Search for the word "Apdex" and choose Panel, "Service APDEX".

    ![Add Library Panel](img/add-panel.png)

    ⚠️ **NOTE:** This Library Panel is created from a test data source, so it will initially appear blank. Continue with the next steps to add the two other panels.

2. Repeat this process, searching for "Score" and choosing panel, "Infrastructure - Error Score".
3. Repeat this process a third time, searching for "sock" and choosing panel, "Latency Profile, Sockshop Application".
5. Critical - Save your dashboard as you've done some fine work thus far! Then you can reload the dashboard to see the new panels.

After adding these panels, you notice at the top they all have a link icon. These *Panel drilldown* links go to another, more detailed dashboard... score!  That will save us a ton of time building the detailed service view.

To import that drilldown dashboard (Called `Sockshop Performance`):

1. Click the menu button (☰) at the top left, and then click on *Dashboards*.
2. On the Dashboards screen, click the *New* button and then click *Import*.
2. In the Import via grafana.com field, type in `16416` and then click *Load*.
3. You will be asked to choose your dashboard's data source:
    - For Prometheus (Cloud), choose `Prometheus (Cloud)`.
4. Click on *Import*.

However, you want to add a similar drilldown to the _SLO Status (Errors) per Data Center_ panel (i.e. the renamed "Error Rates" panel) just in case users don't see the panel links.
1. Open the "dull dashboard" (find it in Home &rarr; Dashboards).
2. Edit the _SLO Status (Errors) per Data Center_ panel and find the category *Data Links* (3rd from the bottom - _not_ Panel Links).
3. Click _Add Link_ and add the following:
    * For Title, type in _Sockshop Service Details_.
    * For URL, paste in `/d/b2kdXLwnz/sockshop-performance?orgId=1`
    * Select _Open in new tab_ and click *Save*.
4. Click *Save Dashboard* to return to the Dashboard and then click the *Save* icon to save your changes.
5. Now that you have saved your work, click anywhere on the SLO Status (Errors) graph to validate it drills into that other detailed dashboard.

## Add our company logo
For a bit of flair, we'd like to add our company logo.  To do so:
1. In the (formerly) dull dashboard, click on the _Add_ button, then select _Visualization_.
2. On the right hand side, click on the default "Time Series" and search for 'Text'. Choose a *Text* panel.
3. For _mode_ in the bottom right, switch from Markdown to HTML.
4. Remove the default text and paste in the following HTML:

    ```html
    <center><img align="center" src="https://i.pinimg.com/originals/74/a0/a5/74a0a51848fb3717c671598dc675c654.jpg" ></center>
    ```

5. Remove the Panel Title, Click on _Transparent Background_ and click *Save Dashboard*.
6. Size the panel appropriately.

## Arrange our panels
Finally, we need to arrange our panels so that the most important graphs are in that Z pattern, spaced appropriately, and properly sized.
We may need to add some spacing to our dashboard.  To do so, choose the blank text panel we have saved in our library.

1. First, let's add a row for our RED metrics (request rates, errors, and duration/latency).
    *  Click on the _Add_ button click _Row_.
    *  Hover over the new row, click on the Gear icon to change the row title to *Service RED Metrics*. Going left to right, move Server Requests per Second, SLO Status (Errors) per Data Center, and Latency for Sockshop App on the top row.
2. Add a 2nd row called *Key Performance Indicators*
    * Move the rest of the graphs into this grouping.  In the middle row, going left to right, move Service Apdex, Latency quantiles, and then our logo to this middle row.
    * In the bottom area, we should have K8s Service Status on the left, Infrastucture - Error Score below it, and the Customer Activity map to the right of those two graphs.
    * To reorder rows, click on the arrow to the left of each row's title to collapse the row, then use the dragging handle at the far right of the row to move it up or down.
4. Click _Add_ and then _Import from Library_. Choose Panel, "Blank Space".  Add a small row of blank space after our row of Service RED Metrics.
5. Choose _Add Panel_ and then _Import from Library_. Choose Panel, "Blank Space".  Add a small row of blank space after our top row of Key Performance Indicators.

After arranging our panels and adding space, your dashboard should look something similar to this:

![Final-Dashboard One](img/dashboard-one.png)

If you didn't quite finish but would like a working copy of our result you can import the dashboard:
Steps to Import:
1. Click the menu button (☰) at the top left, and then click on *Dashboards*.
2. On the Dashboards screen, click the *New* button and then click *Import*.
3. In the Import via grafana.com field, type in `16414` and then click *Load*.
4. You will be asked to choose three of your dashboard's data sources:
    * For TestData DB, choose `TestData DB`.
    * For Prometheus (Cloud), choose `Prometheus (Cloud)`.
    * For LokiNginxLogs, choose `LokiNginxLogs`.
    * Click on *Import*.
