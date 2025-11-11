import {Component} from 'react'
import {FaRegUserCircle} from 'react-icons/fa'
import {MdOutlineLock} from 'react-icons/md'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errorMessage: '',
    showPassword: false,
  }

  onChangeShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  getResponse = async () => {}

  subForm = async event => {
    event.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response, data)
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      this.setState({showErrMsg: false})
      history.replace('/')
    } else {
      this.setState({showErrMsg: true, errorMessage: data.error_msg})
    }
  }

  render() {
    const {
      username,
      password,
      errorMessage,
      showPassword,
      showErrMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) return <Redirect to="/" />

    return (
      <div className="bgLogin">
        <form className="loginForm" onSubmit={this.subForm}>
          <img
            src="https://res.cloudinary.com/dndlbcblt/image/upload/v1761029338/Logo_2logo_gkgtx3.png"
            alt="login website logo"
          />
          <div className="vrt">
            <label htmlFor="username" className="kut">
              Username
            </label>
            <div className="inputContainer">
              <FaRegUserCircle />
              <input
                value={username}
                type="text"
                id="username"
                onChange={this.onChangeUsername}
              />
            </div>
            <label htmlFor="password" className="kut">
              Password
            </label>
            <div className="inputContainer">
              <MdOutlineLock />
              <input
                value={password}
                type={showPassword ? 'text' : 'password'}
                id="password"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="cant">
              <input
                type="checkbox"
                id="checkbox"
                className="showpwdInp"
                onChange={this.onChangeShowPassword}
              />
              <label htmlFor="checkbox" className="kut">
                Show Password
              </label>
            </div>
            <br />
            <button
              type="submit"
              className={`btn1 ${password.length > 6 ? 'btn2' : ''}`}
            >
              Login
            </button>
            {showErrMsg && <p className="err">{errorMessage}</p>}
          </div>
        </form>
      </div>
    )
  }
}
