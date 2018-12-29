
import React from 'react';

let dummyFeed = ["yoyoyo whatup everybody",
	     "this react thing is pretty cool",
	     "hey check out this pic: tinyurl.com/420blazeit69#/"
	    ];

class LinearFeedTile extends React.Component {
    constructor(props) {
	super(props);
	this.state = { tileContent: this.props.content };
    }
    render() {
	let content = this.state.tileContent;
	return(
	    <>
	      <p>{content}</p>
	      <br/>
	    </>
	);
    }
}

let tiles = dummyFeed.map(rawContent => <LinearFeedTile content={rawContent}/>);

export default class LinearFeed extends React.Component {
    render() {
	
	return(
	    <div>
	      {tiles.map((tile, i) => <div key={i}>{tile}</div> ) }
	    </div>
	);
    }
}