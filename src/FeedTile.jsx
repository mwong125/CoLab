
import React from 'react';
import { Container, Col, Jumbotron, Row } from 'reactstrap';
import styled from 'styled-components';
import { FaComments, FaMagic, FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const StyledFeedTile = styled.div`

`;

const StyledFeedTileQuickView = styled.div`
height: 100%;
width: 50px;
background: rgba(255, 255, 255, .25);
`;


class FeedTileQuickView extends React.Component {
    constructor(props) {
	super(props);
	this.state = { isActive: false };

	this.toggle = this.toggle.bind(this);
    }
    toggle() {
	this.setState({
	    isActive: !this.state.isActive });
    }
    render() {
	return(
	    <>
	      { this.state.isActive ?
		  <StyledFeedTileQuickView onMouseLeave={this.toggle}>
			<Container>
			      <FaArrowCircleRight/>
				  <FaArrowCircleLeft/>
			    </Container>
		      </StyledFeedTileQuickView>
		      : <div style={{height: "100%", width: "50px"}} onMouseEnter={this.toggle}></div>
		  }
		  
	    </>
	);
    }
}

class FeedTileContentDescription extends React.Component {

}

export default class FeedTile extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    contentHeader: props.header,
	    contentURL: props.URL, //image uri????      
	    contentText: props.text,
	    contentDescription: props.description
	};
    }
    render() {
	
	return(
	    <StyledFeedTile>
	      <Row noGutters>
		<Col xs="11">
		  <Jumbotron style={{ background: "rgba(0, 0, 0, 0.0)", padding: "0 0 0 0"}} fluid>
		    <h5 className="display-7">{this.state.contentHeader}</h5>
		    <Container>
		      <Row noGutters>
			<Col xs="11">
			  <img style={{width: '100%', height: 'auto'}} src={ '/static/' + this.state.contentURL}/>
			</Col>
			<Col xs="1" style={{marginLeft: "-50px"}}>
			  <FeedTileQuickView/>
			</Col>
		      </Row>
		    </Container>
		    
		    <hr className="my-2"/>
		    <Container>
		      <Row>
			<p className="lead">{this.state.contentText}</p>
		      </Row>
		      <Row>
			<Col xs="auto">
			  <FaComments/> Discussion
			</Col>
			<Col xs="auto">
			  <FaMagic/> Inspo
			</Col>
		      </Row>
		    </Container>
		  </Jumbotron>
		</Col>
		<Col xs="1">
		  <div style={{border: "1px solid black", height: '100%', width: '200%', marginLeft: '-100%'}}>
		    { this.state.contentDescription.collaborators.map(collaborator => <>{collaborator}<br/>x<br/> </>)}
		  </div>
		</Col>
	      </Row>
	    </StyledFeedTile>
	);
    }
}
