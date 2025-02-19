import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (formData) => {
    setLoading(true);

    const serviceID = 'service_vqpqdoy'; // Replace with your EmailJS Service ID
    const templateID = 'template_82gaxu7'; // Replace with your EmailJS Template ID
    const userID = 'yY2Jq99iopH1oetDW'; // Replace with your User ID (or public key from EmailJS)

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        reset(); // Reset the form fields after submission
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setLoading(false);
      });
  };

  const onSubmit = (data) => {
    sendEmail(data);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white text-gray-700 shadow-md rounded-lg"
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-10 w-10 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : submitted ? (
        <h1 className="text-center text-green-500 font-bold text-2xl">Thank you! Your message has been sent.</h1>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              {...register('firstName', { required: 'First name is required' })}
              id="firstName"
              placeholder="John"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && <p className="text-red-500 mt-1">{errors.firstName.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              {...register('lastName', { required: 'Last name is required' })}
              id="lastName"
              placeholder="Doe"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && <p className="text-red-500 mt-1">{errors.lastName.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Enter a valid email address',
                },
              })}
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: 'Enter a valid phone number',
                },
              })}
              id="phone"
              type="tel"
              placeholder="1234567890"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="arrivalDate">
              Arrival Date
            </label>
            <input
              {...register('arrivalDate', { required: 'Arrival date is required' })}
              id="arrivalDate"
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.arrivalDate && <p className="text-red-500 mt-1">{errors.arrivalDate.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="guests">
              No. of Guests
            </label>
            <input
              {...register('guests', {
                required: 'Please specify the number of guests',
                min: { value: 1, message: 'At least 1 guest required' },
              })}
              id="guests"
              type="number"
              placeholder="1"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.guests && <p className="text-red-500 mt-1">{errors.guests.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              id="message"
              placeholder="Your message..."
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
