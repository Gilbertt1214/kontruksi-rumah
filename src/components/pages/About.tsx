import React from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Heart, Mail } from "lucide-react";
import { Navbar } from "../Navbar";

const AboutPage = () => {
    const teamMembers = [
        {
            name: "Fahriana Nurzukhruf",
            role: "Lead Developer",
            description: "NPM 1101211020",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fahriana",
        },
        {
            name: "RIZKY",
            role: "Lead Developer",
            description: "NPM 1101211042",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizky",
        },
        {
            name: "MUHLIS",
            role: "Lead Developer",
            description: "NPM 1121221190",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Muhlis",
        },
        {
            name: "Ramdan Ardiansyah",
            role: "Lead Developer",
            description: "NPM 1101211028",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ramdan",
        },
        {
            name: "Fransius Parulian Simonangkir",
            role: "Lead Developer",
            description: "NPM 11011211054",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fransius",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
                {/* Hero Section */}
                <div className="container mx-auto px-10 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                            Tentang Kami
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Kami dari Kelompok E Simulasi Pembangunan Rumah yang
                            berdedikasi untuk menciptakan solusi digital
                            inovatif yang membantu bisnis Anda berkembang di era
                            digital.
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800">
                                500+
                            </h3>
                            <p className="text-gray-600">Klien Puas</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Rocket className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800">
                                1000+
                            </h3>
                            <p className="text-gray-600">Proyek Selesai</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800">
                                50+
                            </h3>
                            <p className="text-gray-600">Partner Bisnis</p>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                            Kelompok kami
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                                >
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-500 mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600">
                                        {member.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-24 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Hubungi Kami
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                            <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <p className="text-gray-600 mb-4">
                                Punya pertanyaan atau ingin bekerja sama? Jangan
                                ragu untuk menghubungi kami!
                            </p>
                            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                                Kirim Pesan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
