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
        console.error("Error fetching Faq and Resource IDs:", error);
        return [];
    }
};

export const getNodeResourceById = async (faqId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources/node/${faqId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Node and Resource IDs:", error);
        return [];
    }
};


export const getResources = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Resources:", error);
        return [];
    }
};


export const getFaqResourceList = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources/faq-list`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Resource ID list:", error);
        return [];
    }
};

export const getQuestionAnswerList = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/questions/qa-list`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Question Answer List:", error);
        return [];
    }
};

export const getDecisionTreeNodeById = async (nodeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tree/${nodeId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Question Answer pair:", error);
        return [];
    }
};
