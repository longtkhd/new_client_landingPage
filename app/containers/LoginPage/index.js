import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// inject
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import makeSelectSignIn from './selectors';
import reducer from './reducer';
import saga from './saga';
import { login, logOut } from './actions';
// import bg from '../../images/pages/login.jpg'
// import logo from '../../images/logos/LogoHIT.png'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import CustomizedSnackbars from '../../components/SnackBar/index'
import { closeSnackbar} from '../MemberPage/actions';
import logo from '../../assets/img/home/asset2.png';
import LockOpenIcon from '@material-ui/icons/LockOpen';



// import logo from '../../images/logos/LogoHIT.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style = {{bottom:0}}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Hit Club
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
    root: {
    // backgroundImage: `url(${bg})`,

   
    height: '100%',
    },
 
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function SignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {

    const isAuth = localStorage.getItem('isAuthenticated');
    if ( isAuth) {
      console.log(props.singIn);
      
      props.history.push('/admin/dashboard');
    }
  }), [props.signIn.isLoading];

  useEffect(() => {  
    const isAuth = localStorage.getItem('isAuthenticated');
    if (props.signIn.logined || isAuth) {
      props.history.push('/admin');
      props.dispatch(logOut());
    }
  }), [];

  
  

  const handleSubmit= (event) => {
    
    props.onLogin(email, password);
    event.preventDefault();


    
  };
  return (
    
    
    
    <Container component="main" maxWidth="xs" >
      {/* <CustomizedSnackbars open={memberPage.status} message={memberPage.message} onClose={props.onCloseSnackbar} /> */}
      
      
      
      <CssBaseline className={classes.Container}/>
        
      <div className={classes.paper}>
        
        
        
        <ValidatorForm onSubmit={handleSubmit} />
        
        

        <Link className={classes.logoLink} to="/">
        {/* <img align="center"
          className={classes.logoImage}
          // src="/images/logos/brainalytica_logo.svg"
          alt="anh"
          src={logo}
          style={{ width: "80px" ,marginRight:'10px'}}
        /> */}
          <LockOpenIcon fontSize='large' color= "action"/> 
          {/* <FavoriteTwoToneIcon color='secondary' align="center"/> */}
      </Link>
       
         
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your Email"
            name="email"
            onChange={() => {
              setEmail(event.target.value);
            }}
            value={email}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={() => {
              setPassword(event.target.value);
            }}
            value={password}
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      
    </Container>
    
    
  );
}
SignIn.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,

  signIn: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  signIn: makeSelectSignIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLogin: (email, password) => dispatch(login(email, password)),
    // onCloseSnackbar: () => dispatch(closeSnackbar()),

  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'signIn', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignIn);
