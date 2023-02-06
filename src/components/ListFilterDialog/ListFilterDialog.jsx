import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  ClickAwayListener,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  IconButton,
  Paper,
  Popper,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useCallback } from "react";

import theme from "./theme";

function ListFilterDialog({
  anchorEl,
  title,
  open,
  closeOnApply = true,
  onClose,
  onClear,
  onApply,
  children,
}) {
  const handleApplyClick = useCallback(() => {
    onApply();
    if (closeOnApply) {
      onClose();
    }
  }, [closeOnApply, onApply, onClose]);

  return (
    <ThemeProvider theme={theme}>
      {open && (
        <ClickAwayListener onClickAway={onClose}>
          <Popper anchorEl={anchorEl} open={open} placement="bottom-end" transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={240}>
                <Paper data-testid="list-filter-dialog">
                  <DialogTitle>
                    <Typography component="span" variant="h6">
                      Filters
                    </Typography>
                    <IconButton
                      data-testid="btn-close"
                      title="Close"
                      disableFocusRipple
                      disableRipple
                      onClick={onClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </DialogTitle>
                  <DialogContent>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography component="div" data-testid="filters-name">
                        {title}
                      </Typography>
                      <Button size="small" variant="text" onClick={onClear}>
                        Clear
                      </Button>
                    </Stack>
                    {children}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={onClear}>Clear all</Button>
                    <Button size="large" variant="contained" onClick={handleApplyClick}>
                      Apply
                    </Button>
                  </DialogActions>
                </Paper>
              </Fade>
            )}
          </Popper>
        </ClickAwayListener>
      )}
    </ThemeProvider>
  );
}

export default ListFilterDialog;
