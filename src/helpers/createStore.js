import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers/index';
import axios from 'axios';

export default (req)=>{
  // Axios instance for server side. In this cookie should be passed, and baseURL
  // is where our api is.
  const axiosInstance = axios.create({
    baseURL: 'api-address',
    headers: { cookie: req.get('cookie') || '' }
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
};