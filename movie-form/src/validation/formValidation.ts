import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Заполните поле')
    .matches(/^[А-Яа-яЁё]+$/, 'Можно использовать только русские буквы'),
  genre: yup
    .string()
    .required('Заполните поле')
    .matches(/^[А-Яа-яЁё]+$/, 'Можно использовать только русские буквы'),
  format: yup.string().required('Заполните поле'),
  country: yup
    .string()
    .required('Заполните поле')
    .matches(/^[А-Яа-яЁё]+$/, 'Можно использовать только русские буквы'),
});
