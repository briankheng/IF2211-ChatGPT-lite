import Chat from "./chat/chat";
import HomePage from "./home/home";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      {!session && <HomePage />}
      {session && <Chat />}
    </div>
  );
};

export default Home;