import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { confirmAlert } from 'react-confirm-alert'; // Import the confirmAlert function
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css for react-confirm-alert

const Form = () => {
    const form = useRef();

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [formValues, setFormValues] = useState({
        fullName: '',
        company: '',
        email: '',
        howDidYouHear: '',
        message: '',
    });

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePhone = (phone) => {
        const phonePattern = /^\+?[0-9\s\-]{10,12}$/;
        return phonePattern.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        if (name === 'phone') {
            const onlyNumbers = value.replace(/[^0-9+\s-]/g, '');
            setPhone(onlyNumbers);
            setFormValues({ ...formValues, phone: onlyNumbers });
            if (!validatePhone(onlyNumbers)) {
                setPhoneError('Please enter a valid phone number');
            } else {
                setPhoneError('');
            }
        } else if (name === 'email') {
            if (!validateEmail(value)) {
                setEmailError('Please enter a valid email address');
            } else {
                setEmailError('');
            }
        }
    };

    const showModal = (title, message) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-gray-500 bg-opacity-75">
                    <div className="bg-white text-black rounded-lg shadow-md p-4 w-64">
                        <h5 className="text-lg font-bold mb-2">{title}</h5>
                        <p className="text-sm mb-4">{message}</p>
                        <button
                            className="bg-[#662e9b] hover:bg-[#662e9b] text-white font-bold py-2 px-4 rounded"
                            onClick={onClose}
                        >
                            OK
                        </button>
                    </div>
                </div>
            ),
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const isEmailValid = validateEmail(formValues.email);
        const isPhoneValid = validatePhone(phone);

        if (isEmailValid && isPhoneValid) {
            emailjs.sendForm('service_htvfes9', 'template_lihw05o', form.current, '8GvgYzGjkwINOneAo')
                .then((result) => {
                    console.log(result.text);
                    showModal('Message Sent Successfully', 'Your message has been sent successfully. We will get back to you as soon as possible.');
                    setFormValues({
                        fullName: '',
                        company: '',
                        email: '',
                        phone: '',
                        howDidYouHear: '',
                        message: '',
                    });
                }, (error) => {
                    console.log(error.text);
                    showModal('Failed to Send Message', 'Failed to send your message. Please try again.');
                });
        } else {
            showModal('Invalid Input', 'Please correct the errors in the form before submitting');
        }
    };

    return (
        <div className='mx-4 bg-white-100'>
            <div className='max-w-[1240px] justify-around px-4 py-10 md:flex mx-auto'>
                <div className='p-2 w-full md:w-1/2 py-24 h-auto'>
                    <p className='text-xl text-black font-semibold'>Contact us</p>
                    <h1 className='text-3xl p-2 italic text-center font-semibold my-2 text-white-100 bg-[#662e9b] rounded-xl shadow-xl font-serif'>"Don't Wait, Create Your Success"</h1>
                </div>
                <form ref={form} onSubmit={sendEmail} className="bg-[#662e9b] w-full md:w-1/2 md:mx-[80px] p-4 pt-6 mb-4 border-black border-2 rounded-xl duration-300 hover:shadow-2xl">
                    <FormInput
                        label="Full Name"
                        type="text"
                        name="fullName"
                        value={formValues.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                    />
                    <FormInput
                        label="Company"
                        type="text"
                        name="company"
                        value={formValues.company}
                        onChange={handleChange}
                        placeholder="ABC ltd."
                        required
                    />
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="xyz@abc.com"
                        error={emailError}
                        required
                    />
                    <FormInput
                        label="Phone"
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        placeholder="+00 000 000 0000"
                        error={phoneError}
                        required
                    />
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-white-100 text-sm font-semibold mb-2" htmlFor="how-did-you-hear-about-us">
                                How did you hear about us?
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full text-sm bg-white-100 border border-black text-gray-500 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                                    id="how-did-you-hear-about-us"
                                    name="howDidYouHear"
                                    value={formValues.howDidYouHear}
                                    onChange={handleChange}
                                    required
                                >
                                    <option className='text-black' value="">Select an option</option>
                                    <option className='text-black' value="Friend">Friend</option>
                                    <option className='text-black' value="Cooperate or Business">Cooperate or Business</option>
                                    <option className='text-black' value="Social Media">Social Media</option>
                                    <option className='text-black' value="Google">Google</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#6white-100">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormTextarea
                        label="Message"
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        required
                    />
                    <div className="text-white-100 flex justify-center px-12 md:text-lg py-1">
                        <button
                            type="submit"
                            className="border-2 border-white-100 px-12 py-2 rounded-full text-white-100 hover:text-[#662e9b] hover:bg-white-100 duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const FormInput = ({ label, type, name, value, onChange, placeholder, error, required }) => (
    <div className="flex flex-wrap mb-6">
        <div className="w-full px-3">
            <label className="block tracking-wide text-white-100 text-sm font-semibold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                className="appearance-none text-sm block w-full bg-white-100 text-gray-500 border border-black rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    </div>
);

const FormTextarea = ({ label, name, value, onChange, required }) => (
    <div className="flex flex-wrap mb-6">
        <div className="w-full px-3">
            <label className="block tracking-wide text-white-100 text-sm font-semibold mb-2" htmlFor={name}>
                {label}
            </label>
            <textarea
                className="block text-sm w-full bg-white-100 text-gray-500 border border-black rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    </div>
);

export default Form;
