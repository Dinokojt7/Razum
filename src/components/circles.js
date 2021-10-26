import React from 'react';
import "../App.css";

export default function Circles() {
    let circleCommonClasses = 'loader ease-linear rounded-full border-2 border-t-2 border-transparent h-6 w-6';

     return (
    <div className='flex justify-center'>
        <div 
            className={`${circleCommonClasses}`}>
        </div>

    </div>
     );
};
