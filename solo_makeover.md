# Solo Makeover
We will be revamping the following dashboard.
![Dull Dashboard](img/dull-dashboard.png)
Go to the magnifying glass icon in the left menu and search for "Dull".  Choose the Dull Dashboard.

## Convert a panel from an old "graph" panel to a Stat Panel
We will edit the Error Rates panel first.
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
 
