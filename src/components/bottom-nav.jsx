import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faHouse, faGear, faUser } from '@fortawesome/free-solid-svg-icons';


const BottomNav = () => {
  return (
    <div className='fixed flex bottom-0 w-full  h-28 items-center justify-between px-4 border-t-4 border-slate-300'>

<FontAwesomeIcon icon={faHouse} style={{color: "#23334d"}} size='3x'/>
<FontAwesomeIcon icon={faCreditCard} style={{color: "#58719d"}} size='3x' />
<FontAwesomeIcon icon={faGear}  style={{color: "#58719d"}} size='3x'/>
<FontAwesomeIcon icon={faUser} style={{color: "#58719d"}} size='3x'/>
    </div>
  )
}

export default BottomNav