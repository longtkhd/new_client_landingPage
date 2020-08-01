import React from 'react';
import{ useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import EditIcon from '@material-ui/icons/Edit';
// import EditUser from '../EditUser'; // =============Edit
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMemberPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getAllUserAction, deleteUsers, closeSnackbar} from './actions';
import AddUserPage from '../AddUserPage/index';
import DialogAlert from '../../components/DialogAlert';
import {BASE_URL} from '../../urlConfig'
import Chip from '@material-ui/core/Chip';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
// import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

import CustomizedSnackbars from '../../components/SnackBar/index'
// import { Delete} from '@material-ui/icons'

// import  DialogMember from '../../components/DialogMember/index';

import {
  
  TextField,
} from '@material-ui/core';



// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }



function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
  
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'fullName', numeric: false, disablePadding: false, label: 'Full Name' },
  { id: 'phone', numeric: true, disablePadding: false, label: 'Phone' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'class', numeric: true, disablePadding: false, label: 'Class' },
  { id: 'schoolYear', numeric: true, disablePadding: false, label: 'School Year' },
  { id: 'isFormer', numeric: true, disablePadding: false, label: 'Status' },
];

function EnhancedTableHead(props) {
 
  
  
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell 
            key={headCell.phone}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.Phone ? order : false}
          >
          
            <TableSortLabel align="right"
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <b align="right">{headCell.label}</b>
              
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
              

            </TableSortLabel>
            {/* <TextField id="standard-basic" label="Search" /> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(1)
  },
}));


const EnhancedTableToolbar = props => {
 
  console.log('test click')
  const [open, setOpen] = useState(true);

  const classes = useToolbarStyles();
  const { numSelected } = props;
  const { selectedId} = props;
  
  const handDeletess = value => { 
    // console.log(props.propsfake);
    // console.log({ id: value });
    props.propsfake.onDeleteUsers({ id: value });
  };

  

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle">
        {/* HIT Users */}
        </Typography>
        )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          
            
          <DialogAlert
          // onClick = {console.log(numSelected)}
            // icon={<DeleteIcon />}
            // style={{ marginBottom: '50px' }}
            onResetSelected={props.handleReset}
            // numSelected={props.isSelected}
            value={selectedId[0]}
            onAccept={() => {
              handDeletess(selectedId[0]);
            }}


            message="
                          Bạn có muốn xoá thành viên này"
          />
          
        </Tooltip>
        
      ) : (
          <Tooltip title="Thêm Mới">
            <AddUserPage isEditcheck={false} ></AddUserPage>
            
          </Tooltip>
        )}
      
      
    </Toolbar>
  );
};
 

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  content: {
    padding: 0
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
}));


export  function MemberPage(props) {

  // const handDelete = value => {
  //   props.onDeleteUsers({ id: value });
  //   console.log({ id: value });
  //   console.log(props);
  // }; if u want to delete near edit

 
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const [isEdit, setEdit] = useState(false);
  //==================================
  //===================================
  //  console.log(props.memberPage.users);
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  
  
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  useInjectReducer({ key: 'memberPage', reducer });
  useInjectSaga({ key: 'memberPage', saga });
  const { memberPage } = props;
 
  // console.log(memberPage.users);
  // const rootClassName = classNames(classes.root, className, memberPage);

  useEffect(() => {
    props.onGetUsers({
      filter: {
        role: 'admin',
      },
    });
    console.log( memberPage)
   
  }, []);

const handleReset = () => {
  setSelected([]); //reset isActive to hide delete icon
}



  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = memberPage.users.map(n => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected,name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, memberPage.users.length - page * rowsPerPage);
  
  return (
    
    <div className={classes.root}>
      <CustomizedSnackbars color ={memberPage.color }open={memberPage.status} message={memberPage.message} onClose={props.onCloseSnackbar}/>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar handleReset={handleReset} numSelected={selected.length}  selectedId={selected} propsfake = {props} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              // selectedId = {selected} //choose id to delete
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={memberPage.users.length}
            />
            
           
            <TableBody>
              
              {stableSort(memberPage.users, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameContainer}>
                          <Avatar
                            className={classes.avatar}
                            src={`${BASE_URL}/avatar/${row.avatar}`}
                          >                           
                          </Avatar>
                          <Typography variant="body1">{row.fullName}</Typography>
                        </div>
                      </TableCell>
                      <TableCell align = "right" >{row.phone}</TableCell>
                      <TableCell align="right" >{row.email}</TableCell>
                      <TableCell align="right" >{row.class}</TableCell>
                      <TableCell align="right" >{row.schoolYear}</TableCell>
                      <TableCell align="right" >{row.isActive ? <Chip size="small" label="active  " style={{ color: 'white', backgroundColor: '#4caf50' }} variant='outlined' /> : <Chip size="small" label="inactive" style={{ color: 'white', backgroundColor: 'red' }}/> }</TableCell>
                      <TableCell align="right" > 
                      <Tooltip title="Edit">                        
                          <IconButton aria-label="Edit" 
                            onClick={() => {
                            setOpen(true);
                            setEdit(true);
                            setEditData(Object.assign({}, row));
                          }}
                          > 
                            < AddUserPage isEditcheck={true} Editdatas={ row} />                         
                        </IconButton>
                      </Tooltip>

                      
                      
                        
                        </TableCell>
                      
                      
                      
                       
                      
                      {/* <TableCell align="left" > */}
                       
                        {/* <DialogAlert
                          // icon={<DeleteIcon />}
                          // style={{ marginBottom: '50px' }}
                          value={row._id}
                          onAccept={() => {
                            handDelete(row._id);
                          }}

                          
                          message="
                          Bạn có muốn xoá thành viên này"
                        />
                      </TableCell> */}
                      
                      
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={memberPage.users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  memberPage: makeSelectMemberPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onDeleteUsers: user => dispatch(deleteUsers(user)),
    onGetUsers: body => dispatch(getAllUserAction(body)),
    onCloseSnackbar: () => dispatch(closeSnackbar()),
    
 
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  // withStyles(styles),
  withConnect,
)(MemberPage);

