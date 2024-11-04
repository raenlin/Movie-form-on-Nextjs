import { ButtonProps } from './Button.type';

function Button({ title, className }: ButtonProps) {
  return <button className={className}>{title}</button>;
}

export default Button;
