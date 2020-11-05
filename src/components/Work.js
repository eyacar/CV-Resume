import './Components.scss';
import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Deploy from './Icons/deploy.svg'
import Deploy2 from './Icons/deployDark.svg'
import CloseIcon from '@material-ui/icons/Close';

const Trabajos = [
{Empresa:'Green Pixel',Cargo:'Desarrollador Front-End jr',Inicio:'03/17',Fin:'Actualidad',Tarea:'En un principio asistia de forma freelance al desarrollo web, maquetado, UI, Script. Luego me incorpore en relacion de dependencia y empecé a impulsar proyectos con un equipo, utilizando HTML5, CSS3 y JS (Ecma6). En la actualidad los proyectos los realizamos a través de frameworks como React Js. Con librerias como Bootstrap, Sweet Alert, Materials UI y etc. Deploy y hosteo de proyectos por CLI de Vercel y Heroku. Versionado de proyectos mediante Github.'},
{Empresa:'Pro Insurance Solutions Ltd',Cargo:'Abogado consultor',Inicio:'03/20',Fin:'08/20',Tarea:'Coordinador del Area de legales - ART.'},
{Empresa:'Estudio Juridico CEFER',Cargo:'Abogado Jr.',Inicio:'06/16',Fin:'03/20',Tarea:'Abogado Jr. en estudio dedicado al fuero Laboral - Civil - Comercial.'},
{Empresa:'Jean Factory',Cargo:'Ventas',Inicio:'01/12',Fin:'05/16',Tarea:'Vendedor.'},
{Empresa:'Jean Factory',Cargo:'Coordinador',Inicio:'04/05',Fin:'12/11',Tarea:'Coordinador del area de producción.'}
];
const Works = [
    {Company:'Green Pixel', Position:'Jr. Front-End Developer',Start:'03/17',End:'Currently',Job:'At first I worked as freelance web designer, makeing the layout, UI, Script. Then i have got a full time job and i have started projects with a team, using languages such a HTML5, CSS3 and JS (Ecma6). Nowadays i am in charge of projects that needs skills on frameworks such as React Js. Also a use libraries like Bootstrap, Sweet Alert, Materials UI and etc. I made the deployment and hosting of projects on Vercel and Heroku, by using CLI. To share and to work on team i use Github.'},
    {Company:'Pro Insurance Solutions Ltd',Position:'Consultant Lawyer',Start:'03/20',End:'08/20',Job:'Coordinator of legal Area - ART.'},
    {Company:'CEFER law firm',Position:'Jr. Lawyer',Start:'06/16',End:'03/20',Job:'Jr. Lawyer on an Argentinians firm.'},
    {Company:'Jean Factory',Position:'Sales',Start:'01/12',End:'05/16',Job:'Seller.'},
    {Company:'Jean Factory',Position:'coordinator',Start:'04/05',End:'12/11',Job:'Coordinator of Factory.'}
    ];

const Work =(props)=>{
const [deploy, setDeploy]= useState();

const k = Object.keys(Trabajos[1])
const k2 = Object.keys(Works[1])
const Deploys = (e)=>{
setDeploy(e)}

useEffect(() => {
    AOS.init({
    delay: 100,
    duration: 1800,
    once: false, 
    });
    AOS.refresh();
    });

return(
<div className={props.darkW==='dark'?'AppD':"App"}>
{props.Lang==='SP'?
<div>
{Trabajos.map((job,i) => 
<div key={i}>
<h2><u>{k[0]}</u>: {job[k[0]]} <span>{i===deploy?<CloseIcon onClick={() => Deploys(-1)} />:<img onClick={() => Deploys(i)}  style={{width:'35px'}} src={props.darkW==='dark'?Deploy2:Deploy} alt="Deploy"/>}</span></h2>
{i===deploy?
<div className='exp'>
<h3><u>{k[1]}</u>: {job[k[1]]}</h3>
<h3>{job[k[3]] !== 'Actualidad'? k[2]+': '+job[k[2]]: job[k[2]]} - {job[k[3]] !== 'Actualidad'? k[3]+': '+job[k[3]]: 'Actualidad'}</h3>
<h3><u>{k[4]}</u>: {job[k[4]]}</h3>
</div> :null}
</div>)}
</div>
:
<div>
{Works.map((job,i) => 
<div key={i}>
<h2><u>{k2[0]}</u>: {job[k2[0]]} <span>{i===deploy?<CloseIcon onClick={() => Deploys(-1)} />:<img onClick={() => Deploys(i)}  style={{width:'35px'}} src={props.darkW==='dark'?Deploy2:Deploy} alt="Deploy"/>}</span></h2>
{i===deploy?
<div className='exp'>
<h3><u>{k2[1]}</u>: {job[k2[1]]}</h3>
<h3>{job[k2[3]] !== 'Currently'? k2[2]+': '+job[k2[2]]: job[k2[2]]} - {job[k2[3]] !== 'Currently'? k2[3]+': '+job[k2[3]]: 'Currently'}</h3>
<h3><u>{k2[4]}</u>: {job[k2[4]]}</h3>
</div> :null}
</div>)}
</div>
}
<div style={{width:'30%', height:'40px'}}></div>
</div>
)};

export default Work;
