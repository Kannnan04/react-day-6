import React from 'react';
import Card from './Card';

const All = ({data}) => {

    return (
        <div className='card'>

            <h1>All</h1> 
            <div className='card-wrapper'>
            {data.map((item,index) =>{
                return(
                    
                        
                        <Card item={item} index={index} />                
                
                )
            })}
            </div>
        </div>
    );
};

export default All;