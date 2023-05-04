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
