import './index.css';
import { useEffect, useState } from 'react';
import Result from '../Result';
import Pending from '../Pending';

// const dummyData = {
// 	departingAirportLocation: 'Milan',
// 	arrivalAirportLocation: 'Paris',
// 	departingCode: 'MXP',
// 	arrivalCode: 'CDG',
// 	date: '14 SEP 21',
// 	boarding: '05:30',
// 	departure: '06:00',
// 	arrival: '07:35',
// 	terminal: '1',
// 	gate: '-',
// };

export default function Results({ searchState }) {
	const [results, setResults] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		setTimeout(() => {
			fetch(
				`https://flight-search-tool.herokuapp.com/?dep=${searchState.departingAirport}&arr=${searchState.arrivalAirport}`
			)
				.then((res) => {
					if (!res.ok) {
						throw Error("We couldn't find any flights");
					}
					return res.json();
				})
				.then((data) => {
					const array = [...data.payload];
					setResults(array);
					setIsPending(false);
					setError(null);
				})
				.catch((err) => {
					setIsPending(false);
					setError(err.message);
				});
		}, 1500);
	}, [searchState]);
	return (
		<div className="resultsMain">
			{error && (
				<div className="fillPage">
					<p>{error}</p>
				</div>
			)}
			{isPending && <Pending />}
			{results && (
				<div>
					{results.map((result, index) => {
						return <Result key={index} flightData={result} />;
					})}
				</div>
			)}
		</div>
	);
}
