import { FC, useState } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Todos', 'Activos', 'Inactivos'];

export const Filter: FC = () => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <FormControl sx={{ m: 1, width: 216 }}>
      <InputLabel id='demo-multiple-checkbox-label'>Cocido antes:</InputLabel>
      <Select
        labelId='demo-multiple-checkbox-label'
        id='demo-multiple-checkbox'
        multiple
        defaultValue={[names[0]]}
        defaultChecked={true}
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label='Cocido antes:' />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}>
        {/* {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={personName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))} */}
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='all'
          name='radio-buttons-group'>
          <FormControlLabel value='all' control={<Radio />} label='Todos' />
          <FormControlLabel
            value='active'
            control={<Radio />}
            label='Activos'
          />
          <FormControlLabel
            value='inactive'
            control={<Radio />}
            label='Inactivos'
          />
        </RadioGroup>
      </Select>
    </FormControl>
  );
};
