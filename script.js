const URL = "https://api.openweathermap.org/data/2.5/weather";
const getNews = async () => {
  let response = await fetch(URL);
   console.log(response);
   let data = await response.json()
   console.log(data);
   
};

getNews()

