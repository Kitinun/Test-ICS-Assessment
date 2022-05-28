import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Iconify from './Iconify';

function InputSearch() {
    const [values, setValues] = React.useState({
        weight: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    return (
        <div>
            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap' }}> */}
            <div>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        placeholder='Search'
                        value={values.weight}
                        onChange={handleChange('weight')}
                        endAdornment={<InputAdornment position="end">
                            <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
                        </InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
                </FormControl>
            </div>
            {/* </Box> */}
            <style jsx="true" global="true">{`
      .css-r47a1p-MuiFormControl-root {
        border: 1px solid #134B8A;
        border-radius: 50px;
    }
    .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
      position: relative;
      border-radius:  50px;
  }
      
            `}</style>
        </div>
    )
}

export default InputSearch