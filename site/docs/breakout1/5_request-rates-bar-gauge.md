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

## Try a different look in one prompt

You configured the panel as Retro LCD. Maybe gradient would feel less retro. With one Assistant prompt, you can try a variant without re-walking the panel editor:

```assistant title="Suggested prompt"
Switch the Server Request Rates per Second panel to a gradient bar gauge instead of retro LCD and show me how it looks.
```

![Gradient Bar Gauge](/img/breakout2/exercise5-gradient-bar-gauge.png)

Keep whichever variant you prefer. The point: visualization tweaks that used to take a trip into the panel editor now take a sentence.

