// src/api/patientService.ts
import axiosInstance from './axiosInstance';

interface GetInvoicesOptions {
  sortBy?: string;
  limit?: number;
  page?: number;
}

// Fetch all invoices
export const getInvoices = async (searchTerm: string, options: GetInvoicesOptions = {}) => {
  try {
    // Combine filters and options into query params
    const response = await axiosInstance.get('/invoices', {
      params: {
        searchTerm, // This will include filters like name, status, etc.
        ...options // This will include options like sortBy, limit, page
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    throw error;
  }
};

// Fetch invoices that match search term
export const searchInvoices = async (searchTerm: string, options: GetInvoicesOptions = {}) => {
    try {
      // Combine filters and options into query params
      const response = await axiosInstance.get('/invoices/search', {
        params: {
          searchTerm, // This will include filters like name, status, etc.
          ...options // This will include options like sortBy, limit, page
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching invoices:', error);
      throw error;
    }
  };

// Fetch a specific patient by ID
export const getInvoiceById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/invoices/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
