import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import Lottie from 'react-lottie';
import { useDispatch,useSelector } from 'react-redux'
import { closeDialog, getDialog } from '../../features/chukstest/Chukstest';
import sucess from '../../lottie/check.json'
import errors from '../../lottie/error.json'
import {instructions} from '../../data/data';

function AlertDialog() {
    const dispatch = useDispatch();
    const dialog = useSelector(getDialog)
    const {open, title, message, error,alert, instruction} = dialog
    const data = instructions  

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: error?errors:sucess,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const handleClose = () => {
      dispatch(closeDialog()) 
  }
    

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {!alert && !instruction &&
        <DialogTitle id="alert-dialog-title">
         
            <Lottie    
                options={defaultOptions}
                width={200}
                isStopped={!open}
                />
        </DialogTitle>
      }
        <DialogTitle id="alert-dialog-title">
          {!instruction && title} {instruction && data.title}
        </DialogTitle>
        <DialogContent>
          {!instruction &&
          <DialogContentText id="alert-dialog-description">
           {message}
          </DialogContentText>}

          {instruction &&
          <DialogContentText id="alert-dialog-description">
              {data.INSTRUCTIONS.map((text,index) => (
                <span key={index}>
                 {`${index+1}. ${text}`} <hr/> <br/> 
                </span>
              ))}
          </DialogContentText>
          }


        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>Dismiss</Button>
        </DialogActions>
      </Dialog>
    )
}

export default AlertDialog
