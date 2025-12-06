// التاريخ النهائي: 9 ديسمبر 2025 الساعة 12:00
const targetDate = new Date("December 9, 2025 12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        window.location.href = "result.html"; // صفحة النتيجة
        return;
    }

    const hours = Math.floor((diff / (1000 * 60 * 60)));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();
