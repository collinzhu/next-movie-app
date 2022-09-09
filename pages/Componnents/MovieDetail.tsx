import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextareaAutosize } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';

interface Input{
    imdbRatings:any;
    descriptions:any;
}
interface IMovieDetail{
    updateMovie:()=>void;
    handleClose:()=>void;
    Id:string | undefined;
    Poster: string | undefined;
    Title: string | undefined;
    Year:string | undefined;
    Genre: string | undefined;
    descriptions: string | undefined;
}

function MovieDetial(props:IMovieDetail) {
    const ok = (props.descriptions)?.toString();
    const [editing, setEditing] = useState(false);
    const [input, setInput] = useState(ok);
    const handleEdit = () =>{
        setEditing(true);

    }
    const handleInput = (s:string|undefined) => {
        setInput(s);
    }

    const handleDelete = async() =>{
        if(window.confirm('Are you sure to delete this event?')){
           await axios.delete(`https://mymoviesapi.azurewebsites.net/api/Movies/${props.Id}`)
        .then(() =>{
            props.updateMovie();
            console.log("delete a movie")
        })
        }
    }
    const enableSave = () =>{
        if(editing){
            return false;
        }
        return true;
    }
    const handleSave = async () =>{
        var haha:Input = {
            imdbRatings:"9.9",
            descriptions:input
        }
        await axios.put(`https://mymoviesapi.azurewebsites.net/api/Movies/${props.Id}`, haha)
        .then(() =>{
            props.updateMovie();
            console.log("movie edited")
        })

        setEditing(false);
    }


    return (
        <Dialog maxWidth = 'xs' fullWidth
     open = {true} onClose = {props.handleClose}>
        <DialogTitle> 
            <p>{props.Title}</p>

            <p>{props.Genre}</p>
            {editing ?
        (<div>
            <TextareaAutosize
                required
                placeholder = "Comments" 
                value={input}
                onChange = {e => handleInput(e.target.value)}
                style={{ width: 390, height: 100}}
                />
        </div>):(<p>{props.descriptions}</p>) }

            
        </DialogTitle>
        <form >
            <DialogContent style={{height:'250px'}}>

                
            </DialogContent>
            <DialogActions>
                <Button type="button" onClick = {handleEdit}>Edit</Button>
                <Button type="button" disabled = {enableSave()} onClick = {handleSave}>Save</Button>
                <Button type="button" onClick = {handleDelete}>Delete </Button>
            </DialogActions>
        </form>

    </Dialog>

    
    );
}

export default MovieDetial;