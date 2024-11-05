import Form from '../Form/Form';
import { FormProps } from '../Form/Form.type';

function FormSection({ register, errors }: FormProps) {
  return (
    <section>
      <Form register={register} errors={errors} />
    </section>
  );
}

export default FormSection;
