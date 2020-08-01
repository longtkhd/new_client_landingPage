import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {

    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function RoleSelect(props) {
  const { onSelect} = props;
  const classes = useStyles();
  const [age, setAge] = React.useState(props.role);

  const handleChange = (event) => {
    setAge(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Chức Vụ</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={'5e0d73cd8a18fb1efb58d71b'}>Admin</MenuItem>
          <MenuItem value={'5dedee326d15ff3f45930140'}>User</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
}
