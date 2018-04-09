import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers'

import App from './App';
import CountryInfo from './components/country_info'
import FavouritesList from './containers/favourites_list';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App}/>
                <Route path ='/country/:id' component={CountryInfo}/>
                <Route path ='/favourites' component={FavouritesList}/>
            </div>
         </BrowserRouter>
    </Provider>

, document.getElementById('root'));

