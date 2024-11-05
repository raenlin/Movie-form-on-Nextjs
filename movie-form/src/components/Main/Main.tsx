'use client';

import styles from './Main.module.css';
import FormSection from '../Form-section/Form-section';
import TitleSection from '../Title-section/Title-section';
import { MovieForm } from '../Form/Form.type';
import { formSchema } from '@/validation/formValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import Pagination from '../Pagination/Pagination';
import { useEffect } from 'react';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '@/app/utils/helpers/saveToLocalStorage';

function Main() {
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors, isValid },
    trigger,
  } = useForm<MovieForm>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<MovieForm> = async (data) => {
    const isValid = await formSchema.isValid(data);

    if (isValid) {
      saveToLocalStorage('form_firstPage', data);
    }
  };

  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    const savedFormData = getFromLocalStorage('form_firstPage');
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      for (const key in parsedFormData) {
        setValue(key as keyof MovieForm, parsedFormData[key]);
      }
    }
    trigger();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.main}>
      <TitleSection onReset={handleReset} />
      <FormSection register={register} errors={errors} />
      <Pagination isValid={isValid} handleSubmit={handleSubmit(submit)} />
    </main>
  );
}

export default Main;
