import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
const About =() => {

    return(
        <>
        <h1>This is Gallery App in React </h1>
        <Switch>       
         <Route exact path="/about" component={Form}/>
        </Switch>
        </>
    )
}
export default About;