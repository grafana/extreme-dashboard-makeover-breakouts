# Solo Makeover
We will be revamping the following dashboard.
![Dull Dashboard](img/dull-dashboard.png)
Go to the magnifying glass icon in the left menu and search for "Dull".  Choose the Dull Dashboard.

*This dashboard does have useful information as it contains RED metrics - request rates, errors, and duration/latency - for our service; and it contains state information for the underlying pods as well as end-user activity from a geographic lens.  Our aim is to make the information on the dashboard easier to understand and more visually appealing.*

## Convert the Error Rates panel from an old "graph" panel to a Stat Panel
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
