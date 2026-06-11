---
sidebar_position: 6
sidebar_custom_props:
  icon: 📚
---

# 6. Add library panels and a drilldown

A teammate previously saved a few useful service KPI panels to your Panel Library. Adding them here gives viewers a fuller picture of how the service is performing.

## Add the library panels

1. From your dashboard, click the *Add* button, click on the *Plus* button to create a new panel. Find the newly-created panel at the bottom of your dashboard, and then click *Use library panel*.

    ![Add Library Panel](/img/breakout1/use-library-panel.webp)

2. Search for the word "Apdex" and choose Panel, *Service APDEX*.

    ![Add Library Panel](/img/breakout1/add-panel.png)

    :::warning

    This Library Panel is created from a test data source, so it will initially appear blank. Continue with the next steps to add the two other panels.

    :::

3. Repeat this process, searching for "Score" and choosing panel, *Infrastructure - Error Score*.
4. Repeat this process a third time, searching for "sock" and choosing panel, *Latency Profile, Sockshop Application*.
5. **Critical**: save your dashboard as you've done some fine work thus far! Then you can reload the dashboard to see the new panels.

After adding these panels, you'll notice at the top they all have a link icon. These *Panel drilldown* links go to another, more detailed dashboard. Score! That will save us a ton of time building the detailed service view.

## Import the drilldown dashboard

To import that drilldown dashboard (called `Sockshop Performance`):

1. Click the menu button (☰) at the top left, and then click on *Dashboards*.
2. On the Dashboards screen, click the *New* button and then click *Import dashboard*.
3. In the *Import via grafana.com* field, type in `16416` and then click *Load*.
4. You will be asked to choose your dashboard's data source:
    - For Prometheus (Cloud), choose `Prometheus (Cloud)`.
5. Click on *Import*.

## Add a drilldown data link to the SLO panel

You want to add a similar drilldown to the *SLO Status (Errors) per Data Center* panel (the renamed "Error Rates" panel) just in case users don't see the panel links.

Adding a data link manually means finding the right section in the panel editor (it's the 3rd-from-bottom, easy to miss), typing the URL, toggling *Open in new tab*, and saving. Or, you can do it in one sentence:

```assistant title="Suggested prompt"
Add a data link to the SLO Status (Errors) per Data Center panel titled "Sockshop Service Details" that navigates to the Sockshop Performance dashboard and opens in a new tab.
```

After Assistant finishes, click anywhere on the SLO Status panel to validate the drilldown navigates to the Sockshop Performance dashboard.

![Drilldown Data Link](/img/breakout2/exercise7-data-link.png)

<details>
  <summary>Curious how to do this without Grafana Assistant?</summary>

  1. Open the "dull dashboard" (find it in Home → Dashboards).
  2. Edit the *SLO Status (Errors) per Data Center* panel and find the category *Data Links* (3rd from the bottom, *not* Panel Links).
  3. Click *Add Link* and add the following:
      - For Title, type in *Sockshop Service Details*.
      - For URL, paste in `/d/b2kdXLwnz/sockshop-performance?orgId=1`
      - Select *Open in new tab* and click *Save*.
  4. Click *Save Dashboard* to return to the Dashboard and then click the *Save* icon to save your changes.
  5. Click anywhere on the SLO Status (Errors) graph to validate it drills into that other detailed dashboard.

</details>

