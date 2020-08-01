/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../images/pages/register.jpg';
import bg from '../../images/HIT/asset2.png';
const useStyles = makeStyles(theme => ({
  notFound: {
    maxWidth: "520px",
    width: "100%",
    textAlign: "center",
    lineHeight: "1.4",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
   
    
    
  },
  h1Class: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "146px",
    fontWeight: "700",
    margin: "0px",
    color: "#232323"
  },
  spanClass: {
    display: "inline-block",
    width: "150px",
    height: "120px",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    zIndex: "-1"
  },
  h2Class: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "22px",
    fontWeight: "700",
    margin: "0",
    textTransform: "uppercase",
    color: "#232323"
  },
  pClass: {
    fontFamily: "'Montserrat', sans-serif",
    color: "#787878",
    fontWeight: "300"
  }
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <div>
        <h1 className={classes.h1Class}>4<span className={classes.spanClass} />4</h1>
      </div>
      <h2 lassName={classes.h2Class}>Oops! Page Not Be Found</h2>
      <p className={classes.pClass}>Sorry but the page you are looking for does not exist</p>
    </div>
  );
}
