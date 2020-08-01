import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import bg from '../../images/chat-bg-3.png';
import MaterialUIPickers from '../../components/Crud/datePicker/datepicker';
import NativeSelects from '../../components/Crud/select.js/index.js';
import RoleSelect from '../../components/Crud/select.js/roleselect';
import RadioButtonsGroup from '../../components/Ratio';
import GenderRatio from '../../components/Ratio/gender';


//=====================================
import { createUserAction, updateUserAction } from './actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import makeSelectMemberPage from './selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { createStructuredSelector } from 'reselect';
//====================================
// import makeSelectaddUserPage from './'

// import Switch from '@material-ui/core/Switch';
import {
  Grid,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import UploadImg from '../../components/Crud/upload/test';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "97%",
   
    
   
  },
  Dialog:{
    marginLeft: '50%',
    backgroundColor: '#f8fafc',
    // backgroundImage: `url(${bg})`
  },
  Toolbar: {
    background: "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))",
  },
 
  
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export function AddUserPage(props) {
  

  // console.log(props.isEditcheck);
  // if(props.isEditcheck){
  //   console.log(props.Editdatas)
  // }
  
  const [dob, setDob] = React.useState('2000/09/27');
 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [schoolClass, setSchoolClass] = useState('');
  const [faculty, setFaculty] = useState('');
  const [schoolYear, setSchoolYear] = useState('');
  const [clubYear, setClubYear] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [isFormer, setIsFormer] = useState(false);
  const [isActive, setIsActive] = useState('');

  useEffect(() => {

    if (props.isEditcheck && props.Editdatas) {
      
      setFullName(props.Editdatas.fullName);
      setEmail(props.Editdatas.email);
      setRole(props.Editdatas.role);
      setStudentCode(props.Editdatas.studentCode);
      setSchoolClass(props.Editdatas.class);
      setFaculty(props.Editdatas.faculty);
      setSchoolYear(props.Editdatas.schoolYear);
      setClubYear(props.Editdatas.clubYear);
      setPhone(props.Editdatas.phone);
      setAddress(props.Editdatas.address);
      setDob(props.Editdatas.dob);
      setPosition(props.Editdatas.position);
      setGender(props.Editdatas.gender);
      setIsActive(props.Editdatas.isActive);
      setBio(props.Editdatas.bio);
      setAvatar(props.Editdatas.avatar);
      setQrCode(props.Editdatas.qrCode);
      setIsFormer(props.Editdatas.isFormer);
    } else {
      setDob(new Date('2000/09/27'));
      setIsActive('');
      setIsFormer(false);
      setFullName("");
      setEmail("");
      setRole("");
      setStudentCode("");
      setSchoolClass("");
      setFaculty("");
      setSchoolYear("");
      setClubYear("");
      setPhone("");
      setAddress("");
      setPosition("");
      setGender("");
      setBio("");
      setAvatar("");
      setQrCode("");

    }
  }, []);

  function handleSubmit() {
    if (props.isEditcheck && props.Editdatas){
      props.onUpdateUser({  
        _id: props.Editdatas._id,    
        fullName ,
        email ,
        role ,
        studentCode ,
        class: schoolClass,
        clubYear ,
        faculty ,
        schoolYear ,
        phone ,
        address ,
        dob ,
        position ,
        gender ,
        isActive ,
        bio ,
        avatar ,
        qrCode ,
        isFormer ,
      });
    }else{
    props.onCreateUser({
      fullName ,
      email ,
      role ,
      studentCode ,
      class: schoolClass,
      clubYear ,
      faculty ,
      schoolYear ,
      phone ,
      address ,
      dob ,
      position,
      gender ,
      isActive ,
      bio ,
      avatar ,
      qrCode ,
      isFormer ,
    });
      clearData();
  }
    
    handleClose();

    console.log({
      ...{ fullName },
      ...{ email },
      ...{ role },
      ...{ studentCode },
      class: schoolClass,
      ...{ faculty },
      ...{ schoolYear },
      ...{ phone },
      ...{ address },
      ...{ dob },
      ...{ position },
      ...{ gender },
      ...{ isActive },
      ...{ bio },
      ...{ avatar },
      ...{ qrCode },
      ...{ isFormer },
    });
    
    function clearData() {
      setFullName('');
      setPhone('');
      setStudentCode('');
      setAddress('');
      setDob('2000/09/27');
      setPosition('');
      setSchoolClass('');
      setEmail('');
      setGender('');
      setFaculty('');
      setIsActive("");
      setRole('');
      setBio('');
      setAvatar('');
      setQrCode('');
      setIsFormer(false);
      setSchoolYear('');
      setClubYear('');
    }
    
}
// =============================================
//==============================================
//==============================================
  useInjectReducer({ key: 'addUserPage', reducer });
  useInjectSaga({ key: 'addUserPage', saga });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Icon className="fa fa-plus-circle" color="primary" onClick={handleClickOpen}></Icon> */}
      
      
    
     {props.isEditcheck ? <EditIcon onClick={handleClickOpen} />:<Tooltip title="Add"><Button  variant="outlined" color="primary" onClick={handleClickOpen}>
      Add
      </Button>
      </Tooltip>
}
      <Dialog className = {classes.Dialog} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <ValidatorForm onSubmit={handleSubmit}>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.Toolbar}  >
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cancel
            </Typography>
              <Button color="inherit" type='submit'  >
              save
            </Button>
          </Toolbar>
        </AppBar>

        <div className="p-2" style={{ height: '100%', paddingTop: '50px' ,width : '100%'}}>
          <Grid
            container
            spacing={12}
            className="p-2"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      value = {fullName}
                      onChange={e => setFullName(e.target.value)}
                      
                      label="Tên thành viên"
                      margin="normal"
                    /> 
                </Grid>
                  <Grid item xs={6}>
                    <TextValidator
                      // style={{ width: '100%' }}
                      className={classes.textField}
                      fullWidth
                      
                      label="Email"
                      variant="outlined"
                      validators={['required', 'isEmail']}
                      errorMessages={[
                        'Vui lòng nhập dữ liệu trường này',
                        'Email không hợp lệ',
                      ]}
                      value = {email}
                      onChange={e => setEmail(e.target.value)}
                      // onChange={handChangeUserInfor('email')}
                      // value={userInfor.email}
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    {/* <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Chức vụ"
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      onChange={e => setRole(e.target.value)}
                      value = {role}
                      margin="normal"
                    /> */}
                    <div className={classes.textField} style={{ marginTop: '7px' }}>
                      <RoleSelect onSelect={value => setRole(value)} role = {role}></RoleSelect>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Mã Sinh Viên"
                      validators={['required', 'isNumber']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này', 'Vui lòng nhập dữ liệu là số']}
                      onChange={e => setStudentCode(e.target.value)}
                      margin="normal"
                      value={studentCode}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Lớp"
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      onChange={e => setSchoolClass(e.target.value)}
                      margin="normal"
                      value={schoolClass}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Khoa"
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      onChange={e => setFaculty(e.target.value)}
                      margin="normal"
                      value = {faculty}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      label="Niên khoá CLB"
                      validators={['required', 'isNumber']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này', 'Vui lòng nhập kí tự số']}
                      onChange={e => setClubYear(e.target.value)}
                      margin="normal"
                      value = {clubYear}
                    // type="Number"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này',
                        'Vui lòng nhập kí tự số',
                      ]}
                      onChange={e => setSchoolYear(e.target.value)}
                      label="Khóa"
                      margin="normal"
                      value = {schoolYear}
                    // type="Number"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required',
                        'isNumber',
                        'minStringLength:10',
                        'maxStringLength:11',]}
                      errorMessages={['Vui lòng nhập dữ liệu trường này',
                        'Yêu cầu nhập kí tự số',
                        'Số điện thoại với 10 hoặc 11 kí tự số',
                        'Số điện thoại với 10 hoặc 11 kí tự số',]}
                      
                      label="Số điện thoại"
                      margin="normal"
                      onChange={e => setPhone(e.target.value)}
                      value={phone}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {/* <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Ngày Sinh"
                      margin="normal"
                    /> */}
                    
                      <MaterialUIPickers
                      onChangedate={value => setDob(value)}
                      initDate = {dob}
                      >

                      </MaterialUIPickers>
                  </Grid>

                  
                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      onChange={e => setAddress(e.target.value)}
                      label="Địa chỉ"
                      margin="normal"
                      value = {address}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      label="Vị trí"
                      margin="normal"
                      onChange={e => setPosition(e.target.value)}
                      value={position}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    {/* <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}

                      label="Giới tính"
                      margin="normal"
                    /> */}
                    <div className={classes.textField} >
                      <GenderRatio onRadio={value => setGender(value)}  gender = {gender} />
                    {/* <NativeSelects onSelect = {value => setGender(value)}></NativeSelects> */}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    {/* <TextValidator
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      label="IsActive"
                      margin="normal"
                      onChange={e => setIsActive(e.target.value)}
                      value = {isActive}
                    /> */}
                    <RadioButtonsGroup onRatio={value => setIsActive(value)} isActive = {isActive} />
                  </Grid>
                  
                  

                 
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={
                        <Switch
                          defaultChecked={isFormer}
                          onChange={e => setIsFormer(e.target.checked)}
                          value={isFormer}

                        />
                      }
                      label="Trạng thái (Cựu)"
                    />
                  </Grid>
                  

                  
                  

                  <Grid item xs={12}  >
                    <TextValidator                     
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                      validators={['required']}
                      errorMessages={['Vui lòng nhập dữ liệu trường này']}
                      label="Giới thiệu ngắn "
                      margin="normal"
                      onChange = {e => setBio(e.target.value)}
                      value = {bio}
                      
                    />
                  </Grid>

                  {/* <FormControlLabel
                    control={
                      <Switch checked={true}  />
                    }
                    label="Secondary"
                  /> */}
                  

                  <Grid item xs={5}
                  style = {{paddingTop: '50px'}}
                    
                  >
                    <UploadImg 
                      name ='Avatar'
                      onFiles={value => setAvatar(value)}
                      value = {avatar}
                      
                      
                    />
                      
                  </Grid>
                  <Grid item xs={2}
                  >
                    

                  </Grid>
                  
                  <Grid item xs={5}
                    style={{ paddingTop: '50px' }}>
                    <UploadImg name='QR Code' onFiles={(value) => setQrCode(value)}/>                 
                  </Grid>                                 
              </Grid>
            </Grid>
          </Grid>
          </div>
        </ValidatorForm> 
        
      </Dialog>
    </div>
  );
}


AddUserPage.propTypes = {
  classes: PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  addUserPage: makeSelectMemberPage(),
});


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // onGetUsers: query => dispatch(getUsers(query)),
    onCreateUser: newUser => dispatch(createUserAction(newUser)),
    onUpdateUser: newUser => dispatch(updateUserAction(newUser)),
    
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  // withStyles(styles),
  withConnect,
)(AddUserPage);
