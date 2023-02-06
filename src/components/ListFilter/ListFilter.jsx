import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { memo } from "react";

function ListFilter({ ListFilterButton, onChange, value, placeholder = "Search" }) {
  const handleSearchChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <Stack
      data-testid="list-filter"
      sx={{
        width: (theme) => ({ xs: "100%", sm: "100%", md: theme.spacing(47) }),
      }}
    >
      <TextField
        id="apps-search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: <InputAdornment component={ListFilterButton} position="end" />,
        }}
        placeholder={placeholder}
        size="small"
        sx={{
          backgroundColor: "rgb(255,255,255)",
        }}
        value={value}
        onChange={handleSearchChange}
      />
    </Stack>
  );
}

export default memo(ListFilter);
