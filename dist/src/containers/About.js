import React from 'react';
import Tag from '../components/Tag';
export default (function (props) {
    return (React.createElement("div", { className: 'aboutContainer' },
        "Hi!",
        React.createElement("br", null),
        " My name is Arif. I am a fullstack software developer. I have developed professional software using C,C++,C#, Java and utilized various frontend technologies such as Angular(Js,Ts), ReactJs, Redux, Scss.",
        ' ',
        React.createElement("a", { href: 'mailTo:arifkavas@gmail.com' }, "I am open to remote roles."),
        React.createElement("br", null),
        React.createElement("p", null, "Skills(Experienced and currently utilized)"),
        React.createElement("br", null),
        "Backend",
        React.createElement("div", { className: 'tagList' }, ['C', 'C++', 'C#', 'Java', 'PHP', 'NodeJs'].map(function (t) { return (React.createElement(Tag, { text: t, key: t })); })),
        React.createElement("br", null),
        "Frontend",
        React.createElement("div", { className: 'tagList' }, ['ReactJs', 'Redux', 'Angular[X]', 'VanillaJs', 'NextJs', 'Scss'].map(function (t) { return (React.createElement(Tag, { text: t, key: t })); })),
        React.createElement("br", null),
        "OS",
        React.createElement("div", { className: 'tagList' }, ['Linux', 'Solaris'].map(function (t) { return (React.createElement(Tag, { text: t, key: t })); })),
        React.createElement("br", null),
        "Database",
        React.createElement("div", { className: 'tagList' },
            ' ',
            ['Mysql', 'PostgreSql', 'Oracle', 'NoSql'].map(function (t) { return (React.createElement(Tag, { text: t, key: t })); }))));
});
