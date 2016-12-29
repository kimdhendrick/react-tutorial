import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	constructor() {
		super();
		// initial state
		this.state = {
			fishes: {},
			order: {},
		}
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
	}

	addFish(fish) {
		console.log("adding a fish!");
		// update our state
		// Not: 
		// this.state.fishes.fish1 = fish;
		const fishes = {...this.state.fishes};
		// add in our new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;

		// set state
		// this.setState({fishes: fishes});
		this.setState({fishes});
	}

	loadSamples() {
		this.setState({fishes: sampleFishes});
	}
	
	addToOrder(key) {
		const order = {...this.state.order};
		order[key] = order[key] + 1 || 1;
		this.setState({order});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
					<ul className="list-of-fishes">
					{
						Object.keys(this.state.fishes)
						.map(key => 
							<Fish 
								key={key} 
								index={key} 
								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						)
					}
					</ul>
				</div>
				<Order />
				<Inventory 
					addFish={this.addFish}
					loadSamples={this.loadSamples}
				/>
			</div>
		)
	}
}

export default App;