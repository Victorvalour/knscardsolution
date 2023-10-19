import React, { createContext, useEffect, useState } from 'react'
import Logo from "../images/KNS-LOGO-PNG.png"
import Select from 'react-dropdown-select'
import { useNavigate } from 'react-router-dom'
import Login from './login-page'
import { UserAuth } from '../context/AuthContext'
import App from '../App'
import { UserId } from '../context/Context'




const ProfileForm = ({children}) => {
  const { addSudoId } = UserId()
  const { user } = UserAuth()
  console.log(user)
  const userUid = user.uid

  const { updateUser } = UserAuth()


    const accountTypes = [
      {label: 'individual', value: 1},
      {label: 'company', value: 2}
    ]
    const statuses = [
      {label: 'active', value: 1},
      {label: 'inactive', value: 2}
    ]

    const identificationTypes = [
      {label: 'BVN', value: 1},
      {label: 'NIN', value: 2},
      {label: 'CAC', value: 3},
      {label: 'TIN', value: 4}
    ]

    const [type, setAccountType] = useState('');
    const [name, setFullName] = useState('');
    const [status, setStatus] = useState('');



    const [phoneNumber, setPhoneNumber] = useState('');
    const [isNumberValid, setIsNumberValid] = useState('') 

    const [emailAddress, setEmailAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const individual = {
          "firstName" : firstName,
          "lastName" : lastName
    }

    const [dateOfBirth, setDateOfBirth] = useState('');
    const [idType, setIdType] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [line1, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [sudoUid, setSudoUid] = useState('');

    const billingAddress = {
      "line1" : line1,
      "city" : city,
      "state" : state,
      "country" : country,
      "postalCode" : postalCode
    }

    const navigate = useNavigate()

   const [hasRegistered, setHasRegistered] = useState(false)

    const handleAccType = (values) => {
      setAccountType(values[0].label)
      console.log(values[0].label)

    }

    const handleStatusChange = (values) => {
      setStatus(values[0].label)
      console.log(values[0].label)

    }

    const handleIdType = (values) => {
      setIdType(values[0].label)
      console.log(values[0].label)
    }
    const handleFirstName = (e) => {
      setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
      setLastName(e.target.value)
    }

     
  

  
  
    const handleSubmit = (e) => {
        e.preventDefault();

        const fullName = firstName + ' ' + lastName;
        setFullName(fullName);

       const userData = {type, name: fullName, status, individual, billingAddress, phoneNumber, emailAddress}

      console.log(userData)

    

       fetch('https://api.sandbox.sudo.cards/customers', {
        method: 'POST',
        headers: { "content-Type": "application/json", 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZWYwOTRhNzU0YTY1YTM3MGQ0YWUiLCJlbWFpbEFkZHJlc3MiOiJ5b3VuZ3N0aW1keUB5YWhvby5jb20iLCJqdGkiOiI2NTJhOWNjYWJmY2NiOGQ2OTA2ZTFlZGUiLCJtZW1iZXJzaGlwIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmYyIsImJ1c2luZXNzIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmOSIsIm5hbWUiOiJLTlMgQ0FSRCBTT0xVVElPTiBMVEQiLCJpc0FwcHJvdmVkIjp0cnVlfSwidXNlciI6IjY0Y2NlZjA5NGE3NTRhNjVhMzcwZDRhZSIsInJvbGUiOiJBUElLZXkifSwiaWF0IjoxNjk3MjkxNDY2LCJleHAiOjE3Mjg4NDkwNjZ9.6dDwuzw6T3YmvbvrpnFFDRAqa1vpYd5Bbn2ySadVkU8'},
        body: JSON.stringify(userData)
    }
       ).then((response) => response.json()).then((response) => {
        console.log(response)

        console.log("data has been added")


        const sudoId = {"sudoUid" : response.data._id}
  
       navigate('/dashboard')
    
     setSudoUid(response.data._id);


     addSudoId(sudoId)
     console.log(response.data._id)
    
  updateUser(user)
      
      
       }).catch((err) => {console.log(err.message)})
      }
        


  return (
    <div className='py-2 px-2'>
      <img src={Logo} alt="" className='w-24 mx-auto'/>
     <p className='text-2xl my-3 ml-6 font-semibold'> Welcome &#127881;</p>

     <form onSubmit={handleSubmit}
            className='w-[90%] rounded-lg bg-gray-200 mx-auto'>
                <p className='text-3xl font-semibold text-center'>Basic Info</p>
                <p className='text-lg text-center mb-6'>Fill in your personal details below</p>

            <div className='flex flex-col  w-[90%] mx-auto'>            
               
                                <label htmlFor="">Account type</label>

                              <Select 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='Account Type'
                              onChange={handleAccType}
                              options={accountTypes}>

                              </Select>

                              <label htmlFor="">Account Status</label>
                              <Select 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='Status'
                              onChange={handleStatusChange}
                              options={statuses}>

                              </Select>

            {/*      <label htmlFor="">Full name (as shown in your document)</label>
                <input type="name"
                 placeholder='Enter your Full Name'
                 onChange={e => setFullName(e.target.value)}
                className='pl-2 h-12 rounded-md text-lg mb-2' />

  */}

                  <label htmlFor="">Phone number (in international format)</label>
                    <input type="text"
                     placeholder='Phone Number'
                     value={phoneNumber}
                     onChange={e => setPhoneNumber(e.target.value)}
                    className='pl-2 h-12 rounded-md text-lg mb-2' /> 


                  <label htmlFor="">Email address</label>
                <input type="text" 
                placeholder='Email Address'
                onChange={e => setEmailAddress(e.target.value)}
                className='pl-2 h-12 rounded-md text-lg mb-2' />


                  <label htmlFor="">First name</label>
                <input type="text"
                 placeholder='First Name'
                 onChange={handleFirstName}
                className='pl-2 h-12 rounded-md text-lg my-2' />

                  <label htmlFor="">Last Name</label>
                <input type="text" 
                placeholder='Last Name'
                onChange={handleLastName}
                className='pl-2 h-12 rounded-md text-lg my-2' />

        {  /*    <label htmlFor="">Date of Birth</label>
                <input type="text" 
                placeholder='YYYY/MM/DD'
                onChange={e => setDateOfBirth(e.target.value)}
                className='pl-2 h-12 rounded-md text-lg my-2' />

<label htmlFor="">Identification Type</label>

<Select 
className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
name='Identification Type'
onChange={handleIdType}
options={identificationTypes}>

</Select>

<label htmlFor="">Identification Number</label>
                <input type="text" 
                placeholder='Enter ID number'
                onChange={e => setIdNumber(e.target.value)}
className='pl-2 h-12 rounded-md text-lg my-2' /> */}

                <p className='text-2xl py-4'>Address Informaion</p>


                <label htmlFor="">Street Address</label>
                <input type="text" 
                placeholder='Enter street address'
                onChange={e => setStreetAddress(e.target.value)}
                className='pl-2 h-12 rounded-md text-lg my-2' />

                <label htmlFor="">City</label>
                <input type="text" 
                placeholder='Enter City name'
                onChange={e => setCity(e.target.value)}
                className='pl-2 h-12 rounded-md text-lg my-2' />

                <label htmlFor="">State</label>
                <input type="text" 
                placeholder='Enter State'
                onChange={e => setState(e.target.value)}
                className='pl-2 h-12 rounded-md text-lg my-2' />

              <label htmlFor="">Postal code</label>
                <input type="text" 
                placeholder='Enter Postal code'
                onChange={e => setPostalCode(e.target.value)}
                className='pl-2 h-12 rounded-md text-lg my-2' />

              <label htmlFor="">Country</label>
                <input type="text" 
                placeholder='Enter Country'
                onChange={e => setCountry(e.target.value)}
                className='pl-2 h-12 rounded-md text-lg my-2' />

                <button 
                className='pl-2 h-12 w-64 bg-orange-500 rounded-2xl px-6 text-xl font-bold mx-auto my-4'
                type='submit'>Submit</button>

                </div>

               
          
            </form>

    </div>
  )
}
export default ProfileForm;

