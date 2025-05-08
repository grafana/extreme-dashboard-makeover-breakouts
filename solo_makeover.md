# Solo Makeover
We will be revamping the following dashboard.

![Dull Dashboard](img/dull-dashboard.png)

**Prerequisite**: We first need to import this dashboard.
Follow these steps to Import it:

1. Click the menu button (☰) at the top left, and then click on *Dashboards*.
2. On the Dashboards screen, click the *New* button and then click *Import*.
3. On the Import Dashboard screen, in the *Import via grafana.com* field, type in `16413` and then click *Load*.
4. You will be asked to choose three of your dashboard's data sources:
    - For TestData DB, choose `TestData DB`.
    - For Prometheus (Cloud), choose `Prometheus (Cloud)`.
    - For LokiNGINX, choose `Loki (Cloud)`.
    - Click on *Import*.

*While our existing dashboard already has useful information such as RED metrics - request rates, errors, and duration/latency - for our service as well as state information for the underlying Kubernetes pods and end-user activity from a geographic lens, our aim is to make the information on the dashboard easier to understand and more visually appealing.*

## Convert the 'Error Rates' panel from a time series to a stat panel

We will edit the Error Rates panel first.  We want to add context to what error rates are acceptable, in a danger zone, or are in violation of an internal Service Level Objective (SLO).

![Error Rate Panel](img/error-rate-panel.png)

1. Edit the *Error Rates* panel (hover over the panel's title, click on the three vertical dots at the top right, and then click *Edit*)
2. Switch the Visualization Type from *Time Series* (or *Graph* in older versions of Grafana) to *Stat*
3. Under *Stat styles*:
    * Change Orientation from Auto to Horizontal.
    * Change Color Mode from Value to Background Gradient.
4. Expand the 'Value Mappings' section and then click *Add value mappings*:
    * If there is a default setting that null maps to N/A, click on the trash icon 🗑 to remove that default.
    * Click *Add a New Mapping* and then *Range*. Set range from 0 to 1 with Display Text of *OK*. Set color to Blue.
    * Click *Add a New Mapping* and then *Range*. Set range from 1 to 2 with Display Text of *Service Degraded*. Set color to Yellow.
    * Click *Add a New Mapping* and then *Range*. Set range from 2 to 100 with Display Text of *SLO Violation*. Set color to Orange.
    * Click on *Update*

    The value mapping settings should look like this:

    ![Value Mappings](img/value-mappings.png)

5.  Change the Panel Title to *SLO Status(Errors) per Data Center*
6.  Click on *Save Dashboard*
## Convert the 'K8s Service Status' panel from a table to a polystat panel
This table is showing us tons of information that we already know.  The original goal of this table was to show a state of 1 (UP) or 0 (DOWN) for each of our service containers.   Our new goal is to simplify the presentation of the information using a *polystat* panel.
1. Edit the *K8s Service Status* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*)
2. Switch the Visualization Type from *Table* to *Polystat*

    You will notice that all of the rows have been aggregated into one average of all values.  To separate our data per container, change the query's *Format* from Table to Time Series.  In newer versions of the Grafana UI, this option is under *Options*.

    ![Table to Timeseries](img/table-to-timeseries.png)

3. In the panel options, under the *Global* settings group, change Decimals from `2` to `0` as the *Instant* value will always be a 0 or 1.
4. Change the Polygon Border Color to Transparent.
5. Under Thresholds, click on *Add Threshold*:
    * For the default threshold, leave the value of 0, but change Color Mode from *ok* to *critical*.  Additionally, change the Color from Red to Orange.
    * Click *Add Threshold* to add a second threshold level. A new Threshold will appear.
    * For the second threshold, set value to 1 with Color Mode *ok*.  Additionally, change the Color from Green to Blue.
7. At the bottom of the options panel, click on *Add value mappings*.
    * Add a Value mapping, setting the value condition to 1, and the display text to *UP*.
    * Add a second Value mapping, condition 0 and display text *DOWN*.
8. Change the Font Family to 'Inter'.
9. Toggle Automate Font Color to the OFF position. This should render the text in black. Or, use the Font Color box to pick a color of your choice.
10. Click *Save Dashboard* to the leave the edit mode of that panel.
The panel should look similar to what is shown below:

    ![K8s Service Status](img/k8s-service-status.png)

## Convert the 'Customer Activity' panel from a stat panel to a geomap
This one is a mess. I've been told that this data is from OSS [Loki](https://grafana.com/oss/loki/), our logging tool, and represents the number of hits coming from each geographic region. It is colorful, but I have a very difficult time interpreting the information.  Let's change the visualization to a map!
1. Edit the *Customer Activity* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*)
2. Switch the Visualization Type from *Stat* to *Geomap*
3. In the *Search options* box in the top right, type `basemap layer`. The basemap layer option will be shown, and all other options will be hidden.
4. Under *Basemap layer*, change the Layer type to *ArcGIS MapServer* with a Server instance of *World Ocean*.
![Base layer](img/Base-layer.png)
5. Click the '&#215; Clear' text in the Search bar to clear your search for "basemap layer".
6. CRITICAL! Since this is a point-in-time view, validate the *Query Type* of the query is __Instant__ and not Range.
![Query Type](img/Query-Type.png)
7. We want to add markers on the map.  Again using the *Search options* in the top right, find *Map layer* and click on Layer 1 *markers*. We want a lookup of the country by our *geoip_country_code* field.
8. To do this, under *Location Mode*, click *Lookup* and then under Lookup Field, choose *geoip_country_code*.  You should now see data on your map. But we're not done!
9. Under Styles, change Size from *Fixed Value* to *Value #Hits by geolocation*.
10. Change Symbol from Circles to Star. Do this by selecting the circle.svg text, selecting Star and hitting 'Select'.
11. Change Color from *Fixed color* to *Value #Hits by geolocation*.
12. The colors of blue and orange seem to blend in a bit much on the map, so we need to make them stand out a bit more. Using the *Search options* box in the top right, enter `thresholds`. Change the base color to Dark Purple by clicking on the orange circle, then clicking on dark purple, and then click outside of that popup window.
14. For a threshold of 10, change the color to dark Orange using the same method as above.
15. Delete the 3rd threshold value of 20 by clicking on its garbage can icon.
16. Click Save Dashboard to the leave edit mode of that Panel.
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
