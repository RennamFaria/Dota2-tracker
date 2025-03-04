// const HEROES_API = 'json/heroes.json';
import { HEROES_API } from './config.js';
const baseUrl = "";

// https://github.com/mdiller/dotabase?tab=readme-ov-file
//it seans that i need to extract the VPK files to use as image

//try to use json from the archive instead of api

export const apiBase = {
    // Get all data from the API and return
    async getAllData() {
        try {
            const response = await fetch(HEROES_API);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching all data:`, error);
            throw error;
        }
    },

    async fetchMatches(match_id) {
        try {
            const response = await fetch(`${HEROES_API}/${match_id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching match ${match_id}:`, error);
            throw error;
        }
    },

    async fetchMatches(match_id) {
        try {
            const response = await fetch(`${HEROES_API}/${match_id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching match ${match_id}:`, error);
            throw error;
        }
    },
};

export default apiBase;