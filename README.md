# Tu Hora Divina V2

## Note: This is the updated version from the original [project](https://github.com/ari7946/radio-service). I'm gradually updating and building this project (including this readme).

This is a website for the a client's Spanish Radio Talk show and podcast station. Podcasts can be listened to on the website or on other podcast platforms.

[Open deployed site](https://www.tuhoradivina.com/)

#### Desktop View
<img src="https://i.ibb.co/x7xjyhx/divina-desktop.png" width="900" height="600" />

#### Tablet View
<img src="https://i.ibb.co/DYjqRyb/divina-tablet.png" width="900" height="600" />

#### Mobile View
<img src="https://i.ibb.co/X8nWVMm/divina-phone.png" width="900" height="600" />

## Tech Stack

#### Frontend Built Using:

- React
- NextJS
- BlitzJS (NextJS fullstack toolkit)
- SASS & CSS modules
- React Player(npm package) as wrapper for embedded Soundcloud player. This enables user triggered event methods

#### Using the Application

Requirements:
- Node
- Package Manager (such as Yarn or npm)

Follow these steps:

1. Fork and clone repo

2. In the terminal, `cd` into 'radio-serviceV2'

3. Run `yarn` or `npm install` to install the necessary node_modules on the frontend.

4. Run `yarn start` or `npm start` on the client folder to run the frontend on `localhost:3000`

## How Data is Structured
#### There's quite a bit of data, but it is "normalized" for constant time lookups (Not including network latency).
&nbsp;


example - data.js
```js
const data = {
  // ********* 2016 *************************************************
  sixteen: {
    yearTitle: '2016',
    year: 'sixteen',
    allMonths: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
    monthsData: {
      // ************** Enero 2016
      enero: {
        monthTitle: 'Enero 2016',
        audioData: [{
          audioTitle: "02-01-2016",
          audioFile: sixteenEnero1
        }, {
          audioTitle: "09-01-2016",
          audioFile: sixteenEnero2
        }, {
          audioTitle: "16-01-2016",
          audioFile: sixteenEnero3,
        }, {
          audioTitle: "23-01-2016",
          audioFile: sixteenEnero4
        }],
      },
      // ************** Febrero 2016
      febrero: { .....
```
&nbsp;


#### We can use the above example data to handle our years and months to update the state
&nbsp;


handleMonth - App.js
```javascript
  const handleMonth = (month) => {
    const monthData = data[year].monthsData[month];
    const { monthTitle, audioData } = monthData;
    setMonthTitle(monthTitle);
    setAudioData(audioData);
  }
```
&nbsp;

handleYear - App.js
```javascript
  const handleYear = (yearSelected) => {
    const { yearTitle, year, allMonths, monthsData } = data[yearSelected];

    // 2016 and 2016 both begin in Janurary, while 2015 begins in July.
    // (according to the data available, obviously not on an actual calendar lol)
    const { monthTitle, audioData } =
      yearSelected === 'fifteen' ? monthsData.julio : monthsData.enero;

    setAllMonths(allMonths);
    setYearTitle(yearTitle);
    setYear(year);
    setMonthTitle(monthTitle);
    setAudioData(audioData);
  }
```



