/**
 *
 * DialogAlert
 *
 */

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DeleteIcon from '@material-ui/icons/Delete'
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Fab,
} from '@material-ui/core';
import Draggable from 'react-draggable';
function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
}
function DialogAlert(props) {
  // console.log( props.numSelected)


  const [open, setOpen] = useState(false);
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function onDelete() {
    // console.log('props.value' + ' ' +props.value);
    
    props.onAccept(props.value);
    // props.history.push('/user');
    // parseInt(props.numSelected);
  
    props.onResetSelected()


    // props.numSelected = 0;
    setOpen(false);
  }
  return (
    <div>
      <DeleteIcon onClick={handleClickOpen}/>
      
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Chú ý</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Hủy
          </Button>
          <Button onClick={onDelete} color="secondary" variant="contained">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogAlert.propTypes = {};

export default DialogAlert;
