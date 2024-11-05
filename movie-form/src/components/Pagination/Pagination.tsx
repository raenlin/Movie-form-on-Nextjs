import Button from '../Button/Button';
import styles from './Pagination.module.css';
import { PaginationProps } from './Paginatopn.type';

function Pagination({ isValid, handleSubmit }: PaginationProps) {
  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.pagination}>
        <Button title="1" className={styles.pagination_item} />
        <Button title="2" className={styles.pagination_item} />
        <Button title="..." className={styles.pagination_item} />
        <Button title="4" className={styles.pagination_item} />
      </div>

      <Button
        title="Следующий шаг"
        className={isValid ? styles.button_next : styles.button_next_inactive}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Pagination;
