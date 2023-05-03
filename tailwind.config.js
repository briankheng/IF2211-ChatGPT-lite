/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          chat_window: '#343541',
          sidebar: '#202123',
          user: '#343541',
          chatbot: '#444654',
          input_box: '#40414F',
        },
      },
    },
  },
  plugins: [],
}

