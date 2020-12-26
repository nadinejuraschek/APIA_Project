// STYLES
import styles from './resources.module.css';

// COMPONENTS
import List from 'components/List/Resources';

const Resources = () => {
  return (
    <main>
      <div className={styles.layout}>
        <h2 className={styles.header}>Resources</h2>
        <List />
      </div>
    </main>
  );
};

export default Resources;
