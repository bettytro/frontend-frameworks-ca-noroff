import React from 'react'
import { useState, useRef } from 'react';
import { Helmet } from "react-helmet";

const Contact = () => {
    const [form, setForm] = useState({ name: '', subject: '', email: '', message: '' });
    const [messageBox, setMessageBox] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const formRef = useRef();
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (form.name.length < 3 || form.subject.length < 3 || form.message.length < 3) {
        setMessageBox('All fields must have at least 3 characters.');
        setIsSuccess(false);
        return;
      }
      if (!/\S+@\S+\.\S+/.test(form.email)) {
        setMessageBox('Please enter a valid email.');
        setIsSuccess(false);
        return;
      }
      setMessageBox('Form submitted successfully!');
      setIsSuccess(true);
      formRef.current.reset();
    };

  return (
    <main className="min-h-screen">
        <Helmet>
            <title>Contact | eComdev</title>
            <meta name="description" content="Contact us for more information." />
        </Helmet>
        <section className='bg-slate-950 py-36'>
            <div className='max-w-[1600px] mx-auto'>
                <h1 className='md:text-8xl text-xl text-center text-white md:max-w-[66%] mx-auto'>Contact us <span className='font-black'>for more information.</span></h1>
            </div>
        </section>
        <section className='max-w-[1600px] mx-auto py-12 px-4 md:px-8'>
            <h2 className='text-4xl font-black text-center'>Fill out the form</h2>
            <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col max-w-[2/3] gap-4 mt-8'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='name'>Full Name <span className='text-red-500'>*</span></label>
                    <input type='text' id='name' name='name' className='p-4 rounded-md border-2' onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='subject'>Subject <span className='text-red-500'>*</span></label>
                    <input type='tel' id='subject' name='subject' className='p-4 rounded-md border-2' onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'>Email <span className='text-red-500'>*</span></label>
                    <input type='email' id='email' name='email' className='p-4 rounded-md border-2' onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='message'>Message <span className='text-red-500'>*</span></label>
                    <textarea id='message' name='message' className='p-4 rounded-md border-2' onChange={handleChange}></textarea>
                </div>
                <button type='submit' id='submitBtn' className='bg-slate-950 text-white p-4 rounded-md border-2 w-40 self-end'>Submit</button>
            </form>
            {messageBox && <div id='messageBox' className={`p-4 text-white ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}>{messageBox}</div>}
        </section>
    </main>
    )
}

export default Contact