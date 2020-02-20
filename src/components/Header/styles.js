import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #FFF;
  align-items: center;
  margin: 30px 20px;
`;

export const Menu = styled.ul`
  width: 120px;
  list-style: none;
  display: flex;

  justify-content: space-between;

  a{
    text-decoration: none;

  }
 
`;


export const Logo = styled.img`
  width: 180px;
  height: 60px;
`;