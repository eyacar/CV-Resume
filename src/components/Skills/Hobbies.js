import './Skills.scss';

export default function Hobbies(props){
    return(
    <>
    <h1 className='head'>Hobbies</h1>
    <ul className='hobbies'>
    <li>{props.Lang==='SP'?'Viajes':'Travel'}</li>
    <li>Rugby</li>
    <li>{props.Lang==='SP'?'Leer':'Read'}</li>
    <li>{props.Lang==='SP'?'Dispositivos Tecnológicos':'Gadget'}</li>
    <li>{props.Lang==='SP'?'Tecnologia':'New technological developments'}</li>
    </ul>
    </>
    )
} 