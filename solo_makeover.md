# Solo Makeover part I
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
    - For LokiNginxLogs, choose `LokiNginxLogs`.
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
