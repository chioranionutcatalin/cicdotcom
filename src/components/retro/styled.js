import styled from 'styled-components';


export const RetroWrapper = styled.div`
  height: 100vh;
  background: url("https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif");
  background-size: cover;
`;

export const MenuItem = styled.li`
    height: 100px;
    object-fit: cover;
    background: url(${(props)=> props.item}) no-repeat center center;
`;

export const RetroHeader = styled.header`
  background-color: red;
`;

export const RetroMenuWrapper = styled.div`
  border: solid 20px;
`;

export const RetroFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;