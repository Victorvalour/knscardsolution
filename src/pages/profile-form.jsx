import React, { useState } from 'react'
import Logo from "../images/KNS-LOGO-PNG.png"
import Select from 'react-dropdown-select'

const ProfileForm = () => {
    const accountType = [
      {label: 'Individual', value: 1},
      {label: 'Company', value: 2}
    ]

    const [fullName, setFullName] = useState('')

    const [phoneNumber, setPhoneNumber] = useState('');
    const [isNumberValid, setIsNumberValid] = useState('') 

    const handleNumberChange = (e) => {
      const input = e.target.value;
      setPhoneNumber(input)
 
     
    }

    const handleNameChange = (e) => {
      const input = e.target.value
      setFullName(input)
     
    }

  return (
    <div className='py-2 px-2'>
      <img src={Logo} alt="" className='w-24 mx-auto'/>
     <p className='text-2xl my-3 ml-6 font-semibold'> Welcome &#127881;</p>

     <form 
            className='w-[90%] rounded-lg bg-gray-200 mx-auto'>
                <p className='text-3xl font-semibold text-center'>Basic Info</p>
                <p className='text-lg text-center mb-6'>Fill in your personal details below</p>

            <div className='flex flex-col  w-[90%] mx-auto'>            
               
                                <label htmlFor="">Account type</label>

                              <Select 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='Account Type'
                              options={accountType}>

                              </Select>


                  <label htmlFor="">Full name (as shown in your document)</label>
                <input type="name"
                 placeholder='Enter your Full Name'
                 onChange={handleNameChange}
                className='pl-2 h-12 rounded-md text-lg mb-2' />

                  <label htmlFor="">Phone number (in international format)</label>
                    <input type="text"
                     placeholder='Phone Number'
                     value={phoneNumber}
                     onChange={handleNumberChange}
                    className='pl-2 h-12 rounded-md text-lg mb-2' /> 


                  <label htmlFor="">Email address</label>
                <input type="text" 
                placeholder='Email Address'
          
                className='pl-2 h-12 rounded-md text-lg mb-2' />


                  <label htmlFor="">First name</label>
                <input type="text"
                 placeholder='First Name'
  
                className='pl-2 h-12 rounded-md text-lg my-2' />

                  <label htmlFor="">Last Name</label>
                <input type="text" 
                placeholder='Last Name'
                
                className='pl-2 h-12 rounded-md text-lg my-2' />

                <p className='text-2xl py-4'>Address Informaion</p>


                <label htmlFor="">Street Address</label>
                <input type="text" 
                placeholder='Enter street address'
                
                className='pl-2 h-12 rounded-md text-lg my-2' />

                <label htmlFor="">City</label>
                <input type="text" 
                placeholder='Enter City name'
                
                className='pl-2 h-12 rounded-md text-lg my-2' />

                <label htmlFor="">State</label>
                <input type="text" 
                placeholder='Enter State'
                
                className='pl-2 h-12 rounded-md text-lg my-2' />

              <label htmlFor="">Postal code</label>
                <input type="text" 
                placeholder='Enter Postal code'
                
                className='pl-2 h-12 rounded-md text-lg my-2' />

              <label htmlFor="">Country</label>
                <input type="text" 
                placeholder='Enter Country'
                
                className='pl-2 h-12 rounded-md text-lg my-2' />

                <button 
                className='pl-2 h-12 w-64 bg-orange-500 rounded-2xl px-6 text-xl font-bold mx-auto my-4'
                type='submit'>Submit</button>

                </div>

               
          
            </form>
     

    </div>
  )
}

export default ProfileForm