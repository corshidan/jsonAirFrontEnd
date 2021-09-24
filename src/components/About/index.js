import './index.css';

export default function About() {
	return (
		<>
			<div className="about-section">
				<h1>About Us Page</h1>
				<p>We are jsonAIR! </p>
				<p>The team that gets you from A to Z.</p>
			</div>

			<div className="row">
				<div className="airHeads">
					<div className="column">
						<div className="card">
							<p className="teamNicknames">The Visionary</p>
							<img src="/images/team/mo.jpg" alt="Mohit" />
							<div className="contactContainer">
								<h2>Mohit Sharma</h2>
								<p>m.sharma@hotmail.co.uk</p>
								<p>
									<button className="button">Contact</button>
								</p>
							</div>
						</div>
					</div>

					<div className="column">
						<div className="card">
							<div className="teamNicknames">The Committed</div>
							<img src="/images/team/nasra.jpg" alt="Mike" />
							<div className="contactContainer">
								<h2>Nasra Diini</h2>
								<p>nasra_diini@hotmail.com</p>
								<p>
									<button className="button">Contact</button>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="airHeads">
					<div className="column">
						<div className="card">
							<div className="teamNicknames">
								The <div>Engine</div>
							</div>
							<img src="/images/team/daniel.png" alt="Daniel" />
							<div className="contactContainer">
								<h2>Daniel Corseanschi</h2>
								<p>corshi.dan@gmail.com</p>
								<p>
									<button className="button">Contact</button>
								</p>
							</div>
						</div>
					</div>

					<div className="column">
						<div className="card">
							<div className="teamNicknames">The Dedicated</div>
							<img src="/images/team/mitch.jpg" alt="Mitch" />
							<div className="contactContainer">
								<h2>Mitchell Colson </h2>
								<p>mitch2103@hotmail.co.uk</p>
								<p>
									<button className="button">Contact</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
