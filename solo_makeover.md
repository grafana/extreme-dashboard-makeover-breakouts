# Solo Makeover
We will be revamping the following dashboard.
![Dull Dashboard](img/dull-dashboard.png)
Go to the magnifying glass icon in the left menu and search for "Dull".  Choose the Dull Dashboard.

*While our existing dashboard already has useful information such as RED metrics - request rates, errors, and duration/latency - for our service as well as state information for the underlying Kubernetes pods and end-user activity from a geographic lens, our aim is to make the information on the dashboard easier to understand and more visually appealing.*

## Convert the Error Rates panel from a deprecated "graph" panel to a Stat Panel
We will edit the Error Rates panel first.  We want to add context to what error rates are acceptable, in a danger zone, or are in violation of an internal Service Level Objective (SLO).
![Error Rate Panel](img/error-rate-panel.png)
1. Edit the *Error Rates* panel (click on the panel's title and then *Edit*)
2. Switch the Visualization Type from *Graph (Old)* to *Stat*
3. Under *Stat styles*:
* Change Orientation from Auto to Horizontal.
* Change Color Mode from Value to Background.
4. Click *Add value mappings*
* Click *Add a New Mapping* and then *Range*. Set range from 0 to 1 with Display Text of *OK*. Set color to Blue.
* Click *Add a New Mapping* and then *Range*. Set range from 1 to 2 with Display Text of *Service Degraded*. Set color to Yellow.
* Click *Add a New Mapping* and then *Range*. Set range from 2 to 100 with Display Text of *SLO Violation*. Set color to Orange.
* Click on Update
The value mapping settings should look like this:
![Value Mappings](img/value-mappings.png)
5.  Change the Panel Title to *SLO Status (Errors) per Data Center*
6.  Click on *Apply*
## Convert the K8s Service Status panel from a table to a Polystat Panel
This table is showing us tons of information that we already know.  The original goal of this table was to show a state of 1 (UP) or 0 (DOWN) for each of our service containers.   Our new goal is to simplify the presentation of the information using a *polystat* panel.  
1. Edit the *K8s Service Status* panel (click on the panel's title and then *Edit*)
2. Switch the Visualization Type from *Table* to *Polystat*
* You will notice that all of the rows have been aggregated into one average of all values.  To separate our data per container, change the formula's *Format* from Table to Time Series.
3. Under Options...Global, change Decimals from 2 to 0 as the *Instant* value will always be a 0 or 1.
4. Change the Polygon Border Color to Transparent.
5. Under Thresholds, click on *Add Threshold*.  
* For T1, leave value of 0, but change Color Mode from *ok* to *critical*.  Change the Color from Red to Orange.
* For T2, set value to 1 for Color Mode *ok*.  Change the Color from Green to Blue.
7. At the bottom, click on *Add a value mapping*. 
* set value of 1 to *UP*.
* add a 2nd value mapping with 0 set to *DOWN*.
Click apply.  The panel should look similar to what we have below.
![K8s Service Status](img/k8s-service-status.png)

## Convert the Customer Activity panel from a stat panel to a Geomap
This one is a mess. I've been told that this data is from OSS Loki, our logging tool, and represents the number of hits coming from each Geographic region. It is colorful, but I have a very difficult time interpreting the information.  Let's change the visualization to a map!
1. Edit the *Customer Activity* panel (click on the panel's title and then *Edit*)
2. Switch the Visualization Type from *Stat* to *Geomap*
3. Under *Base Layer*, change the Layer type to *Open Street Map*
4. CRITICAL! Since this is a point-in-time view, change the *Query Type* of your formula from Range to __Instant__.
5. Scroll up to *Data layer* and click on Layer 1, *markers*.  For your markers on the map, you want to do a lookup of the country by geoip_country_code. To do this, under *Location*, click *Lookup* and then choose Lookup Field, geoip_country_code.  You should now see data on your map. But we're not done!
6. Under Styles...Size, Change from *Fixed Value* to *geohits*.
7. Change Symbol from Circles to Star.
8. Change color from Fixed to *value #geohits*.
9. Go to Thresholds and set the color of the Base to Orange; for a threshold of 10, set the color to Yellow; add a 3rd threshold of 20, setting the color to Blue.
## Update the Latency for Sockshop App panel from an old "graph" panel to a Time Series Panel
Since this service latency graph is viewed by dozens of people, we know statistically that at least 2 people viewing this graph are colorblind.  That said, the Product owner of Sockshop called the colors 'uninspiring'.  You also notice that the legend is rough around the edges.

1. Edit the *Latency for Sockshop App* panel (click on the panel's title and then *Edit*)
2. Switch the Visualization Type from *Graph (Old)* to *Time Series*
3. Let's fix the legend first.  
* In the legend field, enter {{ job }}.  You will notice that the name of the job is displayed instead of the raw key/value pair.  But we still don't like the fact that the namespace of _development_ still appears.  So, let's use a _transformation_ to rename our fields.
* Click on _Transform_ and then _Rename by Regex_.  For match, let's do 2 string captures - before and after the */*. 
* For match, type in *(.+)\/(.+)*
* In this case, we just want to use the 2nd capture group, and so for the _Replace_ field, type in *$2*
4. Someone else said this graph, denoted in seconds, would be easier to understand if it were in milliseconds.  
* Let's change the formula by adding ** 1000* to the end of the formula.
* Add a unit to the y-axis.  Under the panel's search options (top right), type in _Unit_.  For the unit, use _Time / Milliseconds (ms)_.
5. We now want to make it easier for our colorblind
* For all lines, under *Graph Styles*, choose a Line Width of 2 and a Fill opacity of 0
* Let's make dataset _user_ a dotted line.  In the upper right, click on *Overrides* and _Add field override_. 
* Choose fields with name _carts_ and Add override property.  In search, find _Graph styles > Line style_. Change from Solid to *Dots*.
* Let's make dataset _catalogue_ a dashed line. Add an override for Fields with name _catalogue_, adding a Line Style override. For the dash pattern, we want to see short-long-short, and so to do this, we choose *30,3,3* in the dropdown.
* We will make fields _user_ and _payment_ dashed lines as well. For _user_, first add an override for line width, setting it to 1.  Then, use a *10,10* dash line style.  For _payment_, use a *5,10* dash line style.
* We will keep orders as-is.  Click apply.
Below is what your panel should look like:
![Sockshop App](img/sockshop-app.png)
6. One more fix!  We notice for your non-colorblind people that the two blue colors are just too similar, and we want to make it obvious.  So, right from the dashboard, we click on the blue line associated with _user_, and a set of default colors appear.  Choose Purple.

## Convert the Server Request Rates panel from an old "graph" panel to a Stat Panel
Like our first panel, we want context to understand what good looks like.  Knowing our internal data patterns, we want to avoid service overload conditions where end-user performance can be affected.  
1. Edit the *Server Request Rates* panel (click on the panel's title and then *Edit*)
2. Switch the Visualization Type from *Graph (Old)* to *Bar Gauge*
3. Under *Bar Gauge*:
* Change Orientation from Auto to Horizontal.
* Change Display Mode from *Gradient* to *Retro LCD*
4. Under Thresholds:
* Change the base color from Green to Blue
* Change the 2nd color from Red to Yellow
* Add a third threshold level, 90.  Set color to Orange.
Below is what your panel should look like:
![Server Request Rates](img/webserver-request-rates.png)

## Add existing Library Panels
Remembering that someone saved some valuable service KPI panels to your Panel Library, adding them will give our users a better picture of how our service is being delivered.

1. Choose _Add Panel_ and then _Add a panel from the Panel Library_. Choose Panel, "Service APDEX".
2. Repeat this process, choosing panel, "Infrastructure - Error Score".
3. Repeat this process a third time, choosing panel, "Latency Profile, Sockshop Application".

After adding these panels, you notice in the top left they all have *Panel drilldown* links going to another more detailed dashboard...score!  That will save us a ton of time building the detailed service view.  

However, you want to add a similar drilldown to the _SLO Status (Errors) per Data Center_ panel just in case users don't see the panel links.
1. Edit the _SLO Status (Errors) per Data Center_ panel and find the category *Data Links* (3rd from the bottom).
2. Click _Add Link_ and add the following:
* For Title, type in _Sockshop Service Details_.
* For URL, paste in `/d/b2kdXLwnz/sockshop-performance?orgId=1`
* Select _Open in new tab_ and click save.
* Now that you have saved your work, click anywhere on the SLO Status (Errors) graph to validate it drills into that other detailed dashboard.

## Add our company logo
For a bit of flair, we'd like to add our company logo.  To do so, add a *Text* panel.
For _mode_ in the bottom right, choose HTML.
Remove the default text and paste in the following HTML:
```<center><img align="center" src="https://i.pinimg.com/originals/74/a0/a5/74a0a51848fb3717c671598dc675c654.jpg" ></center>```
Remove the Panel Title and click Apply.  Size the panel appropriately.

## Arrange our panels
Finally, we need to arrange our panels so that the most important graphs are in that Z pattern, spaced appropriately, and properly sized.
We may need to add some spacing to our dashboard.  To do so, choose the blank text panel we have saved in our library.
1. Choose _Add Panel_ and then _Add a panel from the Panel Library_. Choose Panel, "Blank Space".

After arranging our panels and adding some space, your dashboard should look something similar to this:
![Final-Dashboard One](img/dashboard-one.png)
