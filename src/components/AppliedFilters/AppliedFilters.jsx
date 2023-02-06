import { Chip, Stack, ThemeProvider } from "@mui/material";
import { memo } from "react";

import APPLIED_FILTERS_THEME from "@/components/AppliedFilters/theme";

function AppliedFilters({
  appliedFilters = [],
  removeAppliedFilter,
  theme = APPLIED_FILTERS_THEME,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Stack data-testid="applied-filters" direction="row" flexWrap="wrap">
        {appliedFilters.map((filter) => (
          <Chip
            key={filter.id}
            data-testid="applied-filter"
            label={filter.label}
            size="small"
            sx={{
              borderRadius: "4px",
            }}
            onDelete={() => removeAppliedFilter(filter.id)}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
}

export default memo(AppliedFilters);
