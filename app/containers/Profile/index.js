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
import { BASE_URL } from '../../urlConfig';
import logo from '../../images/logos/LogoHitWhite.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import moduleName from './profile.css';
// import styles from './styles';
// const useStyles = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  imgs: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: "cover",

  },
  github: {
    marginLeft: "auto",
    color: "white,"

  },


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




    <div className="wrapper">
      <section className="wrapper-header">
        <img src={logo} alt="" style={{ width: "100px" }} />
        <span className="Path">Home / Profile</span>
      </section>
      <section className="wrapper-content">
        <div className="wrapper-content_Infor">
          <div className="content_Infor-overview">
            <center><h1 style={{ marginTop: "2%", fontSize: "2rem" }}>{user ? user.position : null}</h1></center>
            <div className="content_Infor-img">


              <img className={classes.imgs}
                src={user ? `${BASE_URL}/avatar/${user.avatar}` : null}

              />


            </div><br />
            <h3 style={{ textAlign: "center", fontSize: "30px", lineHeight: "2" }}>{user ? user.fullName : null}</h3>
            <center><h5 style={{ color: "gray" }}>{user ? user.bio : null}</h5></center>
          </div>
          <div className="content_Infor-details">
            <div class="Infor-details_left">
              <ul>
                {/* <li><i class="fas fa-phone-alt"></i> Số điện thoại: <span>{user ? user.phone : null}</span></li> */}
                <li><EmailIcon></EmailIcon> Email: <span>{user ? user.email : null}</span></li>
                {/* <li><i class="fas fa-birthday-cake"></i> Ngày sinh: <span>{user ? new Date(user.dob).toLocaleDateString('en-GB') : null}</span></li> */}
                <li><MenuBookIcon></MenuBookIcon> Khoa: <span>  {user ? user.faculty : null}</span></li>
              </ul>
            </div>

            <div class="Infor-details_right">
              <ul>

                <li><GroupWorkIcon></GroupWorkIcon> Lớp: <span>  {user ? user.class : null}</span></li>
                <li><LocalActivityIcon></LocalActivityIcon> Khóa: <span>{user ? user.schoolYear : null}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper-footer">
        <div className="wrapper-footer_license">
          Copyright © 2020
        <a href="https://hithaui.com/">HIT Club</a>
        </div>
        <div className="wrapper-footer_socical">
          <a href="https://github.com/hit-haui" target="_blank" clasName="text-light " ><GitHubIcon className={classes.github}></GitHubIcon></a>
          <a href="https://www.facebook.com/HITClub.HaUI" target="_blank"><FacebookIcon></FacebookIcon></a>

        </div>

      </section>
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