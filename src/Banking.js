import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Financial Institution</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">How to Handle</TableCell>
            <TableCell align="right">Security Question</TableCell>
            <TableCell align="right">Security Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.fields["Financial Institution"]}
              </TableCell>
              <TableCell align="right">{row.fields["User Name"]}</TableCell>
              <TableCell align="right">{row.fields["Password"]}</TableCell>
              <TableCell align="right">{row.fields["How to Handle"]}</TableCell>
              <TableCell align="right">
                {row.fields["Security Question"]}
              </TableCell>
              <TableCell align="right">
                {row.fields["Security Answer"]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
