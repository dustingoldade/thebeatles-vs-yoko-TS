import { Typography, Button, Grid, Box } from "@mui/material";
import "./NewGameBtn.css";
import { NewGameBtnProps } from "../../locales/ts.models";
import jsonMuiStyles from "../../locales/muiStyles.json";
const { DISPLAY_FLEX, JUSTIFY_CONTENT_CENTER, COLOR_INHERIT, TEXT_VARIANT_H5 } =
  jsonMuiStyles;

const NewGameBtn: React.FC<NewGameBtnProps> = ({ newGame, buttonTitle }) => {
  return (
    <Grid item xs={3}>
      <Box display={DISPLAY_FLEX} justifyContent={JUSTIFY_CONTENT_CENTER}>
        <div className="NewGameBtn">
          <Button onClick={newGame} color={"inherit"} sx={{ px: "9rem" }}>
            <Typography variant={"h5"}>{buttonTitle}</Typography>
          </Button>
        </div>
      </Box>
    </Grid>
  );
};

export default NewGameBtn;
