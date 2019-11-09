import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
  return (
    <>
      <Dialog
        open={true}
        onClose={props.onCancel}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{props.message}</DialogTitle>
        <DialogActions>
          <Button onClick={props.onCancel} color="primary">
            {props.cancelText}
          </Button>
          <Button onClick={props.onConfirm} color="primary" autoFocus>
            {props.confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}