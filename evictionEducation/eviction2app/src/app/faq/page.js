"use client";

import Header from '../components/Header.js';
import styles from './FAQ.module.css';
import React, { useState, useEffect } from 'react';
import axios from "axios"; // Import axios
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    IconButton,
    Collapse,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { getFAQResourceById, getFAQs, getResources } from '../api.js';

/** Helper function to detect phone numbers */
const isPhoneNumber = (text) => {
    const phoneRegex = /^\+?\d{7,15}$/; // Matches phone numbers like "+1234567890"
    return phoneRegex.test(text);
};

const CollapsibleRow = ({ faq }) => {
  const [open, setOpen] = useState(true);
  const [resources, setResources] = useState([]); // Store related resources
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        // Step 1: Fetch the list of related resource IDs
        const resourceData = await getFAQResourceById(faq.faqId);

        // Ensure resourceData is always an array before mapping
        const resourceIds = Array.isArray(resourceData) 
          ? resourceData.map((entry) => entry.resourceId) 
          : [resourceData.resourceId];

        if (!resourceIds || resourceIds.length === 0) {
          console.warn(`No resources found for FAQ ${faq.faqId}.`);
          setResources([]);
          setLoading(false);
          return;
        }

        // Step 2: Fetch all resources
        const resAll = await getResources();
        const matchedResources = resAll.filter((resource) =>
          resourceIds.includes(resource.resourceId)
        );

        setResources(matchedResources);
      } catch (err) {
        console.error(`Error fetching resources for FAQ ${faq.faqId}:`, err);
        setError("Failed to load resources.");
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [faq.faqId]); // Ensures useEffect runs only once per FAQ

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableRow className={styles.tableRow}>
        <TableCell className={styles.tableCell}>
          <IconButton size="small" onClick={handleToggle}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell onClick={handleToggle}>{faq.question}</TableCell>
      </TableRow>
      <TableRow className={styles.tableRow}>
        <TableCell style={{ padding: 0 }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2} style={{ padding: '10px' }}>
                    {faq.answer}
                  </TableCell>
                </TableRow>
                
                {/* Display Resources If Available */}
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={2}>Loading resources...</TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={2} style={{ color: "red" }}>
                      {error}
                    </TableCell>
                  </TableRow>
                ) : resources.length > 0 ? (
                  <TableRow>
                    <TableCell colSpan={2}>
                      <strong>Related Resources:</strong>
                      <ul>
                        {resources.map((resource) => (
                          <li key={resource.resourceId} style={{ marginBottom: "8px" }}>
                            {isPhoneNumber(resource.url) ? (
                              <a href={`tel:${resource.url}`} 
                                style={{ color: "blue", fontWeight: "bold", textDecoration: "underline" }}>
                                📞 {resource.title || resource.url}
                              </a>
                            ) : (
                              <a href={resource.url} target="_blank" rel="noopener noreferrer"
                                style={{ color: "#007bff", fontWeight: "bold", textDecoration: "underline" }}>
                                🔗 {resource.title || resource.url}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} style={{ fontStyle: "italic" }}>
                      No resources available for this FAQ.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const CollapsibleTable = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchFAQs = async () => {
          try {
              const data = await getFAQs();
              setFaqs(data);
          } catch (err) {
              setError("Failed to load FAQs. Please try again later.");
              console.error("Error fetching FAQs:", err);
          } finally {
              setLoading(false);
          }
      };

      fetchFAQs();
  }, []);

  if (loading) {
      return <p>Loading FAQs...</p>;
  }

  if (error) {
      return <p className={styles.error}>{error}</p>;
  }
  
    return (
      <TableContainer>
        <Table>
          <TableBody>
            {faqs.map((faq) => (
              <CollapsibleRow key={faq.faqId} faq={faq} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

function FAQ() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contentBox}>
            <p className={styles.title}>Frequently Asked Questions</p>
                <TableContainer component={Paper} elevation={8}>
                    <CollapsibleTable/>
                </TableContainer>
            </div>
        </div>
    );
}

export default FAQ;
