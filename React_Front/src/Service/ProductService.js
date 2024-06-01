import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

const apiService = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  postProduct: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/addproduct`, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  },

   deleteProduct: async (id) => {
        try {
        const response = await axios.delete(`${API_BASE_URL}/deleteproduct/${id}`);
        return response.data;
        } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
        }
    },
};

export default apiService;
