import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid";

function Post({ name, message, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col mt-7 shadow-md">
      <div className="p-5 bg-white rounded-t-2xl">
        <div className="flex items-center cursor-pointer space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt="user"
          />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading....</p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} alt="something went wrong" objectFit="contain" layout="fill" />
        </div>
      )}

      <div
        className="flex justify-between items-center rounded-b-2xl bg-white
       shadow-md text-indigo-500 border-1"
      >
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
