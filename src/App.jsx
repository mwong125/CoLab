
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Login from './Login.jsx';
import LinearFeed from './LinearFeed.jsx';
import TopNav from './TopNav.jsx';

class Index extends React.Component {
    render() {
	return(
	    <React.Fragment>
	      <h2>Home</h2>
	      <LinearFeed/>	    
	    </React.Fragment>
	);
    }
}
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends React.Component {
    constructor(props) {
	super(props);
    }
    render() {
	return(

	    <TopNav/>
	    /*
	    <Router>
	      <div>
		<nav>
		  <ul>
		    <li>
		      <Link to="/">Home</Link>
		    </li>
		    <li>
		      <Link to="/about/">About</Link>
		    </li>
		    <li>
		      <Link to="/users/">Users</Link>
		    </li>
		  </ul>
		</nav>
		
		<Route exact path="/" component={Login}/>
		<Route path="/home/" component={Index} />
		<Route path="/about/" component={About} />
		<Route path="/users/" component={Users} />
		
	      </div>
	    </Router>
	    */
	);
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
