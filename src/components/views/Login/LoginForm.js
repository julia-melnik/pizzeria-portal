import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }));

export default function LoginForm() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Staff ID" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
        </form>
    );
}