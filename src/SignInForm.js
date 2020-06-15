
import React from 'react'

const SignInForm = (props) => {
    return(
        
        <div>
            <form className='sign-in' onSubmit={props.onSubmit}>
            <h3>Sign Up</h3>
            <input onChange={props.onChange} type="text" name="name" placeholder="Name" className="input-text" />
            <input onChange={props.onChange} type="text" name="birthday" placeholder="Birthdate" className="input-text" />
            <input onChange={props.onChange} type="text" name="city" placeholder="City" className="input-text" />
            <input onChange={props.onChange} type="text" name="bio" placeholder="Bio" className="input-text" />
            <button className='button' type="submit">
                Sign Up
                </button>

            </form>
        </div>
    )
}

export default SignInForm