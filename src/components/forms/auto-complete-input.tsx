import { FC } from 'react';
import { Autocomplete, AutocompleteProps, FormControl, TextField, TextFieldProps } from '@mui/material';
import { useFormikContext } from 'formik';

export interface AutoCompleteInputProps {
  name: string;
  textFieldProps?: TextFieldProps;
}

export const AutoCompleteInput: FC<AutoCompleteInputProps & Omit<AutocompleteProps<any, any, any, any>, 'renderInput'>> = (props) => {
  const { setFieldValue, handleBlur, values, touched, errors, isSubmitting } = useFormikContext<any>();
  return (
    <FormControl fullWidth={props.fullWidth}>
      <Autocomplete
        {...props}
        options={props.options}
        renderInput={(params: any) => (
          <TextField {...props.textFieldProps} {...params} error={!!errors[props.name]} helperText={(touched[props.name] && errors[props.name]) as string} />
        )}
        onChange={(_event, value) => {
          if (typeof value === 'string') {
            setFieldValue(props.name, value);
          } else if (value && value.value) {
            setFieldValue(props.name, value.value);
          } else {
            setFieldValue(props.name, value);
          }
        }}
        onBlur={handleBlur}
        value={values[props.name]}
        getOptionLabel={(option) => option.label || option}
        disabled={props.disabled || isSubmitting}
      />
    </FormControl>
  );
};
