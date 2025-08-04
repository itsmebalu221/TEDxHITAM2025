import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './pasteditions.css'; // Import custom styles if needed

// === Data Arrays ===
const infinitySpeakerData = [ /* ... same data as before ... */ ];
const rrSpeakerData = [ /* ... same data as before ... */ ];

const tabs = [
    { id: 'rr', label: 'TEDx HITAM 2.0: Ripple & Resonate' },
    { id: 'infinity', label: 'TEDx HITAM 1.0: Infinity' },
];

// === Animation Variants ===
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };
const backdropVariants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };
const modalVariants = { hidden: { y: "-50vh", opacity: 0 }, visible: { y: "0", opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 15 } } };

// === Components ===
const SpeakerModal = ({ speaker, onClose }) => (
    <motion.div className="modal-backdrop" onClick={onClose} variants={backdropVariants} initial="hidden" animate="visible" exit="hidden">
        <motion.div className="modal-content" onClick={(e) => e.stopPropagation()} variants={modalVariants}>
            <button onClick={onClose} className="modal-close" aria-label="Close">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">{speaker.name}</h3>
            </div>
            <div className="modal-description">
                <p>{speaker.bio}</p>
            </div>
        </motion.div>
    </motion.div>
);

const SectionHeading = ({ children }) => (
    <h2 className="section-heading">
        {children}
        <div className="section-underline">
            <span className="dot dot-lg"></span>
            <span className="dot dot-md"></span>
            <span className="dot dot-sm"></span>
        </div>
    </h2>
);

const SpeakerCard = ({ speaker, onSelect }) => (
    <motion.div className="speaker-card" variants={itemVariants} onClick={() => onSelect(speaker)}>
        <div className="image-container">
            <img src={speaker.image} alt={speaker.name} className="speaker-image" />
        </div>
        <div className="speaker-name">
            <h3>{speaker.name}</h3>
        </div>
    </motion.div>
);

const InfinityContent = ({ onSpeakerSelect }) => (
    <motion.div key="infinity" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="space-y-12">
        <motion.section variants={itemVariants}>
            <SectionHeading>
                <div className="flex items-baseline flex-wrap gap-x-3">
                    <span>About the theme: <span className="uppercase">Infinity</span></span>
                    <span className="subtitle">beyond Innovation</span>
                </div>
            </SectionHeading>
            <div className="theme-grid">
                <motion.div className="theme-image" variants={itemVariants}>
                    <img src="https://placehold.co/355x296/000000/e62b1e?text=Infinity+Logo" alt="TEDx HITAM Infinity" className="rounded-lg" />
                </motion.div>
                <div className="theme-description">
                    <p>The TEDx HITAM theme, "Infinity: Beyond Innovation," challenges us to transcend conventional boundaries and explore uncharted creativity.</p>
                    <p>"Infinity" represents limitless potential — a quest to inspire transformative change and visionary thinking.</p>
                </div>
            </div>
        </motion.section>
        <motion.section>
            <SectionHeading>Speakers</SectionHeading>
            <motion.div className="speaker-grid" variants={containerVariants} initial="hidden" animate="visible">
                {infinitySpeakerData.map((speaker, index) => <SpeakerCard key={index} speaker={speaker} onSelect={onSpeakerSelect} />)}
            </motion.div>
        </motion.section>
        <motion.section variants={itemVariants} className="video-section">
            <a href="https://www.youtube.com/playlist?list=PL1wyFIFJNFh-Cbp1mUxPcN45gqlQKEjw4" target="_blank" rel="noopener noreferrer" className="watch-button">Watch the Videos</a>
        </motion.section>
    </motion.div>
);

const RippleResonateContent = ({ onSpeakerSelect }) => (
    <motion.div key="rr" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="space-y-12">
        <motion.section variants={itemVariants}>
            <SectionHeading>
                <div className="flex items-baseline flex-wrap gap-x-3">
                    <span>About the theme: <span className="uppercase">Ripple & Resonate</span></span>
                </div>
            </SectionHeading>
            <div className="theme-grid">
                <motion.div className="theme-image" variants={itemVariants}>
                    <img src="https://placehold.co/400x200/000000/e62b1e?text=Ripple+%26+Resonate" alt="TEDx HITAM Ripple & Resonate" className="rounded-lg" />
                </motion.div>
                <div className="theme-description">
                    <p>"Ripple and Resonate" represents how small ideas, like pebbles in a pond, can trigger waves of positive change in society.</p>
                    <p>In the digital age, any idea can scale and create global transformation.</p>
                </div>
            </div>
        </motion.section>
        <motion.section>
            <SectionHeading>Speakers</SectionHeading>
            <motion.div className="speaker-grid" variants={containerVariants} initial="hidden" animate="visible">
                {rrSpeakerData.map((speaker, index) => <SpeakerCard key={index} speaker={speaker} onSelect={onSpeakerSelect} />)}
            </motion.div>
        </motion.section>
        <motion.section variants={itemVariants} className="video-section">
            <a href="#" target="_blank" rel="noopener noreferrer" className="watch-button">Watch the Videos</a>
        </motion.section>
    </motion.div>
);

// === Main Page ===
export default function PastEditions() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    return (
        <div className="page-wrapper">
            <div className="page-content">
                {/* Tabs */}
                <div className="tab-wrapper">
                    <div className="tab-container">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}>
                                {activeTab === tab.id && <motion.div layoutId="active-pill" className="active-pill" transition={{ type: 'spring', duration: 0.6 }} />}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <main>
                    <AnimatePresence mode="wait">
                        <motion.div key={activeTab} className="content-box">
                            {activeTab === 'infinity' ? <InfinityContent onSpeakerSelect={setSelectedSpeaker} /> : <RippleResonateContent onSpeakerSelect={setSelectedSpeaker} />}
                        </motion.div>
                    </AnimatePresence>
                </main>

                {/* Modal */}
                <AnimatePresence>
                    {selectedSpeaker && (
                        <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}