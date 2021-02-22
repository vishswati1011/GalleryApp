import React from 'react';

import {Link} from 'react-router-dom'
const Error =() => {

    return(
       <>
         <h1>Oops ! Page Not Found... </h1>
       
         <Link to='/'>Click here</Link>
       </>
    )
}
export default Error;