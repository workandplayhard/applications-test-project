import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

import useVisibility from "@/hooks/useVisibility";

import NotifyMeDialog from "./NotifyMeDialog";

/**
 * ApplicationsListItem component
 * @param {{
 * id: number,
 * title: string,
 * icon: string,
 * categories: string[],
 * description: string
 * }} application - application object.
 */
function ApplicationsListItem({ application }) {
  const { visibility, show, hide } = useVisibility();

  return (
    <>
      <Card
        data-testid='application-card'
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          flexGrow: 1,
        }}
      >
        <CardHeader
          avatar={
            <Avatar data-testid='app-icon' src={application.icon}>
              {application.title.charAt(0)}
            </Avatar>
          }
          data-testid='app-header'
          subheader={application.categories.join(", ")}
          title={application.title}
        />
        <CardContent sx={{ display: "flex", flexGrow: 1 }}>
          <Typography data-testid='app-description'>{application.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            data-testid='btn-notify-me'
            endIcon={<KeyboardArrowRightIcon />}
            size='small'
            onClick={show}
          >
            Notify me when it's ready
          </Button>
        </CardActions>
      </Card>
      <NotifyMeDialog hide={hide} open={visibility} />
    </>
  );
}

export default ApplicationsListItem;
