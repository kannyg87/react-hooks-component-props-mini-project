import React from 'react'
import blogData from '../data/blog'
import Article from './Article'

function ArticleList() {
  const getArtic = blogData.posts.map((art)=> <Article key={art.id} title={art.title} preview={art.preview}/>)
  return (
    <main>{getArtic}</main>
  )
}
export default ArticleList