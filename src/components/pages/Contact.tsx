import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Contact Us
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-4">
                            Get in Touch
                        </h3>
                        <div className="flex items-center space-x-4">
                            <Phone className="h-5 w-5 text-blue-600" />
                            <span>(62) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="h-5 w-5 text-blue-600" />
                            <span>contact@buildrighthomes.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            <span>
                                Jl. Ciwaru Raya No.73, Cipare, Kec. Serang, Kota
                                Serang, Banten 42117, Indonesia
                            </span>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        ></textarea>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
