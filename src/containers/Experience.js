import React, { useState } from 'react';
import Card from '../components/Card';
import {
  pbpDesc,
  jotDesc,
  bimDesc,
  nokiaDesc,
  grundigDesc,
} from '../../static/jobDesc';

export default (props) => {
  return (
    <div className='cardsList'>
      <Card
        jobTitle='Senior Software Engineer'
        companyName='PaybyPhone'
        duration='12.2018 - now'
        techStack='Angular10, Java, Dropwizard, Microservices, Linux, Ansible, Nginx'
        description={pbpDesc}
        companyUrl='https://paybyphone-parken.de'
      ></Card>

      <Card
        jobTitle='Senior Software Engineer'
        companyName='Jotform'
        duration='1.2018 - 12.2018'
        techStack='React, Redux, PHP, MySQL'
        description={jotDesc}
        companyUrl='https://jotform.com'
      ></Card>

      <Card
        jobTitle='Senior Software Engineer'
        companyName='Bimar IT'
        duration='6.2014 - 1.2018'
        techStack='AngularJs, .Net Core, C#, Oracle DB'
        description={bimDesc}
        companyUrl='http://bimar.com.tr'
      ></Card>

      <Card
        jobTitle='Senior Software Engineer & Architect'
        companyName='Nokia'
        duration='7.2009 - 6.2014'
        techStack='C, C++, Java, PHP, Linux, Solaris,Apache, Tomcat, JBoss, ddd/gdb'
        description={nokiaDesc}
        companyUrl='https://nokia.com'
      ></Card>

      <Card
        jobTitle='Embedded Software Engineer & Architect'
        companyName='Grundig Electronics'
        duration='9.2007 - 7.2009'
        techStack='C, C++, RTOS,'
        description={grundigDesc}
        companyUrl='https://grundig.com.tr'
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
