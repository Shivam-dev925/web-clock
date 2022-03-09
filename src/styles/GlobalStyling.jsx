import { createGlobalStyle } from "styled-components";

export const GlobalStyleLayer = createGlobalStyle`

*,*:after,*:before{
   box-sizing:border-box ;
   margin: 0px;
   padding:0px ;
  
  
}
  body{
font-family: 'Architects Daughter', cursive;
font-family: 'Inter', sans-serif;
font-family: 'Source Sans Pro', sans-serif;
background:#060606;
color:white ;

  }
  li,ul{
      list-style:none ;
      cursor: pointer;
  }
  a{
      text-decoration:none;
      color: black;
      cursor: pointer; 
  }


`;
