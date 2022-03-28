import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import logo from "../logo.svg";
import style from "./style.module.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <div className={style.container}>
      <Grid container spacing="20px" justifyContent="flex-end">
        <Grid item xs={12}>
          <Item className={style.logo}>
            <img src={logo} alt="logo" />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Filter</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Tabs</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Tickets</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Button</Item>
        </Grid>
      </Grid>
    </div>
  );
}
