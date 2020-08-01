import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "3px solid transparent",
    color:"#7c4dff",
  

  },
  
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          
      <CircularProgress />
      </div>
    
 
  );
}
