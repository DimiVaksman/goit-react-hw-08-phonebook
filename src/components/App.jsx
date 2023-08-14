
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {Register} from './Register/Register';
import {Home} from '../Pages/Home/Home'
import {ContactsApp} from '../Pages/Contacts/Contacts'
import { Navigations , NavbarLink} from './Apps.styled';
import { Login } from 'Pages/Login/Login';



export const App = () => {
  return (
    <div>
    <Navigations>
  <NavbarLink to="/">Home</NavbarLink>
  <NavbarLink to="/contactsapp">Contacts</NavbarLink>
  <NavbarLink to="/register">Register </NavbarLink>
  <NavbarLink to="/login">Login </NavbarLink>
</Navigations>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='/login' element={<Login />} />
        <Route path="/contactsapp" element={<ContactsApp />}/>
      </Routes>
    </div>
  );
};
