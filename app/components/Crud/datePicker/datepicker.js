import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
 
  KeyboardDatePicker: {
    marginLeft: '10px',
    // maxWidth: '495px',
    width:'96%',
   
   
    
  }

  

}));

export default function MaterialUIPickers(props) {
  const classes = useStyles();
  const { onChangedate} = props;
  
  
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(props.initDate );

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('/');
  }
  const handleDateChange = date => {
    var dateFormat = formatDate(date);

    setSelectedDate(dateFormat);
    onChangedate(dateFormat);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container >
        
        <KeyboardDatePicker
          className={classes.KeyboardDatePicker}
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          inputVariant="outlined"
          value={selectedDate}
       
          onChange={handleDateChange}
          
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
