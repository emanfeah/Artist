import React, { Component } from 'react';
import Information from './Information';
import info  from './info'
function Artist (){
 
    const members=info.map(function(member){
        return <Information
         key={member.id}
         img={member.img}
         name={member.name}
         detail={member.detail}
        
        
        
        />

    })
        return(
            <div className='row'>
                {members}
            </div>
        )
    }

export default Artist;