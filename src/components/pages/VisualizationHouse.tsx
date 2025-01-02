import { useState } from "react";
import { Navbar } from "../Navbar";
import { Scene3D } from "../Scene3D";
import { ColorPicker } from "../ColorPicker";
import { Building2, PaintBucket, Home } from "lucide-react";
import type { HouseConfig } from "../house/types";
import OrderForm from "../Buttonpesan";


const HOUSE_COLORS = ["#ffffff", "#e6e6e6", "#ffd700", "#f5f5dc", "#deb887"];
const ROOF_COLORS = ["#8b4513", "#a0522d", "#d2691e", "#cd853f", "#deb887"];
const DOOR_COLORS = ["#4a3728", "#8b4513", "#a0522d", "#d2691e", "#cd853f"];
const WINDOW_COLORS = ["#87ceeb", "#b0e0e6", "#add8e6", "#87cefa", "#00bfff"];

const VisualizationHouse = () => {
    const [houseConfig, setHouseConfig] = useState<HouseConfig>({
        baseColor: HOUSE_COLORS[0],
        roofColor: ROOF_COLORS[0],
        doorColor: DOOR_COLORS[0],
        windowColor: WINDOW_COLORS[0],
        windows: [{ position: [-0.5, 1, 1.05] }, { position: [0.5, 1, 1.05] }],
    });

    const updateConfig = (key: keyof HouseConfig, value: any) => {
        setHouseConfig((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <div className="min-h-screen my-[100px]">
            <Navbar />
            {/* 3D Visualization Section */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <Scene3D config={houseConfig} />
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                <PaintBucket className="mr-2" />
                                Customize Colors
                            </h2>
                            <div className="space-y-6">
                                <ColorPicker
                                    label="House Color"
                                    value={houseConfig.baseColor}
                                    onChange={(color) =>
                                        updateConfig("baseColor", color)
                                    }
                                    colors={HOUSE_COLORS}
                                />
                                <ColorPicker
                                    label="Roof Color"
                                    value={houseConfig.roofColor}
                                    onChange={(color) =>
                                        updateConfig("roofColor", color)
                                    }
                                    colors={ROOF_COLORS}
                                />
                                <ColorPicker
                                    label="Door Color"
                                    value={houseConfig.doorColor}
                                    onChange={(color) =>
                                        updateConfig("doorColor", color)
                                    }
                                    colors={DOOR_COLORS}
                                />
                                <ColorPicker
                                    label="Window Color"
                                    value={houseConfig.windowColor}
                                    onChange={(color) =>
                                        updateConfig("windowColor", color)
                                    }
                                    colors={WINDOW_COLORS}
                                />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                <Building2 className="mr-2" />
                                Features
                            </h2>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Home className="mr-2 h-4 w-4 text-blue-600" />
                                    Interactive 3D Model
                                </li>
                                <li className="flex items-center">
                                    <Home className="mr-2 h-4 w-4 text-blue-600" />
                                    Real-time Color Changes
                                </li>
                                {/* <li className="flex items-center">
                                    <Home className="mr-2 h-4 w-4 text-blue-600" />
                                    Professional Design
                                </li> */}
                            </ul>
                        </div>
                        <OrderForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisualizationHouse;
