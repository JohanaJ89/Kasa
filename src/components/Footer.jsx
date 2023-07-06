import React from 'react';
import LogoBlanc from '../assets/LOGObl.png'
const footer = () => {
    return (
        <div className='footer'>
                       <img className='logobl' src={LogoBlanc} alt='logo blanc'></img>
                        <h3 className='reserved'>© 2020 Kasa. All rights reserved</h3>
                    </div>
    );
};

export default footer;