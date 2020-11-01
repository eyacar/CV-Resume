import './Components.scss';
import './ComponentsDark.scss';
import Button from '@material-ui/core/Button';
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
import swal from 'sweetalert';    

init("user_mHCQpAEjoBs6yyEj0np7i");

export default function Contact(props) {

    function sendEmail(e) {
        let serviceEmail = 'cvinteresado';
        let templateEmail = 'template_jmio0um';
        let userEmail = 'user_mHCQpAEjoBs6yyEj0np7i';
        
        e.preventDefault();
    
        emailjs.sendForm(serviceEmail, templateEmail, e.target, userEmail)
        .then((result) => {
            console.log(result.text);
            swal("Listooo!", "Correo enviado!", "success");
        }, (error) => {
            console.log(error.text);
            swal("Error!", "Algo salio mal el intentar enviar el correo. Contacta al administrador!", "error");
        });
        e.target.reset()
    }
    
    return(
        <div className={props.darkC==='dark'?'AppD':"App"}>
            <h3 style={{textAlign:'center', marginBottom:'0'}}>{props.Lang==='SP'?'Podés contactarte conmigo a través del siguiente formulario':'Please feel free to contact me by filling in the form below'}</h3>
            <div className="contact">
            <form onSubmit={sendEmail}>
            <input type="text" placeholder={props.Lang==='SP'?'Nombre Completo...':'Full Name...'} name="name"/>
            <input type="email"  placeholder={props.Lang==='SP'?'Dirección de Email...':'Email Address...'} name="email"/>
            <input type="text"  placeholder={props.Lang==='SP'?'Asunto...':'Subject..'} name="subject"/>
            <textarea cols="30" rows="8" placeholder={props.Lang==='SP'?'Mensaje...':'Your message...'} name="message"></textarea>
            <Button variant="contained" color="primary" type="submit">{props.Lang==='SP'?'ENVIAR':'SEND'}</Button>
     </form>
            </div>
        </div>
    )
}