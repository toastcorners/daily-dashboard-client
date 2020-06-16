import React from 'react'



const Profile = (props) => {
    console.log(props.name)
    if (props.sign) {
        props.fetchHoroscope(props.sign)
    }

    
    return(
        <div>
            <p>{props.name}</p> 
            <p>{props.sign}</p> 
            <p>{props.horoscope}</p> 
        </div>
    )
}
export default Profile