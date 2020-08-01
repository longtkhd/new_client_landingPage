import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import test from '../../assets/img/avatar/longtkhd.jpg'
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import WcIcon from '@material-ui/icons/Wc';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getUserById, getUserByIdSuccess, getUserByIdFailed } from './actions';
import { BASE_URL } from '../../urlConfig'
// import styles from './styles';
// const useStyles = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  imgs: {
    width: '100%',
    height: 'auto',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: 0,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  about: {
    textAlign: 'left',
    paddingTop: theme.spacing(1),

  },
  header: { position: "absolute", width: "100%", top: 0, zIndex: -99999 },
  logo: {
    padding: 10,
    marginTop: 20,
    marginBottom: 100,
    display: "flex",
    justifyContent: "center"
  },
  helloBox: {
    color: "#3d4451",
    marginBottom: "25px",
    borderBottom: "1px solid #dedede"
  },
  hello: {
    marginBottom: "28px",
    background: "orange",
    width: 80,
    padding: 5,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    position: "relative"
  },
  logImg: {
    maxWidth: "100%",
    maxHeight: "40px"
  },
  content: {
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  infomationBox: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    },
    padding: "40px 50px 15px",
    background: "#FFFFFF"
  },
  avatar: {
    // display: "flex",
    // justifyContent: "center",
    // textAlign: "center",
    padding: "0 20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20
    }
  },
  list: { margin: "0", padding: "0", listStyle: "none" },
  listItem: {
    marginBottom: "13px"
  },
  bottomBar: {
    background: "orange",
    height: 50,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  bioBox: {
    marginTop: 50,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  bio: {
    padding: 20,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  footer: {
    background: "#FF9801",
    width: "100%",
    marginTop: "100px",
    padding: "30px 0"
  },
  footerText: {
    display: "flex",
    justifyContent: "center",
    fontSize: "25px",
    fontWeightL: "bold",
    color: "white"
  },
  "@media (max-width: 767px)": { infomationBox: { width: "90%" } }

}));

export function Profile(props) {
  const classes = useStyles();
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });
  const { profile } = props;
  const user = props.profile.users;
  // console.log(user._id)
  // console.log(`${BASE_URL}`)
  const id = props.match.params.id;
  console.log(props.profile)

  useEffect(() => {

    props.onGetUsersId(id);



  }, []);
  console.log(props.profile)

  return (
    // <div className={classes.root}>
    //   <Grid container spacing={3}>
    //     {/* <Grid item xs={12}>
    //       <Paper className={classes.paper}>xs=12</Paper>
    //     </Grid> */}
    //     <Grid item xs={4}>

    //         <Card className={classes.root}>
    //           <CardActionArea>
    //             <CardMedia
    //               className={classes.media}
    //             image={`${BASE_URL}/user/${props.match.params.id}/avatar/large`}

    //               title="Contemplative Reptile"
    //             />
    //             <CardContent>
    //               <Typography gutterBottom variant="h5" component="h2">
    //                 {profile.users.fullName}
    //       </Typography>
    //               <Typography variant="body2" color="textSecondary" component="p">
    //               {profile.users.bio}
    //       </Typography>
    //             </CardContent>
    //           </CardActionArea>
    //           <CardActions>
    //             <Button size="small" color="primary">
    //               Follow
    //     </Button>
    //             <Button size="small" color="primary">                 Message
    //     </Button>
    //           </CardActions>
    //         </Card>                    
    //     </Grid>

    //     <Grid item xs={8}>
    //       <Paper className={classes.paper}> 
    //         More
    //       </Paper>       

    //     </Grid>
    //     <Grid item xs={4}>

    //         <Paper className={classes.paper}>

    //           <Typography gutterBottom variant="h5" component="h2" className={classes.about}>
    //             About
    //       </Typography>
    //           <Typography color="textSecondary" component="h1" className={classes.about} >
    //           <HomeIcon /> Live in : { profile.users.address }
    //         </Typography>
    //           <Typography color="textSecondary" component="h1" className={classes.about}>
    //           <EmojiPeopleIcon /> Age : {profile.users.dob}
    //         </Typography>
    //           <Typography color="textSecondary" component="h1" className={classes.about}>
    //             <StayCurrentPortraitIcon />  Phone : {profile.users.phone}
    //         </Typography>
    //           <Typography color="textSecondary" component="h1" className={classes.about}>
    //           <WcIcon />  Gender : {profile.users.gender}
    //         </Typography>



    //       </Paper>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <Paper className={classes.paper}>Skill</Paper>
    //     </Grid>

    //   </Grid>
    // </div>

    <div>
      <img src={require('../../images/HIT/hitbg.jpg')} className={classes.header} />
      <div className={classes.logo}>
        <img
          className={classes.logImg}
        // src={require('../../images/chat-bg-3.png')}
        />
      </div>
      <Grid container className={classes.content}>
        <Grid item lg={12} className={classes.infomationBox}>
          <Grid container lg={12}>
            <Grid item lg={5} sm={12} className={classes.avatar}>
              <img className={classes.imgs}
                src={user ? `${BASE_URL}/avatar/${user.avatar}` : null}
                alt={user ? user.fullName : null}
              />
            </Grid>
            <Grid item lg={7} sm={12}>
              <div className={classes.helloBox}>
                <div className={classes.hello}>HELLO</div>

                <Typography variant="h4" style={{ paddingBottom: 10 }}>
                  Tôi là : {user ? user.fullName : null}
                </Typography>
              </div>
              <Grid container className={classes.list}>
                <Grid container xs={12} className={classes.listItem}>
                  <Grid item lg={4} sm={12}>
                    Ngày Sinh :
                  </Grid>
                  <Grid item lg={8} sm={12}>
                    {user ? new Date(user.dob).toLocaleDateString('en-GB') : null}
                  </Grid>
                </Grid>
                <Grid container xs={12} className={classes.listItem}>
                  <Grid item lg={4} sm={12}>
                    Địa chỉ :
                  </Grid>
                  <Grid item lg={8} sm={12}>
                    {user ? user.address : null}
                  </Grid>
                </Grid>
                <Grid container xs={12} className={classes.listItem}>
                  <Grid item lg={4} sm={12}>
                    Email :
                  </Grid>
                  <Grid item lg={8} sm={12}>
                    <a href={`mailto:${user ? user.email : null}`}>
                      {user ? user.email : null}
                    </a>
                  </Grid>
                </Grid>
                <Grid container xs={12} className={classes.listItem}>
                  <Grid item lg={4} sm={12}>
                    Số điện thoại :
                  </Grid>
                  <Grid item lg={8} sm={12}>
                    <a href={`tell:${user ? user.phone : null}`}>
                      {user ? user.phone : null}
                    </a>
                  </Grid>
                </Grid>
                <Grid container xs={12} className={classes.listItem}>
                  <Grid item lg={4} sm={12}>
                    Khoa :
                  </Grid>
                  <Grid item lg={8} sm={12}>
                    {user ? user.faculty : null}
                  </Grid>
                </Grid>
                <Grid container xs={12} className={classes.listItem}>
                  <Grid item lg={4} sm={12}>
                    Khoá :
                  </Grid>
                  <Grid item lg={8} sm={12}>
                    {user ? user.schoolYear : null}
                  </Grid>
                </Grid>
                <Grid container xs={12} className={classes.listItem}>
                  <Grid item lg={4} sm={12}>
                    Vị trí :
                  </Grid>
                  <Grid item lg={8} sm={12}>
                    {user ? user.position : null}
                  </Grid>
                </Grid>
                <Grid container lg={12} className={classes.listItem}>
                  <Grid item lg={4} sm={12}>
                     Khoá :
                  </Grid>
                  <Grid item lg={8} sm={12}>
                    {user ? user.clubYear : null}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.bottomBar} />
        a
      </Grid>
      <div className={classes.bioBox}>
        <Typography variant="h4" gutterBottom>
          Giới Thiệu
        </Typography>
        <Paper className={classes.bio}>
          <Typography variant="subtitle1" gutterBottom>
            {user ? user.bio : null}
          </Typography>
        </Paper>
      </div>
      <footer className={classes.footer}>
        <span className={classes.footerText}> Powered By HIT CLUB</span>
      </footer>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,

    onGetUsersId: id => dispatch(getUserById(id)),



  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  // withStyles(styles),
  withConnect,
)(Profile);