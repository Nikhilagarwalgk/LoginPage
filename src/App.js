import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { TextField, Box, Stack, FormControl, InputLabel, Typography, Button } from '@mui/material';
import signUp from "../src/utils/image/signUp.png";
import Router from "../src/routing/AppRouter"


function App() {
  return (
    <>
      <Router />

      {/* <Stack >
        <Grid container spacing={2} sx={{ height: "102.7vh" }} >
          <Grid item xs={7} sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#242121",
          }}>
            <img src={signUp} alt="" />
          </Grid>
          <Grid item xs={5} sx={{
            display: "flex",
            alignContent: "flex-start",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Box>
              <SignUp />
            </Box>
          </Grid>
        </Grid>
      </Stack > */}

      {/* <Login /> */}
      {/* <Dashboard /> */}
    </>
  );
};

export default App;
