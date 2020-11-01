import './Skills.scss';
import Bootstrap from './Dev/Bootstrap.svg'
import Bootstrap2 from './Dev/Dark/Bootstrap.svg'
import CSS from './Dev/CSS3.svg'
import CSS2 from './Dev/Dark/CSS3.svg'
import Git from './Dev/Git.svg'
import Vercel2 from './Dev/Dark/Vercel.svg'
import Github from './Dev/Github.svg'
import Github2 from './Dev/Dark/Github.svg'
import HTML5 from './Dev/HTML5.svg'
import HTML52 from './Dev/Dark/HTML5.svg'
import JS from './Dev/JS.svg'
import JS2 from './Dev/Dark/JS.svg'
import Json from './Dev/Json.svg'
import Json2 from './Dev/Dark/Json.svg'
import JSX from './Dev/JSX.svg'
import Node from './Dev/Node.svg'
import React1 from './Dev/React.svg'
import React2 from './Dev/Dark/React.svg'
import Sass from './Dev/sass.svg'
import VS from './Dev/VS.svg'
import VS2 from './Dev/Dark/VS.svg'
import CLI from './Dev/CLI.svg'
import CLI2 from './Dev/Dark/CLI.svg'
import Heroku from './Dev/heroku.png'
import Oficce from './Dev/Office.png'
import Vercel from './Dev/vercel.svg'

export default function Dev(props){
    return(
    <div className='dev'>
    <h1 className='head'> {props.Lang==='SP'?'Conocimientos de Informaticos':'Technological knowledge'}</h1>
    <h2> {props.Lang==='SP'?'Lenguajes de programación:':'Developer skils:'} </h2>
    
    <img className='img' src={props.dark===true?HTML52:HTML5} alt="HTML5"/>
    <img className='img1' src={props.dark===true?CSS2:CSS} alt="CSS3"/>
    <img className='img2' src={props.dark===true?JS2:JS} alt="JS"/>
    <img className='img2' src={props.dark===true?Json2:Json} alt="Json"/>
    <img className='img3' src={JSX} alt="jsx"/>
    <img className='img' src={Node} alt="Node"/>
    <h2>Framworks:</h2>
    <img className='img' src={props.dark===true?React2:React1} alt="React"/>
    <img className='img2' src={props.dark===true?Bootstrap2:Bootstrap} alt="Bootstrap"/>
    <img className='img' src={Sass} alt="Sass"/>
    <h2>{props.Lang==='SP'?'Otros conocimientos:':'Other skils:'}</h2>
    <img className='img' src={Oficce} alt="Oficce"/>
    <img className='img2' src={props.dark===true?CLI2:CLI} alt="Cli"/>
    <img className='img3' src={Git} alt="Git"/>
    <img className='img1' src={props.dark===true?Github2:Github} alt="Github"/>   
    <img className='img1' src={props.dark===true?VS2:VS} alt="VS"/>
    <img className='img' src={props.dark===true?Vercel2:Vercel} alt="Vercel"/>
    <img className='img' style={{width:'240px'}} src={Heroku} alt="Heroku"/>
    </div>

)}; 

