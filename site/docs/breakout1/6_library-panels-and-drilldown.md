---
sidebar_position: 6
---

# 6. Add library panels and a drilldown

Remembering that someone saved some valuable service KPI panels to your Panel Library, adding them will give our users a better picture of how our service is being delivered.

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

You want to add a similar drilldown to the *SLO Status (Errors) per Data Center* panel (i.e. the renamed "Error Rates" panel) just in case users don't see the panel links.

1. Open the "dull dashboard" (find it in Home → Dashboards).
2. Edit the *SLO Status (Errors) per Data Center* panel and find the category *Data Links* (3rd from the bottom, *not* Panel Links).
3. Click *Add Link* and add the following:
    - For Title, type in *Sockshop Service Details*.
    - For URL, paste in `/d/b2kdXLwnz/sockshop-performance?orgId=1`
    - Select *Open in new tab* and click *Save*.
4. Click *Save Dashboard* to return to the Dashboard and then click the *Save* icon to save your changes.
5. Now that you have saved your work, click anywhere on the SLO Status (Errors) graph to validate it drills into that other detailed dashboard.
