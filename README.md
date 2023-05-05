# Tubes3_13521049
<h2 align="center">
   <a href="https://chatgpt-lite-alpha.vercel.app/" target="_blank">📨 ChatGPT-lite 📨</a>
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
6. Cara alternatif dapat melalui pranala [berikut](https://chatgpt-lite-alpha.vercel.app/)

<a name="usage"></a>

## Usage
1. Tekan tombol `Login` pada landing page untuk masuk ke aplikasi
2. Pilih algoritma yang akan digunakan untuk mencari string dengan kemiripan tertinggi
3. Masukkan pertanyaan pada chatbox dan tekan tombol `Enter` atau `icon send` untuk mengirimkan pertanyaan
4. Apabila ingin menambah chat baru, tekan tombol `New Chat` pada sidebar
5. Jika ingin mengubah title dari room chat, tekan `icon edit Title` pada sidebar
6. Jika ingin menghapus room chat, tekan `icon delete` pada sidebar
7. Tombol yang bertuliskan `email` pada sidebar digunakan untuk `Sign Out / Change Account`


<a name="videocapture"></a>

## Video Capture
<nl>

![ChatGPT Gif](https://github.com/briankheng/Tubes3_13521049/blob/frontend/img/ChatGPTLite.gif?raw=true)

<a name="screenshots"></a>

## Screenshots
<p>
  <p>Gambar 1. Landing Page</p>
  <img src="/img/SS1.png/">
  <nl>
  <p>Gambar 2. Window Utama</p>
  <img src="/img/SS2.png/">
  <nl>
  <p>Gambar 3. Chat Window</p>
  <img src="/img/SS3.png/">
  <nl>
   <p>Gambar 4. Edit Title</p>
   <img src="/img/SS4.png/">
   <nl>
   <p>Gambar 5. Algorithm Select</p>
   <img src="/img/SS5.png/">
   <nl>
   <p>Gambar 6. Sign Out / Change Account</p>
   <img src="/img/SS6.png/">
   <nl>
</p>

<a name="structure"></a>

## Structure
```bash
├───.next
├───doc
├───img
├───node_modules
├───prisma
├───public
└───src
    ├───assets
    ├───components
    │   ├───chat-window
    │   │   ├───chat-container
    │   │   ├───chat-window-page
    │   │   ├───input-box
    │   │   └───send-button
    │   └───sidebar
    │       ├───account-select
    │       ├───algorithm-select
    │       ├───chat-history
    │       ├───history-container
    │       ├───new-chat-button
    │       └───sidebar-page
    ├───context
    ├───hooks
    ├───libs
    │   ├───algorithms
    │   │   └───string-matching
    │   └───handler
    ├───pages
    │   ├───api
    │   │   ├───auth
    │   │   ├───chat
    │   │   └───message
    │   ├───chat
    │   └───home
    └───styles
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
