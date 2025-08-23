import { Grid } from "@mui/material";

const ControlButtonGrid = ({ buttons }: { buttons: React.ReactElement[] }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {buttons.map((button, index) => (
        <Grid size={{ xs: 3 }} key={index}>
          {button}
        </Grid>
      ))}
    </Grid>
  );
};

export default ControlButtonGrid;
