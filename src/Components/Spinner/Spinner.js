import React from 'react';
import Spinner from 'react-loader-spinner'
import css from '../../style.module.css';

export default function Loader() {
    return(
        <>
        <Spinner
        className={css.Spinner}
        type="ThreeDots"
        color="#111"
        height={50}
        width={50}/>
        </>
    )
}