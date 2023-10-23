import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import DashboardSidebar from '../components/dashboard-sidebar';

const Cards = () => {
  return (
    <div>
        <DashboardSidebar />
       <p>Cards</p>
       <FontAwesomeIcon icon={faCreditCard} size="10x" className='mx-44'/>

    </div>
  )
}

export default Cards