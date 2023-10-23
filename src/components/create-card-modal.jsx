import React from 'react'
import Select from 'react-dropdown-select'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1Wave, } from '@fortawesome/free-solid-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import mastercardSvg from '../images/mastercard-svg.svg'
import verveSvg from '../images/verve-svg.svg'
import visaSvg from '../images/visa-svg.svg'

const CreateCardModal = ({isVisible, onClose}) => {

    const cardTypes = [
        {label: 'Virtual', value: 1}
      ]

      const currencies = [
        {label: 'NGN', value: 1}
      ]
      const cardBrands = [
        {label: 'Verve', value: 1},
        {label: 'Visa', value: 2},
        {label: 'Mastercard', value: 3}
      ]

      const [cardType, setCardType] = useState('');
      const [cardBrand, setCardBrand] = useState('');
      const [currency,  setCurrency] = useState('')

    const handleCardType = (values) => {
        setCardType(values[0].label)
        console.log(values[0].label)
      }
      const handleCurrencyType = (values) => {
        setCurrency(values[0].label)
        console.log(values[0].label)
      }

const cardData = {cardType, cardBrand}

    if (!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') {onClose()}
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
        
        <div className='w-[70%] flex flex-col'>
            <button onClick={() => onClose()} className='text-red-500 bg-white text-2xl place-self-end w-8 rounded-lg font-semibold'>X</button>
            <form className='bg-white p-2 py-4 rounded-lg flex flex-col'>

                <div className='mb-3 font-semibold font-serif self-center'>Card information</div>

                <div>
                    <p className=''>Card Type</p>
            <Select 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='Account Type'
                              onChange={handleCardType}
                              options={cardTypes}>

                              </Select>
                              </div>


                              <div>
                    <p className=''>Choose currency</p>
            <Select 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='Account Type'
                              onChange={handleCurrencyType}
                              options={currencies}>

                              </Select>
                              </div>


<div>
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

        </div>
  )
}

export default CreateCardModal