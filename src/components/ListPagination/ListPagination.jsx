import {
  MenuItem,
  Pagination as MuiPagination,
  Select,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { memo } from "react";

import PAGINATION_THEME from "./theme";
import usePagination from "./usePagintion";

function ListPagination({ page, count, onPageChange, pageSize }) {
  const { pagesCount, handlePageChange, handleSelectPageChanged, pageNumbers } = usePagination({
    count,
    onPageChange,
    pageSize,
  });

  return (
    <ThemeProvider theme={PAGINATION_THEME}>
      <Stack
        alignItems="center"
        data-testid="list-pagination"
        direction="row"
        flex={1}
        justifyContent="space-between"
      >
        <MuiPagination color="primary" count={pagesCount} page={page} onChange={handlePageChange} />
        <Stack alignItems="center" direction="row">
          <Typography component="div">Go to page</Typography>
          <Select
            key={page}
            defaultValue={page}
            name="page-select"
            size="small"
            variant="outlined"
            onChange={handleSelectPageChanged}
          >
            {pageNumbers.map((number) => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default memo(ListPagination);
