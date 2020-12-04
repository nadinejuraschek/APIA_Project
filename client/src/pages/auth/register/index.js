// REACT
import { useState } from 'react';

// STYLES
import styles from '../auth.module.css';

// DEPENDENCIES
import { useForm } from 'react-hook-form';

// COMPONENTS
import Primary from 'components/Button/Primary';

// STEPS
import Step1 from './Step1.js';
import Step2 from './Step2.js';
import Step3 from './Step3.js';

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const [ step, setStep ] = useState(0);

  /* steps logic */
  const CurrentStep = () => {
    switch (step) {
      case 0:
        return (
          <>
          <Step1 />
          <div className={styles.btnWrapper}>
            <Primary label="Next" handleClick={() => setStep(1)} />
          </div>
          </>
        );
      case 1:
        return (
          <>
          <Step2 />
          <div className={styles.btnWrapper}>
            <Primary label="Previous" handleClick={() => setStep(0)} />
            <Primary label="Next" handleClick={() => setStep(2)} />
          </div>
          </>
        );
      case 2:
        return (
          <>
          <Step3 />
          <div className={styles.btnWrapper}>
            <Primary label="Previous" handleClick={() => setStep(1)} />
            <Primary label="Submit" handleClick={() => onSubmit()} />
          </div>
          </>
        );
      default:
        return <Step1 />;
    }
  };

  /* SUBMIT register form */
  const onSubmit = data => {
    console.log("Submitted! ", data);
  };

  return (
    <main>
      <h2>Register</h2>
      <form className={styles.form}>
        <CurrentStep formRef={register} />
      </form>
    </main>
  );
};

export default Register;
