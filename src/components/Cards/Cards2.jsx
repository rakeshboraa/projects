import { CardContent, Grid, Typography ,Card } from "@mui/material";
import '../Cards/cards.css'
import React from "react";
import CountUp from "react-countup";
const Cards2=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
  if(!confirmed){
    return 'Loading...'
  }
    return(
        <>
        <div className="container">
         <Grid container  justifyContent="center">
           <Grid item component={Card} xs={12} md={3} className="infected card">
             <CardContent>
              <Typography variant='h6' gutterBottom>Infected</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={confirmed.value} duration={0.8} separator={','}/>
                </Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of active cases of COVID-19</Typography>
             </CardContent>
           </Grid>
           <Grid item component={Card}  xs={12} md={3} className="recoverd card">
             <CardContent>
              <Typography variant='h6'  gutterBottom>Recovery</Typography>
              <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={0.8} separator={','}/></Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of recover cases of COVID-19</Typography>
             </CardContent>
           </Grid>
           <Grid item component={Card}  xs={12} md={3} className="deaths card" >
             <CardContent>
              <Typography variant='h6'  gutterBottom>Deaths</Typography>
              <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={0.8} separator={','}/></Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of death cases of COVID-19</Typography>
             </CardContent>
           </Grid>
         </Grid>
        </div>
        </>
    )
}
export default Cards2;