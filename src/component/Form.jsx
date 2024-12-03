
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const { firstName, secondName, email, message } = formData;

    if (!firstName || !secondName || !email || !message) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setFormData({ firstName: '', secondName: '', email: '', message: '' });
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-[90%] md:w-3/4 mx-auto p-4 bg-secondary-color rounded-3xl py-2 lg:py-4 my-11" onSubmit={handleSubmit}>

      <h3 className=' text-white text-center mt-4 mb-1 text-2xl lg:text-4xl font-bold'>Get in Touch</h3>
      <p className='text-[#BDBDBD] text-center font-normal'>You can reach me anytime</p>
      <div className='py-3 lg:py-2 flex flex-col md:flex-row gap-4 md:gap-3 justify-between items-center w-[100%] lg:w-[85%] mx-auto'>
        <input
          type="text"
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
          autoComplete='off'
          className="w-full md:w-[50%] border px-4 md:px-6 py-3  lg:py-2 rounded-3xl  bg-transparent text-sm lg:text-xl border-primary-color placeholder:text-[#6F6969] text-white outline-none focus:bg-transparent active:bg-transparent"
        />
        <input
          type="text"
          name="secondName"
          placeholder='Second Name'
          autoComplete='off'
          value={formData.secondName}
          onChange={handleChange}
          className="w-full md:w-[50%] border px-4 md:px-6 py-3  lg:py-2 rounded-3xl bg-transparent text-sm lg:text-xl border-primary-color placeholder:text-[#6F6969] text-white outline-none focus:bg-transparent active:bg-transparent"
        />

      </div>

      <div className='w-[100%] lg:w-[85%] mx-auto'>
        <input
          type="email"
          name="email"
          placeholder='Email'
          autoComplete='off'
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 md:px-6 py-3 my-2  lg:py-2 rounded-3xl bg-transparent text-sm lg:text-xl border-primary-color placeholder:text-[#6F6969] text-white outline-none focus:bg-transparent active:bg-transparent"
        />
      </div>
      <div className='w-[100%] lg:w-[85%] mx-auto'>
        <textarea
          name="message"
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border px-4 md:px-6 py-3 my-2  lg:py-2 rounded-3xl bg-transparent text-sm lg:text-xl border-primary-color placeholder:text-[#6F6969] text-white outline-none focus:bg-transparent hover:bg-transparent valid:bg-transparent active:bg-transparent"
        />
      </div>
      {error && <p className="text-red-500 text-center" >{error}</p>}
      {success && <p className="text-green-500  text-center">{success}</p>}
      <button
        type="submit"
        className={` px-3 mx-auto flex justify-center items-center py-2 my-3 bg-accent-color rounded-full w-[6rem] text-white ${loading && 'opacity-50 cursor-not-allowed'}`}
        disabled={loading}
      >
        {loading ? (
          <div class="w-6 h-6 border-2 border-dotted border-t-transparent border-white rounded-full animate-spin"></div>
        ) : (
          'Submit'
        )}
      </button>
    </form>
  );
};

export default Form;
