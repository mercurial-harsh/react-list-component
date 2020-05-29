import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

function listcomp(title) {
    return (
        <div >
       
       <Grid item xs={12} md={6}>
          <Typography variant="h6" >
            {title}
          </Typography>
          <div >
            <List >
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </div>
    );
  }

export default listcomp;