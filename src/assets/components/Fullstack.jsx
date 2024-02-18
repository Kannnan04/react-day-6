import React from 'react';
import Card from './Card';

const Fullstack = ({data}) => {

        const Fullstack = data.filter((item,index) => item.head === 'Full Stack Development');

        
          


    return (
        <div className='card'>
            <h1>Fullstack</h1>
            <div className='card-wrapper'>
            
            {Fullstack.map((item,index) =>{
                return(
                    <>
                        <div>
                        <Card  item= {item} index ={index} />
                        </div>
                    </>
                )
            })}
        </div>
        </div>
    );
};

export default Fullstack;