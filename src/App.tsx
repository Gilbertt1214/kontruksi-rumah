import { Navbar } from "./components/Navbar";
import { ArrowRight } from "lucide-react";
import Contact from "./components/pages/Contact";
import { Link } from "react-router";

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="pt-16">
                {/* Hero Section */}
                <div className="relative h-screen">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
                            alt="Modern home construction"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
                        <div className="text-white max-w-3xl">
                            <h1 className="text-5xl font-bold mb-6">
                                BANGUN RUMAH IMPIAN ANDA
                            </h1>
                            <p className="text-xl mb-8">
                                Layanan konstruksi dan renovasi rumah ahli
                                dengan lebih dari 25 tahun pengalaman dalam
                                menciptakan ruang hidup yang luar biasa.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition duration-300">
                                <Link
                                    to="/house"
                                    className="flex items-center gap-2"
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <Contact />
            </main>
        </div>
    );
}

export default App;
