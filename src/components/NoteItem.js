import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import "./NoteItem.css";

const NoteItem = ({ name, email, ic, onItemClicked }) => {
  return (
    <div className="NoteItem__container" role="button" onClick={onItemClicked}>
      <Card variant="outlined">
        <CardContent>
          <Typography>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            NAME
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {name}
          </Typography>
          </Typography>
          <Typography>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            EMAIL
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {email}
          </Typography>
          </Typography>
          <Typography>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            IC
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {ic}
          </Typography>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteItem;
