import React from 'react';
import './Footer.css';
import 'react-bootstrap';

const footer = (props) => {
    return (
        // Footer
        <div class="container index-footer-columnpadding">
            <footer class="footer-style">
                <p class="pull-right"><a href="#">Back to Top</a></p>
                <p>&copy; 2016 Visio, Inc. &middot; <a href="Copyright HTML/privacy.html">Privacy</a> &middot;<a href="Copyright HTML/termsc.html">Terms and Conditions</a></p>
            </footer>
        </div>
        // End of Footer Code
    )
};

export default footer;
