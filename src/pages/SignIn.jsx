import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import ArrowRightIcon from "../assets/svg/keyboardArrowRightIcon.svg?react"
import visibilityIcon from "../assets/svg/visibilityIcon.svg"
import OAuth from "../components/OAuth"

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData
  const navigate = useNavigate()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {      
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
  
      if (userCredential.user) {
        navigate('/')
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }
  return (
    <>
      <div className="pageContainer">
        <header>
          <div className="pageHeader">Welcome Back!</div>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input type="email" id="email" className="emailInput" placeholder="Email" value={email} onChange={onChange} />
            <div className="passwordInputDiv">
              <input type={showPassword ? 'text' : 'password'} className="passwordInput" placeholder="Password" id="password" value={password} onChange={onChange} />
              <img src={visibilityIcon} alt="show password" className="showPassword" onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>
            <Link to='/forgot-password' className="forgotPasswordLink">Forgot Password</Link>
            <div className="signInBar">
              <p className="signInText">
                Sign In
              </p>
              <button className="signInButton">
                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
              </button>
            </div>
          </form>

          <OAuth />

          <Link to='/sign-up' className="registerLink">Sign Up Instead</Link>
        </main>
      </div>
    </>
  )
}

export default SignIn