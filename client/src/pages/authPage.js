import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Dropzone from 'react-dropzone';

//client side validation

const registerSchema=yup.object().shape({
  fullName:yup.string().required("required"),
  phone:yup.string().required("required"),
  password:yup.string().required("required"),
  email:yup.string().email("invalid email").required("required"),
  address:yup.string().required("required")
});

const AuthPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  const handleSignUpClick = () => {
    setSignUp(true);
  };

  const handleSignInClick = () => {
    setSignUp(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {!signUp ? (
        <Dialog
          open={open}
          onClose={closeDialog}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            sx: {
              borderRadius: 10, // Adjust the border radius as desired
              marginLeft: "auto", // Align to the left when viewed on desktop
              marginRight: "auto",
              maxWidth: 600, // Adjust the max width as needed
            },
          }}
        >
          <DialogTitle>
            Sign In
            <IconButton
              color="error"
              variant="contained"
              onClick={closeDialog}
              style={{ float: "right" }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} margin={2}>
              <TextField variant="outlined" label="Email" />
              <TextField variant="outlined" label="Password" />
              <Button
                backgroundColor={theme.palette.secondary.light}
                variant="contained"
              >
                Sign In
              </Button>
              <a onClick={handleSignUpClick}>
                I don't have an account, Sign Up
              </a>
            </Stack>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={closeDialog}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            sx: {
              borderRadius: 10, // Adjust the border radius as desired
              marginLeft: "auto", // Align to the left when viewed on desktop
              marginRight: "auto",
              maxWidth: 400, // Adjust the max width as needed
            },
          }}
        >
          <DialogTitle>
            Sign Up
            <IconButton
              color="error"
              variant="contained"
              onClick={closeDialog}
              style={{ float: "right" }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} margin={2}>
              <TextField variant="outlined" label="Full Name" />
              <TextField variant="outlined" label="Phone Number" />
              <TextField variant="outlined" label="Email" />
              <TextField variant="outlined" label="Address" />
              <TextField variant="outlined" label="Password" />
              <TextField variant="outlined" label="Confirm Password" />
              <FormControlLabel
                control={<Checkbox defaultChecked color="primary" />}
                label="Accept All Agreement And Submit"
              />
              <Button
                backgroundColor={theme.palette.secondary.light}
                variant="contained"
              >
                Sign Up
              </Button>
              <a onClick={handleSignInClick}>
                I already have an account, Sign In
              </a>
            </Stack>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AuthPage;
