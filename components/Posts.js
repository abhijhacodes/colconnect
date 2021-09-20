import { db } from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";

function Posts({ posts }) {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          ))}
        <Post
          name={"Colconnect Team"}
          message={"That's all for now!! Don't forget to star our github repository at https://github.com/abhijhacodes/colconnect"}
          image={"https://raw.githubusercontent.com/abhijhacodes/social-media/master/logo2.png"}
          postImage={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fwu6bS3nGgmo%2Fmaxresdefault.jpg&f=1&nofb=1"}
        />
    </div>
  );
}

export default Posts;