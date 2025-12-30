const contactList = document.getElementById("contactList");

function renderContacts(data) {
  contactList.innerHTML = "";
  data.forEach((c, i) => {
    if (!showPrivateContacts && c.private) return;

    contactList.innerHTML += `
      <div class="contact-card">
        <b>${c.name}</b> (${c.blood})<br>
        📞 ${c.phone}<br>
        🎂 ${c.birthday || "N/A"}<br>
        🕒 ${c.date}<br>
        <button onclick="makeCall('${c.name}','${c.phone}')">Call</button>
        <button onclick="toggleFavorite(${i})">⭐</button>
        <button onclick="markPrivate(${i})">🔒</button>
        <button onclick="deleteContact(${i})">🗑</button>
      </div>
    `;
  });
}

function searchContact() {
  const q = search.value.toLowerCase();
  renderContacts(contacts.filter(c => c.name.toLowerCase().includes(q)));
}

function voiceSearch() {
  const r = new webkitSpeechRecognition();
  r.onresult = e => {
    search.value = e.results[0][0].transcript;
    searchContact();
  };
  r.start();
}

function openForm() {
  modal.style.display = "flex";
}
function closeForm() {
  modal.style.display = "none";
}

function showFavorites() {
  renderContacts(contacts.filter(c => c.favorite));
}

renderContacts(contacts);
let showPrivateContacts = false;
function togglePrivateView() {
  showPrivateContacts = !showPrivateContacts;
  renderContacts(contacts);
}