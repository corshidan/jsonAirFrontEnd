import './index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage({ dispatch, ACTIONS }) {
	const [departingAirport, setdepartingAirport] = useState('LHR');
	const [arrivalAirport, setarrivalAirport] = useState('SVO');

	function handleSubmit(e) {
		e.preventDefault();
		dispatch({ type: ACTIONS.CHANGE_DEPARTURE, payload: departingAirport });
		dispatch({ type: ACTIONS.CHANGE_ARRIVAL, payload: arrivalAirport });
	}
	function handleChangeDeparting(e) {
		setdepartingAirport(e.target.value);
	}
	function handleChangeArrival(e) {
		setarrivalAirport(e.target.value);
	}

	return (
		<div className="container">
			<div className="topHomePage">
				<div className="left">
					<div className="tagLine">
						<p>Getting you to where you need to be</p>
					</div>
					<div className="introduction">
						<p>Missed your flight? Cancelled last minute? Need to be there ASAP?</p>
						<p>No matter where you're going from, we take you there.</p>
						<p>
							Our team will find you the next available flight to your destination.
							Try out our quick search or use Specific Search for more results.{' '}
						</p>
						<p>Get Me There - A More Rewarding Way To Travel.</p>
					</div>
				</div>
				<div className="right">
					<form className="form">
						<label className="departing" forhtml="departing">
							Departing airport
						</label>
						<select
							className="dropdownDeparture"
							type="dropdown"
							id="departing"
							onChange={handleChangeDeparting}
							defaultValue=""
							name="departingAirport"
						>
							<option value="LHR">Heathrow</option>
							<option value="LGW">Gatwick</option>
							<option value="STN">Stansted</option>
							<option value="SEN">Southend</option>
							<option value="FCO">Rome</option>
							<option value="BCN">Barcelona</option>
							<option value="SXF">Berlin </option>
							<option value="OTP">Bucharest</option>
							<option value="CDG">Paris Charles de Gaulle</option>
							<option value="ORY">Paris Orly</option>
							<option value="BVA">Paris Beauvais</option>
							<option value="JFK">New York</option>
							<option value="AKL">Auckland NZ</option>
							<option value="AMS">Amsterdam</option>
							<option value="SVO">Moscow</option>
						</select>
						<label className="arrival" forhtml="arrival">
							Arrival airport
						</label>
						<select
							className="dropdownArrival"
							type="dropdown"
							id="arrival"
							onChange={handleChangeArrival}
							name="arrivalAirport"
						>
							<option value="SVO">Moscow</option>
							<option value="LHR">Heathrow</option>
							<option value="LGW">Gatwick</option>
							<option value="STN">Stansted</option>
							<option value="SEN">Southend</option>
							<option value="FCO">Rome</option>
							<option value="BCN">Barcelona</option>
							<option value="SXF">Berlin </option>
							<option value="OTP">Bucharest</option>
							<option value="CDG">Paris Charles de Gaulle</option>
							<option value="ORY">Paris Orly</option>
							<option value="BVA">Paris Beauvais</option>
							<option value="JFK">New York</option>
							<option value="AKL">Auckland NZ</option>
							<option value="AMS">Amsterdam</option>
						</select>
						<button className="flightsButton" type="submit" onClick={handleSubmit}>
							<Link to="/results">Find flights</Link>
						</button>
					</form>
				</div>
			</div>
			<div className="globe">
				<section id="turnglobe">
					<div id="worldmap"></div>
				</section>
			</div>
		</div>
	);
}
