"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const events = [
  {
    club: "Techathon Innovera",
    position: "Design Team Lead",
    contribution: "Led the design team and managed all creative deliverables.",
    images: ["/images/1.png", "/images/InnoveraMainFlyer.png"],
    tags: ["Leadership", "UI/UX Design", "Team Management", "Branding", "Communication"]
  },
  {
    club: "DESOC",
    position: "Technical Head",
    contribution: "Managed website, LinkedIn page, and helped with event creatives.",
    images: ["/images/Unleash.jpg", "/images/desoc2.jpg"],
    tags: ["Leadership", "Web Development", "Content Strategy", "Social Media Management", "Creativity"]
  },
  {
    club: "MLSC",
    position: "Creative Co-ordinator",
    contribution: "Designed flyers, Instagram stories, and handled visual branding.",
    images: ["/images/mlsc1.jpg", "/images/mlsc2.jpg", "/images/mlsc3.jpg"],
    tags: ["Team Work", "Graphic Design", "Visual Storytelling", "Adobe Tools", "Brand Identity"]
  }

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6431b9] to-[#0c99a4] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className=" bg-white dark:bg-gray-800 shadow-lg rounded-2xl cursor-pointer"
              onClick={() => {
                setActiveEvent(index);
                setImageIndex(0);
              }}
            >
              <div className="relative w-full h-52 mb-4">
                <Image
                  src={event.images[0]}
                  alt={event.club}
                  fill
                  className="rounded-xl object-fill rounded-b-none"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.club}</h3>
                <h4 className="text-lg font-medium mb-2">{event.position}</h4>
                <p className="text-gray-600 dark:text-gray-300">{event.contribution}</p>
              </div>
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
                  <h4 className="text-lg font-medium mb-2">{events[activeEvent].position}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {events[activeEvent].contribution}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {events[activeEvent].tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
