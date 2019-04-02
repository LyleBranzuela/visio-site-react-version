import React from 'react';
import './NavigationBar.css';
import 'react-bootstrap';

const navBar = (props) => {
    return (
        // Navigation Bar
        <div class="navbar-wrapper">
            <div class="container">
                <nav class="navbar navbar-default navbar-fixed-top">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="index.html"><img id="logo" src={require('./Logo.png')} alt="Visio Logo Homepage" /></a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="aboutus.html">About Us</a></li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Products<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="Products/zeniac.html">Zeniac</a></li>
                                        <li><a href="Products/noctem.html">Noctem</a></li>
                                        <li><a href="Products/z2cloud.html">Z2 Cloud</a></li>
                                    </ul>
                                </li>
                                <li><a href="tech.html">Technology</a></li>
                                <li><a href="support.html">Support</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div >
        // End of Navigation Bar Code
    )
};

export default navBar;