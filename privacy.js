let showPrivateContacts = false;

function togglePrivate() {
  showPrivateContacts = !showPrivateContacts;
  alert(showPrivateContacts ? "Private contacts visible" : "Private contacts hidden");
  renderContacts(contacts);
}

function markPrivate(i) {
  contacts[i].private = !contacts[i].private;
  localStorage.setItem("contacts", JSON.stringify(contacts));
  renderContacts(contacts);
}

function toggleFavorite(i) {
  contacts[i].favorite = !contacts[i].favorite;
  localStorage.setItem("contacts", JSON.stringify(contacts));
  renderContacts(contacts);
}
function showPrivateContactsFunc() {
  renderContacts(contacts.filter(c => c.private));
}