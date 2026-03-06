import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import call from '../assets/call-1.png'

const Contact = ({ darkMode }) => {
  const form = useRef()
  const [status, setStatus] = useState('') // '' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_eg7b2io",
      "template_xov9oer",
      form.current,
      "79CKBjLZh0mYBaZe9"
    ).then(
      () => {
        setStatus('success')
        e.target.reset()
        setTimeout(() => setStatus(''), 5000) // remove message after 5 seconds
      },
      () => {
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      }
    )
  }

  const inputBg = darkMode ? 'bg-gray-700 text-white border-gray-500' : 'bg-orange-100 text-gray-900 border-gray-300'

  return (
    <section id='contact' className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-16 sm:py-20`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">Touch</span>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-xl mx-auto`}>
            Send me a message and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className='flex justify-center'>
            <img src={call} alt="Contact" className='w-full max-w-sm' />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className={`p-6 sm:p-8 rounded-xl shadow-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type='text' name='first_name' placeholder='First Name'
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${inputBg}`} required />
              <input type='text' name='last_name' placeholder='Last Name'
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${inputBg}`} required />
            </div>

            <input type='email' name='email' placeholder='Email Address'
              className={`w-full px-4 py-2 rounded-lg border mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${inputBg}`} required />

            <input type='tel' name='phone' placeholder='Phone Number'
              className={`w-full px-4 py-2 rounded-lg border mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${inputBg}`} required />

            <textarea name='message' rows='5' placeholder='Your Message'
              className={`w-full px-4 py-2 rounded-lg border mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none ${inputBg}`} required />

            <button type='submit'
              className='w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all'>
              Send Message
            </button>

            {/* Inline success/error message */}
            {status === 'success' && (
              <p className="mt-4 text-green-500 font-medium text-center">
                ✅ Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-500 font-medium text-center">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact