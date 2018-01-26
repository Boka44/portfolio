import React, { Component } from 'react';
import './App.css';
import 'bootstrap/less/bootstrap.less';
import { Sidebar } from './components/sidebar';
import { Footer } from './components/footer';
 

class App extends Component {
    render() {
        return (
            <div className="App font">
            
            <Sidebar id="sidebarZIndex" />
            <Footer/>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
            <link href='https://fonts.googleapis.com/css?family=Ubuntu:bold' rel='stylesheet' type='text/css'/>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Neuton" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </div>
        );
    }
}

export default App;
