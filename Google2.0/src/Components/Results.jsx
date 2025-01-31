import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../Contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
    const { result, isLoading, getResult, searchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerm) {
            getResult(`/search?q=${searchTerm}&num=40`);
        }
    }, [searchTerm, location.pathname]);

    if (isLoading) return <Loading />;

    console.log("Current path:", location.pathname);

    switch (location.pathname) {
        case "/search":
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {result?.search?.map(({ link, title }, index) => (
                        <div key={index} className="w-full md:w-2/5">
                            <a href={link} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                                <p className="text-lg font-bold">{title}</p>
                                <p className="text-sm">{link}</p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case "/images":
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {result?.images?.map(({ image, link: { href, title } }, index) => (
                        <a className="p-2" href={href} key={index} target="_blank" rel="noreferrer">
                            <img src={image?.src} alt={title} loading="lazy" className="w-36 h-36 object-cover" />
                            <p className="text-sm mt-2 text-center">{title}</p>
                        </a>
                    ))}
                </div>
            );
        case "/videos":
            return (
                <div className="flex flex-wrap">
                    {result?.videos?.map(({ link, title }, index) => (
                        <div key={index} className="p-2">
                            <ReactPlayer url={link} controls width="355px" height="200px" />
                            <p className="mt-2 text-sm">{title}</p>
                        </div>
                    ))}
                </div>
            );
        case "/news":
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
                    {result?.news?.map(({ link, id, title, source }) => (
                        <div key={id} className="w-full md:w-2/5">
                            <a href={link} target="_blank" rel="noreferrer" className="hover:underline">
                                <p className="text-lg font-bold">{title}</p>
                                <p className="text-sm text-gray-600">{source}</p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        default:
            return <p className="text-center text-red-500">ERROR! Path not found.</p>;
    }
};

export default Results;
