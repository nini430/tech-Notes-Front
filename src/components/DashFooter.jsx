import React from 'react'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useLocation, useNavigate } from 'react-router-dom'

const DashFooter = () => {
    const navigate=useNavigate();
    const {pathname}=useLocation();

    const goToHome=()=>navigate('/dash');
    let homeButton=null;
    if(pathname!=='/dash') {
        homeButton=(
            <button className='footer-btn' title='Go Home' onClick={goToHome}>
                <FontAwesomeIcon icon={faHouse}/>
            </button>
        )
    }
    const content=(
        <div className='dash-footer'>
            {homeButton}
            <p>Current User:</p>
            <p>Status:</p>
        </div>
    )
  return content;
}

export default DashFooter