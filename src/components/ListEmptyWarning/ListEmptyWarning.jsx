import { Box, Stack, Typography } from "@mui/material";

import icon from "@/assets/empty-list.png";

const IMAGE_BOX_SX = {
  width: (theme) => theme.spacing(34.75),
  height: (theme) => theme.spacing(23.5),
  backgroundImage: `url(${icon})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
};

function ListEmptyWarning() {
  return (
    <Stack alignItems="center" flex={1} justifyContent="center">
      <Box sx={IMAGE_BOX_SX} />
      <Typography variant="h6">We can't seem to find what you're looking for.</Typography>
      <Typography variant="caption">Try changing the filters or search terms.</Typography>
    </Stack>
  );
}

export default ListEmptyWarning;
