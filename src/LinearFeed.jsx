
import React from 'react';
import { Container,
	 Row,
	 Col
       } from 'reactstrap';
import FeedTile from './FeedTile.jsx';
import styled from  'styled-components';

const StyledFeedTile = styled.div`
background-color: rgba(99, 70, 216, 0.25);
border: 2px solid silver;
border-radius: 1rem;
padding: 1rem;
margin-top: .25rem;
margin-bottom: .25rem;
`;

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
		    return(<><Row><Col><StyledFeedTile><FeedTile
                                   header={tile.contentHeader}
                                   URL={tile.contentURL}
                                   text={tile.contentText}
				   description={tile.contentDescription}
                             />
			   </StyledFeedTile></Col></Row></>); })
		  : <StyledFeedTile><p>Loading...</p></StyledFeedTile>
		}
	      </Container>
            </>
        );
    }
}
