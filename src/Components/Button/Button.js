import React from 'react';
import css from '../../style.module.css';
import PropTypes from 'prop-types';

export default function Button({byClick}) {
    return (
        <button className={css.Button} onClick={byClick}>Load More</button>
    )
}
Button.propTypes = {
    byClick: PropTypes.func
}