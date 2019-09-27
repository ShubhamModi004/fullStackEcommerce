import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Menuitem.styles.scss'

const Menuitem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <h1 className="subtitle">SHOP NOW</h1>
            </div>
        </div>
    )
}

Menuitem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
}

export default withRouter(Menuitem)
