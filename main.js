function mesinPenjualOtomatis() {
  
    let pilihan = prompt("Pilih produk:\n1. Air Mineral (Rp 3000)\n2. Kopi (Rp 5000)\n3. Teh (Rp 4000)\nMasukkan nomor produk:");

    let uang = prompt("Masukkan jumlah uang Anda:");

    uang = Number(uang);

    let harga;
    switch (pilihan) {
        case '1':
            harga = 3000; // Harga Air Mineral
            break;
        case '2':
            harga = 5000; // Harga Kopi
            break;
        case '3':
            harga = 4000; // Harga Teh
            break;
        default:
            alert("Pilihan produk tidak valid.");
            return;
    }

    if (uang >= harga) {
        alert(`Anda telah membeli produk dengan nomor ${pilihan}. Terima kasih!`);
    } else {
        alert("Uang Anda tidak cukup untuk membeli produk ini.");
    }
}

mesinPenjualOtomatis();
