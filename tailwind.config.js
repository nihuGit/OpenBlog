/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#FF4562", // orange color  
          main: "#ffffff", // white color 
          hover: "#15803D", // Darker green for hover states
          dark: "#000000", // black color
        },
        accent: {
          light: "#E6E6FA", // Soft yellow for the webinar section
        },
        neutral: {
          background: "#030621", // Body background color
          card: "#10014878", // Card background color          
          footer: "#E5E7EB", // Footer background         
          border: "#5E6978", // Input border color        
          placeholder: "#9CA3AF", // Placeholder text color          
          text: "#1F2937", // Main text color  
          subtext: "#4B5563", // Secondary text color

        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"], // Choose a clean, readable font
      },
      spacing: {
        '4.5': '1.125rem', // Custom spacing for slight adjustments
      },
      boxShadow: {
        inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)", // Shadow for the inner card area
      },
      maxWidth: {
        '8xl': '95rem',
      }
    },
  },
  plugins: [],
}

