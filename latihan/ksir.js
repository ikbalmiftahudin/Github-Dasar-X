// Untuk HP
let hp = document.querySelector('.handphone');
const jmlHp = document.querySelector('.jumlahBeliHp');

// Untuk Laptop
let laptop = document.querySelector('.laptop');
const jmlLaptop = document.querySelector('.jumlahBeliLaptop');

// Untuk Komputer
let komputer = document.querySelector('.komputer');
const jmlKomputer = document.querySelector('.jumlahBeliKomputer');

// Hasil
const hasil = document.querySelector('#total');

// Ketika tombol proses ditekan
const proses = document.querySelector('input[type="button"]');
proses.addEventListener('click', function () {
    // Kalo barang gak ada yang di check tampilkan alert
    if (hp.checked === false && laptop.checked === false && komputer.checked === false) {
        alert('Check barang terlebih dahulu!');
    }

    // Kalo barang hp di check maka akan dikali dengan jumlah barang yang di beli
    let hargaHp = 1200000; // Harga awal HP, sudah kita tentukan
    if (hp.checked === true) {
        hargaHp *= jmlHp.value;
        hasil.value = hargaHp;
    }

    // Kalo barang laptop di check maka akan dikali dengan jumlah barang yang di beli
    let hargaLaptop = 5000000; // Harga awal Laptop, sudah kita tentukan
    if (laptop.checked === true) {
        hargaLaptop *= jmlLaptop.value;
        hasil.value = hargaLaptop;
    }

    // Kalo barang komputer di check maka akan dikali dengan jumlah barang yang di beli
    let hargaKomputer = 3000000; // Harga awal Komputer, sudah kita tentukan
    if (komputer.checked === true) {
        hargaKomputer *= jmlKomputer.value;
        hasil.value = hargaKomputer;
    }

    // Kalo semua barang di check maka akan dijumlahkan harga nya dan ditampilkan ke hasil value atau ke bagian input Total Harga
    if (hp.checked === true && laptop.checked === true && komputer.checked === true) {
        hasil.value = hargaHp + hargaLaptop + hargaKomputer;

        // Kalo yang di check cuman barang hp dan laptop saja, maka akan dijumlahkan harga hp dan laptop saja
    } else if (hp.checked === true && laptop.checked === true) {
        hasil.value = hargaHp + hargaLaptop;

        // Kalo yang di check cuman barang hp dan komputer saja, maka akan dijumlahkan harga hp dan komputer saja
    } else if (hp.checked === true && komputer.checked === true) {
        hasil.value = hargaHp + hargaKomputer;

        // Kalo yang di check cuman barang laptop dan komputer saja, maka akan dijumlahkan harga laptop dan komputer saja
    } else if (laptop.checked === true && komputer.checked === true) {
        hasil.value = hargaLaptop + hargaKomputer;
    }
});// Untuk HP
let hp = document.querySelector('.handphone');
const jmlHp = document.querySelector('.jumlahBeliHp');

// Untuk Laptop
let laptop = document.querySelector('.laptop');
const jmlLaptop = document.querySelector('.jumlahBeliLaptop');

// Untuk Komputer
let komputer = document.querySelector('.komputer');
const jmlKomputer = document.querySelector('.jumlahBeliKomputer');

// Hasil
const hasil = document.querySelector('#total');

// Ketika tombol proses ditekan
const proses = document.querySelector('input[type="button"]');
proses.addEventListener('click', function () {
    // Kalo barang gak ada yang di check tampilkan alert
    if (hp.checked === false && laptop.checked === false && komputer.checked === false) {
        alert('Check barang terlebih dahulu!');
    }

    // Kalo barang hp di check maka akan dikali dengan jumlah barang yang di beli
    let hargaHp = 1200000; // Harga awal HP, sudah kita tentukan
    if (hp.checked === true) {
        hargaHp *= jmlHp.value;
        hasil.value = hargaHp;
    }

    // Kalo barang laptop di check maka akan dikali dengan jumlah barang yang di beli
    let hargaLaptop = 5000000; // Harga awal Laptop, sudah kita tentukan
    if (laptop.checked === true) {
        hargaLaptop *= jmlLaptop.value;
        hasil.value = hargaLaptop;
    }

    // Kalo barang komputer di check maka akan dikali dengan jumlah barang yang di beli
    let hargaKomputer = 3000000; // Harga awal Komputer, sudah kita tentukan
    if (komputer.checked === true) {
        hargaKomputer *= jmlKomputer.value;
        hasil.value = hargaKomputer;
    }

    // Kalo semua barang di check maka akan dijumlahkan harga nya dan ditampilkan ke hasil value atau ke bagian input Total Harga
    if (hp.checked === true && laptop.checked === true && komputer.checked === true) {
        hasil.value = hargaHp + hargaLaptop + hargaKomputer;

        // Kalo yang di check cuman barang hp dan laptop saja, maka akan dijumlahkan harga hp dan laptop saja
    } else if (hp.checked === true && laptop.checked === true) {
        hasil.value = hargaHp + hargaLaptop;

        // Kalo yang di check cuman barang hp dan komputer saja, maka akan dijumlahkan harga hp dan komputer saja
    } else if (hp.checked === true && komputer.checked === true) {
        hasil.value = hargaHp + hargaKomputer;

        // Kalo yang di check cuman barang laptop dan komputer saja, maka akan dijumlahkan harga laptop dan komputer saja
    } else if (laptop.checked === true && komputer.checked === true) {
        hasil.value = hargaLaptop + hargaKomputer;
    }
});

document.write("")
nama=prompt("Masukan Nama Pelanggan :");
document.write("Pilih jenis kamar : <br>");
document.write("1.Deluxe Room Rp.275.000/hari <br>");
document.write("2.Suite Room Rp.300.000/hari <br>");
document.write("3.President Room Rp.370.000/hari <br>");
kamar1=275000
kamar2=300000
kamar3=370000
kamar=prompt("jenis kamar yang dipesan :");

document.write("jenis kamar yang dipesan :" + kamar + "<br>");
LamaMenginap=prompt("Lama Menginap :");
document.write("Status Pelanggan : <br>");
document.write("1.member <br>");
document.write("2.non member <br>");
status=prompt ("pilih status pelanggan :");
document.write("status pelanggan :" + status +"<br> <br> <br>");
bayar=prompt("masukan uang anda");