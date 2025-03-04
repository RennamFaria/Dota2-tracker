import { HEROES_API } from './config.js';
// For matches, public_matches, parsed_matches
// findMatches
export const apiMatches = {
    // Match data
    async getMatches(match_id) {
        const ROTE = "matches";

        try {
            const response = await fetch(`${HEROES_API}/${ROTE}/${match_id}`);
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

    // Get list of randomly sampled public matches
    async getPublicMatches(less_than_match_id, min_rank, max_rank, mmr_ascending, mmr_descending) {
        const ROTE = "publicMatches";

        try {
            const queryParams = new URLSearchParams({
                ...(less_than_match_id && { less_than_match_id }),
                ...(min_rank && { min_rank }),
                ...(max_rank && { max_rank }),
                ...(mmr_ascending && { mmr_ascending }),
                ...(mmr_descending && { mmr_descending })
            }).toString();
            
            // IDK if this type of the consult is right, need to test
            const response = await fetch(`${HEROES_API}/${ROTE}?${queryParams}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching public match:`, error);
            throw error;
        }
    },

    // Get list of parsed match IDs
    async getParsedMatches(less_than_match_id) {
        const ROTE = "parsedMatches";

        try {
            const queryParams = new URLSearchParams({
                ...(less_than_match_id && {less_than_match_id})
            }).toString();

            // IDK if this type of the consult is right, need to test
            const response = await fetch(`${HEROES_API}/${ROTE}?${queryParams}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching parsed match:`, error);
            throw error;
        }
    },

    // Finds recent matches by heroes played
    async getFindMatches(teamHeroesA, teamHeroesB) {
        const ROTE = "findMatches";

        try {
            const queryParams = new URLSearchParams({
                ...(teamHeroesA && {teamHeroesA}),
                ...(teamHeroesB && {teamHeroesB})
            }).toString();

            // IDK if this type of the consult is right, need to test
            const response = await fetch(`${HEROES_API}/${ROTE}?${queryParams}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching find match:`, error);
            throw error;
        }
    },
}