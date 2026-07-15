const API_BASE_URL = "https://thesimpsonsapi.com/api"

export const simpsonsApi = {

    getPersonajes: async (page: number) => {
        const res = await fetch(`${API_BASE_URL}/characters?page=${page}`)
        const data = await res.json();
        return data.results;
    }

}
