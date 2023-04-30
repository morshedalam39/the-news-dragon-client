import React from 'react';
import zone1 from '../../../assets/qZone1.png'
import zone2 from '../../../assets/qZone2.png'
import zone3 from '../../../assets/qZone3.png'

const QsZone = () => {
    return (
        <div className='bg-secondary my-4 py-4 text-center'>
           <h4>Q-Zone</h4>
           <div>
            <img src={zone1} alt="" />
            <img src={zone2} alt="" />
            <img src={zone3} alt="" />
           </div>
        </div>
    );
};

export default QsZone;