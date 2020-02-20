import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/images/placeholder.png';

import { Container, Menu, Logo } from './styles';


export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={image} alt="Logo" />
      </Link>
      <Menu>
        <Link to="/profile">
          Profile
        </Link>
        <Link to="/timeline">
          Timeline
        </Link>
      </Menu>
    </Container>

  );
}
