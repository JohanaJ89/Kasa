import { useState } from 'react';
import ChevronUp from '../assets/up-chevron.svg';
import ChevronDown from'../assets/down-chevron.svg';


function CollapseAbout ({children,title}) {

    const [ showText, setShowText] = useState(false);
    
    
    return (
        <div className='CollapseText'>
            <div className='titleCollapse' onClick={() => showText ===false ? setShowText(true) : setShowText(false)} >
                <h3>{title}</h3>
                <img src={ showText === false ? ChevronUp : ChevronDown}alt='chevrons'></img>                        
            </div>
            
            <div className={showText === false ? 'hide' : 'show'} >
                    {children}
                </div>
            
        </div>
    );
}

export default CollapseAbout;