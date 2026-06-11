---
sidebar_position: 1
---

# 1. Convert Error Rates to a Stat panel

We will edit the Error Rates panel first. We want to add context to what error rates are acceptable, in a danger zone, or are in violation of an internal Service Level Objective (SLO).

![Error Rate Panel](/img/breakout1/error-rate-panel.png)

1. Edit the *Error Rates* panel (hover over the panel's title, click on the three vertical dots at the top right, and then click *Edit*).
2. Switch the Visualization Type from *Time Series* (or *Graph* in older versions of Grafana) to *Stat*.
3. Under *Stat styles*:
    - Change Orientation from Auto to Horizontal.
    - Change Color Mode from Value to Background Gradient.
4. Expand the *Value Mappings* section and then click *Add value mappings*:
    - If there is a default setting that null maps to N/A, click on the trash icon 🗑 to remove that default.
    - Click *Add a New Mapping* and then *Range*. Set range from 0 to 1 with Display Text of *OK*. Set color to Blue.
    - Click *Add a New Mapping* and then *Range*. Set range from 1 to 2 with Display Text of *Service Degraded*. Set color to Yellow.
    - Click *Add a New Mapping* and then *Range*. Set range from 2 to 100 with Display Text of *SLO Violation*. Set color to Orange.
    - Click on *Update*.

    The value mapping settings should look like this:

    ![Value Mappings](/img/breakout1/value-mappings.png)

5. Change the Panel Title to *SLO Status (Errors) per Data Center*.
6. Click on *Save Dashboard*.

:::tip Want to skip this next time?

Once you understand how value mappings work, you can let Assistant set them up for you. The equivalent prompt would be:

```assistant title="Suggested prompt"
Convert the Error Rates panel to a Stat with horizontal orientation and a Background Gradient color mode. Add three range value mappings: 0-1 "OK" in blue, 1-2 "Service Degraded" in yellow, 2-100 "SLO Violation" in orange. Rename the panel to "SLO Status (Errors) per Data Center".
```

:::

