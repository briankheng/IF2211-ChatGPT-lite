import Link from "next/link";
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

// import axios from "axios";
// import { signOut } from "next-auth/react";
// import useChats from "@/hooks/useChats";
// import { useEffect } from "react";
// import useMessages from "@/hooks/useMessages";

// export default function Home() {
//   const newChat = async () => {
//     await axios.post("api/chat/create");
//     chatMutate();
//   };

//   const addQuery = async () => {
//     const inputText = document.getElementById("inputText") as HTMLInputElement;

//     await axios.post("api/message/create", {
//       text: inputText.value,
//       chatId: "clgvqxyg20002un4k7l7rwv9y",
//     });
//     messageMutate();

//     const res = await axios.post("api/query", {
//       query: inputText.value,
//       method: "kmp",
//       chatId: "clgvqxyg20002un4k7l7rwv9y",
//     });
//     messageMutate();
//   };

//   const {
//     chats,
//     isLoading: chatLoading,
//     mutate: chatMutate
//   } = useChats();

//   const {
//     messages,
//     isLoading: messageLoading,
//     mutate: messageMutate,
//   } = useMessages("clgvqxyg20002un4k7l7rwv9y");

//   return (
//     <>
//       <Link href="/api/auth/signin">Login</Link>
//       <button onClick={newChat}>press me!</button>
//       <input type="text" id="inputText" />
//       <button onClick={addQuery}>add query</button>
//       <button onClick={() => signOut()}>signout</button>

//       {!chatLoading && chats && (
//         <div className="bg-midnight">
//           {chats.map((chat: any) => (
//             <div key={chat.id}>
//               <h1>{chat.name}</h1>
//               <p>{chat.id}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {!messageLoading && messages && (
//         <div className="bg-midnight">
//           {messages.map((message: any) => (
//             <div key={message.id}>
//               <h1>{message.text}</h1>
//               <p>{message.user.email}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }
