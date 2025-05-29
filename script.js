let contacts = [];
let editIndex = -1;

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const contactList = document.getElementById("contactList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (editIndex === -1) {
    contacts.push({ name, email, phone });
  } else {
    contacts[editIndex] = { name, email, phone };
    editIndex = -1;
  }

  form.reset();
  renderContacts();
});

function renderContacts() {
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const card = document.createElement("div");
    card.className = "contact-card";

    const details = document.createElement("span");
    details.innerHTML = `<strong>${contact.name}</strong><br>${contact.email}<br>${contact.phone}`;
    card.appendChild(details);

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editContact(index);
    card.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteContact(index);
    card.appendChild(deleteBtn);

    contactList.appendChild(card);
  });
}

function editContact(index) {
  const contact = contacts[index];
  nameInput.value = contact.name;
  emailInput.value = contact.email;
  phoneInput.value = contact.phone;
  editIndex = index;
}

function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}

