import React from "react";
import { CssBaseline, Grid} from "@material-ui/core";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import AllList from "./components/List/AllList";

function App() {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width : '100%'}}>
        <Grid item xs={12} md={4}>
          <AllList/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Map/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
