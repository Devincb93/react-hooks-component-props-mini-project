import React from "react"
import Article from "./Article"
function ArticleList({posts}) {
    console.log(posts)
    const mappedArticles = posts.map((post) => {
        console.log(posts)
       return (<div key={post.id}>
            
                <Article post={post}/>
        </div>)
    })
    return (
        <main>
            {mappedArticles}
            
        </main>
    )
}
export default ArticleList