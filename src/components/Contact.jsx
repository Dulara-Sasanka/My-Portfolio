import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import call from '../assets/call-1.png'

const Contact = ({ darkMode }) => {

const form = useRef()

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        "service_eg7b2io",
        "template_xov9oer",
        form.current,
        "79CKBjLZh0mYBaZe9"
    ).then(
        () => {
            alert("Message sent successfully ✅")
        },
        () => {
            alert("Failed to send message ❌")
        }
    )

    e.target.reset()
}

return (
<section
id='contact'
style={{
backgroundColor: darkMode ? '#111827' : '#f9fafb'
}}
className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
>

<div className="container mx-auto px-2">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

<div className='flex justify-center'>
<img src={call} alt="Contact" className='w-full max-w-sm'/>
</div>

<form
ref={form}
onSubmit={sendEmail}
style={{
                        background: darkMode
                        ? 'linear-gradient(to right, #1f2937, #111827)'
                        : 'linear-gradient(to right, #ffffff, #f9fafb)',
                        borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}
                    className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2'
                    data-aos='fade-left'
                    data-aos-delay='300'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4'>
                            <input
                            type='text'
                            name='first_name'
                            placeholder='First Name'
                            style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                            }} 
                            className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all' required/>

                            <input
                            type='text'
                            name='last_name'
                            placeholder='Last Name'
                            style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                            }} 
                            className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all' required/>
                            </div>

                            <input
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                            }} 
                            className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4' required/>

                            <input
                            type='tel'
                            name='phone'
                            placeholder='Phone Number'
                            style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                            }} 
                            className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4' required/>

                            <textarea
                            name='message'
                            rows='4'
                            placeholder='Your Message'
                            style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                            }} 
                            className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4 sm:mb-6 resize-none' required/>

                            <button
                            type='submit'
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)'
                            }}
                            className='w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'>
                                Send Message
                            </button>

</form>

</div>
</div>
</section>
)
}

export default Contact