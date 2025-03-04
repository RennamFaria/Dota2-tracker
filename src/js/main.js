import { apiBase } from "./apiHandler/api.js"


export const heroTrackerModule = {

    async test(){
        console.log("testando");
        const value = await apiBase.getAllData();
        console.log(value);
    }
}

heroTrackerModule.test();