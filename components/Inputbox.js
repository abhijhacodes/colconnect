import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import firebase from "../firebase/clientApp";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar} from "@material-ui/core";
import { db, storage } from "../firebase/clientApp";
import { useRef, useState } from "react";
import Image from "next/image";

function Inputbox() {
  
  const inputRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const filepickerRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: user.displayName,
        image: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_changed",
            null,
            (error) => {
              // ERROR function
              console.log(error);
            },
            () => {
              // COMPLETE function
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const [user, loading, error] = useAuthState(firebase.auth());

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-4">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          src={user.photoURL}
          className="h-16 w-16 object-cover rounded-full"
          height={35}
          width={35}
          alt="user"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:border-blue-800 border-b border-l"
            type="text"
            placeholder={`What's on your mind ${user.displayName} ?`}
            ref={inputRef}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <Image
              src={imageToPost}
              alt="post"
              className="object-contain"
              height={40}
              width={60}
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}

      </div>

      <div className="flex justify-evenly p-3 border-1">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div onClick={() => filepickerRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Make a post!</p>
           <input
            onChange={addImageToPost}
            ref={filepickerRef}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <CameraIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Set status</p>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
