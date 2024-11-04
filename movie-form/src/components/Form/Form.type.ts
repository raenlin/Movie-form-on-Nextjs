import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type MovieForm = {
  name: string;
  genre: string;
  format: string;
  country: string;
};

export type FormProps = {
  register: UseFormRegister<MovieForm>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors<MovieForm>;
};