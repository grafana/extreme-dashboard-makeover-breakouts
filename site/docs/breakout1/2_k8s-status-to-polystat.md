---
sidebar_position: 2
sidebar_custom_props:
  icon: 🔷
---

# 2. Convert K8s Service Status to a Polystat panel

This table is showing us tons of information that we already know. The original goal of this table was to show a state of 1 (UP) or 0 (DOWN) for each of our service containers. Our new goal is to simplify the presentation of the information using a *polystat* panel.

1. Edit the *K8s Service Status* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*).
2. Switch the Visualization Type from *Table* to *Polystat*.

    You will notice that all of the rows have been aggregated into one average of all values. To separate our data per container, change the query's *Format* from Table to Time Series. In newer versions of the Grafana UI, this option is under *Options*.

    ![Table to Timeseries](/img/breakout1/table-to-timeseries.png)

3. In the panel options, under the *Global* settings group, change Decimals from `2` to `0` as the *Instant* value will always be a 0 or 1.
4. Change the Polygon Border Color to Transparent.
5. Under Thresholds, click on *Add Threshold*:
    - For the default threshold, leave the value of 0, but change Color Mode from *ok* to *critical*. Additionally, change the Color from Red to Orange.
    - Click *Add Threshold* to add a second threshold level. A new Threshold will appear.
    - For the second threshold, set value to 1 with Color Mode *ok*. Additionally, change the Color from Green to Blue.
6. At the bottom of the options panel, click on *Add value mappings*.
    - Add a Value mapping, setting the value condition to 1, and the display text to *UP*.
    - Add a second Value mapping, condition 0 and display text *DOWN*.
7. Change the Font Family to *Inter*.
8. Toggle Automate Font Color to the OFF position. This should render the text in black. Or, use the Font Color box to pick a color of your choice.
9. Click *Save Dashboard* to leave the edit mode of that panel.

The panel should look similar to what is shown below:

![K8s Service Status](/img/breakout1/k8s-service-status.png)

:::assistant-tip[Want to skip this next time?]

Configuring two thresholds and two value mappings by hand is a lot of clicking. Now that you've seen what each control does, you can ask Assistant to do it:

```assistant title="Suggested prompt"
Convert the K8s Service Status panel to a Polystat. Change the query format to Time Series and set Decimals to 0. Add two thresholds: 0 with critical color mode (orange) and 1 with ok color mode (blue). Add value mappings: 1 displays as "UP", 0 displays as "DOWN". Set the font family to Inter and turn off Automate Font Color.
```

:::

