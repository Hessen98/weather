let getLocation = document.getElementById("city-location");




let todayDay = document.querySelector('.today .day')
let todayDate = document.querySelector('.today .date')
let todayCity = document.querySelector('.today .city')
let todayDegree = document.querySelector(".today .degree");
let todayIcon = document.querySelector(".today .icon");
let todayInfo = document.querySelector(".today .info");
console.log(getLocation);
console.log(todayDay);
console.log(todayDate);
console.log(todayCity);
console.log(todayDegree);
console.log(todayIcon);
console.log(todayInfo);


let tomorrowDay = document.querySelector("#tomorrow .head .day");
let tomorrowIcon = document.querySelector("#tomorrow .body .icon");
let tomorrowDegree = document.querySelector("#tomorrow .body .degree");
let tomorrowDegreeC = document.querySelector("#tomorrow .body .degree-c");
let tomorrowInfo = document.querySelector("#tomorrow .body .info");
console.log(tomorrowDay)
console.log(tomorrowIcon)
console.log(tomorrowDegree)
console.log(tomorrowDegreeC)
console.log(tomorrowInfo)




let afterTomorrowDay = document.querySelector("#after-tomorrow .head .day");
let afterTomorrowIcon = document.querySelector("#after-tomorrow .body .icon");
let afterTomorrowDegree = document.querySelector("#after-tomorrow .body .degree");
let afterTomorrowDegreeC = document.querySelector("#after-tomorrow .body .degree-c");
let afterTomorrowInfo = document.querySelector("#after-tomorrow .body .info");
console.log(afterTomorrowDay);
console.log(afterTomorrowIcon);
console.log(afterTomorrowDegree);
console.log(afterTomorrowDegreeC);
console.log(afterTomorrowInfo);

// let dateToday = new Date().getDay()

// console.log(dateToday)
// start work
// getLocation.addEventListener('keypress' , function(e){
//     console.log(e.target.value);
//     getWeather()
// })
// async function getWeather(){
//     try{
//         // let result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//         let result = await fetch(`https://api.weatherapi.com/v1/current.json?key=b85acf54844f4e18bb5205153240812&q=${getLocation.value}&aqi=no&days=5`);
//         let data = await result.json()
//         console.log(data)
//         todayIcon.firstChild.setAttribute('src' , `https:${data.current.condition.icon}`)
//         todayDegree.innerHTML = data.current.heatindex_c;
//         todayCity.innerHTML = data.location.name;
//         todayInfo.innerHTML = data.current.condition.text;
//     } catch(err){
//         console.log(err)
//     }
// }

// getWeather()

// let locationTest = navigator.geolocation.getCurrentPosition()
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(po){
//         console.log(po)
//     } , err=> console.log(err)
// )
// } else {
//     console.log(`don't work`)
// }

// console.log(locationTest , 'test');








// get day
let day = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
][new Date().getDay()];

let tomorrow = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
][new Date().getDay()+1];

let afterTomorrow = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
][new Date().getDay()+2 ];

// push days

todayDay.innerHTML = day;
tomorrowDay.innerHTML = tomorrow;
afterTomorrowDay.innerHTML = afterTomorrow;


console.log(day)
console.log(tomorrow)
console.log(afterTomorrow) 




// just test we had a copy
getLocation.addEventListener("keypress", function (e) {
  console.log(e.target.value);
  getWeather();
});
async function getWeather() {
  try {
    // let result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let result = await fetch(
      `https://api.weatherapi.com/v1/current.json?&aqi=yes&day=14&key=b85acf54844f4e18bb5205153240812&q=${getLocation.value}/future.json`
    );
    let data = await result.json();
    console.log(data);
    todayIcon.firstChild.setAttribute(
      "src",
      `https:${data.current.condition.icon}`
    );
    todayDegree.innerHTML = data.current.heatindex_c;
    todayCity.innerHTML = data.location.name;
    todayInfo.innerHTML = data.current.condition.text;
  } catch (err) {
    console.log(err);
  }
}



