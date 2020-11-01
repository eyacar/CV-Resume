import './Skills.scss';

export default function Language(props){
    return(
    <>
    <h1 className='head'>{props.Lang==='SP'?'Idiomas':'Languages'}</h1>
    <div className='hobbies'>
    <h2 style={{display:'block', width:'100%'}}>{props.Lang==='SP'?'Ingles - Avanzado':'English - Advanced'}</h2>
    <h2 style={{display:'block',width:'100%'}}>{props.Lang==='SP'?'Español - Nativo':'Spanish - Native'}</h2>
    </div>
    </>
    )
} 