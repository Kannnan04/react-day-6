import React from 'react';
import Card from './Card';

const Carrer = ({data}) => {

    const carrerData = data.filter((item,index) => item.head==='Career')

    return (
        <div className='card'>
            <h1>Carrer</h1>
            <div className='card-wrapper'>

            {carrerData.map((item,index) =>{
                return(
                    <Card item={item} index ={index} />
                )
            })}
        </div>
        </div>
    );
};

export default Carrer;