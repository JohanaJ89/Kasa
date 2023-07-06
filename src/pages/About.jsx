import React from 'react';
import TopBannerA from '../components/TopBannerA';
import Data from '../About.json';
import CollapseAbout from '../components/CollapseAbout';


const About = () => {
    return (
    <>
        <div>
         
        </div>
        <div>
                <TopBannerA/>
            </div>
        <div className='Collapses'>
            {Data.map((About)=>
                <CollapseAbout key={About} 
                title={About.title}
                children={About.description}/>
            )}
        </div>
        </>
    );
};

export default About;