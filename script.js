const display = document.getElementById("to-display");

let url =
  "https://api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=3d97b3b7cc808102c7be63d0abb7ba45";
const temp1 = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");
const humidity1 = document.getElementById("humidity");
const pressure1 = document.getElementById("pressure");
const displayTable = document.getElementById("temp-display");
const tr = document.getElementById("tr");
let data = fetch(url);

//Storing data in variable
// const apiData = async () => {
//   const ddata = await (await data).json();
//   const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
//     ddata.main;
//   let datas1 = [temp, feels_like, temp_min, temp_max, pressure, humidity];
//   return temp, feels_like, temp_min, temp_max, pressure, humidity;
// };
// console.log(apiData());
const fetchData = () => {
  data.then((res) => {
    if (res.status === 200) {
      return res.json().then((data) => {
        const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
          data.main;
        temp1.innerHTML = temp;
        feelsLike.innerHTML = feels_like;
        maxTemp.innerHTML = temp_max;
        minTemp.innerHTML = temp_min;
        humidity1.innerHTML = humidity;
        pressure1.innerHTML = pressure;
        displayTable.style.display = "block";
      });
    } else {
      console.log("Smomething went Wrong..");
    }
  });
};

//Sorting Data
const sortData = () => {
  data.then((res) => {
    if (res.status === 200) {
      return res.json().then((data) => {
        const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
          data.main;
        const datas = [
          temp,
          feels_like,
          temp_min,
          temp_max,
          pressure,
          humidity,
        ];
        const sortedData = datas.sort((a, b) => {
          return a - b;
        });
        console.log(sortedData);
        temp1.innerHTML = sortedData[0];
        feelsLike.innerHTML = sortedData[1];
        maxTemp.innerHTML = sortedData[2];
        pressure1.innerHTML = sortedData[3];
        minTemp.innerHTML = sortedData[4];
        humidity1.innerHTML = sortedData[5];

        displayTable.style.display = "block";
      });
    } else {
      console.log("Smomething went Wrong..");
    }
  });
};
//Search
const searchData = () => {
  data.then((res) => {
    if (res.status === 200) {
      return res.json().then((data) => {
        const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
          data.main;
        const datas = [
          temp,
          feels_like,
          temp_min,
          temp_max,
          pressure,
          humidity,
        ];
        let toSearch = document.getElementById("searchValue").value;
        console.log(datas);
        let result = datas.some((ele) => {
          return ele === Number(toSearch);
        });
        if (result === true) {
          document.getElementById("search").innerHTML = "Data Found";
        } else {
          document.getElementById("search").innerHTML = "Data Not Found";
        }
      });
    }
  });
};
