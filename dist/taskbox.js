import './style.css';

import React from 'react';

const Taskbox = ({ value, onChangeradion, style, checkradio, checkfav, onChangefav }) => (React.createElement("div", { className: "maindiv", style: style },

    React.createElement("div", { className: "checkbox-container" },

        React.createElement("label", { className: "checkbox-label" },

            React.createElement("input", { type: "checkbox", onChange: onChangeradion, checked: checkradio }),

            React.createElement("span", { className: "checkbox-custom rectangular" }),

            React.createElement("label", null, value))),

    React.createElement("div", null,

        React.createElement("input", { className: "star", type: "checkbox", onChange: onChangefav, checked: checkfav }))));

export default Taskbox;

