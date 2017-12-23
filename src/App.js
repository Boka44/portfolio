import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './views/home';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { About } from './views/about';
import 'bootstrap/less/bootstrap.less';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Links } from './views/links';
import { Contact } from './views/contact';


class App extends Component {
    render() {
        return (
            <div className="App font">
                <Router>
                    <div>
                        <Navbar fixedTop={true} collapseOnSelect >
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <Link to="/">Home</Link>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <LinkContainer to="/about">
                                        <NavItem eventKey={1} >About</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/links">
                                        <NavItem eventKey={2} >Links</NavItem>
                                    </LinkContainer>
                                </Nav>
                                <Nav pullRight>
                                    <LinkContainer to="/contact">
                                        <NavItem eventKey={1} href="">Contact</NavItem>
                                    </LinkContainer>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/links" component={Links} />
                        <Route path="/contact" component={Contact} />
                    </div>
            
      
                </Router>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
            </div>
        );
    }
}

export default App;
