import React, { Component } from 'react';
class Register extends Component {
    state = {  } 
    render() { 
        return (
            <div className='card'>
                <h1>Register</h1>
                <form className='form1' action=''>
                    <div>
                    <label for="username" className='username'> Username </label>
                    <input id='username' type={'text'}/>
                    </div>
                    <br></br>
                    <div>
                    <label for="password" className='password'>Password</label> 
                    <input id='password' type={'password'}/>
                    </div>
                    <br></br>
                    <div>
                    <label for="re_password" className='repassword'>Re-Password</label> 
                    <input id='repassword' type={'password2'}/>
                    </div>
                    <br></br>
                    <div>
                    <label for="email">Email</label>
                    <input id='email' type={'email'}/>
                    </div>
                    <button>Register</button>
                </form>
            </div>
        );
    }
}
 
export default Register;