let contacts = JSON.parse(localStorage.contacts || "[]");

function add(){
  contacts.push({
    name:name.value,
    phone:phone.value,
    group:group.value,
    blood:blood.value,
    time:new Date().toLocaleString()
  });
  localStorage.contacts = JSON.stringify(contacts);
  show();
}

function show(){
  list.innerHTML="";
  contacts.forEach(c=>{
    list.innerHTML += `
      <div class="contact">
        <b>${c.name}</b> (${c.group})<br>
        📞 ${c.phone}<br>
        🩸 ${c.blood}<br>
        ⏰ ${c.time}
      </div>`;
  });
}

search.onkeyup = ()=>{
  let v = search.value.toLowerCase();
  document.querySelectorAll(".contact").forEach(c=>{
    c.style.display = c.innerText.toLowerCase().includes(v) ? "" : "none";
  });
}

function voice(){
  let r = new webkitSpeechRecognition();
  r.onresult = e => search.value = e.results[0][0].transcript;
  r.start();
}

show();

