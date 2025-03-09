//  Setup and start animation

var typed = new Typed('#element', {
 strings: ['Web-Designer','Mern-Stack Developer'],
 typeSpeed: 50,
 backSpeed: 30,
 loop: true 
});

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

// project section

function openProject(url) {
    window.open(url, "_blank");
 
}
// form section
const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      description: document.getElementById("description").value,
    };
  // await fetch("http://localhost:5000/send-email"
    try {
      const response = await fetch("https://contact-me-backend.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      alert(data.message);
      document.getElementById("contact-form").reset();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  
