import React from 'react'


const Profile = (props) => {
    return(
            <div>
             <p>{props.horoscope.sign}</p> 
             <p>{props.horoscope.date}</p> 
             <p>{props.horoscope.horoscope}</p> 
            </div>
    )
}
export default Profile