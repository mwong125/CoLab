
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import TopNav from './TopNav.jsx';
import BotNav from './BotNav.jsx';
import Home from './Home.jsx';
import TopPanel from './TopPanel.jsx';
import Main from './Main.jsx';
import DashBoard from './DashBoard.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const StyledRouteApplets = styled.div`
background: #f8f9fa;
border-top: 2px solid silver;
border-bottom: 2px solid silver;
`;

class App extends React.Component {
    render() {
	return (
	    <Router>
	      <div>
		<TopNav links={[
			    {
				url : '/home',
				name : 'home'
			    },
			    {
				url : '/dashboard',
				name : 'dashboard'
			    },
			    {
				url : '/topics',
				name : 'topics' 
			    }
			]}/>
		<StyledRouteApplets>
		  <Route exact path="/" component={Main}/>
		  <Route path="/home" component={Home} />
		  <Route path="/dashboard" component={DashBoard} />
		  <Route path="/topics" component={Topics} />
		</StyledRouteApplets>
		<BotNav/>
	      </div>
	    </Router>
	);
    }
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App/>, root);
