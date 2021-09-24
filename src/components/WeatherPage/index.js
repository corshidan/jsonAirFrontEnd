// const https = require("https");
export default function WeatherPage() {
	return (
		<div className="fillPage">
			<p>COMING SOON!!</p>
		</div>
	);
}

//     <>
//       <p>Weather Page</p>;
//       {/* {function (req, res) {
//         const query = req.body.cityName;
//         const apiKey = "fa2625c0a57dc2aa590bec456ab48c5d";
//         const unit = "metric";
//    <div>
//       <body>
//          <form action="/" method="post">
//             <label for="cityInput">City Name:</label>
//             <input id="cityInput" type="text" name="cityName" />
//             <button type="submit">Go</button>
//          </form>
//       </body>
//    </div>
// );

//         const url =
//           "https://api.openweathermap.org/data/2.5/weather?q=" +
//           query +
//           "&appid=" +
//           apiKey +
//           "&units=" +
//           unit;

//         https.get(url, function (response) {
//           console.log(response.statusCode);

//           response.on("data", function (data) {
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon;
//             const imageURL =
//               "http://openweathermap.org/img/wn/" + icon + "@2x.png";

//             res.write(
//               "<h1>The temp in " + query + " is " + temp + " degrees</h1>"
//             );
//             res.write("<img src=" + imageURL + ">");
//             res.send();
//           });
//         });
//       }}
//       ;
//     </>
//   );
// } */}
