## Downtown Vancouver Flyover – A Unity 3D Map. 


![alt text]( https://github.com/Sirikat9012/Sirikat9012-web/blob/master/472unity/screenshot.png)
###### The Interface

#### Reflective Analysis
##### Purpose of the map
Vancouver is my second hometown. I have spent four years living in the city and feeling its breath. I feel familiar with everything when walking on the street and looking around the surroundings. However, what does the city look like from another visual angle? City overhead view is an effective way to know a city. When adding the 3D dynamic effect, it becomes more intuitionistic. Hence, the map is aimed to display a bird-eyes view of Downtown Vancouver. 

##### map making process
Unity 3D is a powerful platform which supports dynamic 3D simulation, and Mapbox SDK provides open-source libraries for embedding highly customized maps. For the lab, I have a try on different styles and finally choose the City Stimulator style. (Location based game is also a cool style. However, it cannot change the original location).  Mapbox comes with a “street with buildings” custom style which has already created the 3D buildings for users. I use the “realistic” as the building texture, for making a more realistic map.  To create the flyover effect, 
I set the angle of the camera as our first perspective, and I also write some #C scripts for continuing moving the position of the camera. The range of the map is consistently transforming with the position of the camera so that the map would always be loaded. In the end, some labels were added on the landmark architectures.  

##### limitations
The bird-eyes city tour would be improved by using keys to control the direction. Thus, users can navigate to anywhere they would like to visit, rather than just watching. Actually, A-frame can achieve the goal, however, to access the more real city architectures, some compensations have been made. I also tried to use the location-based game template. However, that template is restricted by an abstract positioning system.  

#### Collaborations and reliance on other resources
Unity 3D is a brand-new software for me. Fortunately, my teammates are always lovely to share tutorial videos and communicate on the difficulties. We each try different directions of Unity 3D and hopes that can be useful in further final project maps (ancient city tour). For the lab, I read through the Mapbox SDK  city simulator guidelines (https://docs.mapbox.com/unity/maps/examples/city-simulator/) and watch videos about how to create POIs (https://www.mapbox.com/videos/how-to/create-a-custom-scene-with-pois-using-maps-sdk-for-unity-3d/).





[![Watch the video](https://github.com/Sirikat9012/Sirikat9012-web/blob/master/472unity/movieshot.png)](https://github.com/Sirikat9012/Sirikat9012-web/blob/master/472unity/Downtown_Vancouver_Flyover.mov)
