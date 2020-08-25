import React from 'react';
import Tag from './Tag';
export default (function (props) {
    var companyName = props.companyName, jobTitle = props.jobTitle, avatarImage = props.avatarImage, duration = props.duration, techStack = props.techStack, description = props.description, companyUrl = props.companyUrl, location = props.location;
    return (React.createElement("div", { className: 'cardContainer' },
        React.createElement("div", { className: 'cardHeader' },
            React.createElement("b", null,
                jobTitle,
                " -",
                ' ',
                React.createElement("a", { href: companyUrl, target: '_blank' }, companyName),
                React.createElement("span", { className: 'workLocation' }, location),
                React.createElement("div", { className: 'workDuration' },
                    "[",
                    duration,
                    "]"))),
        React.createElement("div", { className: 'cardtext' },
            techStack && (React.createElement("p", null,
                React.createElement("b", null, "Tech Stack"),
                React.createElement("br", null),
                React.createElement("div", { className: 'tagList' }, techStack.map(function (t) { return (React.createElement(Tag, { text: t, key: t })); })))),
            React.createElement("p", null,
                React.createElement("b", null, "Description")),
            React.createElement("ul", null, description.map(function (d) { return (React.createElement("li", { key: d }, d)); })))));
});
