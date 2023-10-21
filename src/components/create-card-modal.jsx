import React from 'react'
import Select from 'react-dropdown-select'
import { useState } from 'react'

const CreateCardModal = ({isVisible, onClose}) => {

    const cardTypes = [
        {label: 'Virtual', value: 1}
      ]
      const cardBrands = [
        {label: 'Verve', value: 1},
        {label: 'Visa', value: 2},
        {label: 'Mastercard', value: 3}
      ]

      const [cardType, setCardType] = useState('');
      const [cardBrand, setCardBrand] = useState('');

    const handleCardType = (values) => {
        setCardType(values[0].label)
        console.log(values[0].label)
  
      }
      const handleCardBrand = (values) => {
        setCardBrand(values[0].label)
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
            <div className='bg-white p-2 '>
            <Select 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='Account Type'
                              onChange={handleCardType}
                              options={cardTypes}>

                              </Select>

                              <Select 
                              className='pl-2 h-12 rounded-md text-lg mb-2 bg-white'
                              name='Account Type'
                              onChange={handleCardBrand}
                              options={cardBrands}>

                              </Select>
         <div className='flex justify-between px-12'>
<button className='border-4 border-opacity-25 border-black focus:border-opacity-100 focus:bg-red-800'>
            <input className="" type='radio' name='card-brand' value='Verve' onChange={e => setCardBrand(e.target.value)} />
         </button>

         <button className='border-4 border-opacity-25 border-black focus:border-opacity-100 focus:bg-red-800'>
            <input className="" type='radio' name='card-brand' value='Verve' onChange={e => setCardBrand(e.target.value)} />
         </button>

            <button className='border-4 border-opacity-25 border-black focus:border-opacity-100 focus:bg-red-800'>
            <input className="" type='radio' name='card-brand' value='Verve' onChange={e => setCardBrand(e.target.value)} />
         </button>
    </div>

            </div>
            
            </div>

        </div>
  )
}

export default CreateCardModal