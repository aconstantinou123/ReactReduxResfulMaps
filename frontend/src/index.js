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
import { requireAuth } from './utils/AuthService'


const history = createHistory()

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Router history={history}>
            <div>
                <Route exact path='/' component={Login}/>
                <Route path='/home' component={App} onEnter={requireAuth}/>
                <Route path ='/country/:id' component={CountryInfo} onEnter={requireAuth}/>
                <Route path ='/favourites' component={FavouritesList} onEnter={requireAuth}/>
                <Route path ='/my_trips' component={MyTripList} onEnter={requireAuth}/>
                <Route path ='/callback' component={CallBack}/>
            </div>
         </Router>
    </Provider>

, document.getElementById('root'));

