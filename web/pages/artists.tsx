import Navbar from "@/components/Navbar";

const ArtistsPage = () => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative">
            {/* Grainy Gradient Background */}
            <div className="bg-gradient"></div>

            {/* Navbar */}
            <Navbar />

            <div className="nav-bottom absolute top-20 w-[95%] h-[1px] bg-red-100 mx-auto"></div>

            {/* Main Content */}
            <main className="text-center px-4">
                <h1 className="text-3xl font-bold text-white">Artists</h1>
            </main>
        </div>
    );
}

export default ArtistsPage;