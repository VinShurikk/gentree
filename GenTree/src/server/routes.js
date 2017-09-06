import express from 'express';
import Counter from "../components/Counter";
const router = express.Router();

function renderFullPage(html = "", preloadedState = "") {
    debugger;
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <!--script src="/static/bundle.js"></script-->
      </body>
    </html>
    `
}

function resolveRoute(req) {
    return <Counter value="5"/>
}


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("any request")
    res.send(renderFullPage(resolveRoute(req)))
});

export default router
