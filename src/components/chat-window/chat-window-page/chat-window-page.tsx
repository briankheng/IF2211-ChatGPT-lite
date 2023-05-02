

const ChatWindowPage = () => {
    return (
        <main className="flex-grow p-4">
          <div className="bg-white shadow p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-medium">John Doe</h2>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget velit ut risus bibendum tempor ac vel massa. Ut euismod nisi
              vel dolor pharetra tristique. Sed non elit ut enim lacinia cursus.
            </p>
          </div>

          {/* more chat messages */}
        </main>
    );
}

export default ChatWindowPage;