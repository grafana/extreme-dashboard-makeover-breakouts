---
sidebar_position: 7
sidebar_custom_props:
  icon: 🗂️
---

# 7. Add a logo, then arrange into tabs

## Add our company logo

For a bit of flair, we'd like to add our company logo. To do so:

1. In the (formerly) dull dashboard, click on the *Add* button, then click on the *Plus* button to create a new panel.
2. Click *Edit visualization*.
3. On the right hand side, click *Change* to bring up the visualization menu. Make sure that *All visualizations* is selected, then search for 'Text'. Choose a *Text* panel.
4. For *mode* in the bottom right, switch from Markdown to HTML.
5. Remove the default text and paste in the following HTML:

    ```html
    <center><img align="center" src="https://i.pinimg.com/originals/74/a0/a5/74a0a51848fb3717c671598dc675c654.jpg" ></center>
    ```

6. Remove the Panel Title, click on *Transparent Background* and click *Save Dashboard*.
7. Size the panel appropriately.

## Arrange and group our panels

Finally, we need to arrange our panels so that the most important graphs are in that Z pattern, spaced appropriately, and properly sized.

We'll also group our panels into three tabs, each answering a single question: *How healthy is the service?*, *Is the platform up?*, and *How does it feel to our users?* Showcasing tabs this way keeps each grouping tight and gives our viewers a clear mental model.

You can drag a panel into a tab by clicking on it, dragging it to the new tab, and then dropping it on the canvas, like this:

![Drag a panel to a tab](/img/breakout1/drag-to-tab.gif)

1. First, let's configure this dashboard to group into tabs. Scroll to the bottom of the dashboard and click on the *Group panels* button, selecting *Group into tab*. This will place all panels into a single tab.
2. Click on the tab ("New tab") to select it, and use the properties panel on the right to change its title to *Service Health (RED)*. Set its *Layout* type to *Custom*. This tab holds all three RED signals (**R**ate, **E**rrors, and **D**uration) so they can be read together.
3. Hover over the row of tabs and click on the button *New tab*. With the new tab selected, use the properties panel on the right to set its title to *Infrastructure*. Leave its *Layout* type as *Auto*, and set the *Max columns* to **2**.
4. Click *New tab* once more. Set this third tab's title to *Customer Experience*, leaving its *Layout* type as *Auto* with *Max columns* set to **2**.
5. Now click and drag each panel into the correct tab.

    Into the *Infrastructure* tab:
    - K8s Service Status
    - Infrastructure - Error Score

    Into the *Customer Experience* tab:
    - Customer Activity
    - Service Apdex

6. Everything else stays on the *Service Health (RED)* tab. Arrange the top row left-to-right so the eye lands on the most important panel first. The top-left corner is where a viewer's gaze naturally starts:
    - SLO Status (Errors) per Data Center (top-left, the panel we most want people to see)
    - Server Request Rates per Second (center)
    - Company logo (top-right, kept small)

    The second row should have:
    - Latency for Sockshop App panel
    - side-by-side with the Latency quantiles panel.

    Keeping both latency panels together puts the full Duration story in one place.

After arranging your panels, your dashboard should look something similar to this:

![Final Dashboard](/img/breakout1/dashboard-one.webp)

<details>
  <summary>Want Assistant to scaffold the tabs for you?</summary>

  Assistant can create the three tabs and assign panels to them in one go. You'll still want to manually arrange the panels inside each tab (the Z-pattern is a design choice), but the tab scaffolding is the repetitive part:

  ```assistant title="Suggested prompt"
  Group the panels on this dashboard into three tabs. Tab 1 "Service Health (RED)" with Custom layout, holding SLO Status (Errors) per Data Center, Server Request Rates per Second, Latency for Sockshop App, the Latency quantiles panel, and the company logo. Tab 2 "Infrastructure" with Auto layout and Max columns 2, holding K8s Service Status and Infrastructure - Error Score. Tab 3 "Customer Experience" with Auto layout and Max columns 2, holding Customer Activity and Service Apdex.
  ```

</details>


## Didn't finish? Import the completed dashboard

If you didn't quite finish but would like a working copy of our result, you can import the dashboard:

1. Go to [the repo's `dashboards/` folder](https://github.com/grafana/extreme-dashboard-makeover-breakouts/tree/main/dashboards) and download `completed_dashboard.json`.
2. In Grafana, click the menu button (☰) at the top left, and then click on *Dashboards*.
3. On the Dashboards screen, click the *New* button and then click *Import*.
4. Upload the downloaded file.
5. You will be asked to choose three of your dashboard's data sources:
    - For TestData DB, choose `TestData DB`.
    - For Prometheus (Cloud), choose `Prometheus (Cloud)`.
    - For LokiNginxLogs, choose `Loki (Cloud)`.
    - Click on *Import*.
