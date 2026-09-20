# Sai Krishna Sri Appointment Portal

A responsive, single-page medical appointment website for Dr. Sai Krishna Sri. Patients can review the clinic information, browse the facilities gallery, and submit an appointment request that opens in WhatsApp with a pre-filled message.

## Features

- Responsive medical clinic landing page
- Sticky navigation with mobile menu
- Hero section with clinic information
- Three-step appointment process section
- Clinic facilities gallery
- Appointment form with required patient, phone, date, and time fields
- Automatic prevention of selecting past appointment dates
- WhatsApp message generation from submitted form details
- Scroll reveal animations and interactive card states
- Local image assets with descriptive alternative text

## Project Structure

```text
.
├── index.html          # Main page markup and appointment form
├── style.css           # Layout, responsive styles, colors, and animations
├── script.js           # Navigation, date validation, reveal effects, and WhatsApp flow
├── images/             # Clinic and healthcare image assets
├── README.md           # Project documentation
└── .gitignore          # Files excluded from Git
```

## Run Locally

No build tools or package installation are required.

1. Clone or download the repository.
2. Open `index.html` directly in a browser, or serve the folder with any static web server.
3. Test the navigation, gallery, responsive layout, and appointment form.

For a local server with Python installed:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## WhatsApp Configuration

Before publishing the site, update the `doctorWhatsApp` value in `script.js`:

```javascript
const doctorWhatsApp = "919999999999";
```

Replace the placeholder with the clinic's WhatsApp number in international format, without a `+`, spaces, or punctuation. For example, an Indian number should begin with `91`.

The form opens a WhatsApp URL containing:

- Patient name
- Phone number
- Preferred date
- Preferred time
- Reason for visit

The current form opens WhatsApp in a new browser tab. It does not store appointment data in a database or send data to a server.

## Clinic Details

The page currently displays:

- Doctor: Dr. Sai Krishna Sri
- Location: Medapadu center, Andhra Pradesh, India
- Booking method: WhatsApp
- Availability shown in the hero card: 24 / 7

Update these values in `index.html` if the clinic details change.

## Customization

- Edit page content and labels in `index.html`.
- Adjust colors, spacing, typography, and responsive breakpoints in `style.css`.
- Replace or add images in `images/` and update their paths and `alt` text in `index.html`.
- Update the Google Fonts link in the document head if a different font is preferred.
- Update the WhatsApp message format in `script.js` if the clinic needs additional appointment information.

## Browser Support

The site is designed for current versions of Chrome, Edge, Firefox, and Safari on desktop and mobile devices. JavaScript is required for the mobile navigation, date minimum, reveal animations, and WhatsApp form behavior.

## Deployment

Because this is a static website, it can be deployed to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any web server that serves HTML, CSS, JavaScript, and image files.

Ensure that:

- All files in `images/` are uploaded.
- Relative file paths are preserved.
- The WhatsApp number is configured before going live.
- The clinic address and availability are reviewed before publishing.

## License

No license has been specified for this project yet. Add a license file before redistributing the source code publicly.
