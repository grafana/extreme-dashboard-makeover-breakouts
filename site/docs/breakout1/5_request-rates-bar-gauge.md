---
sidebar_position: 5
---

# 5. Convert Server Request Rates to a Bar Gauge

Like our first panel, we want context to understand what good looks like. Knowing our internal data patterns, we want to avoid service overload conditions where end-user performance can be affected.

1. Edit the *Server Request Rates* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*).
2. Change the Panel Title to *Server Request Rates per Second* (i.e. add "per Second" for clarity).
3. Switch the Visualization Type from *Time Series* to *Bar Gauge*.
4. Under *Bar Gauge*:
    - Change Orientation (Layout Orientation) from Auto to Horizontal.
    - Change Display Mode from *Gradient* to *Retro LCD*.
5. Under Thresholds (at the bottom of the menu panel on the right):
    - Change the base color from Green to Blue.
    - Change the 2nd color from Red to Yellow and the threshold level from 80 to 45.
    - Add a third threshold level, 55. Set color to Orange.
    - Select *Save Dashboard* to apply your panel settings.

Below is what your panel should look like:

![Webserver Request Rates](/img/breakout1/webserver-request-rates.png)
