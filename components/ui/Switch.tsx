import { styled } from '@mui/material/styles';
import { Switch as SwitchMui } from '@mui/material';
import { SwitchProps } from '@mui/material/Switch';

export const Switch = styled((props: SwitchProps) => (
  <SwitchMui
    focusVisibleClassName='.Mui-focusVisible'
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 48,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(24px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#8DC63F',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#8DC63F',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 18,
    height: 18,
  },
  '& .MuiSwitch-track': {
    borderRadius: 24 / 2,
    backgroundColor: '#79797A',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
