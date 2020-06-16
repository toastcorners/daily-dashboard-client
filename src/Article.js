import React from 'react'

const Article = (props) => {
    return(
       <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
       </div>
    )
}

export default Article