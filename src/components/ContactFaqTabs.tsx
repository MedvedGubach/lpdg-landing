import { useLayoutEffect, useRef, useState } from 'react'
import Contact from './Contact';
import Faq from './Faq';
import { motion, AnimatePresence } from "framer-motion";

const ContactFaqTabs = () => {

    const [activeTab, setActiveTab] = useState<string>('schedule');
    const [tabUnderlineProps, setTabUnderlineProps] = useState({ left: 0, width: 0 });

    const tabs = [
        { id: "schedule", label: "Agenda tu Clase" },
        { id: "faq", label: "Preguntas Frecuentes" },
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
        <section id='contact' className="mx-auto py-12 px-4">
            <h2 className="text-3xl text-indigo-600 font-bold text-center mb-10">
                ¿Listo para comenzar?
            </h2>

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
                {activeTab === "schedule" && (
                    <motion.div
                        key="schedule"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Contact />
                    </motion.div>
                )}
                {activeTab === "faq" && (

                    <motion.div
                        key="faq"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Faq />
                    </motion.div>

                )}
            </AnimatePresence>
        </section>)
}

export default ContactFaqTabs