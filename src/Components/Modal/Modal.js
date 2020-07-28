import React, {Component} from 'react';
import css from '../../style.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.escapeClick)
    }
    componentWillUnmount() {
        console.log('unmntd')
        window.removeEventListener('keydown', this.escapeClick)
    }
    escapeClick = (e) => {
        if(e.key === 'Escape') {
            this.props.removeImg()
        }
    }
    render() {
        const {src, alt} = this.props
        return (
            <div className={css.Overlay}>
                <div className={css.Modal}>
                    <img src={src} alt={alt} />
                </div>
            </div>
        ) 
    }
}

Modal.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}


