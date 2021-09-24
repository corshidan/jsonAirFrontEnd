import './index.css';

export default function Result({ flightData }) {
	return (
		<div className="resultsContainer">
			<div className="result">
				<div className="resultTop">
					<div>
						<p className="city">{flightData.departureAirport.city_name}</p>
						<p className="airportCode">{flightData.departureAirportIataCode}</p>
					</div>
					<div className="planeIcon">
						<img src="/images/take_off_plane.png" alt="" />
						<span className="spanLine">{flightData.name}</span>
						<img src="/images/flying_plane.png" alt="" />
						<span className="spanLine">{flightData.name}</span>
						<img src="/images/landing_plane.png" alt="" />
					</div>
					<div>
						<p className="city">{flightData.arrivalAirport.city_name}</p>
						<p className="airportCode">{flightData.arrivalAirportIata}</p>
					</div>
				</div>
				<div className="resultBottom">
					<div>
						<p>Date</p>
						<span>{flightData.date}</span>
					</div>
					<span className="spanLineBottom"></span>
					<div>
						Flight Number<span className="flightText">{flightData.flightNumber}</span>
					</div>
					<span className="spanLineBottom"></span>

					<div>
						Departure<span className="redtext">{flightData.departureTime}</span>
					</div>
					<span className="spanLineBottom"></span>

					<div>
						Arrival<span className="redtext">{flightData.arrivaltime}</span>
					</div>
					<span className="spanLineBottom"></span>

					<div className="terminal">
						<p>Terminal</p>
						<span className="flightText">
							{flightData.departureTerminal ? flightData.departureTerminal : 'N/A'}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
