import { useEffect } from "react";

// ...existing code...

useEffect(() => {
  const contactElement = document.getElementById("contact");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
}, []);

// ...existing code...
