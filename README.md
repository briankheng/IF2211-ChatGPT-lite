# Tubes3_13521049
<h2 align="center">
   <a href="https://tucil-3-g7s9.vercel.app/" target="_blank">📨 ChatGPT-lite 📨</a>
</h2>
<hr>

## Table of Contents
1. [General Info](#general-information)
2. [Creator Info](#creator-information)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Setup](#setup)
6. [Usage](#usage)
7. [Video Capture](#videocapture)
8. [Screenshots](#screenshots)
9. [Structure](#structure)
10. [Project Status](#project-status)
11. [Room for Improvement](#room-for-improvement)
12. [Acknowledgements](#acknowledgements)
13. [Contact](#contact)

<a name="general-information"></a>

## General Information
Sebuah aplkasi CHatGPT sederhana yang dengan mengaplikasikan pendekatan QA yang paling sederhana tersebut. Pencarian pertanyaan yang palig mirip degan pertanyaan yang diberikan penggunaka dilakukan dengan algoritma pencocokan string Knuth-Morris-Pratt (KMP) dan Boyer-Moore (BM). Regex digunakan untuk menentukan format dari pertanyaan (akan dijelaskan lebih lanjut pada bagian fitur aplikasi). Jika tidak ada satupun pertanyaan pada database yang exact match dengan pertanyaan pengguna melalui algoritma KMP ataupun BM, maka gunakan pertanyaan termirip dengan kesamaan setidaknya 90%. Apabila tidak ada pertanyaan yang kemiripannya di atas 90%, maka chatbot akan memberikan maksimum 3 pilihan pertanyaan yang paling mirip untuk dipilih oleh pengguna. Aplikasi ini berbasis web dengan menggunakan React serta Tailwind CSS untuk frontend dan Next.js untuk backend. ChatGPT sederhana ini digunakan untuk memenuhi tugas besar 3 mata kuliah IF2211 Strategi Algoritma 2022/2023.
 
<a name="creator-information"></a>

## Creator Information

| Nama                        | NIM      | E-Mail                      |
| --------------------------- | -------- | --------------------------- |
| Brian Kheng                 | 13521049 | 13521049@std.stei.itb.ac.id |
| Muhammad Rizky Sya'ban      | 13521119 | 13521119@std.stei.itb.ac.id |
| Mohammad Rifqi Farhansyah   | 13521166 | 13521166@std.stei.itb.ac.id |

<a name="features"></a>

## Features
- `Autentifikasi` pengguna dengan menggunakan akun Google
- Memilih `Algoritma` yang akan digunakan untuk mencari string dengan kemiripan tertinggi
- Tombol untuk `Sign Out / Change Account`
- Tombol `New Chat` untuk menambahkan room chat baru untuk akun pengguna
- Memulihkan `History Chat` dari database untuk tiap room chat pengguna
- `Menghapus` room chat dari database untuk pengguna tertentu
- `Mengubah title` dari room chat pengguna
- `Menambah dan menghapus` pertanyaan serta jawaban dari database
- fitur `kalkulator dan penentu hari` yang dapat digunakan pengguna

<a name="technologies-used"></a>

## Technologies Used
* [Next.js](https://nextjs.org/) - versi 13.2.4
* [React](https://react.dev/) - versi 18.2.0
* [tailwind](https://tailwindcss.com/) - versi 3.3.2

> Note: The version of the libraries above is the version that we used in this project. You can use the latest version of the libraries.

<a name="setup"></a>

## Setup
1. Clone Repository ini dengan menggunakan command berikut
   ```sh
   git clone https://github.com/briankheng/Tubes3_13521049.git
   ```
2. Buka Folder "Tubes3_13521049" di Terminal
3. Install Packages yang diperlukan
   ```sh
   npm i
   ```
4. Jalanakan Aplikasi dengan menggunakan command
   ```sh
   npm run dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000) pada Browser Anda
6. Cara alternatif dapat melalui pranala [berikut](https://tucil-3-g7s9.vercel.app/)

<a name="usage"></a>

## Usage
1. Open the project in Visual Studio
2. To open to the project, you can use the following steps:
    - Click `File` in the top left corner
    - Click `Open` > `Project/Solution`
    - Navigate to the directory where you clone this repository
    - Go to `Tubes2_dicarryVieridanZaki/src/TreasureHunterApp` folder
    - Click `TreasureHunterApp.csproj`
3. After the project was opened:
    - right click on `TreasureHunterApp` in the `Solution Explorer` on the left side of the screen
    - Choose `Publish`
    - Browse the directory where you want to save the executable file
    - Click `Finish`
    - The executable file will be saved in the directory that you choose
    - You can run the executable file by double clicking `setup.exe`
    - And then click `install` to install the program

<a name="videocapture"></a>

## Video Capture
<nl>

<!-- ![ChatGPT Gif](https://github.com/rifqifarhansyah/Tubes2_dicarryVieridanZaki/blob/main/img/TreasureHunter.gif?raw=true) -->

<a name="screenshots"></a>

## Screenshots
<!-- <p>
  <img src="/img/SS1.png/">
  <p>Figure 1. Config File (*txt)</p>
  <nl>
  <img src="/img/SS2.png/">
  <p>Figure 2. Initial Appearance of the Program</p>
  <nl>
  <img src="/img/SS3.png/">
  <p>Figure 3. Result</p>
  <nl>
</p> -->

<a name="structure"></a>

## Structure
```bash
│   .env
│   .eslintrc.json
│   .gitignore
│   global.d.ts
│   next-env.d.ts
│   next.config.js
│   package-lock.json
│   package.json
│   postcss.config.js
│   README.md
│   tailwind.config.js
│   tsconfig.json
│
├───.next
│   │   build-manifest.json
│   │   package.json
│   │   react-loadable-manifest.json
│   │   trace
│   │
│   ├───cache
│   │   ├───swc
│   │   │   └───plugins
│   │   │       └───v4
│   │   └───webpack
│   │       ├───client-development
│   │       │       0.pack
│   │       │       1.pack
│   │       │       10.pack
│   │       │       11.pack
│   │       │       12.pack
│   │       │       13.pack
│   │       │       14.pack
│   │       │       15.pack
│   │       │       16.pack
│   │       │       17.pack
│   │       │       18.pack
│   │       │       19.pack
│   │       │       2.pack
│   │       │       20.pack
│   │       │       3.pack
│   │       │       4.pack
│   │       │       5.pack
│   │       │       6.pack
│   │       │       7.pack
│   │       │       8.pack
│   │       │       9.pack
│   │       │       index.pack
│   │       │       index.pack.old
│   │       │
│   │       ├───client-development-fallback
│   │       │       0.pack
│   │       │       1.pack
│   │       │       2.pack
│   │       │       index.pack
│   │       │       index.pack.old
│   │       │
│   │       └───server-development
│   │               0.pack
│   │               1.pack
│   │               10.pack
│   │               11.pack
│   │               12.pack
│   │               13.pack
│   │               14.pack
│   │               15.pack
│   │               16.pack
│   │               17.pack
│   │               2.pack
│   │               3.pack
│   │               4.pack
│   │               5.pack
│   │               6.pack
│   │               7.pack
│   │               8.pack
│   │               9.pack
│   │               index.pack
│   │               index.pack.old
│   │
│   ├───server
│   │   │   middleware-build-manifest.js
│   │   │   middleware-manifest.json
│   │   │   middleware-react-loadable-manifest.js
│   │   │   next-font-manifest.js
│   │   │   next-font-manifest.json
│   │   │   pages-manifest.json
│   │   │   webpack-api-runtime.js
│   │   │   webpack-runtime.js
│   │   │
│   │   └───pages
│   │       │   index.js
│   │       │   _app.js
│   │       │   _document.js
│   │       │   _error.js
│   │       │
│   │       └───api
│   │           ├───auth
│   │           │       [...nextauth].js
│   │           │
│   │           ├───chat
│   │           │       delete.js
│   │           │       read.js
│   │           │
│   │           └───message
│   │                   [id].js
│   │
│   └───static
│       ├───chunks
│       │   │   amp.js
│       │   │   main.js
│       │   │   polyfills.js
│       │   │   react-refresh.js
│       │   │   webpack.js
│       │   │
│       │   └───pages
│       │           index.js
│       │           _app.js
│       │           _error.js
│       │
│       ├───development
│       │       _buildManifest.js
│       │       _ssgManifest.js
│       │
│       ├───media
│       │       chatgpt.abb6ec5b.svg
│       │
│       └───webpack
│           │   267854556e007e88.webpack.hot-update.json
│           │   29db607cb842e928.webpack.hot-update.json
│           │   2b089e09cdcb19c2.webpack.hot-update.json
│           │   31fa45cde19357b7.webpack.hot-update.json
│           │   5b32ae681cdeea4d.webpack.hot-update.json
│           │   5c10392e578ed028.webpack.hot-update.json
│           │   6a1d6c32fba865d3.webpack.hot-update.json
│           │   6ccf0086f769b227.webpack.hot-update.json
│           │   90d861174ab4994e.webpack.hot-update.json
│           │   9588c6b933a8cc47.webpack.hot-update.json
│           │   9e57bafdc0495efb.webpack.hot-update.json
│           │   a099ae1f6e2435f1.webpack.hot-update.json
│           │   amp.5b32ae681cdeea4d.hot-update.js
│           │   c327afce7a21edd6.webpack.hot-update.json
│           │   d233519a742a7d42.webpack.hot-update.json
│           │   main.5b32ae681cdeea4d.hot-update.js
│           │   webpack.267854556e007e88.hot-update.js
│           │   webpack.29db607cb842e928.hot-update.js
│           │   webpack.2b089e09cdcb19c2.hot-update.js
│           │   webpack.31fa45cde19357b7.hot-update.js
│           │   webpack.5b32ae681cdeea4d.hot-update.js
│           │   webpack.5c10392e578ed028.hot-update.js
│           │   webpack.6a1d6c32fba865d3.hot-update.js
│           │   webpack.6ccf0086f769b227.hot-update.js
│           │   webpack.90d861174ab4994e.hot-update.js
│           │   webpack.9588c6b933a8cc47.hot-update.js
│           │   webpack.9e57bafdc0495efb.hot-update.js
│           │   webpack.a099ae1f6e2435f1.hot-update.js
│           │   webpack.c327afce7a21edd6.hot-update.js
│           │   webpack.d233519a742a7d42.hot-update.js
│           │
│           └───pages
│                   index.29db607cb842e928.hot-update.js
│                   index.2b089e09cdcb19c2.hot-update.js
│                   index.31fa45cde19357b7.hot-update.js
│                   index.5c10392e578ed028.hot-update.js
│                   index.6a1d6c32fba865d3.hot-update.js
│                   index.6ccf0086f769b227.hot-update.js
│                   index.90d861174ab4994e.hot-update.js
│                   index.9588c6b933a8cc47.hot-update.js
│                   index.9e57bafdc0495efb.hot-update.js
│                   index.a099ae1f6e2435f1.hot-update.js
│                   index.c327afce7a21edd6.hot-update.js
│                   index.d233519a742a7d42.hot-update.js
│
├───node_modules
├───prisma
│       schema.prisma
│
├───public
│       chatgpt.svg
│       favicon.ico
│       next.svg
│       thirteen.svg
│       vercel.svg
│
└───src
    ├───assets
    │       chatIcon.tsx
    │       deleteIcon.tsx
    │       editIcon.tsx
    │       sendIcon.tsx
    │
    ├───components
    │   ├───chat-window
    │   │   ├───chat-container
    │   │   │       chat-container.tsx
    │   │   │
    │   │   ├───chat-window-page
    │   │   │       chat-window-page.tsx
    │   │   │
    │   │   ├───input-box
    │   │   │       input-box.tsx
    │   │   │
    │   │   └───send-button
    │   │           send-button.tsx
    │   │
    │   └───sidebar
    │       ├───algorithm-select
    │       │       algorithm-select.tsx
    │       │
    │       ├───chat-history
    │       │       chat-history.tsx
    │       │
    │       ├───history-container
    │       │       history-container.tsx
    │       │
    │       ├───new-chat-button
    │       │       new-chat-button.tsx
    │       │
    │       ├───sidebar-page
    │       │       sidebar-page.tsx
    │       │
    │       └───sign-out.tsx
    │               sign-out.tsx
    │
    ├───context
    │       algo-context.tsx
    │       chat-context.tsx
    │
    ├───hooks
    │       useChats.ts
    │       useMessages.ts
    │
    ├───libs
    │   │   fetcher.ts
    │   │   prisma.ts
    │   │
    │   ├───algorithms
    │   │   │   calculator.ts
    │   │   │   date.ts
    │   │   │   textCleaner.ts
    │   │   │
    │   │   └───string-matching
    │   │           bm.ts
    │   │           kmp.ts
    │   │           levenshteinDistance.ts
    │   │           regex.ts
    │   │           similarityCheck.ts
    │   │
    │   └───handler
    │           addHandler.ts
    │           askHandler.ts
    │           deleteHandler.ts
    │
    ├───pages
    │   │   index.tsx
    │   │   _app.tsx
    │   │
    │   ├───api
    │   │   │   query.ts
    │   │   │
    │   │   ├───auth
    │   │   │       [...nextauth].ts
    │   │   │
    │   │   ├───chat
    │   │   │       create.ts
    │   │   │       delete.ts
    │   │   │       read.ts
    │   │   │
    │   │   └───message
    │   │           create.ts
    │   │           [id].ts
    │   │
    │   ├───chat
    │   │       chat.tsx
    │   │
    │   └───home
    │           home.tsx
    │
    └───styles
            globals.css
```

<a name="project-status">

## Project Status
Project is: _ongoing_

<a name="room-for-improvement">

## Room for Improvement
Perbaikan yang dapat dilakukan pada program ini adalah:
- Menambahkan fitur-fitur tambahan agar bisa lebih menyerupai ChatGPT

<a name="acknowledgements">

## Acknowledgements
- Terima kasih kepada Tuhan Yang Maha Esa
- Terima kasih kepada Dr. Ir. Rinaldi Munir, M.T. serta Dr. Nur Ulfa Maulidevi, S.T, M.Sc selaku dosen K1 dan K2 IF2211 Strategi Algoritma 2022/2023

<a name="contact"></a>

## Contact
<h4 align="center">
  Kontak kami : Kitzuiteyo, nee kitzuiteyo.. Honey, Baby you Baby you<br/>
  2023
</h4>
<hr>
