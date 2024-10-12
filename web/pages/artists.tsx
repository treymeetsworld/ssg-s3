import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import {ArtistType} from "@/util/Types";


const ArtistsPage = () => {

    const artists = [
        { id: 1, name: 'Artist 1', image: 'https://via.placeholder.com/100', details: 'Details about Artist 1' },
        { id: 2, name: 'Artist 2', image: 'https://via.placeholder.com/100', details: 'Details about Artist 2' },
        { id: 3, name: 'Artist 3', image: 'https://via.placeholder.com/100', details: 'Details about Artist 3' },
        { id: 4, name: 'Artist 4', image: 'https://via.placeholder.com/100', details: 'Details about Artist 4' },
        { id: 5, name: 'Artist 5', image: 'https://via.placeholder.com/100', details: 'Details about Artist 5' },
        { id: 6, name: 'Artist 6', image: 'https://via.placeholder.com/100', details: 'Details about Artist 6' },
        { id: 7, name: 'Artist 7', image: 'https://via.placeholder.com/100', details: 'Details about Artist 7' },
        { id: 8, name: 'Artist 8', image: 'https://via.placeholder.com/100', details: 'Details about Artist 8' },
        { id: 9, name: 'Artist 9', image: 'https://via.placeholder.com/100', details: 'Details about Artist 9' },
        { id: 10, name: 'Artist 10', image: 'https://via.placeholder.com/100', details: 'Details about Artist 10' },
    ];


    const [selectedArtist, setSelectedArtist] = useState<ArtistType | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentArtists = artists.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(artists.length / itemsPerPage);

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Grainy Gradient Background */}
            <div className="bg-gradient absolute inset-0"></div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex flex-1 w-full mt-20">
                {/* Sidebar - 10% of the page */}
                <div className="w-3/12 bg-black bg-opacity-30 backdrop-blur-lg shadow-lg flex flex-col">
                    <div className="flex-grow">
                    {currentArtists.map((artist) => (
                        <div key={artist.id}
                             className="flex items-center bg-black bg-opacity-10 shadow-md p-4 cursor-pointer"
                             onClick={() => setSelectedArtist(artist)}>
                            <img src={artist.image} alt={artist.name}
                                 className="h-full w-auto object-cover mr-4"/>
                            <p className="text-lg font-bold text-white">{artist.name}</p>
                        </div>
                    ))}
                    </div>
                    {/* Pagination Controls */}
                    <div className="flex justify-center">
                        {Array.from({length: totalPages}, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Details Section - 90% of the page */}
                <div className="flex-1 bg-black bg-opacity-20 backdrop-blur-lg p-6 shadow-lg">
                    {selectedArtist ? (
                        <div>
                            <h1 className="text-3xl font-bold text-white">{selectedArtist.name}</h1>
                            <p className="text-white mt-4">{selectedArtist.details}</p>
                        </div>
                    ) : (
                        <p className="text-white">Select an artist to see the details</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default ArtistsPage;