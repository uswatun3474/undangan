// AMBIL NAMA TAMU DARI URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('to');

if (nama) {
  document.getElementById("namaTamu").innerText = decodeURIComponent(nama);
}

function bukaUndangan() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
}

// RSVP
function kirimRSVP() {
  const status = document.getElementById("kehadiran").value;
  const namaTamu = nama || "Tamu";

  saveRSVP(namaTamu, status);
  alert("RSVP terkirim!");
}

// UCAPAN
function kirimUcapan() {
  const nama = document.getElementById("namaUcapan").value;
  const isi = document.getElementById("isiUcapan").value;

  saveUcapan(nama, isi);
}
