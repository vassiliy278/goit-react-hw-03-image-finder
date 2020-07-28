import React, {Component} from 'react';
import css from '../../../style.module.css';
import Modal from '../../Modal/Modal'
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
    state = {
        enlarge: false
    }
    enlarging = () => {
        this.setState({
            enlarge: true
        })
    }
    removeLarge = () => {
        console.log('remove img')
        this.setState({
            enlarge: false
        })
    }
    render() {
        const { src, alt, fullScreen, id } = this.props
        return(
            <li className="ImageGalleryItem" key={id}>
                <img onClick={this.enlarging} src={src} title={alt} className={css.ImageGalleryItemImage}/>
                {this.state.enlarge && <Modal src={fullScreen} alt={alt} removeImg={this.removeLarge}/>}
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fullScreen: PropTypes.string,
    id: PropTypes.number
}