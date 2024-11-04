import Input from '../Input/Input';
import Label from '../Label/Label';
import Textarea from '../Textarea/Textarea';
import styles from './Form.module.css';

function Form() {
  return (
    <form className={styles.form}>
      <div>
        <Label htmlFor="name" name={'Название проекта'} />
        <Input
          name="name"
          type="text"
          id="name"
          placeholder="Название"
          required
        />
        <Label htmlFor="genre" name={'Жанр'} />
        <Input
          name="genre"
          type="text"
          id="genre"
          placeholder="Жанр"
          required
        />
        <Label
          htmlFor="format"
          name={
            'Формат (для онлайн-платформ, большого экрана, интернета, другое)'
          }
        />
        <select name="format" id="format">
          <option value="">Формат</option>
          <option value="">Онлайн-платформа</option>
          <option value="">Большой экран</option>
          <option value="">Интернет</option>
          <option value="">Другое</option>
        </select>
        <Label htmlFor="unf" name={'№ УНФ или отсутствует'} />
        <Input
          name="unf"
          type="number"
          id="unf"
          placeholder="890-000-000-00-000"
        />
      </div>
      <div>
        <Label htmlFor="country" name={'Страна-производитель (копродукция)'} />
        <Input
          name="country"
          type="text"
          id="country"
          placeholder="Страна"
          required
        />
        <Label
          htmlFor="price"
          name={
            'Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть'
          }
        />
        <Input
          name="price"
          type="number"
          id="price"
          placeholder="Сметная стоимость"
        />
        <Label htmlFor="synopsis" name={'Синопсис'} />
        <Textarea
          name="synopsis"
          id="synopsis"
          placeholder="Напишите краткое изложение"
          rows={8}
        />
      </div>
    </form>
  );
}

export default Form;
