import React from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";

interface UserAccountProps {
  onSubmit: (value: Record<string, string>) => void;
}

export default function UserAccountForm({ onSubmit }: UserAccountProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit || console.log)}>
      <Center marginTop={56}>
        <VStack spacing={5} width="sm">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              {...register("password", {
                required: "Required",
                validate: (value) =>
                  ((l: number, h: number) =>
                    value.length < l || value.length > h
                      ? `Password must be between ${l} and ${h} in length`
                      : undefined)(8, 16),
              })}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>
          <Button
            boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.2);"
            bg="main.darkRed"
            color="white"
            _hover={{ bg: "main.darkPink" }}
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      </Center>
    </form>
  );
}
