import React, { useEffect, useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 70)
    return () => clearTimeout(timer)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
    setRemember(false)
    setShowPassword(false)
  }

  const pageClass = 'min-h-screen w-full text-white bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900'
  const panelCardClass = 'rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl'
  const inputClass =
    'w-full rounded-xl border border-white/25 bg-white/10 px-11 py-3 text-base text-white outline-none placeholder:text-slate-300/80 transition-all duration-200 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/50'
  const iconColorClass = 'text-slate-300/80'

  return (
    <div className={pageClass}>
      <section className='relative flex min-h-screen items-center justify-center px-6 py-10 sm:px-10'>
        <div
          className={`w-full max-w-md p-7 sm:p-9 transition-all duration-700 ${panelCardClass} ${
            isReady ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h2 className='text-3xl font-semibold text-center tracking-tight'>Welcome</h2>
          <p className='mt-2 text-sm text-center text-slate-200/85'>
            Sign in to continue to your dashboard.
          </p>

          <form onSubmit={submitHandler} className='mt-8 space-y-4'>
            <div>
              <label className='mb-2 block text-sm font-medium text-slate-100'>Email</label>
              <div className='relative'>
                <span className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${iconColorClass}`}>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
                    <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-9.35 6.23a2.25 2.25 0 01-2.5 0L1.5 8.67z' />
                    <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l10.275 6.85a.75.75 0 00.83 0L22.5 6.908z' />
                  </svg>
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type='email'
                  placeholder='you@company.com'
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-slate-100'>Password</label>
              <div className='relative'>
                <span className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${iconColorClass}`}>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
                    <path
                      fillRule='evenodd'
                      d='M12 1.5a5.25 5.25 0 00-5.25 5.25V9H6a2.25 2.25 0 00-2.25 2.25v8.25A2.25 2.25 0 006 21.75h12a2.25 2.25 0 002.25-2.25v-8.25A2.25 2.25 0 0018 9h-.75V6.75A5.25 5.25 0 0012 1.5zm3.75 7.5V6.75a3.75 3.75 0 10-7.5 0V9h7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className={inputClass}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs font-semibold text-sky-200 transition-colors hover:text-sky-100'
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between pt-1 text-sm'>
              <label className='inline-flex items-center gap-2 text-slate-100/90'>
                <input
                  type='checkbox'
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className='h-4 w-4 rounded border-white/40 bg-transparent accent-sky-500'
                />
                Remember me
              </label>
              <button
                type='button'
                className='text-sky-200 transition-colors hover:text-sky-100'
              >
                Forgot password?
              </button>
            </div>

            <button
              type='submit'
              className='w-full rounded-xl bg-sky-500 px-4 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60'
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login
