import React, { Component } from 'react';
import Profile from './Profile';
import SignInForm from './SignInForm'


class SignIn extends Component {

    state = {
        horoscope: [],
        name: '',
        birthday: '',
        city: '',
        bio: ''
    }

    getUserInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    componentDidMount(){
        this.fetchForecast()
        this.fetchHoroscope()
   }

    fetchForecast = () => {
        fetch('')
        .then(resp => resp.json())
        .then(data => {
          this.setState({forecast: data})
        })
      }
    
      fetchHoroscope = () => {
        fetch('http://ohmanda.com/api/horoscope/leo')
        .then(resp => resp.json())
        .then(data => {
         this.setState({horoscope: data.horoscope})
        })
      }


        userPost = (e) => {
         e.preventDefault()   
        console.log(this.state)
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json' 
            },
            body: JSON.stringify({ 
                user: {
                 name: this.state.name,
                 birthday: this.state.birthday,
                 city: this.state.city,
                 bio: this.state.bio 
                }
            })
        })
        .then(resp => resp.json())
        .then(console.log)
    
      }

    render() {
        return (
        <div>
            <Profile horoscope={this.state.horoscope}/>
            <SignInForm 
            onSubmit={this.userPost}
            onChange={this.getUserInput}
            />
        </div>
        )
    }
}
export default SignIn