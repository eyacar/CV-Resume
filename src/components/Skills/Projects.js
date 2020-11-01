import React, { useEffect } from "react";
import './Skills.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Git from './Dev/GitQR.svg'
import App from './Dev/AppTemplateQr.svg'
import SearchB from './Dev/SearchQr.svg'
import Currency from './Dev/CurrencyQr.svg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '2% 5%'
  },
});

export default function Projects(props) {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({
    delay: 200,
    duration: 2000,
    once: false, 
    });
    AOS.refresh();
    });
  return (
    <div >
    <h1 className='head'>{props.Lang==='SP'?'Proyectos':'Projects'}</h1>
    <div data-aos="flip-right" id='cards'>
    <Card className={classes.root + ' Pdark'}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="GitHub - Repositories"
          image={Git}
          title="GitHub - Repositories"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Github
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.Lang==='SP'?'Github - Todos los Repositorios':'GitHub - Repositories, All my projects'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{margin:'auto'}} size="small" color="primary" href='https://github.com/eyacar?tab=repositories' target="_blank" rel="noreferrer">
          LINK
        </Button>
        </CardActions>
    </Card>
    <Card className={classes.root + ' Pdark'}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="App Template"
          
          image={App}
          title="App Template"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            App Template
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.Lang==='SP'?'Modelo de App que realice, deploy con Heroku ':'App Template deployed with Heroku'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{margin:'auto'}} size="small" color="primary" href='https://app-template-reactjs.herokuapp.com/' target="_blank" rel="noreferrer">
          LINK
        </Button>
        <Button style={{margin:'auto'}} size="small" color="primary" href='https://github.com/eyacar/AppTemplateReact' target="_blank" rel="noreferrer">
          CODE
        </Button>
        </CardActions>
    </Card>

    <Card className={classes.root + ' Pdark'} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Search Book App"
          image={SearchB}
          title="Serch Book App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            App - Search Book
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.Lang==='SP'?'Proyecto de App busqueda de libros en Api, deploy con Vercel':'Search book App deployed with Vercel'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{margin:'auto'}} size="small" color="primary" href='https://book-search-1iyq6r5kr.vercel.app/' target="_blank" rel="noreferrer">
          LINK
        </Button>
        <Button style={{margin:'auto'}} size="small" color="primary" href='https://github.com/eyacar/Proyecto-BusquedaLibros' target="_blank" rel="noreferrer">
          CODE
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root + ' Pdark'} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Currency Converter"
          image={Currency}
          title="Currency Converter"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            App -- Currency Converter  
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.Lang==='SP'?'Proyecto Proyecto casa de cambio (información obtenida Api dolar hoy), deploy con Vercel':'Currency Converter App deployed with Vercel'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{margin:'auto'}} size="small" color="primary" href='https://currency-snowy.vercel.app/' target="_blank" rel="noreferrer">
          LINK
        </Button>
        <Button style={{margin:'auto'}} size="small" color="primary" href='https://github.com/eyacar/Currency-Converter' target="_blank" rel="noreferrer">
          CODE
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}