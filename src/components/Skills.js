import React from 'react';
import './Components.scss';
import './ComponentsDark.scss';
import './Skills/Skills.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import LanguageIcon from '@material-ui/icons/Language';
import Language from './Skills/Language'
import Dev from './Skills/Developer'
import Hobbies from './Skills/Hobbies'
import {grey} from '@material-ui/core/colors';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div className='Sdark'
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }  

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Skils(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={props.darkS==='dark'?'AppD':"App"}>
    <Paper className={classes.root + ' Sdark'} >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab style={{margin:'0 auto'}} icon={<DevicesOtherIcon style={props.darkS==='dark'?{ color: grey[100]}:null} />} {...a11yProps(0)}/>
        <Tab style={{margin:'0 auto'}} icon={<LanguageIcon style={props.darkS==='dark'?{ color: grey[100]}:null}/>} {...a11yProps(1)} />
        <Tab style={{margin:'0 auto'}} icon={<BeachAccessIcon style={props.darkS==='dark'?{ color: grey[100]}:null}/>} {...a11yProps(2)} />
      </Tabs>
    </Paper>
    <TabPanel className='StyleSheet' value={value} index={0}>
        <Dev dark={props.darkS==='dark'?true:null} Lang={props.Lang==='SP'?'SP':null}/>
      </TabPanel>
      <TabPanel className='StyleSheet' value={value} index={1}>
      <Language Lang={props.Lang==='SP'?'SP':null}/> 
      </TabPanel>
      <TabPanel className='StyleSheet' value={value} index={2}>
        <Hobbies Lang={props.Lang==='SP'?'SP':null}/>
      </TabPanel>
      <div style={{width:'30%', height:'40px'}}></div>
    </div>
  );
}