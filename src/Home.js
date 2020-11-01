import FotoCv from './FotoCV.png';
import CVP from './CV.pdf'
import CVW from './CV.docx'
import word from './Word.svg'
import wordD from './WordD.svg'
import pdf from './PDF.svg'
import pdfD from './PDFD.svg'
import Button from '@material-ui/core/Button';

const Home =(props) =>(
<div className={props.darkH==='dark'?'AppD':"App"}>
<img src={FotoCv} alt="Foto CV" className='foto'/>
<h1 style={{textAlign:'center', marginTop:'3%'}} id='titleh'><u>{props.Lang==='SP'?'DESCARGAR':'DOWNLOAD'}</u></h1>
<div id='home'>
<div className='descarga'>
<img style={{width:'100px'}} src={props.darkH==='dark'?pdfD:pdf} alt="PDF"/>
<Button style={{marginBottom:'3%'}} variant="outlined" color="primary">
<strong> <a style={{textDecoration:'none'}} href={CVP} download="CV  - Ezequiel Yacar.pdf">{props.Lang==='SP'?'DESCARGAR':'DOWNLOAD'} </a> </strong>  
</Button>
</div>
<div className='descarga'>
<img style={{width:'130px'}} src={props.darkH==='dark'?wordD:word} alt="WORD"/>
<Button variant="outlined" color="primary">
<strong><a style={{textDecoration:'none'}} href={CVW} download="CV - Ezequiel Yacar.docx">{props.Lang==='SP'?'DESCARGAR':'DOWNLOAD'} </a> </strong>  
</Button>
</div>
</div>
<div style={{width:'30%', height:'50px'}}></div>
</div>);

export default Home;