import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MovieDetail from './MovieDetail';


interface IMediaCardProps {
    Id:string | undefined;
    Poster: string | undefined;
    Title: string | undefined;
    Year:string | undefined;
    Genre: string | undefined;
    Description: string | undefined;
    updateMovie: ()=>void;

}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
     [theme.breakpoints.up('xl')]: {
        width:300,
        height:380,
      },
      justifyContent:"middle",
     
      height:290,
      width:210
    },
    cardImage:{
      [theme.breakpoints.up('xl')]: {
        width:250,
        height:350,
      },
      marginLeft:20,
      width:210,
      height:250

    },
    cardContent:{
        paddingTop: 0,
        paddingLeft:0
    },
    movieTitle:{
        fontSize:18,
        fontFamily:"Arial, Helvetica, sans-serif",
        marginTop:0,
        marginBottom:0,
        marginLeft:18,
        fontWeight:550
    },

    menuButton: {
      marginRight: theme.spacing(2),
      color:"white"
    },
    title: {
      flexGrow: 1,
      color:"white",
      position:"relative",
      left:"40%",
      fontSize:20,
      [theme.breakpoints.down('sm')]: {
        left:"20%",
        fontSize:15
      },
     
    },
  })
);

function MediaCard(props: IMediaCardProps) {
    const [show, setShow] = useState(false);
    const classes = useStyles();
    return (
          <div>
            {show && <MovieDetail updateMovie={props.updateMovie} handleClose = {()=>setShow(false)}
            Id={props.Id} Title = {props.Title} Year = {props.Year} Poster = {props.Poster} Genre ={props.Genre} descriptions ={props.Description}/>}
            {/* {show && <movieDetail handleClose = {()=>setShow(false)}/>} */}
            <Card className={classes.card}>

            
                <CardActionArea 
                  onClick={()=>setShow(true)}
                >
             
                    <CardMedia className = {classes.cardImage}
                        component="img"
                        image={props.Poster}
                    />
                    <CardContent className = {classes.cardContent}>
                        <p className = {classes.movieTitle}>{props.Title}</p>
              
                    </CardContent>
                  
                </CardActionArea>
            </Card>
          </div>
    
    )
}

export default MediaCard