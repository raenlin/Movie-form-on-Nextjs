import Form from '@/components/Form/Form';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.title}>
          <h1>Производственные параметры фильма</h1>
          <button>Отменить заполнение</button>
        </section>
        <section>
          <Form />
        </section>
      </main>
    </div>
  );
}
