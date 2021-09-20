import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";
import Image from "next/image";

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

function LoginScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-cyan-300 to-green-300">
      <div className="px-16 py-10 rounded-lg mt-4 text-left bg-blue-100 shadow-lg">
        <div className="flex mb-10 justify-center">
          <Image
            src={"https://raw.githubusercontent.com/abhijhacodes/social-media/master/logo2.png"}
            className="rounded-lg"
            alt="logo"
            height={100}
            width={100}
          />
        </div>
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form action="">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
                <label className="block">Password</label>
                <input type="password" placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-1 mt-4 text-white bg-indigo-600 rounded-sm hover:bg-blue-900">Login</button>
              <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
            </div>
            <div className="flex flex-col text-gray-500 items-center justify-center mt-4">
              <span className="">OR</span>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;