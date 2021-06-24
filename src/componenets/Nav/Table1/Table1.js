import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Table1.css';
const styles = {
  paperContainer: {
    backgroundImage: `url(https://www.kindpng.com/picc/m/197-1976381_crash-course-hd-png-download.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
  }
};
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Online Courses', 'Free to audit', '3100+', '#287(+157)','45(🡡67%)'),
  createData('Speciliztions','$39-79/month', '310+', '#663(+510)','23(🡡89%)'),
  createData('Online Degrees', '$15k-30k', '1500+','#3009(+3189)','98.8(🡡85%)'),
  createData('Data Science', '$20k-50k', '2600+', '#28765(+15,578)', '56.3(🡡93%)'),
  createData('Course For Business', '$400/user/year', '2900+', '#767(+677)', '71.8(🡡45%)'),
];

const Table1 = () => {
  const classes = useStyles();
  return (
    <div className='table1'>

      <Paper style={styles.paperContainer}>

      </Paper>

      <br />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><h3>Course at Every Price</h3></TableCell>
              <TableCell align="right">$Cost</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">April 30th Rank</TableCell>
              <TableCell align="right">Sessions(In Millions)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  )

}



export default Table1;