import styles from './Title-section.module.css';
import Button from '../Button/Button';

function TitleSection() {
  return (
    <section className={styles.title}>
      <h1>Производственные параметры фильма</h1>
      <Button className={styles.button_reset} title="Отменить заполнение" />
    </section>
  );
}

export default TitleSection;
