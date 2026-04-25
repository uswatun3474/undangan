const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT.firebaseapp.com",
  databaseURL: "https://PROJECT.firebaseio.com",
  projectId: "PROJECT",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// SIMPAN RSVP
function saveRSVP(nama, status) {
  db.ref("rsvp").push({
    nama: nama,
    status: status
  });
}

// SIMPAN UCAPAN
function saveUcapan(nama, isi) {
  db.ref("ucapan").push({
    nama: nama,
    isi: isi
  });
}

// TAMPILKAN UCAPAN REALTIME
db.ref("ucapan").on("value", (snapshot) => {
  const data = snapshot.val();
  const list = document.getElementById("listUcapan");
  list.innerHTML = "";

  for (let id in data) {
    list.innerHTML += `
      <p><b>${data[id].nama}</b>: ${data[id].isi}</p>
    `;
  }
  {
  "rules": {
    ".read": true,
    ".write": true
  }
}
});
