import styled from 'styled-components';
import {Jumbotron} from 'react-bootstrap';

export const RetroTableWrapper = styled.div`
table, th, td {
  border: 5px solid rgb(119, 187, 240);
  color: white;
}`;


export const JumboBox = styled(Jumbotron)`
    font-family: 'Bevan', cursive !important;
    background-color: transparent;
    color: white;
    .jumbotron{
        background-color: transparent;
    }
`;

export const RetroWrapper = styled.div`
  height: 100vh;
  background: url("https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif");
  background-size: cover;
`;

export const Www = styled.div`
  height: 50%;
  background: url("https://media.giphy.com/media/RxR1KghIie2iI/giphy.gif");
  background-size: cover;
`;

export const MenuItem = styled.div`
    height: 100px;
    object-fit: cover;
    background: url(${(props) => {
        console.log(props.item);
    return props.item}}) no-repeat center center;
`;

export const Content = styled.div`
font-family: 'Audiowide', cursive !important;
  background: url("https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif");
  background-size: cover;
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-template-columns: 2fr 5fr;
  grid-template-areas: 
    "header header"
    "nav main"
    "footer footer";       
  height: 100vh;
  @media(max-width: 768px){
    grid-template-rows: 1fr 1fr 5fr;
    grid-template-columns: 2fr 5fr;
    grid-template-areas: 
    "header header"
    "nav nav"
    "main main"    
    "footer footer";    
  }
  @media(max-width: 480px){
    display: block;
  }
  header{
     grid-area: header;
     background-color: rgb(119, 187, 240);
     padding: 5px;
     border: 3px solid #00f;
     text-align: center;
  }
  nav{
    border: 3px solid #00f;
    grid-area: nav;
  }
  main{
    grid-area: main;
  }
  footer{
     grid-area: footer;
     background-color: rgb(119, 187, 240);
     padding: 5px;
     border: 3px solid #00f;
     text-align: center;
  }
   
`;