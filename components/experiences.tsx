"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const events = [
  {
    club: "MLSC",
    contribution: "Designed flyers, Instagram stories, and handled visual branding.",
    images: ["/images/mlsc1.jpg", "/images/mlsc2.jpg", "/images/mlsc3.jpg"],
  },
  {
    club: "DESOC",
    contribution: "Managed website, LinkedIn page, and helped with event creatives.",
    images: ["/images/desoc1.jpg", "/images/desoc2.jpg"],
  },
  {
    club: "Techathon Innovera",
    contribution: "Led the design team and managed all creative deliverables.",
    images: ["/images/techathon1.jpg", "/images/techathon2.jpg", "/images/techathon3.jpg"],
  },
];

export default function EventsGallery() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (activeEvent !== null) {
      const interval = setInterval(() => {
        setImageIndex((prev) =>
          (prev + 1) % events[activeEvent].images.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeEvent]);

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">My Club Contributions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl cursor-pointer"
              onClick={() => {
                setActiveEvent(index);
                setImageIndex(0);
              }}
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={event.images[0]}
                  alt={event.club}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.club}</h3>
              <p className="text-gray-600 dark:text-gray-300">{event.contribution}</p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeEvent !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              onClick={() => setActiveEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden"
              >
                {/* Left Panel */}
                <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-4">{events[activeEvent].club}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {events[activeEvent].contribution}
                  </p>
                </div>

                {/* Right Panel */}
                <div className="w-full md:w-2/3 relative bg-black/5 dark:bg-white/5 min-h-[300px]">
                  <Image
                    src={events[activeEvent].images[imageIndex]}
                    alt="Event Image"
                    width={800}
                    height={500}
                    className="object-cover w-full h-full"
                  />

                  <button
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/70 p-2 rounded-full shadow"
                    onClick={() =>
                      setImageIndex(
                        (prev) =>
                          (prev - 1 + events[activeEvent].images.length) %
                          events[activeEvent].images.length
                      )
                    }
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>

                  <button
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-800/70 p-2 rounded-full shadow"
                    onClick={() =>
                      setImageIndex(
                        (prev) =>
                          (prev + 1) % events[activeEvent].images.length
                      )
                    }
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
