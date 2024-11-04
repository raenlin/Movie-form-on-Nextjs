'use client';

import styles from './Main.module.css';
import FormSection from '../Form-section/Form-section';
import TitleSection from '../Title-section/Title-section';
import { MovieForm } from '../Form/Form.type';
import { formSchema } from '@/validation/formValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { useState } from 'react';

function Main() {
  // const [form, setForm] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MovieForm>({
    mode: 'all',
    resolver: yupResolver(formSchema),
  });
  const submit: SubmitHandler<MovieForm> = async (data) => {
    const isValid = await formSchema.isValid(data);

    if (isValid) {
      console.log('valid');
    }
  };
  return (
    <main className={styles.main}>
      <TitleSection />
      <FormSection
        register={register}
        handleSubmit={handleSubmit(submit)}
        errors={errors}
      />
    </main>
  );
}

export default Main;
