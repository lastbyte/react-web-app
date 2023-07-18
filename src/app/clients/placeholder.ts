import clientInstance from "@clients/clientInstance";

const apiClient = clientInstance()
export const getPostById = async (id: number) => {
    return await apiClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}
