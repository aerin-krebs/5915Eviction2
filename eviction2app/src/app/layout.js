"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react"; 

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
    const style = document.createElement("style");
    style.textContent = `
      .goog-te-gadget {
        font-weight: 600;
        display: flex !important;
        align-items: center !important;
        background-color: #d4e6f2 !important;
        padding-left: .5rem;
        padding-top: .5rem;
      }
        /* Desktop View: Float to the top right */
      @media (min-width: 768px) {
        #google_translate_element {
          float: right;
          padding: 1rem;
          padding-bottom: 1.85rem;
          border-bottom-width: 5px;
          border-bottom-color: white;
          width: 21rem;
        }
      }
      /* Mobile View: Keep it inside the navbar */
      @media (max-width: 767px) {
        #google_translate_element {
          position: static;
        }
      }
      .VIpgJd-ZVi9od-l4eHX-hSRGPd {
        display: flex;
        align-items: center !important;
      }
      .goog-te-gadget img {
        display: flex;
        padding-left: 3px;
      }
      .goog-te-combo {
        width: 9rem;
      }
    `;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL },
          "google_translate_element"
        );
      };
    }

    const existingScript = document.querySelector('script[src*="translate.google.com"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      
      return () => document.body.removeChild(script);
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Add Google Translate element here so it persists across pages */}
        <div id="google_translate_element"  />
        {children}
      </body>
    </html>
  );
}
