const Step3 = ({ formRef }) => {
  return (
    <>
      <div>
        <label>E-Mail</label>
        <input name='email' type='email' placeholder='E-Mail' ref={formRef}/>
      </div>
      <div>
        <label>Password</label>
        <input name='password' type='password' placeholder='Password' ref={formRef} />
      </div>
    </>
  );
};

export default Step3;