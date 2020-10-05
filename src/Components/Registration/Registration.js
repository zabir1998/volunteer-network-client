import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

import './Registration.css';

const Registration = ({task}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
     
    <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
   
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />   
      {errors.name && <span className="error">This field is required</span>}   
      
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your email" />
      {errors.email && <span className="error">This field is required</span>}
     
      <input name="phone" ref={register({ required: true })} placeholder="Your Phone No."/>
      {errors.phone && <span className="error">This field is required</span>}
      
      <input type="date" name="date" ref={register({ required: true })} placeholder="Date" />
      {errors.date && <span className="error">This field is required</span>}
      
      <input name="task"   ref={register({ required: true })} placeholder="Please enter your volunteer work again" />
      {errors.task && <span className="error">This field is required</span>}
      
      <Link to="/appliedTasks">
      <input type="submit"  />
      </Link>
      
    </form>
    );
};

export default Registration;