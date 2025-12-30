let callHistory = JSON.parse(localStorage.getItem("callHistory")) || [];

function makeCall(name, phone) {
  const duration = Math.floor(Math.random() * 300) + 10;
  callHistory.push({
    name, phone,
    duration,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("callHistory", JSON.stringify(callHistory));
  alert(`Calling ${name}\nDuration: ${duration}s`);
}

function showCallHistory() {
  contactList.innerHTML = "<h3>Call History</h3>";
  callHistory.forEach(c => {
    contactList.innerHTML += `
      <div class="contact-card">
        ${c.name} - ${c.phone}<br>
        ⏱ ${c.duration}s<br>
        🕒 ${c.time}
      </div>
    `;
  });
}
function clearCallHistory() {
  callHistory = [];
  localStorage.setItem("callHistory", JSON.stringify(callHistory));
  renderContacts(contacts);
}