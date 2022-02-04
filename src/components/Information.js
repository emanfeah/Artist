import React, { Component } from 'react';
function Information(props) {
        return(
            <div className='col-md-4 col-sm-6'>
                 <div className='card'>
                    <div className='card-header'>
                        <img className='img-res' src={props.img}/>
                       
                    </div>
                    <div className='card-body' style={{backgroundColor:props.detail ?'rgb(240, 240, 240)':'black'}} > 
                    <h1>{props.name}</h1>
                    <h6>{props.detail}</h6>
                    </div>
                 </div>
            </div>
        )
    }


export default Information;



