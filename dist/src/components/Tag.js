import React from 'react';
export default (function (props) {
    var text = props.text, count = props.count;
    return (React.createElement("div", { className: 'tagContainer' },
        React.createElement("span", { className: 'tagText' }, text),
        count && React.createElement("span", { className: 'tagCount' }, count)));
});
