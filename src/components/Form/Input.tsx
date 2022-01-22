import { Box, FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';
// import { ErrorMessage } from '@hookform/error-message';


interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
} 

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error= null, ...rest }, ref) => {
  console.log(error)
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput 
        id={name}
        name={name} 
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        _hover={{ backgroundColor: 'gray.900' }}
        size="lg"
        ref={ref}
        {...rest}
      />
      { !!error && (
        <Box color="red.700">
          { error.message }
        </Box>
      ) }
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);