import { HEROES_API } from './config.js';

const ROTE = "players"

// For players and search
export const apiPlayers = {
    // Player data
    async getPlayer(account_id) {
        try {
            const queryParams = new URLSearchParams({
                ...(account_id && { account_id }),
            }).toString();
            
            // IDK if this type of the consult is right, need to test
            const response = await fetch(`${HEROES_API}/${ROTE}/?${queryParams}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching player ${account_id}:`, error);
            throw error;
        }
    },
    
    // Win/Loss count
    async getPlayerWinLoss(account_id, limit, offset, win, patch, game_mode, 
        lobby_type, region, date, lane_role, hero_id, is_radiant, 
        included_account_id, excluded_account_id, with_hero_id, 
        against_hero_id, significant, having, sort) {
        
        const ROTE2 = "wl";
    
        try {
            const queryParams = new URLSearchParams({
                ...(limit && { limit }),
                ...(offset && { offset }),
                ...(win && { win }),
                ...(patch && { patch }),
                ...(game_mode && { game_mode }),
                ...(lobby_type && { lobby_type }),
                ...(region && { region }),
                ...(date && { date }),
                ...(lane_role && { lane_role }),
                ...(hero_id && { hero_id }),
                ...(is_radiant && { is_radiant }),
                ...(included_account_id && { included_account_id }),
                ...(excluded_account_id && { excluded_account_id }),
                ...(with_hero_id && { with_hero_id }),
                ...(against_hero_id && { against_hero_id }),
                ...(significant && { significant }),
                ...(having && { having }),
                ...(sort && { sort })
            }).toString();
    
            const response = await fetch(`${HEROES_API}/${ROTE}/${account_id}/${ROTE2}?${queryParams}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching player ${account_id} win/loss:`, error);
            throw error;
        }
    },

    //Recent matches played
    async getPlayerRecentMatches(account_id) {
        const ROTE2 = "recentMatches"

        try {
    
            const response = await fetch(`${HEROES_API}/${ROTE}/${account_id}/${ROTE2}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching player ${account_id} recent matches:`, error);
            throw error;
        }
    },

    //Matches played
    async getPlayerMatchesPlayed(account_id,limit, offset, win, patch, game_mode, 
        lobby_type, region, date, lane_role, hero_id, is_radiant, 
        included_account_id, excluded_account_id, with_hero_id, 
        against_hero_id, significant, having, sort, project) {

        const ROTE2 = "matches"

        try {
            const queryParams = new URLSearchParams({
                ...(limit && { limit }),
                ...(offset && { offset }),
                ...(win && { win }),
                ...(patch && { patch }),
                ...(game_mode && { game_mode }),
                ...(lobby_type && { lobby_type }),
                ...(region && { region }),
                ...(date && { date }),
                ...(lane_role && { lane_role }),
                ...(hero_id && { hero_id }),
                ...(is_radiant && { is_radiant }),
                ...(included_account_id && { included_account_id }),
                ...(excluded_account_id && { excluded_account_id }),
                ...(with_hero_id && { with_hero_id }),
                ...(against_hero_id && { against_hero_id }),
                ...(significant && { significant }),
                ...(having && { having }),
                ...(sort && { sort }),
                ...(project && { project })
            });
    
            const response = await fetch(`${HEROES_API}/${ROTE}/${account_id}/${ROTE2}?${queryParams}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {       
            console.error(`Error fetching player ${account_id} matches:`, error);
            throw error;
        }
    },

    //Heroes played
    async getPlayerHeroesPlayed(account_id,limit, offset, win, patch, game_mode, 
        lobby_type, region, date, lane_role, hero_id, is_radiant, 
        included_account_id, excluded_account_id, with_hero_id, 
        against_hero_id, significant, having, sort) {
            
        const ROTE2 = "heroes"

        try {
            const queryParams = new URLSearchParams({
                ...(limit && { limit }),
                ...(offset && { offset }),
                ...(win && { win }),
                ...(patch && { patch }),
                ...(game_mode && { game_mode }),
                ...(lobby_type && { lobby_type }),
                ...(region && { region }),
                ...(date && { date }),
                ...(lane_role && { lane_role }),
                ...(hero_id && { hero_id }),
                ...(is_radiant && { is_radiant }),
                ...(included_account_id && { included_account_id }),
                ...(excluded_account_id && { excluded_account_id }),
                ...(with_hero_id && { with_hero_id }),
                ...(against_hero_id && { against_hero_id }),
                ...(significant && { significant }),
                ...(having && { having }),
                ...(sort && { sort })
            });
    
            const response = await fetch(`${HEROES_API}/${ROTE}/${account_id}/${ROTE2}?${queryParams}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {       
            console.error(`Error fetching player ${account_id} heroes played:`, error);
            throw error;
        }
    },

    //Counts in categories
    async getPlayerCounts(account_id,limit, offset, win, patch, game_mode, 
        lobby_type, region, date, lane_role, hero_id, is_radiant, 
        included_account_id, excluded_account_id, with_hero_id, 
        against_hero_id, significant, having, sort) {
            
        const ROTE2 = "counts"

        try {
            const queryParams = new URLSearchParams({
                ...(limit && { limit }),
                ...(offset && { offset }),
                ...(win && { win }),
                ...(patch && { patch }),
                ...(game_mode && { game_mode }),
                ...(lobby_type && { lobby_type }),
                ...(region && { region }),
                ...(date && { date }),
                ...(lane_role && { lane_role }),
                ...(hero_id && { hero_id }),
                ...(is_radiant && { is_radiant }),
                ...(included_account_id && { included_account_id }),
                ...(excluded_account_id && { excluded_account_id }),
                ...(with_hero_id && { with_hero_id }),
                ...(against_hero_id && { against_hero_id }),
                ...(significant && { significant }),
                ...(having && { having }),
                ...(sort && { sort })
            });
    
            const response = await fetch(`${HEROES_API}/${ROTE}/${account_id}/${ROTE2}?${queryParams}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {       
            console.error(`Error fetching player ${account_id} counts in the categories:`, error);
            throw error;
        }
    },

    //Player rating history
    async getPlayerRating(account_id,limit, offset, win, patch, game_mode, 
        lobby_type, region, date, lane_role, hero_id, is_radiant, 
        included_account_id, excluded_account_id, with_hero_id, 
        against_hero_id, significant, having, sort) {
            
        const ROTE2 = "ratings"

        try {
            const queryParams = new URLSearchParams({
                ...(limit && { limit }),
                ...(offset && { offset }),
                ...(win && { win }),
                ...(patch && { patch }),
                ...(game_mode && { game_mode }),
                ...(lobby_type && { lobby_type }),
                ...(region && { region }),
                ...(date && { date }),
                ...(lane_role && { lane_role }),
                ...(hero_id && { hero_id }),
                ...(is_radiant && { is_radiant }),
                ...(included_account_id && { included_account_id }),
                ...(excluded_account_id && { excluded_account_id }),
                ...(with_hero_id && { with_hero_id }),
                ...(against_hero_id && { against_hero_id }),
                ...(significant && { significant }),
                ...(having && { having }),
                ...(sort && { sort })
            });
    
            const response = await fetch(`${HEROES_API}/${ROTE}/${account_id}/${ROTE2}?${queryParams}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {       
            console.error(`Error fetching player ${account_id} counts in the categories:`, error);
            throw error;
        }
    },

    //Refresh player match history
    async refeshPlayer(account_id) {
            
        const ROTE2 = "refresh"

        try {
    
            const response = await fetch(`${HEROES_API}/${ROTE}/${account_id}/${ROTE2}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {       
            console.error(`Error refreshing player ${account_id}:`, error);
            throw error;
        }
    },

}