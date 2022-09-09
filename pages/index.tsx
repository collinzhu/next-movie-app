import type { NextPage } from 'next'
import React, { useEffect, useState } from "react";

import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import MediaCard from "./Componnents/MediaCard";
import SearchBar from './Componnents/SearchBar';
import Header from './Componnents/Header';

interface IState{
  id:any;
  title:any;
  year:any;
  poster:any;
  genre:any;
  descriptions:any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
 
    outside: {
      backgroundColor:"white"

    },
  })
);
const Home: NextPage = () => {
  const classes = useStyles();
  const [ItemArray, setItemArray] = useState<IState[]>([{title: "",year: "",poster:"",id:"", genre:"",descriptions:""}])
  const updateMovie = async () =>{
      console.log("updatemovie called")
      await fetch('https://mymoviesapi.azurewebsites.net/api/Movies')
      .then(response => response.json())
      .then(res => {
          setItemArray(res);
      })
      .catch(() => console.log("it didn't work")
      );

  }
  useEffect(() => {
      updateMovie();
  },[]);
  var Cards: JSX.Element[] = [];
  ItemArray?.forEach((el: IState, i: Number) => {
    if (!el || !el.title || !el.poster||!el.year) {
        return;
    }
    Cards.push(
        <Grid key={"card_"+i} item xs ={10} sm={6} md={2} className="MediaGridCard">
            <MediaCard updateMovie={() =>updateMovie()} Id={el.id} Title = {el.title} Year = {el.year} Poster = {el.poster} Genre ={el.genre} Description ={el.descriptions}/>
        </Grid>)
})
  return (
    
    <div className="outside">
      <Header></Header>
            <SearchBar updateMovie={() =>updateMovie()}></SearchBar>
      <Grid container spacing={3} className="MediaGridContainer">
        {Cards}
      </Grid>

    </div>
  )
}

export default Home
