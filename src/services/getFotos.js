import BASE_URL from './config'

async function getFotos(){
    try {
        const response = await fetch(`${BASE_URL}fotos`, {
            method: 'GET',
        })
        if (!response.ok) {
            throw new Error('Erro ao buscar fotos')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default getFotos