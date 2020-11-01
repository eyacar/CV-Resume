import './Components.scss';
import './ComponentsDark.scss';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const educacion = [
    {instituto:'It Master',carrera:'Full Stack Web Developer',inicio:'06/20',fin:'En curso'},
    {instituto:'Le Wagon',carrera:'Introducción a la programación Web',inicio:'06/20',fin:'08/20'},
    {instituto:'Embassy Ces - London',carrera:'English Course',inicio:'01/06',fin:'01/06'},
    {instituto:'UM – Universidad de Morón',carrera:'Abogacia',inicio:'03/08',fin:'02/12'},
    {instituto:'Escuela Tecnica - ORT I',carrera:'Bachiller Tecnico con orientación en la gestion administrativa',inicio:'03/99',fin:'11/04'},
]
const educacionEN = [
    {instituto:'It Master',carrera:'Full Stack Web Developer',inicio:'06/20',fin:'Currently'},
    {instituto:'Le Wagon',carrera:'Web Designer Introduction',inicio:'06/20',fin:'08/20'},
    {instituto:'Embassy Ces - London',carrera:'English Course',inicio:'01/06',fin:'01/06'},
    {instituto:'UM – Universidad de Morón',carrera:'Law',inicio:'03/08',fin:'02/12'},
    {instituto:'Escuela Tecnica - ORT I',carrera:'High School',inicio:'03/99',fin:'11/04'},
]

const Education = (props) =>{
useEffect(() => {
    AOS.init({
    delay: 100,
    duration: 1800,
    once: false, 
    });
    AOS.refresh();
    });
return(  
<div className={props.darkE==='dark'?'AppD':"App"}>
<div data-aos="zoom-in">
{props.Lang==='SP'?
educacion.map((edu,i) => <div className='edu' key={i}><span className='fecha'>{edu.inicio} - {edu.fin}</span><span className='carrera'>{edu.carrera}</span><span className='instituto'>{edu.instituto}</span></div>):
educacionEN.map((edu,i) => <div className='edu' key={i}><span className='fecha'>{edu.inicio} - {edu.fin}</span><span className='carrera'>{edu.carrera}</span><span className='instituto'>{edu.instituto}</span></div>)}
<div style={{width:'30%', height:'40px'}}></div>
</div>
</div>
    )};

export default Education;