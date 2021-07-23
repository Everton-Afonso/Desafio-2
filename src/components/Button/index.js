import React from 'react';

import "./styles.css";

export default function index(props) {
    return (
        <button className="button">
            {props.children}
        </button>
    )
}
