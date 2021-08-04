import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import pityContext from './context/pityContext';

import Home from './pages/Home';
import Wish from './components/Wish';

import './App.css';

function App() {
	const [pity, setPity] = useState({
		pity5: {
			value: 0,
			guarantee: true,
		},

		pity4: {
			value: 0,
			guarantee: false,
		},
	});

	return (
		<Router>
			<div className='App'>
				<pityContext.Provider value={{ pity, setPity }}>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>

						<Route exact path='/one'>
							<Wish pulls={1} />
						</Route>

						<Route exact path='/ten'>
							<Wish pulls={10} />
						</Route>
					</Switch>
				</pityContext.Provider>
			</div>
		</Router>
	);
}

export default App;
