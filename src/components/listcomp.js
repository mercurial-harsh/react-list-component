import React,{useState} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'






const Listcomp=(props)=> {
  const copy=[...props.lists]
  const [ list, setList ] = useState(copy)



  
  console.log(list)


  return (
    



      <React.Fragment >
        <Grid direction ="column" sm="4">
          <Container maxwidth="xs">
          <Typography>
            {props.title}
          </Typography>
          <Paper elevation='6'>
          
          <List >
          { list.map((p)=>
            
            <ListItem>
              <ListItemText
                primary={p}
                
              />
              </ListItem>)
            }         
         
            
            {/* <ListItem>
              <ListItemText
                primary="lalaji"
              />

            </ListItem> */}
          </List>
          </Paper>
          </Container>
        </Grid>
        
      </React.Fragment>


    
  );
}

export default Listcomp;