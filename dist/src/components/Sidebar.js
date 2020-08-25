import React from 'react';
import { Link } from 'react-router-dom';
export default (function (props) {
    var sidebarItems = [
        //{
        //  label: 'About me',
        //  url: '/about',
        //},
        {
            label: 'Experience',
            url: '/experience',
        },
        {
            label: 'Education',
            url: '/education',
        },
    ];
    return (React.createElement("div", { className: 'mSidebar' },
        React.createElement("div", { className: 'mPhotoContainer' },
            React.createElement(Link, { to: '/' },
                React.createElement("img", { className: 'mProfilePhoto', src: '../static/arif.jpg' }))),
        React.createElement("div", { className: 'mNameContainer' },
            React.createElement("a", { href: 'mailTo:arifkavas@gmail.com' }, "Arif K\u00FCrsad Kavas")),
        React.createElement("div", { className: 'mSidebarItemContainer' },
            sidebarItems.map(function (item) {
                return (React.createElement(Link, { to: item.url, key: item.label },
                    React.createElement("div", { className: 'mSidebarItem' }, item.label)));
            }),
            React.createElement("div", { className: 'mSidebarItem' })),
        React.createElement("div", { className: 'mSidebarBottom' },
            React.createElement("a", { href: 'mailTo:arifkavas@gmail.com' }, "Contact"))));
});
