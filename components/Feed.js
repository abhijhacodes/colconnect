import Inputbox from "./Inputbox";
import Posts from "./Posts";

function Feed({ posts }) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 scrollbar-hide overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Inputbox />
        <Posts posts={posts}/>
      </div>
    </div>
  );
}

export default Feed;