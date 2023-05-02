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
          chat_user: '#444654',
        },
      },
    },
  },
  plugins: [],
}

