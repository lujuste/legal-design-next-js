import {
  FormControl,
  Tooltip,
  Flex,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { redirect } from "next/dist/server/api-utils";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, type, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!label && <FormLabel html={name}> {label} </FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        type={name}
        ref={ref}
        {...rest}
        size="lg"
        border="solid 2px"
        borderColor="#CFD4D9"
        placeholder={label}
        textColor="white"
        bgColor="white"
        focusBorderColor="white"
        variant="filled"
        _placeholder={{
          color: "#868887",
        }}
      />

      {!!error && (
        <Flex mt="1rem">
          <Tooltip label={error.message} bg="red.500">
            <FormErrorMessage label={error.message} mt={0} zIndex="tooltip">
              {error.message}
            </FormErrorMessage>
          </Tooltip>
        </Flex>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
