import React from 'react';

const Card = ({item,index}) => {
 
      
    return (
       
            <div key={index}>
                            <div className='outer-box'>
                                <img className='All-image' src={item.image}  />
                                <p className='para-head'>{item.head}</p>
                                <p className='para'>{item.content}</p>
                                <p className='para'> Date: {item.date}</p>
                                <p className='para'> Month: {item.month}</p>
                                </div>
                               

             </div>
       
    
    );
};

export default Card;