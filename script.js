function getTimezoneFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("timezone") || "America/Sao_Paulo"; // Default to São Paulo
}

function updateTime() {
    const timezone = getTimezoneFromURL();
    const now = new Date();
    const options = { timeZone: timezone, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
    const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
    
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();