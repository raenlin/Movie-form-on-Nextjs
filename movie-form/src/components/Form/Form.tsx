import styles from './Form.module.css';
import { FormProps } from './Form.type';

function Form({ register, errors }: FormProps) {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="name">Название проекта</label>
        <input
          type="text"
          id="name"
          placeholder="Название"
          required
          {...register('name')}
        />
        <p>{errors.name?.message}</p>
        <label htmlFor="genre">Жанр</label>
        <input
          type="text"
          id="genre"
          placeholder="Жанр"
          required
          {...register('genre')}
        />
        <p>{errors.genre?.message}</p>
        <label htmlFor="format">
          Формат (для онлайн-платформ, большого экрана, интернета, другое)
        </label>
        <select id="format" required {...register('format')}>
          <option value="">Формат</option>
          <option value="Онлайн-платформа">Онлайн-платформа</option>
          <option value="Большой экран">Большой экран</option>
          <option value="Интернет">Интернет</option>
          <option value="Другое">Другое</option>
        </select>
        <p>{errors.format?.message}</p>
        <label htmlFor="unf">№ УНФ или отсутствует</label>
        <input type="number" id="unf" placeholder="890-000-000-00-000" />
      </div>
      <div>
        <label htmlFor="country">Страна-производитель (копродукция)</label>
        <input
          type="text"
          id="country"
          placeholder="Страна"
          required
          {...register('country')}
        />
        <p>{errors.country?.message}</p>
        <label htmlFor="price">
          Сведения о сметной стоимости производства фильма на территории
          Нижегородской области, если есть
        </label>
        <input type="number" id="price" placeholder="Сметная стоимость" />
        <label htmlFor="synopsis">Синопсис</label>
        <textarea
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
