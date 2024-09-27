var awal_cerita = [];
awal_cerita[0] = [0, "Apa yang terjadi, dimana ini?", "next"];
awal_cerita[1] = [0, "Seingatku aku tertidur di bangku kelas. Kenapa tiba-tiba aku disini?", "next"];
awal_cerita[2] = [0, "Daerah ini aneh sekali, bangunannya terlihat kuno seperti masa lalu saja.", "next"];
awal_cerita[2] = [0, "Lebih baik, aku berkeliling untuk mencari tahu", "close"];

var talk_1 = [];
talk_1[0] = [0, "Permisi pak... dimanakah ini?", "next"];
talk_1[1] = [5, "Ini desa pelangi, kamu berasal dari mana?", "next"];
talk_1[2] = [0, "Saya dari Gunungputri pak", "next"];
talk_1[3] = [5, "Gunungputri, mmmmm.... saya belum pernah dengar", "next"];
talk_1[4] = [5, "Cobalah kamu ke resto, mungkin kamu bisa bertanya-tanya", "next"];
talk_1[5] = [5, "Tapi, kamu jangan pergi ke hutan! Disana banyak monster", "next"];
talk_1[6] = [0, "Baik pak, terimakasih infonya", "close"];

var talk_2 = [];  //services NPC inn
talk_2[0] = [2, "Selamat datang di penginapan kami. Istirahat dapat memulihkan energi, terutama sehabis bertempur.", "next"];
talk_2[1] = [2, "Apa anda mau menginap di tempat kami?", "trade", 0];
talk_2[2] = [2, "Terimakasih, selamat datang kembali", "close"];
talk_2[3] = [2, "Maaf, anda tidak memiliki cukup uang", "trade"];
talk_2[4] = [2, "Selamat pagi, selamat beraktivitas kembali", "close"];

var item_0 = [];
item_0[0] = [2,2, "Istirahat", 1, 30, "sleep", 10, 0, "Memulihkan energimu 100% sehingga siap bertempur kembali esok hari"];
item_0[1] = [0,3, "Tidak jadi menginap", 0, 0, "close", 0, ""];

var talk_3 = [];
talk_3[0] = [7, "Istirahat di penginapan ini akan memulihkan tenagamu", "next"];
talk_3[1] = [7, "Hal itu bermanfaat jika kamu kelelahan sehabis bertempur", "next"];
talk_3[2] = [0, "Apakah anda habis bertempur pak?", "next"];
talk_3[3] = [7, "Iya, saya bertempur di hutan untuk menaikkan pengetahuan saya.", "close"];

var talk_4 = [];  //services NPC bar
talk_4[0] = [4, "Selamat datang di warung kami..", "next"];
talk_4[1] = [4, "Apa yang anda butuhkan", "trade", 1];
talk_4[2] = [4, "Terimakasih, selamat datang kembali", "close"];
talk_4[3] = [4, "Maaf, anda tidak memiliki cukup uang", "trade"];
talk_4[4] = [4, "Maaf, level anda belum cukup", "trade"];
talk_4[5] = [4, "Kamu sudah punya", "trade"];

var item_1 = [];
item_1[0] = [0,2, "Kopi", 1, 10, "HP", 5, 0, "Memulihkan energimu sebesar 5 poin"];
item_1[1] = [1,2, "Ayam Goreng", 1, 20, "HP", 10, 0, "Memulihkan energimu sebesar 10 poin"];
item_1[2] = [0,3, "Tidak jadi beli", 0, 0, "close", 0, ""];

var talk_5 = [];
talk_5[0] = [1, "Sepertinya kamu orang baru disini", "next"];
talk_5[1] = [1, "Bersiaplah, jika kamu ingin pergi ke hutan", "next"];
talk_5[2] = [1, "Belilah perlengkapan di toko sebelah", "close"];

var talk_6 = [];  //services NPC bar
talk_6[0] = [3, "Selamat datang di toko peralatan ..", "next"];
talk_6[1] = [3, "Apa yang kamu butuhkan", "trade", 2];
talk_6[2] = [3, "Terimakasih, selamat datang kembali", "close"];
talk_6[3] = [3, "Maaf, kamu tidak memiliki cukup uang", "trade", 2];
talk_6[4] = [3, "Maaf, level kamu belum cukup", "trade", 2];
talk_6[5] = [3, "Kamu sudah punya barang ini", "trade", 2];

var item_2 = [];
item_2[0] = [0,0, "Pedang Kayu", 1, 40, "ATK", 5, 1, "Pedang kayu cocok untuk pemula. Meningkatkan serangan sebesar 5 Poin"];
item_2[1] = [1,0, "Golok Besar", 2, 250, "ATK", 12, 2, "Golok tajam, senjata berbahaya yang dapat meningkatkan serangan sebesar 12 poin. Butuh level 2 untuk menggunakannya"];
item_2[2] = [2,0, "Pedang Panjang", 4, 500, "ATK", 18, 3, "Pedang para pendekar, meningkatkan daya serang sebesar 18 poin. Butuh level 4 untuk menggunakannya"];
item_2[3] = [3,0, "Perisai Kayu", 1, 40, "DEF", 4, 4, "Perisai kayu cocok untuk pemula, meningkatkan daya tahan sebesar 4 poin"];
item_2[4] = [0,1, "Perisai Kuningan", 2, 150, "DEF", 9, 5, "Perisai kuningan lebih kuat, mampu melindungi sebesar 9 poin. Butuh level 2 untuk menggunakannya"];
item_2[5] = [1,1, "Perisai Baja", 3, 350, "DEF", 12, 6, "Perisai ini dapat meningkatkan daya tahan sebesar 12 poin.. Butuh level 3 untuk menggunakannya"];
item_2[6] = [2,1, "Obat Penyembuh", 1, 30, "HP", 10, 7, "Obat untuk memulihkan energi di saat pertempuran berlangsung"];
item_2[7] = [3,1, "Buku Pengetahuan", 1, 50, "EXP", 25, 0, "Bahan bacaan untuk memperkaya wawasan dan menambah pengalaman"];
item_2[8] = [0,3, "Tidak jadi beli", 0, 0, "close", 0, ""];