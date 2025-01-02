import React from "react";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Clock,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">
                            Rumah Konstruksi
                        </h3>
                        <p className="mb-4">
                            Membangun impian rumah anda dengan kualitas terbaik
                            dan profesional. Kepuasan anda adalah prioritas
                            kami.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">
                            Tautan Cepat
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Layanan
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Proyek
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Kontak
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">
                            Layanan Kami
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Desain Arsitektur
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Renovasi Rumah
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Konstruksi Bangunan
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Interior Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Konsultasi Proyek
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">
                            Kontak Kami
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <MapPin size={20} />
                                <span>Jl. Konstruksi No. 123, Jakarta</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={20} />
                                <span>+62 123 4567 890</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail size={20} />
                                <span>info@rumahkonstruksi.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock size={20} />
                                <span>Senin - Sabtu: 08:00 - 17:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-center">
                        © 2024 Rumah Konstruksi. Hak Cipta Dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
