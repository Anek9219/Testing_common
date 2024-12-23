// src/components/CommonHeader.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Divider, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const CommonHeader = () => {
  return (
    <div className='font-bold' >
      <div className='contact-info'>
        <div>
          <Link to=""><i class="fa-regular fa-envelope"></i></Link>
        </div>
      </div>
      <div className='social-icon'></div>
    </div>
  );
};

export default CommonHeader;

{/* <AppBar position="static" color="default" sx={{ backgroundColor: '#000000', color: '#D7FFFF', boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <IconButton edge="start" color="inherit">
              <EmailIcon />
            </IconButton>
            <Typography variant="body2" sx={{ marginRight: 2 }}>
              email@example.com
            </Typography>
            <IconButton edge="start" color="inherit">
              <PhoneIcon />
            </IconButton>
            <Typography variant="body2" sx={{ marginRight: 2 }}>
              +1 (234) 567-890
            </Typography>
            <IconButton edge="start" color="inherit">
              <WhatsAppIcon />
            </IconButton>
            <Typography variant="body2" sx={{ marginRight: 2 }}>
              +1 (234) 567-890
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" href="https://youtube.com" target="_blank">
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Divider /> */}