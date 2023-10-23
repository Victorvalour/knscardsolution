import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faHouse, faGear, faUser } from '@fortawesome/free-solid-svg-icons';


const BottomNav = () => {
  return (
    <div className='fixed flex bottom-0 w-full  h-[8vh] items-center justify-between px-4 border-t-4 border-slate-300'>

<FontAwesomeIcon icon={faHouse} style={{color: "#23334d"}} size='2x'/>

<Link to='/cards'>
<FontAwesomeIcon icon={faCreditCard} style={{color: "#58719d"}} size='2x' />
</Link>

<FontAwesomeIcon icon={faGear}  style={{color: "#58719d"}} size='2x'/>

<Link to='/profile' >
<FontAwesomeIcon icon={faUser} style={{color: "#58719d"}} size='2x'/>
</Link>
    </div>
  )
}

export default BottomNav