# BeTrip.in

## Description

Be Trippin is a road trip planning app!

### Project Links

- [Back end git](https://github.com/blewin1/be-trippin-frontend)
- [Front end git](https://github.com/blewin1/be-trippin-backend)

### User Stories

- As a User, I can see my route with the stops on it
- As a User, I can see all my trips
- As a User, I can create a trip so that I can track it.
- As a User, I can add a packing list so that I remember what to bring!
- As a User, I can add a stop to my trip, so I can keep track of my plan.
- As a User, I can assign a name to each stop on my trip, so they are easy to keep track of
- As a User, I can set the start and end date/time of my stop, so I know how much time it will take
- As a User, I can add a list of what I plan to do at that location, so I can remember my plans
- As a User, I can see the overall time of my trip
- As a User, I can see an ordered list of all my stops
- As a User, I can see the details of a stop
- As a User, I can mark a stop as complete
- As a User, I can can edit a stop
- As a User, I can can delete a stop
- As a User, I can delete a trip, because of Coronavirus

### Wireframes

#### Mobile

[Home](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595016353/BeTrippin%20App%20Wireframes/Mobile_-_Homepage_jtkvac.png)
[Single Trip 1](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595016358/BeTrippin%20App%20Wireframes/Mobile_-_Single_Trip_1_ikhxhn.png)
[Single Trip 2](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595016357/BeTrippin%20App%20Wireframes/Mobile_-_Single_Trip_2_x05vjz.png)
[About & Team](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595016357/BeTrippin%20App%20Wireframes/Mobile_-_About_Team_ch2hpn.png)

#### Desktop/Tablet

[Home](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595016359/BeTrippin%20App%20Wireframes/Destktop_-_Home_fpsxms.png)
[About](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595016360/BeTrippin%20App%20Wireframes/Desktop_-_About_hs4tu3.png)
[Single Trip 1](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595016353/BeTrippin%20App%20Wireframes/Desktop_-_Single_Trip_2_yhkrpt.png)
[Single Trip 2](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595016350/BeTrippin%20App%20Wireframes/Desktop_-_Single_Trip_3_k59hex.png)
[Team](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595016352/BeTrippin%20App%20Wireframes/Desktop_-_Team_kcdfnk.png)

#### Component Tree

[Be Trippin Components](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1595022327/BeTrippin%20App%20Wireframes/BeTrippin_Component_Tree_nhapfq.png)

### Time/Priority Matrix

| Component                                   | Priority | Estimated Time | Time Invested | Probable Person |
| ------------------------------------------- | :------: | :------------: | :-----------: | :-------------: |
| Home Page (Styling/Layout)                  |    H     |      6hrs      |               |     Antwain     |
| Home Page (Add Trip)                        |    H     |      3hrs      |               |      Jenny      |
| Home Page (Filter Trips by Name)            |    M     |      6hrs      |               |      Jenny      |
| Home Page (List of Trips)                   |    H     |      3hrs      |               |      Jenny      |
| Nav Bar                                     |    H     |      3hrs      |               |      Jenny      |
| Team Page (Bio/Pic Cards)                   |    H     |      6hrs      |               |     Antwain     |
| Write Bios                                  |    H     |      2hrs      |               |       All       |
| About Page                                  |    H     |      5hrs      |               |     Antwain     |
| Trip Page (layout)                          |    H     |      3hrs      |               |      Jenny      |
| Trip Page (Countdown Timer)                 |    H     |      5hrs      |               |     Natasha     |
| Trip Page (Map)                             |    H     |     12hrs      |               |       Ben       |
| Trip Page (Add Stop)                        |    H     |      2hr       |               |       Ben       |
| Trip Page (Stop List)                       |    H     |      2hr       |               |       Ben       |
| Trip Page (Stop Component (with todo list)) |    H     |      2hr       |               |       Ben       |
| Trip Page (Packing List)                    |    H     |      4hrs      |               |     Natasha     |
| Trip Page (todo List component (shared))    |    H     |      3hrs      |               |     Natasha     |
| Git Time                                    |    H     |     16hrs      |               |       All       |
| Deploy Backend (Heroku, MongoDB Atlas)      |    H     |      3hrs      |               |      Jenny      |
| Deploy Frontend (Netlify)                   |    H     |      4hrs      |               |     Natasha     |
| Backend                                     |    H     |      8hrs      |               |      Jenny      |
| Backend Seeding                             |    H     |      2hr       |               |      Jenny      |
| Project Planning                            |    H     |     10hrs      |               |       All       |
| Documentation Updating                      |    H     |      6hrs      |               |       All       |
| General Debugging                           |    H     |     12hrs      |               |       All       |
| Choosing Fonts/Colors                       |    H     |      8hrs      |               |     Antwain     |
| Logo                                        |    H     |      6hrs      |               |     Antwain     |
| Total                                       |    H     |     142hrs     |               |       All       |

## MVP/Post-MVP

### MVP

#### Nav Bar

#### Home Page

- Create Button/Input
- List of created trips

#### Team Page

- Team member components
  - Blurb when you click

#### About Page

- App Description Blurb

#### Trip Page

- Countdown Timer
- Packing List
- Add a stop field (autocomplete find from google)
- Map
  - Flags for each stop
- StopList
  - Todo List (share component with packing list)
- Delete Trip

### Post-MVP

- Add Pictures of Trip
- View Weather on Trip
- Get reminders about trip

## Data Schema

```
const tripSchema = new Schema(
    {
        name: { type: String, required: true},
        stops: [stopSchema (ref)]
        packingList: [String],
        departureDate: Date
    }
)
const stopSchema = new Schema(
    {
        name: String,
        lat: String,
        lng: String,
        thingsToDo: [String],
    }
)
```

## Additional Libraries

- [google-maps-react](https://www.newline.co/fullstack-react/articles/how-to-write-a-google-maps-react-component/)
- Axios
- React, react-router-dom
- Node
- Express
