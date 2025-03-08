"use client"; 

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react"; // Import useEffect for dynamic script loading

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  useEffect(() => {
    // Inject custom styles for Google Translate
    const style = document.createElement('style');
    style.textContent = `
      .goog-te-gadget {
        font-weight: 600;
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
      }
      .VIpgJd-ZVi9od-l4eHX-hSRGPd {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .goog-te-gadget img {
        display: flex;
        flex-direction: row;
        align-items: center !important;
        padding-left: 3px;
      }
      .goog-te-gadget span {
        display: flex;
        flex-direction: row;
        font-size: 12px !important;
      }
    `;
    document.head.appendChild(style);

    return () => document.head.removeChild(style); // Cleanup styles
  }, []);
  useEffect(() => {
    // Define the initialization function globally
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL },
        "google_translate_element"
      );
    };

    // Load the Google Translate script dynamically
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}