import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Navigations = styled.nav`
padding-top: 25px;
padding-bottom: 25px;
background-color: black;
text-align: center;
font-size: 24px;
`

export const NavbarLink = styled(Link)`
color:Green;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
&:hover,
&:focus{
   color: blue;
}
&:active{
   color: red;
};`