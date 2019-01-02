
import React from 'react';
import { Container,
	 Row,
	 Col
       } from 'reactstrap';
import FeedTile from './FeedTile.jsx';

export default class LinearFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { linearFeedContent: null };

    }
    componentDidMount() {
        fetch('/api/get/home/feed/').then(resObj => resObj.json()).then(data => {
            this.setState({
                linearFeedContent: data.linearFeedContent });
        });
    }
    render() {
        return(
            <>
	      <Container>
		{ this.state.linearFeedContent ? this.state.linearFeedContent.map(tile => {
		    console.log(tile.contentDescription);
		    return(<><FeedTile
                                   header={tile.contentHeader}
                                   URL={tile.contentURL}
                                   text={tile.contentText}
				   description={tile.contentDescription}
                                   />
			   <hr className="my-1"/></>); })
		  : <div><p>Loading...</p></div>
		}
	    </Container>
            </>
        );
    }
}
