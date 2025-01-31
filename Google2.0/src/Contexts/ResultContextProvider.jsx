import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/";

export const ResultContextProvider = ({ children }) => {
    const [result, setResult] = useState({
        search: [],
        videos: [],
        news: [],
        images: []
    });
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const validTypes = ['/search', '/videos', '/news', '/images'];

    const getResult = async (type) => {
        if (!validTypes.includes(type)) {
            console.error("Invalid type:", type);
            return;
        }

        setIsLoading(true);
        console.log("Sending request with searchTerm:", searchTerm);

        try {
            const response = await fetch(`${baseUrl}${type}?query=${searchTerm}`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
                    'x-rapidapi-host': 'google-search74.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("API response:", data);

            // Handle the different response types
            if (type === '/search' && Array.isArray(data.results)) {
                setResult((prevResult) => ({
                    ...prevResult,
                    search: data.results
                }));
            } else if (type === '/videos' && Array.isArray(data.video_results)) {
                setResult((prevResult) => ({
                    ...prevResult,
                    videos: data.video_results
                }));
            } else if (type === '/news' && Array.isArray(data.entries)) {
                setResult((prevResult) => ({
                    ...prevResult,
                    news: data.entries
                }));
            } else if (type === '/images' && Array.isArray(data.image_results)) {
                setResult((prevResult) => ({
                    ...prevResult,
                    images: data.image_results
                }));
            } else {
                console.error(`Unexpected response structure for ${type}:`, data);
            }

        } catch (error) {
            console.error("Failed to fetch results:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ResultContext.Provider value={{ getResult, result, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
