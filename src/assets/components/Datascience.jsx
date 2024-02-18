import React from 'react';
import Card from './Card';

const Datascience = ({data}) => {

    const Datascience = data.filter((item,index) => item.head ==='Data Science')

    return (
        <div className='card'>
            <h1>Datascience</h1>
            <div className='card-wrapper'>

            {Datascience.map((item,index) =>{
                return(
                    <>
                        <Card  item={item} index={index} />
                    </>
                )
            })}
            </div>
        </div>
    );
};

export default Datascience;