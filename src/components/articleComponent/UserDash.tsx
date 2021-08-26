import React from 'react';
import { Link } from 'react-router-dom';
import ArticleRender from './ArticleRender';

// Minimal dashboar page to create new blog post -- routes to Article Input form
// User can also go directly to the feed page from this dashboard
// User can view number of posts created
// User can Edit old posts

const UserDash:React.FC = () => {
  // const oldList = olderPosts.map((element: any, index:number) => {
  //   return <Link to='./ArticleRender.tsx'><li key={index}> { element } </li></Link> 
  //   })

  return (
    <div className='Dashboard'>
      <Link to='/Article'><button>New Post</button></Link>
         Hello
      <Link to='/BlogFeed'><button>Go to feed</button></Link>
     
    </div>
  )
}

export default UserDash