---
sidebar_position: 3
---

# 3. Convert Customer Activity to a Geomap

This one is a mess. I've been told that this data is from OSS [Loki](https://grafana.com/oss/loki/), our logging tool, and represents the number of hits coming from each geographic region. It is colorful, but I have a very difficult time interpreting the information. Let's change the visualization to a map!

1. Edit the *Customer Activity* panel (hover over the panel's title, click the three vertical dots to show the context menu, and then click *Edit*).
2. Switch the Visualization Type from *Stat* to *Geomap*.
3. In the *Search options* box in the top right, type `basemap layer`. The basemap layer option will be shown, and all other options will be hidden.
4. Under *Basemap layer*, change the Layer type to *ArcGIS MapServer* with a Server instance of *World Ocean*.

    ![Base layer](/img/breakout1/Base-layer.png)

5. Click the '× Clear' text in the Search bar to clear your search for "basemap layer".
6. **Critical!** Since this is a point-in-time view, validate the *Query Type* of the query is **Instant** and not Range.

    ![Query Type](/img/breakout1/Query-Type.png)

7. We want to add markers on the map. Again using the *Search options* in the top right, find *Map layer* and click on Layer 1 *markers*. We want a lookup of the country by our `geoip_country_code` field.
8. To do this, under *Location Mode*, click *Lookup* and then under Lookup Field, choose `geoip_country_code`. You should now see data on your map. But we're not done!
9. Under Styles, change Size from *Fixed Value* to *Value #Hits by geolocation*, setting the min to **10** and the max to **50**.
10. Change Symbol from Circles to Star. Do this by selecting the circle.svg text, selecting Star and hitting *Select*.
11. Set *Fill opacity* to **1**.
12. Change Color from *Fixed color* to *Value #Hits by geolocation*.
13. The colors of blue and orange seem to blend in a bit much on the map, so we need to make them stand out a bit more. Using the *Search options* box in the top right, enter `thresholds`. Change the base color to Dark Purple by clicking on the orange circle, then clicking on dark purple, and then click outside of that popup window.
14. For a threshold of 10, change the color to Dark Orange using the same method as above.
15. Delete the 3rd threshold value of 20 by clicking on its garbage can icon.
16. Click *Save Dashboard* to leave edit mode of that panel.
