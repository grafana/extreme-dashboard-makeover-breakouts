# The Quick Makeover

We will be revamping the following dashboard.

![Dull Dashboard](img/dull-dashboard.png)

## Prerequisite: We first need to import data, dashboard, and plugins
Follow these steps:

1. Add the data source
    - Click the menu button (☰) at the top left, and then click on *Data sources*.
    - Click on *Add new data source*
    - Search for *TestData* and click on it
2. Import the dashboard
    - Click the menu button (☰) at the top left, and then click on *Dashboards*.
    - On the Dashboards screen, click the *New* button and then click *Import*.
    - On the Import Dashboard screen, in the *Import via grafana.com* field, type in `20604` and then click *Load*.
3. Configure dashboard's data sources:
    - For TestData DB, choose `TestData`.
    - Click on *Import*.

While our existing dashboard already has useful information such as RED metrics - request rates, errors, and duration/latency - for our service as well as state information for the underlying Kubernetes pods and end-user activity from a geographic lens, **our aim is to make the information on the dashboard easier to understand and more visually appealing.**

## Revamp the 'Error Rates' panel
We will edit the Error Rates panel first.  We want to add context to what error rates are acceptable, in a danger zone, or are in violation of an internal Service Level Objective (SLO).

![Error Rate Panel](img/error-rate-panel.png)

1. Edit the *Error Rates* panel (hover over the panel's title, click on the three vertical dots at the top right, and then click *Edit*)
2. Change the Visualization type
    - At the top right, switch the Visualization Type from *Time Series* to *Stat*
3. Change the style, under *Stat styles*:
    - **It's easier to find the options by searching for their names. Type the name *Stat style* to easily find what you are looking for**
    - Change *Orientation* from Auto to Horizontal.
    - Change *Color Mode* from Value to Background Gradient.
4. Customize colors:
    - Expand the 'Value Mappings' section and then click *Add value mappings*:
    - Click on the trash icon 🗑 to remove that empty default mapping.
    - Click *Add a New Mapping* and then *Range*. Set range from 0 to 1 with Display Text of *OK*. Set color to Blue.
    - Click *Add a New Mapping* and then *Range*. Set range from 1 to 2 with Display Text of *Degraded*. Set color to Yellow.
    - Click *Add a New Mapping* and then *Range*. Set range from 2 to 100 (or more) with Display Text of *SLO Violation*. Set color to Orange.
    - Click on *Update*

    The value mapping settings should look like this:

    ![Value Mappings](img/value-mappings.png)

5.  Change the Panel Title to *SLO Status(Errors) per Data Center*
    - Search for Title, or clear your search, it will be the first option
6.  Click on the *Apply* blue bottom at the top right
7.  Save the dashboard by clicking at the save icon 💾 in the top bar, on the right side

> Grafana dashboards are versioned. Saving frequently makes it easier to cancel changes and differentiate the modifications.

## Make the 'K8s Service Status' panel more "visual"
This table is showing us tons of information that we already know.  The original goal of this table was to show a state of 1 (UP) or 0 (DOWN) for each of our service containers. Our new goal is to simplify the presentation of the information using a *polystat* panel.

1. Edit the *K8s Service Status* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*)
2. Switch the Visualization Type from *Table* to *Stat*
3. In the panel options, change *Show* to All values
4. Change the *Color mode* to Background Solid.
5. Change the Thresholds colors and value:
    * For the Base threshold, change the color to Orange by clicking on the green circle
    * Change the existing treshold to 1 and the color to blue
6. Change the *value mappings*:
    * Add a Value mapping, setting the value condition to 1, and the display text to *UP*.
    * Add a second Value mapping, condition 0 and display text *DOWN*.
7. It's hard to see the title. This come from the data. In this case, we don't want to change the data. Let's imagine we can't change the table from the query. We will transform the data:
    - On the left side, under the visualization, click on *Transformations*
    - Search for *Organize fields*
    - You can hide the fields by clicking on the small eye close to the name of the field. Hide them all except *Value* and *container*
8. Click *Apply* to the leave the edit mode of that panel.
The panel should look similar to what is shown below:

    ![K8s Service Status](img/k8s-status-stat.png)

9.  Save the dashboard by clicking at the save icon 💾 in the top bar, on the right side

## Convert the 'Customer Activity' panel from a stat panel to a geomap
This one is a mess. I've been told that this data is from [Loki](https://grafana.com/oss/loki/), our logging tool, and represents the number of hits coming from each geographic region. It is colorful, but I have a very difficult time interpreting the information.  Let's change the visualization to a map!
1. Edit the *Customer Activity* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*)

2. Switch the Visualization Type from *Stat* to *Geomap*

3. We want to add markers on the map.  Again using the *Search options* in the top right, find *Map layers* and click on Layer 1 *markers*.

4. We want a lookup of the country by our *geoip_country_code* field.
    - To do this, under *Location Mode*, click *Lookup*
    - under *Lookup Field*, choose *geoip_country_code*.  You should now see data on your map. But we're not done!

5. Under Styles, change Size from *Fixed Value* to *Value #Hits by geolocation*.

6. Change Color from *Fixed color* to *Value #Hits by geolocation*.

7. Click Apply to the leave edit mode of that Panel.


## Improve the 'Latency for Sockshop App' panel

The Latency panel seems ok but it was not updated 

1. Edit the *Latency for Sockshop App* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*)

2. Let's make it easier to see the differences between the lines:
    - We notice that the two blue colors are just too similar, and we want to make it obvious. So, right from the dashboard, we click on the blue line associated with Orders in the legend, and a set of default colors appear. Choose Purple.
    - Change the *graph styles > Line width* to 2
    - change the *Fill opacity* to 0
    
    ![Graph styles](img/Graph-styles.png)

3. Click *Apply*.

4. Save the dashboard.

## Convert the 'Server Request Rates' panel from graph to a bar gauge panel

Like our first panel, we want context to understand what good looks like. Knowing our internal data patterns, we want to avoid service overload conditions where end-user performance can be affected.
1. Edit the *Server Request Rates* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*)

2. Switch the Visualization Type from *Time Series* to *Bar Gauge*

3. Change the Panel Title to *Server Request Rates per Second* (i.e. add "per Second" for clarity)

4. Under *Bar Gauge*:
    * Change Orientation (Layout Orientation) from Auto to Horizontal.
    * Change Display Mode from *Gradient* to *Retro LCD*

5. Under Thresholds (At the bottom of the menu panel on the right):
    * Change the base color from Green to Blue
    * Change the 2nd color from Red to Yellow and the threshold level from 80 to 45.
    * Add a third threshold level, 55.  Set color to Orange.
    * Select Apply to apply your panel settings.

Below is what your panel should look like:

![Webserver Request Rates](img/webserver-request-rates.png)

## Add our company logo
For a bit of flair, we'd like to add our company logo.  To do so:
1. In the (formerly) dull dashboard, click on the _Add_ button, then select _Visualization_.
2. Search for 'Text'. Choose a *Text* panel.
3. For _mode_ in the bottom right, switch from Markdown to HTML.
4. Remove the default text and paste in the following HTML:

    ```html
    <center><img align="center" src="https://i.pinimg.com/originals/74/a0/a5/74a0a51848fb3717c671598dc675c654.jpg" ></center>
    ```

5. Remove the Panel Title, Click on _Transparent Background_ and click *Apply*.
6. Size the panel appropriately.

## Arrange our panels
Finally, we need to arrange our panels to improve readability. Here is an example. Feel free to play around !

![Final-Dashboard One](img/dashboard-simple-results.png)
