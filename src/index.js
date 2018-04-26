import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers'

import App from './App';
import CountryInfo from './components/country_info'
import FavouritesList from './containers/favourites_list';
import MyTripList from './containers/my_trip_list';
import Login from './containers/login';
import CallBack from './components/callback';

const history = createHistory()

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Router history={history}>
            <div>
                <Route exact path='/' component={Login}/>
                <Route path='/home' component={App}/>
                <Route path ='/country/:id' component={CountryInfo}/>
                <Route path ='/favourites' component={FavouritesList}/>
                <Route path ='/my_trips' component={MyTripList}/>
                <Route path ='/callback' component={CallBack}/>
            </div>
         </Router>
    </Provider>

, document.getElementById('root'));

