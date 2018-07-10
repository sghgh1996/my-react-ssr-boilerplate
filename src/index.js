import 'babel-polyfill';
import express from 'express';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// Starting express server
const app = express();
app.use(express.static('public'));

// All incoming requests are going to handle in this callback function.
app.get('*', function (req, res) {
  // make redux store on server
  const store = createStore();

  // Every component which has data initializing, based on api or any thing
  // need to have a loadData function. Here before renderToString, actually in
  // ssr, is trying to get all information.
  const promises = matchRoutes(Routes, req.path).map( ({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });

  // Wait for all loadData to be called
  Promise.all(promises).then(()=>{
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});