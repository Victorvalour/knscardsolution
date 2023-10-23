import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const passwordVisibilityToggle = () => {
    const [visible, setVisibility] = useState(false)
    const Icon = 
        <FontAwesomeIcon icon={ visible ? faEyeSlash : faEye } 
        onClick={() => setVisibility(visibility => !visibility)}
        size="xl" />
    
    const InputType = visible ? "text" : "password";
    return [InputType, Icon];
}

export default passwordVisibilityToggle