import React, { useState } from 'react';
import './Form.css';
const Form = () => {
    const [name, setName] = useState();
    const [fullname , setFullname] = useState();
    const inputV = (output) => {
       setName(output.target.value);
    }
    const fullName = (event) => {
            setFullname(name);
            event.preventDefault();
    }
    return (
        <div className='form'>
            <h1>Hello {fullname}</h1>
            <form onSubmit={fullName}>
            <input className='input' type="text" placeholder='Type your name'onChange={inputV} value={name} /> 
            <br />
            <button className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Form;