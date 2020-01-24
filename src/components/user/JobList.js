import React from 'react';
import { Button } from '@material-ui/core';
import './job.css';
import { makeStyles,withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        maxWidth:1000
    },
});

const JobList = ({jobs})=>{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (jd) => {
        setOpen(true);
        console.log(jd)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    return (
    <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Job ID</StyledTableCell>
                <StyledTableCell align="right">Job Title</StyledTableCell>
                <StyledTableCell align="right">Experience</StyledTableCell>
                <StyledTableCell align="right">Job Description</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map(jobs => (
                <TableRow key={jobs.jobId}>
                  <TableCell component="th" scope="row">
                    {jobs.jobId}
                  </TableCell>
                  <TableCell align="right">{jobs.jobTitle}</TableCell>
                  <TableCell align="right">{jobs.experience}</TableCell>
                  <TableCell align="right"><Button variant="contained" color="primary" onClick={()=>handleClickOpen(jobs.jd)}>View</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Job Description</DialogTitle>
        <DialogContent>
          <DialogContentText value="ddcc">
            JD: Should have strong knowledge in HTML, CSS, JS
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      );
}

export default JobList;

