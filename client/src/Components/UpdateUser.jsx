import React, { useState } from 'react'
import '../styles/UpdateUser.css'

const UpdateUser = () => {


    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        console.log('Submitted');
    }

  return (
    <div className="main-container">
    <div className='container'>
      <h1 className='form-header'>Update User Form</h1>
      <form className='form' onSubmit={handleSubmit}>

        <div className="column">
        <div className='input-container'>
            <label htmlFor="firstName" className='input-label'>Enter First Name</label>
            <input 
            type="text" 
            name='firstName' 
            onChange={handleChange}
            className='input' />
        </div>

        <div className='input-container'>
            <label htmlFor="lastName" className='input-label'>Enter Last Name</label>
            <input 
            type="text" 
            name='lastName'
            onChange={handleChange} 
            className='input' />
        </div>
        </div>

        <div className="column">
        <div className="input-container">
            <label htmlFor="contact" className="input-label">Enter Contact Number</label>
            <input 
            type="number" 
            name='contact' 
            className='input' />
        </div>

        <div className="input-container">
            <label htmlFor="email" className="input-label">Enter Email Address</label>
            <input 
            type="email" 
            name='email' 
            className='input' />
        </div>
        </div>

        <div className="input-container">
            <label htmlFor="degree" className="input-label">Select Degree</label>
            <select className='input' name='degree' >
                <option hidden></option>
                <option>M.Sc</option>
                <option>B.Sc</option>
                <option>B.com</option>
                <option>M.com</option>
                <option>BBA</option>
                <option>MBA</option>
                <option>BA</option>
                <option>MA</option>
                <option>BCA</option>
                <option>MCA</option>
            </select>
        </div>

        <div className="input-container">
            <label htmlFor="specification" className="input-label">Select Specification</label>
            <select className='input' name='specification' >
                <option hidden></option>
                <option>Computer Science</option>
                <option>Information Technology</option>
                <option>Computer Application</option>
                <option>Artificail Intelligence</option>
                <option>Machine Learning</option>
                <option>Provisional Accountancy</option>
            </select>
        </div>

        <div className="gender-container">
            <h3>Gender</h3>
            <div className="gender-options">
                <div className="gender">
                    <input type='radio' id='check' name='gender' value='Male' 
                    // checked={formData.gender === 'Male'}
                     onChange={handleChange}/>
                    <label htmlFor="check">Male</label>
                </div>
                <div className="gender">
                    <input type='radio' id='check' name='gender' value='Female' 
                    // checked={formData.gender === 'Female'} 
                    onChange={handleChange}/>
                    <label htmlFor="check">Female</label>
                </div>
                <div className="gender">
                    <input type='radio' id='check' name='gender' value='Others' 
                    // checked={formData.gender === 'Others'} 
                    onChange={handleChange}/>
                    <label htmlFor="check">Others</label>
                </div>
            </div>
        </div>

        <div className="input-container">
            <label htmlFor="street" className="input-label">Door No / Street</label>
            <input 
            type="text" 
            name='street' 
            onChange={handleChange}
            className='input' />
        </div>

        <div className="column">
        <div className="input-container">
            <label htmlFor="email" className="input-label">Enter City</label>
            <input 
            type="text" 
            name='city' 
            onChange={handleChange}
            className='input' />
        </div>

        <div className="input-container">
            <label htmlFor="email" className="input-label">Enter Country</label>
            <input 
            type="text" 
            name='country' 
            onChange={handleChange}
            className='input' />
        </div>
        </div>

        <div className="column">
        <button className='form-button' type='reset'>Reset</button>
        <button className='form-button' type='submit'>Submit</button>
        </div>

      </form>
    </div>
    </div>
  )
}

export default UpdateUser
