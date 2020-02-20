import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Timer = styled.div`

`;

export const Clock = styled.h1`
  text-align: center;
`;

export const Button = styled.button`

`;

export const Form = styled.form`
margin-top: 20px;
display: flex;
flex-direction: column;
width: 300px;
display: ${props => props.show ? 'flex' : 'none' }; */
`;
