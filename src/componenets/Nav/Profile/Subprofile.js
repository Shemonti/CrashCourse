import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import '../Table1/Subtable.css';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
});


const Subprofile = (props) => {
    
    const {picture,company,description}=props.dat
    const classes = useStyles();
    return (
        <div className='subtble'>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {company}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Link to='/table2'>
        <Button size="small" color="primary">
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
    );
};

export default Subprofile;