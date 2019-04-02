import React from 'react';
import './Glasses.css';

const glasses = (props) => {
    return (
        <div class="col-xs-6 col-md-4">
            <div class="thumbnail shop-listing">
                <img src={props.glassesImage} alt="Shopping Item" />
                <h4 class={props.classFont}>{props.glassesName} - <span style={props.colorStyle}>{props.glassesColor}</span></h4>
                <p class="glasstype list-text">{props.glassesType}</p>
                <p class="price list-text">{props.glassesPrice}</p>
            </div>
        </div>
    )
};

export default glasses;