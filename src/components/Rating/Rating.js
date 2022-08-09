import PropTypes from 'prop-types';
import React from 'react';

const Rating = ({rate, view, color}) => {
    return (
        <div className='rating'>
            <span>
                <i style={{color}} className={rate >=1?'fa-solid fa-star':rate>=0.5? 'fa-solid fa-star-half-stroke':'fa-regular fa-star' }></i>
            </span>
            <span>
                <i style={{color}} className={rate >=2?'fa-solid fa-star':rate>=1.5? 'fa-solid fa-star-half-stroke':'fa-regular fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={rate >=3?'fa-solid fa-star':rate>=2.5? 'fa-solid fa-star-half-stroke':'fa-regular fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={rate >=4?'fa-solid fa-star':rate>=3.5? 'fa-solid fa-star-half-stroke':'fa-regular fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={rate >=5?'fa-solid fa-star':rate>=4.5? 'fa-solid fa-star-half-stroke':'fa-regular fa-star'}></i>
            </span>
            <span>{view && view}</span>
        </div>
    );
};

Rating.propTypes={
    rate:PropTypes.number.isRequired,
    view:PropTypes.string.isRequired,
    color:PropTypes.string

}

export default Rating;