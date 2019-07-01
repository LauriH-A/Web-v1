import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid,CardActionArea,CardMedia,CardContent,Typography,CardActions,Card} from '@material-ui/core'

import BotonCalificar from './BotonCalificar';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 550,
  },
});




function GrillaPeliculas(props) {
 

  const { classes } = props;
  console.log("props",props);
  
   //console.log("tileDAta", tileData); 
   const tileData =props.grilla;
  console.log(tileData)
  
  
   return (
    
    

    <div className={classes.root}>
    
      <Grid container className={classes.gridList}>
        {tileData.map(tile => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={tile.img} 
                title={tile.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {tile.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {tile.author}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BotonCalificar pelicula={tile.title}/>
            </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

GrillaPeliculas.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(GrillaPeliculas);