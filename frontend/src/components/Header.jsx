// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" sx={{ backgroundColor: '#F0F8FB', color: '#77BFEF', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            <Link to="/" style={{ textDecoration: 'underline', color: '#8FC7F6' }}>SS TECH SERVICES</Link>
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/digital-marketing">Digital Marketing</Button>
            <Button color="inherit" component={Link} to="/web-development">Web Development</Button>
            <Button color="inherit" component={Link} to="/about-us">About Us</Button>
            <Button color="inherit" component={Link} to="/contact-us">Contact Us</Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
