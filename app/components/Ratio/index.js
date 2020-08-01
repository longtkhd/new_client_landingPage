import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { green, red } from '@material-ui/core/colors';

import { withStyles } from '@material-ui/core/styles';
import { bool } from 'prop-types';


const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
  root: {
    color: red[400],
    '&$checked': {
      color: red[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtonsGroup(props) {
  const { onRatio } = props;




  // console.log(Boolean(isActive));
  const [value, setValue] = React.useState(props.isActive.toString());


  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value == 'true') {
      onRatio(true);
    } else if (event.target.value == 'false') {
      onRatio(false);
    }

  };

  return (
    <FormControl component="fieldset" style={{ marginTop: '30px', marginLeft: '20px' }}>
      <FormLabel component="legend">IsActive</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value='true' control={<GreenRadio />} label="Active" style={{ color: 'green' }} />
        <FormControlLabel value='false' control={<RedRadio />} label="InActive" style={{ color: 'red' }} />
        <FormControlLabel value="other" control={<Radio />} label="Khác" />
      </RadioGroup>
    </FormControl>
  );
}
