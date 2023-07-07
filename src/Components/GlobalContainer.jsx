import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import UserAdd from "./UserAdd";
import UserTable from "./UserTable";

export default function GlobalContainer() {
  return (
    <Box>
      <Grid container>
        <Grid item xl={3.5} lg={3.5} md={3.5} sm={3.5} sx={{ p: 3 }}>
          <UserAdd />
        </Grid>
        <Grid xl={8} lg={8} md={7} sm={7} sx={{ p: 3 }}>
          <UserTable />
        </Grid>
      </Grid>
    </Box>
  );
}
