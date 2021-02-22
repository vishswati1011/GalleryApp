import React from 'react';
import {NavLink} from 'react-router-dom'
import {Grid,AppBar, Toolbar,Typography} from '@material-ui/core';
const Navbar =() =>{
 
    return(<>
    {/*<Link to='/'>About US</Link>*/}
     {/*<Link to='/contact'>Contact US</Link>*/}
     <AppBar position="static">
         <Toolbar>
         <Grid >
         <NavLink exact  to='/'>Gallery App</NavLink>
          <NavLink exact  to='/about'> About US</NavLink>
          <NavLink exact  to='/contact'> Contact US</NavLink>
           
          </Grid>
         </Toolbar>
     </AppBar>
     </>
    )
}
export default Navbar;