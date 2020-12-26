// COMPONENTS
import FeatureCard from 'components/Features';

// ICONS
import hoursIcon from '../../images/hours.svg';
import paymentIcon from '../../images/payment.svg';
import goalIcon from '../../images/goal.svg';
import notesIcon from '../../images/note.svg';

// STYLES
import styles from './notebook.module.css';

const Notebook = () => {
  return (
    <main>
      <div className={styles.layout}>
        <h2 className={styles.header}>Notebook</h2>

        <FeatureCard
          title='workhours'
          header='Work Hours'
          icon={hoursIcon}
          link='/notebook/workhours'
        />

        <FeatureCard
          title='payment'
          header='Payments'
          icon={paymentIcon}
          link='/notebook/payments'
        />

        <FeatureCard
          title='goals'
          header='Goals'
          icon={goalIcon}
          link='/notebook/goals'
        />

        <FeatureCard
          title='notes'
          header='Notes'
          icon={notesIcon}
          link='/notebook/notes'
        />

      </div>
    </main>
  );
};

export default Notebook;
