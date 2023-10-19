import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserId } from '../context/Context';
import { UserAuth } from '../context/AuthContext';

const Profile = () => {

const { sudoId } = UserAuth()
console.log(sudoId)
const { user } = UserAuth()


const [userData, setUserData] = useState({})
const [isPending, setIsPending] = useState(true)
const [firstName, setFirstName] = useState('')
const [emailAddress, setEmailAddress] = useState('')
const [phoneNumber, setPhoneNumber] = useState()
const [lastName, setLastName] = useState('')
const [line1, setLine1] = useState('')

const userId = user.uid
const userSudoId = sudoId.sudoUid
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZWYwOTRhNzU0YTY1YTM3MGQ0YWUiLCJlbWFpbEFkZHJlc3MiOiJ5b3VuZ3N0aW1keUB5YWhvby5jb20iLCJqdGkiOiI2NTJhOWNjYWJmY2NiOGQ2OTA2ZTFlZGUiLCJtZW1iZXJzaGlwIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmYyIsImJ1c2luZXNzIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmOSIsIm5hbWUiOiJLTlMgQ0FSRCBTT0xVVElPTiBMVEQiLCJpc0FwcHJvdmVkIjp0cnVlfSwidXNlciI6IjY0Y2NlZjA5NGE3NTRhNjVhMzcwZDRhZSIsInJvbGUiOiJBUElLZXkifSwiaWF0IjoxNjk3MjkxNDY2LCJleHAiOjE3Mjg4NDkwNjZ9.6dDwuzw6T3YmvbvrpnFFDRAqa1vpYd5Bbn2ySadVkU8'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.sandbox.sudo.cards/customers/${userSudoId}`, options)
    .then((response) => {
        return response.json()})
    .then((response) => {
        setIsPending(false)
        console.log(response.data);
        setUserData(response.data)
        setFirstName(response.data.individual.firstName)
        setLastName(response.data.individual.lastName)
        setLine1(response.data.billingAddress.line1)
        setEmailAddress(response.data.emailAddress)
        setPhoneNumber(response.data.phoneNumber)
    })
    .catch(err => console.error(err));
    setIsPending(false)
}, [])



  return (
    <div>
        {isPending ? <p>Loading...</p> :
        <div> 
        <div className='flex w-full py-4 px-2 justify-between'>
            <div className='text-2xl font-semibold underline'><p>Profile</p></div>

          <Link to='/dashboard'>  <div className='text-2xl font-semibold'><p>Back</p></div>
          </Link>
        </div>
        <div></div>

        <div className='flex mt-4 ml-2 items-center'>
            <div className='flex bg-teal-500 w-12 mr-4 h-12 rounded-xl items-center justify-center text-white text-3xl font-semibold'>JS</div>
            <p className='text-3xl font-semibold'>{firstName} {lastName}</p>
        </div>

        <div className='ml-2 mt-4'>
            <p className='font-semibold text-lg'>Email address</p>
            <p className='text-lg'>{userData.emailAddress}</p>
            <div className='w-[90%] h-[2px] bg-slate-300'></div>
        </div>

        <div className='ml-2 mt-4'>
            <p className='font-semibold text-lg'>Phone No.</p>
            <p className='text-lg'>{userData.phoneNumber}</p>
            <div className='w-[90%] h-[2px] bg-slate-300'></div>
        </div>

        <div className='ml-2 mt-4'>
            <p className='font-semibold text-lg'>Residential Address</p>
            <p className='text-lg'>{line1}</p>
            <div className='w-[90%] h-[2px] bg-slate-300'></div>
        </div>


        </div>}
    </div>
  )
}

export default Profile