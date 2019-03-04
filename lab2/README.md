## 2018 Homicide Cases in Toronto

![alt text]https://github.com/Sirikat9012/Sirikat9012-web/blob/master/lab2/Figure.%202018%20Homicide%20cases%20in%20Toronto.png

### maplink
https://sirikat9012.github.io/Sirikat9012-web/lab2/index.html

### Collaboration and reliance on other resources
Library Source: Turf.js & Mapbox.js

During the process of making a map, I talked with several classmates about the lab idea, the coding operation and the applications of various javascript libraries. We shared exciting samples and websites of the interactive map and discussed the feasibility and difficulty. During the collaboration, we found the mapbox.js and mapbox.gl.js cannot work toge

### Reflective Analysis
1. Purpose of the map
The map is aimed to provide an intuitive visual effect on discerning the spatial pattern of 2018 homicide cases in Toronto. Looking at the map, I hope the common mass could be aware of how many attacks had happened in this city. (here is a link for victims in detail: https://toronto.ctvnews.ca/toronto-s-most-deadly-year-a-look-at-the-96-homicide-victims-of-2018-1.4232568)

2. Choices of data &  cartographic stylings
The black skull marker was used to indicate homicide cases, symboling the loss of life. The shade under each skull marker is different. Deeper color of the shadow noted a heavier fatality in one accident. The most deadly attack occurred in North York on April 22, causing the in total deaths of 10 people. For the background layer, I chose the classic light Mapbox layer and hoped it was solemn. Red was to display the hexagon since it symbols blood, and the color opacity increased with the number of homicide cases within the hexagon. 

3. Interactivity 
The map contains two interactive features. First, the map can be switched among “raw data”, “turf-hex” and “turf-count”. The interactivity displayed the design philosophy of the map by showing how the map was converted from the point data to clustered hexagon data. The second interactivity was a radius search. Homicide cases were only displayed when they were within a circle with a radius of 5000m. The radius search interactivity aims to give the audience a visual shock and let them explore where the homicide cases were most clustered.

4. Improvement 
Though the map successfully showed the spatial pattern of the homicide cases, it did not provide the homicide details for each marker. The map could be improved by adding filters to search for different types of homicides. Also, due to radius search interactivity, the point data cannot be completely present on the map, for future work, changing the radius of the search circle should be allowed.
