import React from 'react';
import './Glasses.css';
import 'react-bootstrap';

const carousel = (props) => {
    return (
        <div class="container">
            <div class="slide-wrapper">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="slide-image">
                            <div class="thumbnail slide-thumb">
                                <img src={props.glassesImage} alt="Product Item"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 visible-lg">
                        <div class="slide-content">
                            <h1 class={props.classFont}>{props.glassesName}</h1>
                            <p class="currency-font-color">{props.glassesPrice}</p>
                            <p>{props.slogan}</p><br />
                            <p><a class="btn btn-info btn-lg" href={props.referencePage} role="button">Learn More</a></p>
                        </div>
                    </div>
                    <div class="col-sm-12 hidden-lg">
                        <div class="slide-content2">
                            <p><span class={props.classFont}>{props.glassesName} </span>
                                <span class="currency-font-color">({props.glassesPrice})</span>
                                <span>{props.slogan}</span><a class="btn btn-info btn-sm" href={props.referencePage} role="button">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default carousel;
