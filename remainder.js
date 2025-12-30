let reminders = [];

function showReminders() {
  contactList.innerHTML = "<h3>Reminders</h3>";
  contacts.forEach(c => {
    if (c.birthday) {
      contactList.innerHTML += `
        <div class="contact-card">
          🎂 ${c.name}<br>
          Birthday: ${c.birthday}
        </div>
      `;
    }
  });
}
function clearReminders() {
  reminders = [];
  renderContacts(contacts);
}