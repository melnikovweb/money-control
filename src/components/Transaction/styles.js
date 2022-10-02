import styled from "styled-components";

export const Wrapper = styled.div`
background: ${ ({value}) =>value<0 ? 'red' : 'green'};
border:1px solid #dbdbdb;
border-radius: 5px;
padding: 5px;
margin: 10px;
`
 