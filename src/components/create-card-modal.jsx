import React from 'react'
import Select from 'react-dropdown-select'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1Wave, } from '@fortawesome/free-solid-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import mastercardSvg from '../images/mastercard-svg.svg'
import verveSvg from '../images/verve-svg.svg'
import visaSvg from '../images/visa-svg.svg'
import { UserAuth } from '../context/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const CreateCardModal = ({isVisible, onClose}) => {

    const { sudoId } = UserAuth();
    const cardTypes = [
        {label: 'virtual', value: 1}
      ]


      const currencies = [
        {label: 'NGN', value: 1}
      ]
      const cardBrands = [
        {label: 'Verve', value: 1},
        {label: 'Visa', value: 2},
        {label: 'Mastercard', value: 3}
      ]

      const [type, setCardType] = useState('');
      const [brand, setCardBrand] = useState('');
      const [currency,  setCurrency] = useState('');
      
    const navigate = useNavigate();

    const handleCardType = (values) => {
        setCardType(values[0].label)
        console.log(values[0].label)
      }
      const handleCurrencyType = (values) => {
        setCurrency(values[0].label)
        console.log(values[0].label)
      }



    if (!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') {onClose()}
    }
  
    const customerId = sudoId.sudoUid;
    const status = 'active';
    const issuerCountry = 'NGN';
    const debitAccountId = '64f23823aed91f9302cb28c4';
    const spendingControls = {
        allowedCategories: ['[]'],
        blockedCategories: ['[]'],
        channels: {atm: true, pos: true, web: true, mobile: true},
        spendingLimits: [{interval: 'daily', amount: 100000}]
    };

    /* {
              type: 'virtual',
              currency: 'NGN',
              issuerCountry: 'NGA',
              status: 'active',
              spendingControls: {
                allowedCategories: ['[]'],
                blockedCategories: ['[]'],
                channels: {atm: true, pos: true, web: true, mobile: true},
                spendingLimits: [{interval: 'daily', amount: 100000}]
              },
              sendPINSMS: false,
              customerId: '65292416b42cd354e664aec6',
              brand: 'Verve',
              debitAccountId: '6533b1f57bd8e16d1ff252ba'
            }
            */

    const handleSubmit = (e) => {
        e.preventDefault();
      


        const cardData = {type, currency, issuerCountry, status, brand, spendingControls, customerId, debitAccountId}
        

        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZWYwOTRhNzU0YTY1YTM3MGQ0YWUiLCJlbWFpbEFkZHJlc3MiOiJ5b3VuZ3N0aW1keUB5YWhvby5jb20iLCJqdGkiOiI2NTJhOWNjYWJmY2NiOGQ2OTA2ZTFlZGUiLCJtZW1iZXJzaGlwIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmYyIsImJ1c2luZXNzIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmOSIsIm5hbWUiOiJLTlMgQ0FSRCBTT0xVVElPTiBMVEQiLCJpc0FwcHJvdmVkIjp0cnVlfSwidXNlciI6IjY0Y2NlZjA5NGE3NTRhNjVhMzcwZDRhZSIsInJvbGUiOiJBUElLZXkifSwiaWF0IjoxNjk3MjkxNDY2LCJleHAiOjE3Mjg4NDkwNjZ9.6dDwuzw6T3YmvbvrpnFFDRAqa1vpYd5Bbn2ySadVkU8'
            },
            body: JSON.stringify(cardData)
          };
          
          fetch('https://api.sandbox.sudo.cards/cards', options)
            .then(response => response.json())
            .then((response) => {console.log(response)
           
            if (response.statusCode == 200) {
                toast.success('Card created successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });

                    navigate('/cards')
            } else {
                toast.error('Something went wrong!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            })
            .catch((err) => {console.error(err)
            alert('err')
            });

    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
        
        <div className='w-[80%] flex flex-col'>
            <button onClick={() => onClose()} className='text-red-500 bg-white text-2xl place-self-end w-8 rounded-lg font-semibold'>X</button>
            <form onSubmit={handleSubmit} 
            className='bg-white p-2 py-4 rounded-lg flex flex-col'>

                <div className='mb-3 font-semibold font-serif self-center'>Card information</div>

                <div className='mb-2'>
                    <p className=''>Card Type</p>
            <Select 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='Account Type'
                              onChange={handleCardType}
                              options={cardTypes}>

                              </Select>
                              </div>


                              <div className='mb-2'>
                    <p className=''>Choose currency</p>
            <Select 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='Account Type'
                              onChange={handleCurrencyType}
                              options={currencies}>

                              </Select>
                              </div>


<div className='mb-2'>
                              <p>Select card brand</p>
                             <div className='border-2 border-opacity-10 border-black py-2 px-2'>
                               
         <div className='flex justify-between items-center'>
        <div className='flex space-x-3 ' >
            <input className="w-4" type='radio' name='card-brand' value='Verve' id='verve' onChange={e => {setCardBrand(e.target.value)}} />
            <label htmlFor="verve"><img src={verveSvg} alt="" className='w-14'/></label>
            </div>

        <div className='flex space-x-3 ' >
            <input className="w-4" type='radio' name='card-brand' value='visa' id='visa' onChange={e => setCardBrand(e.target.value)} />
            <label htmlFor="visa"><img src={visaSvg} alt="" className='w-14' /></label>
            </div>

         <div className='flex space-x-3 '>
            <input className="w-4" type='radio' name='card-brand' id='mastercard' value='mastercard' onChange={e => setCardBrand(e.target.value)} />
            <label htmlFor="mastercard"><img src={mastercardSvg} alt="" className='w-14' /></label>
            </div>
                </div>
            </div>
    </div>

    <button type='submit' 
    className='bg-cobalt mt-4 h-10 text-white text-lg'>Create card</button>

            </form>
            
            </div>
            <ToastContainer/>

        </div>
  )
}

export default CreateCardModal