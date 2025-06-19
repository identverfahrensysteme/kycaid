document.getElementById('kyc-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  try {
    const res = await fetch('https://YOUR-BACKEND-ENDPOINT.com/submit-kyc', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    document.getElementById('message').textContent = data.success
      ? "Erfolgreich hochgeladen!"
      : "Fehler: " + data.error;
  } catch (error) {
    console.error(error);
    document.getElementById('message').textContent = "Netzwerkfehler.";
  }
});
