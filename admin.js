function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login berhasil");
      loadData();
    })
    .catch(err => alert(err.message));
}

function loadData() {
  // RSVP
  db.ref("rsvp").on("value", (snap) => {
    const data = snap.val();
    let html = "";
    for (let id in data) {
      html += `<p>${data[id].nama} - ${data[id].status}</p>`;
    }
    document.getElementById("rsvpList").innerHTML = html;
  });

  // UCAPAN
  db.ref("ucapan").on("value", (snap) => {
    const data = snap.val();
    let html = "";
    for (let id in data) {
      html += `<p><b>${data[id].nama}</b>: ${data[id].isi}</p>`;
    }
    document.getElementById("ucapanList").innerHTML = html;
  });
}
