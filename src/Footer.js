import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import { blue, red, green, grey} from '@material-ui/core/colors';
import './App.scss';
import './AppsDark.scss';

const Footer = (props) => (
    <footer id={props.darkF} >
    <ul>
    <li><a href="https://github.com/eyacar?tab=repositories" target="_blank" rel="noreferrer"><GitHubIcon fontSize="large" style={props.darkF==='footerD'?{ color:  grey[100]}:{color: grey[900]}}/></a></li>
    <li><a href="https://www.linkedin.com/in/ezequiel-yacar-5b5136192/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" style={{ color: blue[900] }}/></a></li>
    <li><a href="tel:+5491161521203" target="_blank" rel="noreferrer"><PhoneIcon fontSize="large" style={props.darkF==='footerD'?{ color: blue[900]}:{color: blue[600]}}/></a></li>
    <li><a href="https://api.whatsapp.com/send?phone=5491161521203&text=Hi,%20we%20are%20after%20a%20Job%20search%20and%20we%20are%20interested%20in%20your%20profile.%20Please%20contact%20us%20as%20soon%20as%20possible." target="_blank" rel="noreferrer"><WhatsAppIcon style={props.darkF==='footerD'?{ color: green[900]}:{color: green[600]}} fontSize="large" /></a></li>  
    <li><a href="mailto:ezeayacar@gmail.com.ar?Subject=Job%20Search&body=Hi,%20we%20are%20after%20a%20Job%20search%20and%20we%20are%20interested%20in%20your%20profile.%20Please%20contact%20us%20as%20soon%20as%20possible." rel="noreferrer"><MailIcon fontSize="large" style={{ color: red[800]}}/></a></li>
    </ul>
    </footer> 
)

export default Footer;