import React, { useState } from 'react';
import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core';

import axios from 'axios';


//Read the URL from the userinput
//call the post method in the handleSubmit funtion
//add a movie in the data array
interface ISearchBar{
    updateMovie:()=>void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    SearchBar:{
        marginTop:20,
    },
 
    addButton: {
        marginTop:20,
        color:"white",
        backgroundColor:"black",
        
    },
  })
);
function SearchBar(props:ISearchBar) {
    const classes = useStyles();

    const [input, setInput] = useState<string | undefined>("");
    const handleInputChange = (s:string|undefined) =>{
        setInput(s);
    }

    const handleSubmit = async () =>{
       console.log("submit called")
        let ok = {
            url:input
        }
      
        await axios.post('https://mymoviesapi.azurewebsites.net/api/Movies', ok)
        .then(() =>{
            console.log("added a movie")
            props.updateMovie();
        })
    }
    return <div >
    <Grid container spacing={3}>
        <Grid item xs={7}>
            <TextField className={classes.SearchBar}
                fullWidth = {true}
                required
                placeholder = "Movie URL" 
                value = {input}
                onChange = {e => handleInputChange(e.target.value)}
 
   
            />
        </Grid>
        <Grid item xs={3} >
            <Button className={classes.addButton} type='button'  onClick = {handleSubmit}>
                Submit
            </Button>
        </Grid>
    </Grid>
</div>



}

export default SearchBar