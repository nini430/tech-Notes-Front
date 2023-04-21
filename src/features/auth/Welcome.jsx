import React from 'react'
import { Link } from 'react-router-dom';

const Welcome = () => {
    const date=new Date();
    const today=new Intl.DateTimeFormat('en-US',{dateStyle:'full',timeStyle:'long'}).format(date);
  return (
    <div className='welcome'>
        <p>{today}</p>
        <h1>Welcome!</h1>
        <p><Link to='/dash/notes'>See your notes</Link></p>
        <p><Link to='/dash/users'>Go Users settings</Link></p>
    </div>
  )
}

export default Welcome;