import { InputProps } from './Input.type';

function Input({ name, type, id, placeholder, required }: InputProps) {
  return (
    <input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
    ></input>
  );
}

export default Input;
