import './Components.scss';
import './ComponentsDark.scss';
import Name from './Icons/Name.svg'
import Bday from './Icons/Day.svg'
import Bplace from './Icons/Location.svg'
import Marital from './Icons/Marital.svg'
import Maritald from './Icons/MaritalD.svg'
import Id from './Icons/IdCard.svg'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Information =(props)=>{
useEffect(() => {
AOS.init({
delay: 200,
duration: 1800,
once: false, 
});
AOS.refresh();
});

return(
<div className={props.darkI==='dark'?'AppD':"App"}>
<div id='information' data-aos="flip-right">
<div className='info'>
<img src={Name} alt="Name"/>
<h3> <u><em>{props.name}</em></u>:<span> EZEQUIEL ALBERTO, YACAR</span></h3>
</div>
<div className='info'>
<img src={Bday} alt="Birthday"/>
<h3> <u><em>{props.Bday}</em></u>: <span>08/02/1987</span></h3>
</div>
<div className='info'>
<img src={Bplace} alt="Birth Place"/>
<h3> <u><em>{props.Bplace}</em></u>: <span>Buenos Aires, Capital Federal</span></h3>
</div>
<div className='info'>
<img src={props.darkI==='dark'?Maritald:Marital} alt="Marital Status"/>
<h3> <u><em>{props.status}</em></u>: <span>{props.status==='Marital Status'?'Married':'Casado'}</span></h3>
</div>
<div className='info'>
<img src={Id} alt="Id Card"/>
<h3> <u><em>{props.Id}</em></u>: <span>{props.Id==='Nationality'?'Argentine':' Argentino'}</span></h3>
</div>
</div>
<div style={{width:'30%', height:'40px'}}></div>
</div>
)}

export default Information;

