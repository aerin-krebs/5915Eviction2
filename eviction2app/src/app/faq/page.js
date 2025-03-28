"use client";

import Header from '../components/Header.js';
import styles from './FAQ.module.css';
import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Collapse,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import faqsData from './faq.json';

const CollapsibleRow = ({ faq }) => {
  const [open, setOpen] = useState(true); // Keep rows expanded by default

  const handleToggle = () => {
    setOpen(!open);
  
    // Re-trigger Google Translate when opening the row
    if (!open) {
      setTimeout(() => {
        const translateSelect = document.querySelector(".goog-te-combo");
        if (translateSelect && translateSelect.value) {
          // Only trigger translation if a language has been selected
          translateSelect.dispatchEvent(new Event("change"));
        }
      }, 100); // Slight delay to allow content to re-render
    }
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
  
    useEffect(() => {
      setFaqs(faqsData);
    }, []);
  
    return (
      <TableContainer>
        <Table>
          <TableBody>
            {faqs.map((faq, index) => (
              <CollapsibleRow key={index} faq={faq} />
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
