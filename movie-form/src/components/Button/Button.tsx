import { ButtonProps } from './Button.type';

function Button({ title, className, handleSubmit, onReset }: ButtonProps) {
  const handleClick = () => {
    if (onReset) {
      onReset();
    } else if (handleSubmit) {
      handleSubmit();
    }
  };
  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
