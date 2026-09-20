document.addEventListener("DOMContentLoaded", function () {
    const doctorWhatsAppPromise = fetch(".env", { cache: "no-store" })
        .then(response => {
            if (!response.ok) {
                throw new Error("The .env file could not be loaded.");
            }
            return response.text();
        })
        .then(envContents => {
            const match = envContents.match(/^DOCTOR_WHATSAPP\s*=\s*(.+)$/m);
            const digits = match ? match[1].replace(/\D/g, "") : "";

            if (!digits) {
                throw new Error("DOCTOR_WHATSAPP is missing from .env.");
            }

            return digits.length === 10 ? `91${digits}` : digits;
        })
        .catch(() => "918374174548");

    // 1. Minimum Date Setup (Cannot select past dates)
    const dateInput = document.getElementById("date");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
    }

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById("mobileToggle");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            mobileToggle.classList.toggle("open");
        });

        // Close menu when clicking any link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // 3. Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 4. Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 5. WhatsApp Form Submission Handling
    const form = document.getElementById("appointmentForm");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const reason = document.getElementById("reason").value.trim() || "Routine Consultation";

            const doctorWhatsApp = await doctorWhatsAppPromise;

            // Format date nicely
            let formattedDate = date;
            try {
                formattedDate = new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
                    weekday: "short",
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                });
            } catch (err) {
                formattedDate = date;
            }

            // Construct formatted appointment message
            const message = `🏥 *APPOINTMENT REQUEST*

👤 *Patient Name:* ${name}
📞 *Phone Number:* ${phone}
📅 *Preferred Date:* ${formattedDate}
⏰ *Preferred Time:* ${time}
📝 *Reason for Visit:* ${reason}

_Sent via Dr. Sai Krishna Sri Appointment Portal_`;

            // Open WhatsApp with prefilled message
            const whatsappUrl = `https://wa.me/${doctorWhatsApp}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
        });
    }
});
