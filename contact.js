let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let trash = JSON.parse(localStorage.getItem("trash")) || [];

function saveContact() {
  contacts.push({
    name: name.value,
    phone: phone.value,
    birthday: birthday.value,
    blood: blood.value,
    group: group.value,
    favorite: false,
    private: false,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));
  closeForm();
  renderContacts(contacts);
}

function deleteContact(i) {
  trash.push(contacts[i]);
  contacts.splice(i, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  localStorage.setItem("trash", JSON.stringify(trash));
  renderContacts(contacts);
}

function showTrash() {
  contactList.innerHTML = "<h3>Deleted Contacts</h3>";
  trash.forEach((c, i) => {
    contactList.innerHTML += `
      <div class="contact-card">
        ${c.name} (${c.phone})
        <button onclick="restore(${i})">Restore</button>
      </div>
    `;
  });
}

function restore(i) {
  contacts.push(trash[i]);
  trash.splice(i, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  localStorage.setItem("trash", JSON.stringify(trash));
  renderContacts(contacts);
}
function clearTrash() {
  trash = [];
  localStorage.setItem("trash", JSON.stringify(trash));
  renderContacts(contacts);
}