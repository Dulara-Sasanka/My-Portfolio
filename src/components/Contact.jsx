import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import call from '../assets/call-1.png'

const Contact = ({ darkMode }) => {
  const form = useRef()
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})

  // Form validation
  const validateForm = (data) => {
    const errs = {}
    if (!/^[A-Za-z]{2,}$/.test(data.first_name)) errs.first_name = 'Enter a valid first name'
    if (!/^[A-Za-z]{2,}$/.test(data.last_name)) errs.last_name = 'Enter a valid last name'
    if (!/^\S+@\S+\.\S+$/.test(data.email)) errs.email = 'Enter a valid email address'
    if (!/^\d{7,}$/.test(data.phone)) errs.phone = 'Enter a valid phone number'
    if (!data.message || data.message.trim().length < 5) errs.message = 'Message must be at least 5 characters'
    return errs
  }

  // Send email
  const sendEmail = (e) => {
    e.preventDefault()
    const formData = {
      first_name: form.current.first_name.value.trim(),
      last_name: form.current.last_name.value.trim(),
      email: form.current.email.value.trim(),
      phone: form.current.phone.value.trim(),
      message: form.current.message.value.trim()
    }

    const formErrors = validateForm(formData)
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    setErrors({})

    const recaptchaValue = recaptchaRef.current.getValue()
    if (!recaptchaValue) {
      setStatus('error-recaptcha')
      return
    }

    emailjs.sendForm(
      "service_eg7b2io",
      "template_xov9oer",
      form.current,
      "79CKBjLZh0mYBaZe9"
    ).then(
      () => {
        setStatus('success')
        e.target.reset()
        recaptchaRef.current.reset()
        setTimeout(() => setStatus(''), 5000)
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

        {/* Get in Touch Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`max-w-xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I’d love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
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
              <div>
                <input type='text' name='first_name' placeholder='First Name'
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${inputBg}`} />
                {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
              </div>

              <div>
                <input type='text' name='last_name' placeholder='Last Name'
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${inputBg}`} />
                {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
              </div>
            </div>

            <div className="mb-4">
              <input type='email' name='email' placeholder='Email Address'
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${inputBg}`} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <input type='tel' name='phone' placeholder='Phone Number'
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${inputBg}`} />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="mb-4">
              <textarea name='message' rows='5' placeholder='Your Message'
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none ${inputBg}`} />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="mb-4">
              <ReCAPTCHA
                sitekey="6LdLsIEsAAAAACJCgLSxGaEU0ziO30TR8sxNXx4t"
                ref={recaptchaRef}
              />
            </div>

            <button type='submit'
              className='w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all'>
              Send Message
            </button>

            {status === 'success' && <p className="mt-4 text-green-500 font-medium text-center">✅ Message sent successfully!</p>}
            {status === 'error' && <p className="mt-4 text-red-500 font-medium text-center">❌ Failed to send message. Please try again.</p>}
            {status === 'error-recaptcha' && <p className="mt-4 text-red-500 font-medium text-center">⚠️ Please verify that you are human.</p>}
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact