import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";

import NotifyIcon from "@/assets/icon-notify.svg";
import validateEmail from "@/lib/validateEmail.js";

/**
 * NotifyMeDialog component
 * @param {bool} open - is dialog open
 * @param {func} hide - close dialog callback
 */
function NotifyMeDialog({ open, hide }) {
  const [email, setEmail] = useState({ email: "", isError: false });

  const handleInputChange = useCallback((e) => {
    setEmail((curr) => ({ ...curr, email: e.target.value, isError: false }));
  }, []);

  const handleSubmitClick = () => {
    if (Boolean(email.email) && !validateEmail(email.email)) {
      setEmail((curr) => ({ ...curr, isError: true }));
    } else {
      setEmail(() => ({ email: "", isError: false }));
      hide();
    }
  };

  return (
    <Dialog maxWidth="sm" open={open}>
      <DialogTitle align="right" sx={{ marginRight: (theme) => theme.spacing(-1) }}>
        <IconButton data-testid="btn-close" disableFocusRipple disableRipple onClick={hide}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText component="div" sx={{ marginBottom: (theme) => theme.spacing(2) }}>
          <Typography component="div" data-testid="dialog-title" variant="h6">
            Thank you for your interest
          </Typography>
          <Typography data-testid="dialog-message">
            {`We still working on integrating this app it's not yet ready for now. But you can send us
            your email so we can let you know when it's ready`}
          </Typography>
        </DialogContentText>
        <TextField
          error={email.isError}
          helperText={email.isError ? "Invalid email address" : undefined}
          id="email-input"
          label="Email"
          placeholder="email@email.com"
          type="email"
          autoFocus
          fullWidth
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions sx={{ padding: (theme) => theme.spacing(2, 3, 3, 3) }}>
        <Button variant="outlined" onClick={hide}>
          Never mind
        </Button>
        <Button disabled={email.isError} variant="contained" onClick={handleSubmitClick}>
          <Typography sx={{ paddingRight: "4px" }}>
            <img alt="Notify Icon" src={NotifyIcon} />
          </Typography>
          Notify me
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NotifyMeDialog;
