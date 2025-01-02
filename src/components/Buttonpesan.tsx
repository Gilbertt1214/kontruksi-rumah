import React, { useState, ChangeEvent, FormEvent } from "react";
import Swal from "sweetalert2";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface FormData {
    nama: string;
    email: string;
    telepon: string;
    alamat: string;
    tanggal: string;
    bahanLantai: string;
    bahanTembok: string;
    catatan: string;
    hargaLantai: number;
    hargaTembok: number;
}

const OrderForm: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        nama: "",
        email: "",
        telepon: "",
        alamat: "",
        tanggal: "",
        bahanLantai: "",
        bahanTembok: "",
        catatan: "",
        hargaLantai: 0,
        hargaTembok: 0,
    });

    const materials = {
        lantai: [
            { name: "Keramik", price: 100000 },
            { name: "Granit", price: 200000 },
            { name: "Marmer", price: 300000 },
            { name: "Parket", price: 150000 },
            { name: "Vinyl", price: 120000 },
        ],
        tembok: [
            { name: "Cat", price: 50000 },
            { name: "Wallpaper", price: 80000 },
            { name: "Batu Alam", price: 200000 },
            { name: "Keramik Dinding", price: 180000 },
            { name: "Panel Kayu", price: 150000 },
        ],
    };

    const calculateTotal = (): number => {
        return formData.hargaLantai + formData.hargaTembok;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setIsOpen(false);
        Swal.fire({
            title: "Berhasil!",
            text: `Pemesanan berhasil! Total harga: Rp ${calculateTotal()}`,
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
        });
        setFormData({
            nama: "",
            email: "",
            telepon: "",
            alamat: "",
            tanggal: "",
            bahanLantai: "",
            bahanTembok: "",
            catatan: "",
            hargaLantai: 0,
            hargaTembok: 0,
        });
    };

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ): void => {
        const { name, value } = e.target;
        let price = 0;

        if (name === "bahanLantai") {
            const selectedMaterial = materials.lantai.find(
                (material) => material.name === value
            );
            price = selectedMaterial ? selectedMaterial.price : 0;
            setFormData((prev) => ({
                ...prev,
                bahanLantai: value,
                hargaLantai: price,
            }));
        } else if (name === "bahanTembok") {
            const selectedMaterial = materials.tembok.find(
                (material) => material.name === value
            );
            price = selectedMaterial ? selectedMaterial.price : 0;
            setFormData((prev) => ({
                ...prev,
                bahanTembok: value,
                hargaTembok: price,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    return (
        <div className="p-4">
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
                <ShoppingCartIcon className="w-5 h-5" />
                Pesan Sekarang
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">
                                Form Pemesanan Rumah
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="nama"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    id="nama"
                                    name="nama"
                                    type="text"
                                    required
                                    value={formData.nama}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pt-2"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pt-2"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="telepon"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nomor Telepon
                                </label>
                                <input
                                    id="telepon"
                                    name="telepon"
                                    type="tel"
                                    required
                                    value={formData.telepon}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pt-2"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="alamat"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Alamat
                                </label>
                                <textarea
                                    id="alamat"
                                    name="alamat"
                                    required
                                    value={formData.alamat}
                                    onChange={handleChange}
                                    rows={3}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="bahanLantai"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Bahan Lantai
                                    </label>
                                    <select
                                        id="bahanLantai"
                                        name="bahanLantai"
                                        required
                                        value={formData.bahanLantai}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    >
                                        <option value="">
                                            Pilih Bahan Lantai
                                        </option>
                                        {materials.lantai.map((material) => (
                                            <option
                                                key={material.name}
                                                value={material.name}
                                            >
                                                {material.name} (Rp{" "}
                                                {material.price})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="bahanTembok"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Bahan Tembok
                                    </label>
                                    <select
                                        id="bahanTembok"
                                        name="bahanTembok"
                                        required
                                        value={formData.bahanTembok}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    >
                                        <option value="">
                                            Pilih Bahan Tembok
                                        </option>
                                        {materials.tembok.map((material) => (
                                            <option
                                                key={material.name}
                                                value={material.name}
                                            >
                                                {material.name} (Rp{" "}
                                                {material.price})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="tanggal"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Tanggal Pemesanan
                                </label>
                                <input
                                    id="tanggal"
                                    name="tanggal"
                                    type="date"
                                    required
                                    value={formData.tanggal}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="catatan"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Luas x Tinggi Bangunan Rumah
                                </label>
                                <textarea
                                    id="catatan"
                                    name="catatan"
                                    value={formData.catatan}
                                    onChange={handleChange}
                                    rows={3}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div className="text-lg font-semibold">
                                Total Harga: Rp {calculateTotal()}
                            </div>

                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Kirim Pesanan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderForm;
