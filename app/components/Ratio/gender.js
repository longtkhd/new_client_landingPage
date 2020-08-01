import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';


// const GreenRadio = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color="default" {...props} />);

export default function GenderRatio(props) {
  const { onRadio } = props;
  const { isRadio} = props; //set value when edit (with adduser = '')
  // console.log(isRadio);
  const [value, setValue] = React.useState(props.gender );

  const handleChange = (event) => {
    setValue(event.target.value);
    onRadio(event.target.value);
  };

  return (
    <FormControl component="fieldset" style={{ marginTop: '30px', marginLeft: '20px' }}>
      <FormLabel component="legend">Giới Tính</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="male" control={<Radio />} label="Nam" />
        <FormControlLabel value="female" control={<Radio />} label="Nữ" />

        <FormControlLabel value="other" control={<Radio />} label="Khác" />

      </RadioGroup>
    </FormControl>
  );
}
