## Downtown Vancouver Flyover – A Unity 3D Map. 


![alt text]( https://github.com/Sirikat9012/Sirikat9012-web/blob/master/472unity/screenshot.png)
###### 1. The Interface

##### Purpose of the map
Vancouver is my second hometown. I have spent four years living in the city and feeling its breath. I feel familiar with everything when walking on the street and looking around the surroundings. However, what does the city look like from another visual angle? City overhead view is an effective way to know a city. When adding the 3D dynamic effect, it becomes more intuitionistic. Hence, the map is aimed to display a bird-eyes view of Downtown Vancouver. 

##### map making process
Unity 3D is a powerful platform which supports dynamic 3D simulation and Mapbox SDK provides open-source libraries for embedding highly customized maps. For the lab, I have a try on different styles and finally choose the City Stimulator style. (Location based game is also a cool style, however, it cannot change the origin location).  Mapbox comes with a “street with buildings” custom style which have already created the 3D buildings for users. I use the “realistic” as the building texture, for making a more real map.  To create the flyover effect, 
I set the angle of camera as our first perspective, and I also write some #C scripts for continuing moving the position of the camera. The range of the map is consistently transforming with the position of the camera, so that the map would always be loaded. In the end, some labels were added on the landmark architectures.  






[![Watch the video](https://github.com/Sirikat9012/Sirikat9012-web/blob/master/472unity/movieshot.png)](https://github.com/Sirikat9012/Sirikat9012-web/blob/master/472unity/Downtown_Vancouver_Flyover.mov)
