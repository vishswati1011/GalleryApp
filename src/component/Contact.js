import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
const Contact = () => {

    return (
    <>
        <h1>This is Gallery App in React Made by Swati...</h1>
        <Switch>
            <Route exact path="/about" component={Form} />
        </Switch>
    </>
    )
}
export default Contact;