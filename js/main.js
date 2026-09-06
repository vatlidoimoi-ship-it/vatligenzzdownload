const appUrl = "https://vatligenzz.onrender.com/";

const copyState = document.getElementById("copyState");
const copyUrlBtn = document.getElementById("copyUrlBtn");
const copyUrlBtnInline = document.getElementById("copyUrlBtnInline");
const copyMessageBtn = document.getElementById("copyMessageBtn");
const messageText = document.getElementById("messageText");
const tabButtons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".guide-panel");

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    if (copyState) {
      copyState.textContent = successMessage;
    }
  } catch (error) {
    if (copyState) {
      copyState.textContent = "Không tự copy được. Hãy bôi đen link rồi nhấn Ctrl + C.";
    }
  }
}

copyUrlBtn?.addEventListener("click", () => {
  copyText(appUrl, "Đã sao chép link PHYEDU.");
});

copyUrlBtnInline?.addEventListener("click", () => {
  copyText(appUrl, "Đã sao chép link PHYEDU.");
});

copyMessageBtn?.addEventListener("click", () => {
  copyText(messageText.textContent.trim(), "Đã sao chép tin nhắn hướng dẫn.");
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const device = button.dataset.device;

    tabButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
    });

    panels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === device);
    });
  });
});
