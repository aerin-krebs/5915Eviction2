import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api";

export const getFAQs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/faqs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }
};


export const getFAQResourceById = async (faqId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources/faq/${faqId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }
};


export const getResources = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources`);
        return response.data;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }
};
