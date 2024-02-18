import React from 'react';
import Card from './Card';

const Cybersecurity = ({data}) => {

    const Cyber = data.filter((item,index) => item.head ==='Cyber Security');
    

    return (
        <div className='card'>
            <h1>Cybersecurity</h1>
            <div className='card-wrapper'>

            {Cyber.map((item,index) =>{
                return(
                    <>
                        <Card  item ={item} index={index}  />
                    </>
                )

            })}
            </div>
        </div>

    );
};

export default Cybersecurity;

