import { Home, Wrench, Info } from "lucide-react";
import { NavLink } from "react-router";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Home className="h-6 w-6 text-blue-600" />
                        <span className="font-bold text-xl">
                            Kontruksi Rumah
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <NavLink
                            to="/"
                            className="flex items-center space-x-1 gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <Home className="w-5 h-5" />
                            Home
                        </NavLink>
                        <NavLink
                            to="/house"
                            className="flex items-center space-x-1 gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <Wrench strokeWidth={2.25} />
                            Simulation
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="flex items-center space-x-1 gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <Info className="w-5 h-5" />
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
