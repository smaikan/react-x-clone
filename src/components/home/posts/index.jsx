import Actions from "./Actions";
import Postuser from "./Postuser";
import Profilephoto from "./Profilephoto";



const Posts = ({data}) => {
  return ( 
  <>
  
  {data.map((post,index)=>(
    <div key={index} className="post">
      
      <Profilephoto pp={post.pp} />
    <div className="inpost">
      
      <Postuser username={post.username} usernick={post.nick} date={post.date} />
      
      <div className="text">{post.text}</div>
      {post.img && <img className="img" src={post.img}/>}
      
      
      <Actions fav={post.fav} comment={post.comment} retweet={post.retweet} etkilesim={post.etkilesim}/>

    </div>
      </div>
  ))}
  </>
    
        
      

    
  
    
  );
};

export default Posts;
