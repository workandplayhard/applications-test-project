import { Typography } from "@mui/material";
import { memo } from "react";

import { formatRange, getRowsDisplayedRange } from "@/components/PaginationInfo/lib.js";

function PaginationInfo({ page, count }) {
  const { from, to } = getRowsDisplayedRange({ page, count });
  return (
    <Typography
      component="div"
      data-testid="pagination-info"
      sx={{ fontWeight: 600 }}
      variant="title"
    >
      {formatRange({ from, to, count })}
    </Typography>
  );
}

export default memo(PaginationInfo);
