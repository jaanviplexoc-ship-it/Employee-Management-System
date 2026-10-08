import { TextField } from '@mui/material';

export default function InputField({
  name,
  value,
  label,
  type,
  onChange,
  required
}) {

  return (

    <TextField
      variant='outlined'
      fullWidth
      name={name}
      value={value}
      label={label}
      type={type}
      onChange={onChange}
      required={required}
      slotProps={{
        inputLabel: {
          shrink: true
        }
      }}
    />

  )
}