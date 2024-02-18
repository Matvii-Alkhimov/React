import styled from "styled-components";

export const Container = styled.div`
padding: 10px;
`

export const Title = styled.h1`
line-height: 1.3;
`

export const Option = styled.div`
display: inline-block;
width: 40px;
height: 40px;
margin: 8px;
background-color: ${(props)=> props.bgc};
`