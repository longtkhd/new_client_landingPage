import React, { useState } from 'react';
import {  useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMemberPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getAllUserAction } from './actions';
import { connect } from 'react-redux';
import { SearchInput } from 'components';

import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  TextField
} from '@material-ui/core';

// import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));




export function MemberPage(props)  {
  useInjectReducer({ key: 'memberPage', reducer });
  useInjectSaga({ key: 'memberPage', saga });
  const { memberPage } = props;
  const { className, ...rest } = props;
  useEffect(() => {
    props.onGetUsers({
      filter: {
        role: 'admin',
      },
    });
    // console.log(memberPage)

  }, []);

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    // const { users } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = memberPage.users.map(user => user._id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    
    <div>
      
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      
    >
      
      <TextField id="standard-basic" label="Search" />
      <CardContent className={classes.content}>
      
        
        <PerfectScrollbar>
          <div className={classes.inner}>
           
            <Table>
              
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUsers.length === memberPage.users.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < memberPage.users.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Class</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {memberPage.users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user._id}
                    selected={selectedUsers.indexOf(user._id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.indexOf(user._id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, user._id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={`http://localhost:5000/user/${user._id}/avatar/large`}
                        >
                          {user.fullName}
                        </Avatar>
                        <Typography variant="body1">{user.fullName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.class}
                    </TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      {/* {moment(user.createdAt).format('DD/MM/YYYY')} */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={memberPage.users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
    </div>
   
  );
  
};

MemberPage.propTypes = {
  className: PropTypes.string,
};

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
)(MemberPage);

