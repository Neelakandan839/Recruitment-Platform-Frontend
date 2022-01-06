import { Grid, Typography } from "@mui/material";

const Welcome = (props) => {
  return (
    <Grid 
      container
      item
      style={{ padding: "30px", minHeight: "93vh",display:'flex',justifyContent:'center',alignItems:'center',backgroundImage:`url("https://urgenci.com/wp-content/uploads/2017/07/business-woman-working-on-laptop-in-her-office-picjumbo-com.jpg")`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
    >
      <Grid item>
        <Typography variant="h2" style={{border:'4px orange solid',fontSize:'80px',padding:'20px'}}>Welcome to <span style={{color:'red'}}>DREAM</span> JOBS</Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;