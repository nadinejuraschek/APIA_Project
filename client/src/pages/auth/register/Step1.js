const Step1 = ({ formRef }) => {
  return (
    <>
      <div>
        <label>First Name</label>
        <input name='firstname' type='text' placeholder='First Name' ref={formRef}/>
      </div>
      <div>
        <label>Last Name</label>
        <input name='lastname' type='text' placeholder='Last Name' ref={formRef} />
      </div>
    </>
  );
};

export default Step1;