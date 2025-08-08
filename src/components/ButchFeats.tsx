import { useState, useRef, useLayoutEffect } from "react";
import Collabs from "./Collabs";
import GuitarTips from "./GuitarTips";
import MoreAbout from "./MoreAbout";
import Brands from "./Brands";

import { motion, AnimatePresence } from "framer-motion";

const ButchFeats = () => {
    const [activeTab, setActiveTab] = useState("collabs");
    const [tabUnderlineProps, setTabUnderlineProps] = useState({ left: 0, width: 0 });

    const tabs = [
        { id: "collabs", label: "Colaboraciones Destacadas" },
        { id: "tips", label: "Tips y Consejos" },
        { id: "moreAbout", label: "Más Sobre Mí" },
        { id: "brands", label: "Marcas que Confían en Mí" },
    ];

    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    useLayoutEffect(() => {
        const currentTab = tabRefs.current[activeTab];
        if (currentTab) {
            const { offsetLeft, clientWidth } = currentTab;
            setTabUnderlineProps({ left: offsetLeft, width: clientWidth });
        }
    }, [activeTab]);

    return (
        <section className="mx-auto py-6 px-4">
            <h2 className="text-3xl text-indigo-600 font-semibold text-center mb-10">Butch en Acción</h2>

            <div className="relative flex justify-center space-x-0 md:space-x-4 border-b border-gray-500 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        ref={(el) => {
                            tabRefs.current[tab.id] = el;
                        }}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative text-sm md:text-xl py-2 px-4 font-semibold transition-colors duration-200 ${activeTab === tab.id
                            ? "text-indigo-600"
                            : "text-gray-500 hover:text-indigo-500"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}

                <motion.div
                    className="absolute bottom-0 h-1 bg-indigo-600 rounded-full"
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{
                        left: tabUnderlineProps.left,
                        width: tabUnderlineProps.width,
                    }}
                />
            </div>

            {/* Contenido Tabs */}
            <AnimatePresence mode="wait">

                {activeTab === "collabs" && (
                    <motion.div
                        key="collabs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Collabs />
                    </motion.div>
                )}

                {activeTab === "tips" && (
                    <motion.div
                        key="tips"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <GuitarTips />
                    </motion.div>
                )}
                {activeTab === "moreAbout" && (
                    <motion.div
                        key="moreAbout"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MoreAbout />
                    </motion.div>
                )}
                {activeTab === "brands" && (
                    <motion.div
                        key="brands"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Brands />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ButchFeats;
