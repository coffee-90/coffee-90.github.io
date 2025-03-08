---
sidebar_position: 1
id: kse
slug: /kse
title: Kategosasi Sistem Elektronik (KSE)
description: penjelasan kontrol area kategorisasi sistem elektronik
authors: 
    - name: mochamad jazuly
    - title: cybersecurity analyst
    - url: https://github.com/coffee-90
    - socials:
      - x: emjazuly
      - github: coffee-90
      - instagram: em_jazuly
      - threads: em_jazuly
keywords: [smki, keamanan informasi, keamanan siber, indeks kami, indeks keamanan informasi, ikami, bssn, indeks kami 5.0, indeks kami 4.2, ISMS, SNI, ISO 27001 2022, kategorisasi sistem elektronik, kategorisasi se]
---

import styles from '/docs/indeks-kami/styles.module.css';

# Kategosasi Sistem Elektronik (KSE)

## Sistem Elektronik (SE)

### Definisi
**Sistem Elektronik** adalah serangkaian perangkat dan prosedur elektronik yang berfungsi mempersiapkan, mengumpulkan, mengolah, menganalisis, menyimpan, menampilkan, mengumumkan, mengirimkan, dan/atau menyebarkan informasi elektronik. (*Peraturan BSSN 8/2020, Pasal 1 ayat (1)*)

### Pemilihan SE
:::info
Sesuai dengan ketentuan pada Peraturan BSSN 8/2020 Pasal 7 ayat (1), sebaiknya Instansi **melakukan penilaian Kategorisasi SE kepada seluruh SE (web based, desktop based, mobile based) yang dikelola**, sehingga mengetahui SE mana yang akan dijadikan acuan dalam penilaian Indeks KAMI.
:::

Berikut ketentuan dan cara menentukan SE yang akan digunakan penilaian Indeks KAMI:
1. **1 SE** untuk setiap Kategori SE.
2. Skor Kategori **SE tertinggi** yang digunakan sebagai baseline penilaian Indeks KAMI dalam ruang lingkup organisasi (PSE).
3. SE lainnya tidak perlu dihitung Indeks KAMI.
4. Tips pemilihan SE dari sekian banyak yang teridentifikasi:
   - Kritikalitas tinggi.
   - Memproses data pribadi.
   - Layanan publik.
   - Ketergantungan SE.

<details>
<summary>Contoh</summary>

Berikut merupakan contoh Tabel Daftar Sistem Elektronik.
![img](./files/tabel-daftar-se.png#center)

Jika dilihat dari Skor Kategori SE (kolom 4), maka **SIPEN** (skor: **27**) merupakan SE yang digunakan dalam penilaian Indeks KAMI.
</details>

:::warning[Perhatian]
Kategorisasi SE mempengaruhi Tingkat Status Kesiapan. (ref: [Status Kesiapan](../indeks-kami-5.0/indeks-kami-5.0.md#status-kesiapan))
:::

## Kategori SE

### Jenis Kategori SE
Berdasarkan Peraturan BSSN 8/2020 Pasal 6 ayat (1), Kategori SE ada 3 (tiga), yaitu:
<details>
<summary>a. **Strategis**</summary>
- **Skor KSE : 35-50**
- SE yang berdampak serius terhadap kepentingan umum, pelayanan publik, kelancaran penyelenggaraan negara, atau pertahanan dan keamanan negara.
- Pasal 9 ayat (1), PSE **wajib menerapkan**:
  - SNI ISO/IEC 27001;
  - Standar keamanan lain yang terkait dengan keamanan siber yang ditetapkan oleh BSSN; **dan**
  - Standar keamanan lain yang terkait dengan keamanan siber yang ditetapkan oleh Kementerian atau Lembaga.
</details>
<details>
<summary>b. **Tinggi**</summary>
- **Skor KSE : 16-34**
- SE yang berdampak terbatas pada kepentingan sektor dan/atau daerah tertentu (misal Provinsi, Kabupaten, Kota).
- Pasal 9 ayat (1), PSE **wajib menerapkan**:
  - SNI ISO/IEC 27001 **dan/** Standar keamanan lain yang terkait dengan keamanan siber yang ditetapkan oleh BSSN; **dan**
  - Standar keamanan lain yang terkait dengan keamanan siber yang ditetapkan oleh Kementerian atau Lembaga.
</details>
<details>
<summary>c. **Rendah**</summary>
- **Skor KSE : 10-15**
- SE yang berisiko terhadap operasional layanan yang bersifat sementara dan hanya mengganggu sebagian kecil pengguna layanan.
- Pasal 9 ayat (1), PSE **wajib menerapkan**:
  - SNI ISO/IEC 27001; **atau**
  - Standar keamanan lain yang terkait dengan keamanan siber yang ditetapkan oleh BSSN.
</details>

### Ilustrasi

:::warning[Perhatian]
Kategorisasi SE mempengaruhi Tingkat Status Kesiapan. (ref: [Status Kesiapan](../indeks-kami-5.0/indeks-kami-5.0.md#status-kesiapan))
:::

**Contoh :**
Instansi memperoleh skor Indeks KAMI : **472**, maka jika diilustrasikan ke 3 (tiga) Kategorisasi SE, hasil akhir yang diperoleh sebagai berikut:

![img](./files/dashboard-rendah.png#center)
<center>Kategorisasi SE : **Rendah**</center>

![img](./files/dashboard-tinggi.png#center)
<center>Kategorisasi SE : **Tinggi**</center>

![img](./files/dashboard-strategis.png#center)
<center>Kategorisasi SE : **Strategis**</center>