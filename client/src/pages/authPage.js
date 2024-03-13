import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { CheckBox } from "@mui/icons-material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const AuthPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Dialog open={open} onClose={closeDialog} fullWidth maxWidth="sm">
        <DialogTitle>
          Authentication{" "}
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
            <TextField variant="outlined" label="Full Name"></TextField>
            <TextField variant="outlined" label="Phone Number"></TextField>
            <TextField variant="outlined" label="Email"></TextField>
            <TextField variant="outlined" label="Password"></TextField>
            <TextField variant="outlined" label="Confirm Password"></TextField>
            <FormControlLabel
              control={<Checkbox defaultChecked color="primary"></Checkbox>}
              label="Accept All Agreement And Submit"
            ></FormControlLabel>
            <Button
              backgroundColor={theme.palette.secondary.light}
              variant="contained"
            >
              Sign Up
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthPage;
