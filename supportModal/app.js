document.addEventListener("DOMContentLoaded", () => {
  // Elementlarni olish
  const sendBtn = document.getElementById("sendMessage");
  const chatBody = document.getElementById("chatBody");


  const chatToggle = document.getElementById("chatToggle");
  const chatBox = document.getElementById("chatBox");

  chatToggle.onclick = () => {
    const currentDisplay = window.getComputedStyle(chatBox).display;
    chatBox.style.display = currentDisplay === "none" ? "flex" : "none";
  };

  sendBtn.onclick = () => {
    // Foydalanuvchi ismi va xabarini olish
    const nameInput = document.getElementById("userName");
    const messageInput = document.getElementById("userMessage");
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    // Agar ism yoki xabar bo'sh bo'lsa, ogohlantirish
    if (!name || !message) {
      alert("Iltimos, ism va xabar yozing.");
      return;
    }

    // Ismni localStorage'da saqlash (keyingi safar qaytadan chiqsin uchun)
    localStorage.setItem("supportChatUserName", name);

    // Foydalanuvchi xabarini chatga qo'shish uchun element yaratamiz
    const wrapper = document.createElement("div");
    wrapper.className = "user-message-wrapper";

    const msg = document.createElement("div");
    msg.className = "user-message";
    msg.textContent = message;

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = name[0].toUpperCase();

    wrapper.appendChild(msg);
    wrapper.appendChild(avatar);

    chatBody.appendChild(wrapper);

    // Chatni pastga scroll qilamiz
    chatBody.scrollTop = chatBody.scrollHeight;

    // Xabar maydonini tozalaymiz
    messageInput.value = "";

    // Telegram serverga fetch orqali POST so'rov yuborish
    fetch('./telegram_send.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ name: 'Test', message: 'Hello world!' }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error('Fetch error:', err))
      .then((data) => {
        if (data.success) {
          // Agar muvaffaqiyatli yuborilsa, botdan javob ko'rsatamiz
          const botMsg = document.createElement("div");
          botMsg.className = "bot-message";
          botMsg.textContent = "Xabaringiz yuborildi! Tez orada javob beramiz.";
          chatBody.appendChild(botMsg);
          chatBody.scrollTop = chatBody.scrollHeight;
        } else {
          alert("❌ Yuborishda xatolik: " + (data.error || "nomaʼlum muammo"));
        }
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        alert("❌ Serverga ulanib bo‘lmadi.");
      });
  };

  // Sahifa yuklanganda oldin saqlangan ismi inputga qo'yish
  const savedName = localStorage.getItem("supportChatUserName");
  if (savedName) {
    document.getElementById("userName").value = savedName;
  }
});
