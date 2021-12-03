const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss_promised");

//fetchMyIP().then((body) => console.log(body));

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then((body) => console.log(body));

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then((body) => console.log(body));

nextISSTimesForMyLocation()
  .then((nextTimes) => {
    for (let nextTime of nextTimes) {
      let dateTime = new Date(0);
      dateTime.setUTCSeconds(nextTime.risetime);
      console.log(`Next pass at ${dateTime} for ${nextTime.duration} seconds!`);
    }
  })
  .catch((error) => {
    console.log(error.message);
  });
