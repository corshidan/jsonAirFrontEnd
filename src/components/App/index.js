import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../About';
import WeatherPage from '../WeatherPage';
import SpecificSearchPage from '../SpecificSearchPage';
import HomePage from '../HomePage';
import Results from '../Results';
import { useReducer } from 'react';
import Footer from '../Footer';

const initialState = {
	departingAirport: 'OTP',
	arrivalAirport: 'BHX',
};
const ACTIONS = {
	CHANGE_DEPARTURE: 'departingAirport',
	CHANGE_ARRIVAL: 'arrivalAirport',
};
const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.CHANGE_DEPARTURE:
			return { ...state, departingAirport: action.payload };
		case ACTIONS.CHANGE_ARRIVAL:
			return { ...state, arrivalAirport: action.payload };
		default:
			return state;
	}
};

function App() {
	const [searchState, dispatch] = useReducer(reducer, initialState);
	function refresh() {
		setTimeout(() => {
			window.location.reload(true);
		}, 1);
	}
	return (
		<Router>
			<nav>
				<div className="navHeader">
					<img src="/images/plane-icon-2.png" alt="Plane Logo" />
					<h2 className="siteTitle">GET ME THERE</h2>
				</div>
				<ul className="navBarText">
					<li>
						<Link to="/" onClick={refresh}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/weather">Weather Data</Link>
					</li>
					<li>
						<Link to="/specific">Specific Search</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/weather">
					<WeatherPage />
				</Route>
				<Route path="/specific">
					<SpecificSearchPage />
				</Route>
				<Route path="/results">
					<Results searchState={searchState} />
				</Route>
				<Route path="/">
					<HomePage ACTIONS={ACTIONS} dispatch={dispatch} searchState={searchState} />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
