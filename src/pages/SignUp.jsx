import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
import ArrowRightIcon from "../assets/svg/keyboardArrowRightIcon.svg?react"
import visibilityIcon from "../assets/svg/visibilityIcon.svg"
import OAuth from "../components/OAuth"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const {name, email, password} = formData
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

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(auth.currentUser);
      
      
      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Something went wrong')
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
            <input type="text" id="name" className="nameInput" placeholder="Name" value={name} onChange={onChange} />
            <input type="email" id="email" className="emailInput" placeholder="Email" value={email} onChange={onChange} />
            <div className="passwordInputDiv">
              <input type={showPassword ? 'text' : 'password'} className="passwordInput" placeholder="Password" id="password" value={password} onChange={onChange} />
              <img src={visibilityIcon} alt="show password" className="showPassword" onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>
            <Link to='/forgot-password' className="forgotPasswordLink">Forgot Password</Link>
            <div className="signUpBar">
              <p className="signUpText">
                Sign Up
              </p>
              <button className="signUpButton">
                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
              </button>
            </div>
          </form>

          <OAuth />

          <Link to='/sign-in' className="registerLink">Sign In Instead</Link>
        </main>
      </div>
    </>
  )
}

export default SignUp