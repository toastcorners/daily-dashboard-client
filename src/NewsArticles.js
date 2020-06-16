import React from 'react'
import Article from './Article'

const NewsArticles = (props) => {

    return(
        <div>
            {props.news.map(article => {
                return <Article key={article.id} {...article}/>
            })}
        </div>
    )
}
export default NewsArticles