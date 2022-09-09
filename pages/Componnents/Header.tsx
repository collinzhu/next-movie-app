import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar:{
      position:"static",
      backgroundColor:"black",
      height:"50"

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

export default function Header() {
    const classes = useStyles();
    const [sideBar, setSideBar] = useState(false);
    const toggleSideBar = () => {
      setSideBar(!sideBar);
    };  
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              edge="start"
              aria-label="menu"
              onClick={toggleSideBar}
            >
              <MenuIcon />
              <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                  {/* <SideBar /> */}
              </Drawer>
            </IconButton>
            <Typography className={classes.title}>
              My movie collection
            </Typography>
            </Toolbar>
        
        </AppBar>
      </div>
    );
  }