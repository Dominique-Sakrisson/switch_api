import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ApiItem from './ApiItem'
import PropTypes from 'prop-types'

const ApiList = ({apis}) => (
    <>
    <p>Choose your favorite show</p>
    <ul aria-label='api-choices'>
        {apis.map((api) => (
            <li key={api}>
                <Link to={`/${api}`}>
                {api}
                </Link>
            </li>
        ))}
    </ul>
    </>
)

ApiList.propTypes= {
    apis: PropTypes.array.isRequired
}
export default ApiList;
