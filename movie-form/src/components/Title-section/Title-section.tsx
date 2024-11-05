import styles from './Title-section.module.css';
import Button from '../Button/Button';
import { TitleSectionProps } from './Title-section.type';

function TitleSection({ onReset }: TitleSectionProps) {
  return (
    <section className={styles.title}>
      <h1>Производственные параметры фильма</h1>
      <Button
        className={styles.button_reset}
        title="Отменить заполнение"
        onReset={onReset}
      />
    </section>
  );
}

export default TitleSection;
