emailjs.init({
  publicKey: "dRXv8xKAJQ080_Wjh",
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

function saidYes() {
    emailjs.send("service_0oc0xiy", "template_4q6gl3m", {
        message: "I thinks someone said yes nigga",
        title: "Valentine notice",
        email: "zanhaa56@gmail.com",
        name: "Someone",
    }).then((response) => {
        console.log(response.status, response.text);
        window.location.href = "yes.html";
    }).catch(err => {
        console.error("Email failed:", err);
    });
}

const noBtn = document.querySelector(".no-btn");

document.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();

    const distance = 50;

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const dx = e.clientX - btnCenterX;
    const dy = e.clientY - btnCenterY;

    const mouseDistance = Math.sqrt(dx * dx + dy * dy);

    if (mouseDistance < distance) {
        moveButton();
    }
});

function moveButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random(0.5) * maxX;
    const randomY = Math.random(0.5) * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}
