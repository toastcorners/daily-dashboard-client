import React, { Component } from 'react';
import Profile from './Profile';
import SignInForm from './SignInForm'
import NewsArticles from './NewsArticles'


class SignIn extends Component {

    state = {
        horoscope: [],
        news: [],
        user: {
            name: '',
            birthday: '',
            city: '',
            bio: '',
        }
    }

    getUserInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
        this.fetchNews()
   }
     //get news articles
    fetchNews = () => {
        fetch('http://localhost:3000/api/v1/news_articles')
        .then(resp => resp.json())
        .then(data => {
        this.setState({news: data})
        })
    }
     //get forecast
    fetchForecast = () => {
        fetch('')
        .then(resp => resp.json())
        .then(data => {
          this.setState({forecast: data})
        })
      }
      //get horoscope
      fetchHoroscope = (sign) => {
        fetch(`http://ohmanda.com/api/horoscope/${sign}`)
        .then(resp => resp.json())
        .then(data => {
           this.setState({horoscope: data.horoscope})
       })
      }

      //post request to create new user
    userPost = (e) => {
        e.preventDefault()   
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
        .then(data => {
            this.setState({
                user: data
            })
      })
      this.setState({
        name: '',
        birthday: '',
        city: '',
        bio: ''
      })
    }

      getSign = (birthday) => {
      const splitBirthday = birthday.split('/')
      const [month, day, year] = splitBirthday
        if (month === '01'){
            return day < '20' ? 'capricorn' : 'aquarius'
        }
        else if (month === '02'){
            return day < '19' ? 'aquarius' : 'pisces'
        }
        else if (month === '03'){
            return day < '21' ? 'pisces' : 'aries'
        }
        else if (month === '04'){
            return day < '20' ? 'aries' : 'taurus'
        }
        else if (month === '05'){
            return day < '21' ? 'taurus' : 'gemini'
        }
        else if (month === '06'){
            return day < '21' ? 'taurus' : 'gemini'
        }
        else if (month === '07'){
            return day < '23' ? 'cancer' : 'leo'
        }
        else if (month === '08'){
            return day < '23' ? 'leo' : 'virgo'
        }
        else if (month === '09'){
            return day < '23' ? 'virgo' : 'libra'
        }
        else if (month === '10'){
            return day < '23' ? 'libra' : 'scorpio'
        }
        else if (month === '11'){
            return day < '22' ? 'scorpio' : 'sagittarius'
        }
        else if (month === '12'){
            return day < '22' ? 'sagittarius' : 'capricorn'
        } else {
            return null
            }   
        }//end of getSign

    

    render() {
        return (
        <div>
            <SignInForm 
            onSubmit={this.userPost}
            onChange={this.getUserInput}
            />
            <Profile 
            name={this.state.user.name}
            news={this.fetchNews}
            fetchHoroscope={this.fetchHoroscope}
            horoscope={this.state.horoscope}
            sign={this.getSign(this.state.user.birthday)}
            />
            <NewsArticles
            news={this.state.news}
            />
        </div>
        )
    }
}
export default SignIn