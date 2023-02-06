import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Button } from "@mui/material";
import { useRef } from "react";

import useVisibility from "@/hooks/useVisibility";

import ApplicationsListFilterDialog from "./ListFilterDialog";

export const FILTER_BUTTON_SX = {
  marginRight: (theme) => theme.spacing(-1.5),
  padding: (theme) => theme.spacing(0, 2),
  height: "100%",
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  backgroundColor: (theme) => `${theme.palette.background.default} !important`,
  color: (theme) => theme.palette.text.disabled,
  borderLeft: "1px solid",
  borderLeftColor: (theme) => theme.palette.text.disabled,
  outline: "none !important",
};
function ListFilterButton() {
  const { visibility, hide, toggle } = useVisibility();
  const ref = useRef(null);
  return (
    <>
      <Button
        ref={ref}
        endIcon={visibility ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        sx={FILTER_BUTTON_SX}
        variant="text"
        onClick={toggle}
      >
        Filter
      </Button>
      <ApplicationsListFilterDialog anchorEl={ref.current} hide={hide} open={visibility} />
    </>
  );
}

export default ListFilterButton;
