import React, { useState } from 'react';
import Card from '../components/Card';
import {
  pbpDesc,
  jotDesc,
  bimDesc,
  nokiaDesc,
  grundigDesc,
  snowDesc,
} from '../../static/jobDesc';

export default (props) => {
  return (
    <div className='cardsList'>
        <Card
        jobTitle='Software Engineer'
        companyName='Snow Software'
        duration='03.2021 - '
        techStack={[
          'React',
          'Redux',
          'Typescript',
          'Vanilla Js',
          'Scss',
          'Go',
          'NATS',
          'Microservices'
        ]}
        description={snowDesc}
        companyUrl='https://snowsoftware.com'
        location='Stockholm/Sweden'
      ></Card>
      <Card
        jobTitle='Software Engineer'
        companyName='PaybyPhone'
        duration='12.2018 - 2.2021'
        techStack={[
          'Angular10',
          'Typescript',
          'Vanilla Js',
          'Scss',
          'Java',
          'Dropwizard',
          'Microservices',
          'Linux',
          'Ansible',
          'Nginx',
        ]}
        description={pbpDesc}
        companyUrl='https://paybyphone-parken.de'
        location='Erlangen/Germany'
      ></Card>

      <Card
        jobTitle='Software Engineer'
        companyName='Jotform'
        duration='01.2018 - 12.2018'
        techStack={['React Js', 'Redux', 'Scss', 'PHP', 'MySQL']}
        description={jotDesc}
        companyUrl='https://jotform.com'
        location='Izmir/Turkey'
      ></Card>

      <Card
        jobTitle='Software Engineer'
        companyName='Bimar IT'
        duration='06.2014 - 01.2018'
        techStack={['AngularJs', 'Css', '.Net Core', 'C#', 'Oracle DB']}
        description={bimDesc}
        companyUrl='http://bimar.com.tr'
        location='Izmir/Turkey'
      ></Card>

      <Card
        jobTitle='Software Engineer & Architect'
        companyName='Nokia'
        duration='07.2009 - 06.2014'
        techStack={[
          'C',
          ' C++',
          'Java',
          'PHP',
          'Linux',
          'Solaris',
          'Apache',
          'Tomcat',
          'JBoss',
          'ddd/gdb',
        ]}
        description={nokiaDesc}
        companyUrl='https://nokia.com'
        location='Istanbul/Turkey'
      ></Card>

      <Card
        jobTitle='Embedded Software Engineer & Architect'
        companyName='Grundig Electronics'
        duration='09.2007 - 07.2009'
        techStack={['C', 'C++', 'RTOS']}
        description={grundigDesc}
        companyUrl='https://grundig.com.tr'
        location='Izmir/Turkey'
      ></Card>
    </div>

    //   <object
    //     data='../static/ArifKursadKAVAS_CV.pdf'
    //     type='application/pdf'
    //     width='100%'
    //     height='100%'
    //   ></object>
  );
};
