import React from 'react'
import Profilecases from '../components/Profilecases'
import aboutimg from '../images/about.webp'
import misimg from '../images/getintouch.webp'
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <main className='min-h-screen'>
        <Helmet>
            <title>About Us | eComdev</title>
            <meta
                name='description'
                content='Learn more about eComdev, the fictional e-commerce platform.'
            />
        </Helmet>
        <section className="pt-12 pb-16 p-8 mx-auto bg-slate-950 text-white flex flex-col items-center justify-center">
            <h1 className="md:text-8xl text-xl font-black text-center">About Us</h1>
            <p className="text-center max-w-[800px] mt-8">eComdev is a fictional e-commerce platform that provides a wide range of products for everyone. We are dedicated to providing the best online shopping experience for our customers. Our mission is to make online shopping as easy as possible for everyone.</p>
        </section>
        <Profilecases imageRight={false}>
            <img className="md:w-1/2 object-cover aspect-square" src={aboutimg} alt="Four people working over a desk" />
            <div className='md:w-1/2'>
                <h2 className='text-6xl font-black'>Our story</h2>
                <p className='mt-4'>eComdev was founded in 2021 by a group of passionate developers who wanted to create an online shopping platform that is easy to use and provides a wide range of products for everyone. Our team is dedicated to providing the best online shopping experience for our customers. We are constantly working on improving our platform and adding new features to make online shopping as easy as possible for everyone.</p>
            </div>
        </Profilecases>
        <Profilecases imageRight={true}>
            <img className="md:w-1/2 object-cover aspect-square" src={misimg} alt="Arrow pointing downwards" />
            <div className='md:w-1/2'>
                <h2 className='text-6xl font-black'>Our mission</h2>
                <p className='mt-4'>Our mission is to make online shopping as easy as possible for everyone. We want to provide a wide range of products for our customers and make it easy for them to find what they are looking for. We are dedicated to providing the best online shopping experience for our customers and are constantly working on improving our platform to make it even better.</p>
            </div>
        </Profilecases>
    </main>
  )
}

export default About