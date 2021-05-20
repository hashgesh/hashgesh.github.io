import React from 'react';
import 'isomorphic-unfetch';
import Tag from '../components/Tag';

const Index = () => {
    return (
        <div className='cardsList' >
            <div className='aboutContainer'>
                Hi!
                <br /> My name is Arif. I am a fullstack software developer. I have
                developed professional software using C,C++,C#, Java and utilized
                various frontend technologies such as Angular(Js,Ts), ReactJs, Redux,
                Scss.{' '}
                {false && <a href='mailTo:arifkavas@gmail.com'>I am open to remote roles.</a>}
                <br />
                <p>Skills(Experienced and currently utilized)</p>
                <br />
                Backend
                <div className='tagList'>
                    {['C', 'C++', 'C#', 'Java', 'PHP', 'NodeJs', 'GraphQL'].map((t) => (<Tag text={t} key={t}></Tag>))}
                </div>
                <br />
                Frontend
                <div className='tagList'>
                    {[
                        'ReactJs',
                        'Redux',
                        'Angular[X]',
                        'VanillaJs',
                        'NextJs',
                        'Scss',
                    ].map((t) => (
                        <Tag text={t} key={t}></Tag>
                    ))}
                </div>
                <br />
        OS
        <div className='tagList'>
                    {['Linux', 'Solaris'].map((t) => (
                        <Tag text={t} key={t}></Tag>
                    ))}
                </div>
                <br />
        Database
        <div className='tagList'>
                    {' '}
                    {['Mysql', 'PostgreSql', 'Oracle', 'NoSql'].map((t) => (
                        <Tag text={t} key={t}></Tag>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index