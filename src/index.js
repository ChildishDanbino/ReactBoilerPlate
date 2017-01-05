import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Match} from 'react-router';
import  { AppWrapper }  from './components';
import { Home } from './containers';
import initializeStore from './redux/init';

const store = initializeStore();

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<AppWrapper>
				<Match pattern="/" component={Home}/>
			</AppWrapper>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(
	<App />, document.getElementById('mount'),
);