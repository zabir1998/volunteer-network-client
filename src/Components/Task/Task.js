import React from 'react';
import images from '../../images/childSupport.png'

const Task = ({task}) => {
    return (
        <div className="col-md-3">
            <img style={{height:'300px',borderRadius:'15px',paddingLeft:'40px',paddingBottom:'10px',paddingTop:'10px'}} src={require(`../../images/${task.pic}`)} alt=""/>
            <h3 style={{backgroundColor:'cyan',borderRadius:'15px',paddingLeft:'60px',paddingBottom:'10px',paddingTop:'10px'}}>{task.name}</h3>

        </div>
    );
};

export default Task;