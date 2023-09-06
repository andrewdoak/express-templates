// Load express
const express = require("express");

// Create our express app
const app = express();

// Set PORT to env file OR 3000)
const PORT = process.env.PORT || 3000;

// VIEWS: Creates file extension that converts what we feed back end into front html.
const fs = require("fs"); // this engine requires the fs module

app.engine("portal", (filePath, options, callback) => {
  // define the view engine called PORTAL
  // define the view engine called portal
  // FS = file system (Node 4 Module)
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // MINIMAL view engine. We'll get more complex later
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>")
      .replace("#url#", options.url);
    // Instead of error, null and rendered (ends the engine)
    return callback(null, rendered);
  });
});
app.set("views", "./views"); // specify the views directory
app.set("view engine", "portal"); // register the PORTAL view engine

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
// Mount routes
// Instead of .send, .render
// Render takes TWO ARGUMENTS (knows to look at views from app.set)
// 1)TEMPLATE
// Render method is called on the response object.

// 1. ROOT  (T1)
app.get("/", (req, res) => {
  res.render("template", {
    title: `Hey`,
    message: `Hello there!`,
    content: `I'm the Boss Ricky Ross`,
  });
});

// 2. ABOUT-ME  (T1)
app.get("/about-me", (req, res) => {
  res.render("template", {
    title: "About Me",
    message: "It's me, Rick Ross!",
    content: "The most underrated rapper in the game",
  });
});

// 3. ANOTHER-ONE (T1)
app.get("/another-one", (req, res) => {
  res.render("template", {
    title: "Here's Another One!",
    message: "Who!",
    content:
      "We Taking Over. Major Key Alert, Y'all know who it is! All I do is win!",
  });
});

// 4. CHARITIES  (T2)
app.get("/charities", (req, res) => {
  res.render("template2", {
    title: "Charities",
    message: "Rick's Charities",
    content: `In October 2020, Ross donated his time to to Habitat for Humanity and helped build a veteran's home in Fayette County, GA. About the experience, he said: Anything that I can do, I want to do it.`,
    url: "https://www.essence.com/wp-content/uploads/2016/03/images/2016/03/08/rick-ross-habitat-for-humanity.jpg",
  });
});

// 5. homes  (T2)
app.get("/homes", (req, res) => {
  res.render("template2", {
    title: "Homes",
    message: "Check out my homes!",
    content: `I knew I had to had this house because my neighbor was gonna be Evander Holyfield. I'd drive by every day and admire the geese. When that for sale sign popped up, I made a U-turn and snapped it up.`,
    url: "https://imageio.forbes.com/specials-images/imageserve/60c6c3e24484cc8878764df6/Rick-Ross-Birthday-Dinner-And-Party/960x0.jpg?format=jpg&width=1440",
  });
});

// 6. Cars  (T2)
app.get("/cars", (req, res) => {
  res.render("template2", {
    title: "Cars",
    message: "Check out my cars!",
    content:
      "We Taking Over, Major Key Alert, Y'all know who it is, All I do is win",
    url: "https://www.bosshunting.com.au/cdn-cgi/imagedelivery/izM8XxyLg9MD6py1ribxJw/www.bosshunting.com.au/2021/07/Rick-Ross-Car-Collection-No-Drivers-License.jpg/w=1200,h=675",
  });
});

// 7. Events  (T2)
app.get("/events", (req, res) => {
  res.render("template2", {
    title: "Events",
    message: "Events",
    content: `It's my birthday fam! Come celebrate with me at the manse!`,
    url: `https://imageio.forbes.com/specials-images/imageserve/60c6c56ae84979022db40134/Rick-Ross-Birthday-Dinner-And-Party/960x0.jpg?format=jpg&width=1440`,
  });
});

// 8. Books  (T2)
app.get("/books", (req, res) => {
  res.render("template2", {
    title: "Books",
    message: "Books",
    content: `I wrote a book, man! Check it out!`,
    url: "https://img.thriftbooks.com/api/images/i/m/D36EB7F66EC25F9823B6FB611DAE0EF10B44B787.jpg",
  });
});

// 9. Lyrics  (T1)
app.get("/lyrics", (req, res) => {
  res.render("template", {
    title: "Lyrics",
    message: "Lyrics",
    content: `"As you run through my jungles, all you hear is rumbles
      Kanye West samples, here's one for example"`,
  });
});

// 10. Top Album  (T2)
app.get("/top-album", (req, res) => {
  res.render("template2", {
    title: "Top Album",
    message: "My Top Album",
    content: `Rich Forever. 'Nuff said. Mic drop.`,
    url: `https://upload.wikimedia.org/wikipedia/en/d/db/Rick_Ross_Rich_Forever.JPG`,
  });
});

app.listen(PORT, function () {
  console.log("Listening on port 3000");
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
