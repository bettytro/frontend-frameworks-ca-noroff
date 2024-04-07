import React from 'react';

function Footer() {
    return (
        <footer className='bg-slate-950 px-8 py-12'>
            <div className='mx-auto max-w-[1600px] text-white flex flex-col md:flex-row gap-8 justify-between'>
                <div className="flex flex-col gap-2">
                    <h2 className='font-black text-xl'>Contact us</h2>
                    <p>123 Main St</p>
                    <p>Springfield, IL 62701</p>
                    <p>Phone: 217-555-5555</p>
                </div>
                <div className="flex flex-col gap-2 md:text-center">
                    <p className='cursor-pointer'>Terms & Conditions</p>     
                    <p className='cursor-pointer'>Privacy Policy</p>              
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className='font-black text-xl'>Hours</h2>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Saturday: 10am - 3pm</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
