import { TextareaProps } from './Textarea.type';

function Textarea({ name, id, placeholder, rows }: TextareaProps) {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  );
}

export default Textarea;
