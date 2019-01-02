const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static('static'));
app.use('/static', express.static(path.join(__dirname, 'pics')));
app.use(bodyParser.json());

/* dummy linear feed content */

turtles = [
    {
	contentHeader: "hey its my pet turtles",
	contentURL: "Little-turtle.jpg",
	contentText: "he its my pet turtle",
	contentDescription: {
            collaborators: ["User1", "User2", "User3" ]
        }
    },
    {
	contentHeader: "its a magnificent day in maui",
	contentURL: "MauiMagic_Turtles.jpg",
	contentText: "its a magnificent day in maui",
	contentDescription: {
	    collaborators: ["User1", "User2", "User3" ]
	}
    },
    {
	contentHeader: "the shining sea",
	contentURL: "SeaTurtle.jpg",
	contentText: "wow i love this beach",
	contentDescription: {
            collaborators: ["User1", "User2", "User3" ]
        }	
    },
    {
	contentHeader: "check this jelly boy out",
	contentURL: "turtle1.jpg",
	contentText: "crap dont sting me",
	contentDescription: {
            collaborators: ["User1", "User2", "User3" ]
        }	
    },
    {
	contentHeader: "look at my fly",
	contentURL: "turtle2.jpeg",
	contentText: "this water looks teal",
	contentDescription: {
            collaborators: ["User1", "User2", "User3" ]
        }
    },
    {
	contentHeader: "new haircut",
	contentURL: "turtle3.jpg",
	contentText: "what do you guys think",
	contentDescription: {
            collaborators: ["User1", "User2", "User3" ]
        }	
    },
    {
	contentHeader: "man i sure do hate fake facts",
	contentURL: "turtle-facts-1.jpg",
	contentText: "lol fake news boi",
	contentDescription: {
            collaborators: ["User1", "User2", "User3" ]
        }
    },
    {
	contentHeader: "oi throw some prawns on the barbie",
	contentURL: "Turtles-In-Australia.jpg",
	contentText: "grab me a fosters mate",
	contentDescription: {
            collaborators: ["User1", "User2", "User3" ]
        }
    },
    {
	contentHeader: "imma snap at you hoe",
	contentURL: "snappingturtle1.jpg",
	contentText: "wanna grab a snapple",
	contentDescription: {
            collaborators: ["User1", "User2", "User3" ]
        }
    }
];

app.get('/api/get/home/feed/', function(reqObj, resObj) {
    console.log('received get request for home feed');
    let resObjData = { linearFeedContent: turtles };
    resObj.json(resObjData);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'static/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(3000, function() {
    console.log('App started');
});
