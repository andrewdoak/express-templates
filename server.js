// Load express
const express = require('express');

// Create our express app
const app = express();

// Set PORT to env file OR 3000)
const PORT = process.env.PORT || 3000;

// VIEWS: Creates file extension that converts what we feed back end into front html.
const fs = require('fs') // this engine requires the fs module

app.engine('portal', (filePath, options, callback) => { // define the view engine called PORTAL
// define the view engine called portal
    fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // MINIMAL view engine. We'll get more complex later
    const rendered = content
      .toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#', '<div>' + options.content + '</div>');
      // Instead of error, null and rendered (ends the engine)
      return callback(null, rendered)
    });
});
app.set('views', './views') // specify the views directory
app.set('view engine', 'portal') // register the PORTAL view engine


// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
// Mount routes
    // Instead of .send, .render
    // Render takes TWO ARGUMENTS (knows to look at views from app.set)
        // 1)TEMPLATE
    app.get('/', (req, res) => {
        res.render('template', { 
            title: `Hey`, 
            message: `Hello there!`, 
            content: `I'm the Boss Ricky Ross` 
        })
    });
  
    app.listen(PORT, function () {
        console.log('Listening on port 3000');
      });
/* // Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(PORT, function () {
  console.log('Listening on port 3000');
}); */

/* 
SLIDES
https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-11/day-3/slides/

CODE-ALONG
https://pscohorts.slack.com/archives/C056A692JAX/p1693497189036329


NOTES/CODE COMMENTS
====================
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('portal', (filePath, options, callback) => { // define the view engine called portal
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'portal') // register the portal view engine
*/