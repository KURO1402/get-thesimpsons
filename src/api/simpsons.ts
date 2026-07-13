const API_BASE_URL = "https://thesimpsonsapi.com/api"

export const simpsonsApi = {

    getPersonajes: async () => {
        const res = await fetch(`${API_BASE_URL}/characters`)
        const data = await res.json();
        return data.results;
    }

}
