import Form from '../Form/Form';
import { FormProps } from '../Form/Form.type';

function FormSection({ register, handleSubmit, errors }: FormProps) {
  return (
    <section>
      <Form register={register} handleSubmit={handleSubmit} errors={errors} />
    </section>
  );
}

export default FormSection;
