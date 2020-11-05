import './App.scss';
import './AppsDark.scss';
import FotoCv from './FotoCV.png';
import {BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";
import Home from './Home'
import Footer from './Footer'
import Information from './components/Information'
import Resume from './components/Resume'
import Work from './components/Work'
import Skills from './components/Skills'
import Educaction from './components/Education'
import Projects from './components/Skills/Projects'
import Contact from './components/Contact'
import React, { useState } from 'react';
import {grey} from '@material-ui/core/colors';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const Header =(props)=>(<header id={props.dark==='dark'? 'headerD':null}><h1>{props.title}</h1></header>);

const Nav =()=>{
const [dark, setDark] = useState(true);
const [lang, SetLang] = useState('SP');
const [menu, SetMenu] = useState(true);
const [Navbar, SetNav] = useState(true);

const Dmode = ()=>{
if (dark === false){setDark(true)}
else{setDark(false)}
};

const Lan = (event)=>{SetLang(event.target.value)}

const Menu =()=>{if (menu ===true){SetMenu(false);SetNav(false)}
else{SetMenu(true);SetNav(true)}}

return(
<Router>
<div id={dark===true?'bar-nav':'bar-navD'}>

<div className='switch'><MenuIcon style={menu===false?{display:'none'}:null} onClick={Menu} /> <CloseIcon style={menu===true?{display:'none'}:null} onClick={Menu}/></div>

<div className='switch'><Link to={'/'}><HomeIcon style={{color: grey[900]}}/></Link></div>
<div className='switch' onClick={Dmode}>{dark===true?<Brightness4Icon style={{ color: grey[800] }}/>:<Brightness7Icon style={{ color: grey[100] }}/>}</div>
<div  className='switch'>
<LanguageIcon className='switch'/>
<select onChange={Lan} style={dark===true?{border:'none',backgroundColor:"rgb(3, 172, 155)"}:{border:'none',backgroundColor:"gray"}} id='select'>
<option value="SP" selected>SPANISH</option>
<option value="EN">ENGLISH</option>
</select>
</div>

</div>


<div id={dark===true?'contain':'containD'} className={Navbar===true?'left':null}>
<nav>
<div id='first'>
<div id="Foto">
<img src={FotoCv} alt="Foto CV"/>
</div>
<h1>Ezequiel Yacar</h1>
</div>
<div id='nav'>
<ul>
<Link to={'/Information'}><li>{lang==='SP'?'Información Personal':'Personal Info'}</li></Link>
<Link to={'/Resume'}><li>{lang==='SP'?'Resumen Ejecutivo':'Resume Summary'}</li></Link>
<Link to={'/Education'}><li>{lang==='SP'?'Educación':'Education'}</li></Link>
<Link to={'/Job'}><li>{lang==='SP'?'Experiencia Laboral':'Work Experience'}</li></Link>
<Link to={'/Skills'}><li>{lang==='SP'?'Aptitudes':'Skills'}</li></Link>
<Link to={'/Projects'}><li>{lang==='SP'?'Proyectos':'Projects'}</li></Link>
<Link to={'/Contact'}><li>{lang==='SP'?'Contacto':'Contact'}</li></Link>
</ul>
</div>
</nav>
</div>
<Switch>    
<Route exact path='/'><Header title={lang==='SP'?'CV': 'RESUME'} dark={dark===true?null:'dark'} /> <Home darkH={dark===true?null:'dark'} Lang={lang==='SP'?'SP':null}/></Route>  
<Route path='/Information'>
<Header title={lang==='SP'?'Información Personal':'Personal Info'} dark={dark===true?null:'dark'} />
<Information name={lang==='SP'?'Nombre completo':'Full Name'} Bday={lang==='SP'?'Fecha de Nacimiento':'Birth Date'} Bplace={lang==='SP'?'Lugar de Nacimiento':'Birth Place'} status={lang==='SP'?'Estado Civil':'Marital Status'} Id={lang==='SP'?'Nacionalidad':'Nationality'} darkI={dark===true?null:'dark'}/>
</Route>
<Route path='/Resume'><Header dark={dark===true?null:'dark'} title={lang==='SP'?'Resumen Ejecutivo':'Resume Summary'}/><Resume darkR={dark===true?null:'dark'} Lang={lang==='SP'?'SP':null} /></Route>
<Route path='/Education'><Header dark={dark===true?null:'dark'} title={lang==='SP'?'Educación':'Education'}/><Educaction darkE={dark===true?null:'dark'} Lang={lang==='SP'?'SP':null} /></Route>
<Route path='/Job'><Header dark={dark===true?null:'dark'} title={lang==='SP'?'Experiencia Laboral':'Work Experience'}/><Work darkW={dark===true?null:'dark'} Lang={lang==='SP'?'SP':null}/></Route>
<Route path='/Skills'><Header dark={dark===true?null:'dark'} title={lang==='SP'?'Aptitudes':'Skills'}/><Skills darkS={dark===true?null:'dark'} Lang={lang==='SP'?'SP':null}/></Route>
<Route path='/Projects'><Header dark={dark===true?null:'dark'} title={lang==='SP'?'Proyectos':'Projects'}/><Projects darkP={dark===true?null:'dark'} Lang={lang==='SP'?'SP':null}/></Route>
<Route path='/Contact'><Header dark={dark===true?null:'dark'} title={lang==='SP'?'Contáctame':'Contact me'}/><Contact darkC={dark===true?null:'dark'} Lang={lang==='SP'?'SP':null}/></Route>   
</Switch>
<Footer darkF={dark===true?null:'footerD'}/>
</Router>
)};

export default Nav;