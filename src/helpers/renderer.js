import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/Routes';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript';

// This is the place where in the server the ssr happens.
export default (req, store)=>{
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    // The String got in init page loading. serialize is for xss attack
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                     window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
