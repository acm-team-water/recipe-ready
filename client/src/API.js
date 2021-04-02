import axios from 'axios';

const server = 'http://localhost:5000'

const API = {
    getInventory: function () {
        return axios.get(`${server}/inv`);
    },
    getOneItem: function (id) {
        return axios.get(`${server}/inv/${id}`);
    }, 
    createItem: function (item) {
        return axios.post(`${server}/inv`, item);
    },
    updateItem: function (id, item) {
        return axios.put(`${server}/inv/${id}`, item);
    },
    removeItem: function (id) {
        return axios.delete(`${server}/inv/${id}`);
    },
    getAllRecipes: function () {
        return axios.get(`${server}/recipes`);
    },
    getOneRecipe: function (id) {
        return axios.get(`${server}/recipes/${id}`);
    }
}

export default API;
