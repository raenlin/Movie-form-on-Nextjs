import { LabelProps } from './Label.type';

function Label({ htmlFor, name }: LabelProps) {
  return <label htmlFor={htmlFor}>{name}</label>;
}
export default Label;
