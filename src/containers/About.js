import React, { useState } from 'react';
import Card from '../components/Card';

export default (props) => {
  return (
    <div className='aboutContainer'>
      Hi!
      <br /> My name is Arif. I am a fullstack software developer. I have
      developed professional software using C,C++,C#, Java and utilized various
      frontend technologies such as Angular(Js,Ts), ReactJs, Redux, Scss.{' '}
      <a href='mailTo:arifkavas@gmail.com'>I am open to remote roles.</a>
      <br />
      <p>Skills(Experienced and currently utilized</p>
      <br />
      Backend: C, C++, C#, Java, PHP, NodeJs
      <br />
      Frontend: ReactJs, Angular[X], VanillaJs, Scss, Redux, NextJs
      <br />
      OS: Linux, Solaris
      <br />
      Database: Mysql, PostgreSql, Oracle
    </div>
  );
};
