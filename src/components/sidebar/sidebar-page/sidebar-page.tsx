import NewChatButton from "../new-chat-button/new-chat-button";

const SideBarPage = () => {
    return (
        <aside className="bg-custom-sidebar text-white p-4 w-64 flex-shrink-0">
            <NewChatButton/>
            <div className="flex items-center mb-2">
            </div>
            <div className="bg-white shadow rounded-lg p-4 mb-4">
            <h3 className="text-lg font-medium mb-2">Recent Chats</h3>
            <ul>
                <li className="text-gray-600 cursor-pointer hover:text-green-400">
                Jane Doe
                </li>
                <li className="text-gray-600 cursor-pointer hover:text-green-400">
                Bob Smith
                </li>
                <li className="text-gray-600 cursor-pointer hover:text-green-400">
                Sarah Johnson
                </li>
            </ul>
            </div>
        </aside>
    );
}

export default SideBarPage;