
import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import dashboardImg from '../../images/HIT/Hit.jpg'
import welcomeImg from '../../images/HIT/chaomunghit.png';
import welcomImg1 from'../../images/HIT/asset4.png'
// import UserChart from './component/userPieChart';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMemberPage from '../MemberPage/selectors';
import reducer from '../MemberPage/reducer';
import saga from '../MemberPage/saga';
import { getAllUserAction} from '../MemberPage/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Demo from './component/rotated'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export  function DashboardPage(props) {
  useInjectReducer({ key: 'memberPage', reducer });
  useInjectSaga({ key: 'memberPage', saga });
  const { memberPage } = props;
  useEffect(() => {
    props.onGetUsers({
      filter: {
        role: 'admin',
      },
    });
    console.log(memberPage)

  }, []);
  const classes = useStyles();

  return (
    <div>
      {/* <Typography variant="subtitle1" gutterBottom>
        
      </Typography> */}
      <Grid container spacing={3}>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
        <Grid item xs={8}>
          {/* <Paper className={classes.paper}>xs=8</Paper> */}
          <Demo/>
        </Grid>
        <Grid item xs={4}>
        {/* <UserChart/> */}
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>
       Chart
      </Typography>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 8' }}>
          <Paper className={classes.paper}>xs=8</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
      </div>
    </div>
  );
}

// const countActive = () => {
//   for(let i = 0 ;i<props.memberPage.users.length;i++){
      
//   }

// }

const mapStateToProps = createStructuredSelector({
  memberPage: makeSelectMemberPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,   
    onGetUsers: body => dispatch(getAllUserAction(body)),
    
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  // withStyles(styles),
  withConnect,
)(DashboardPage);

