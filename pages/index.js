import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import LoginScreen from "../components/Login";
import firebase from "../firebase/clientApp";
import {useAuthState} from "react-firebase-hooks/auth";
import { db } from "../firebase/clientApp";

export default function Home({ posts }) {

  const [user, loading, error] = useAuthState(firebase.auth());
  
  if(!user) {
    return <LoginScreen />
  }
  
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Colconnect</title>
      </Head>

      {/* Top bar - header */}
      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: { posts: docs },
  };
}