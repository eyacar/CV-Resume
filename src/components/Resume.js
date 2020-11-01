import './Components.scss';
import './ComponentsDark.scss';
import React, { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resumen = ['Me considero una persona proactiva, dinámica y flexible. Cuento con la habilidad de adaptarme a distintos entornos y lograr excelentes relaciones profesionales.', 'He crecido profesionalmente en varios ámbitos, lo que me concede conocimientos y aptitudes de distinta Indole que potencian las actividades que realizo.','En un primer comienzo de mi carrera, mientras estudiaba la carrera de abogacía, me desarrolle en el ámbito comercial, puntualmente en ventas.','Una vez recibido decidí crecer en la profesión elegida por lo que empecé mi travesía en la abogacía.','Durante el ejercicio de la profesión, por una necesidad puntual se despertó en mi una vocación que hasta esos momentos desconocía. Este hecho puntual fue la necesidad de contar con una pagina web estática; por lo que luego de investigar sobre el tema me genero un gran interés y un deseo de crecer el en desarrollo. Con un poco de audacia, valentía y curiosidad tome trabajos de forma freelance, hasta que me di cuenta que con eso no bastaba. Por lo que decidí instruirme y capacitarme. Hoy en día me veo como un profesional en continua evolución que se adapta a las nuevas tecnologías y marcos de desarrollo.']
const ProfResume = ["I think of myself as an active person, always with a proactive attitude. Also I consistently try to be as flexible as its possible in order to adapt to changes. I work well as a team and I really enjoy to be a team lead.","During my professional career I grow up in different work environments, that gave me the possibility of having different skills such as sales, law and developer.","Initially a worked as a seller and coordinator of a textile factory. Then when i got my lawyer degree I started working on law firms.","For a long time I haven't had any clue of what was my calling, until I needed to have a personal Home page, because of that i realized how I really enjoy developing.", "After that I started working as a freelance web designer on a company.", "When I recognized that this path is the one I wish i began following intensive training courses.", "Nowadays Im in a continuously growing up of my career as a developer."]

const Resume =(props)=>{

useEffect(() => {
    AOS.init({
    delay: 200,
    duration: 2000,
    once: false, 
});
AOS.refresh();
});
return(
<div className={props.darkR==='dark'?'AppD':"App"} style={{paddingTop:'1%',}}>
<div data-aos="fade-in">
{props.Lang==='SP'?
<div id='p'>{Resumen.map((p,i)=> <p key={i}>{p}</p>)} <div style={{width:'30%', height:'40px'}}></div></div>:
<div id='p'>{ProfResume.map((p,i)=> <p key={i}>{p}</p>)} <div style={{width:'30%', height:'40px'}}></div></div>
}
</div>
</div>
)};

export default Resume;