import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import communication from '../assets/communication-secrests.jpeg';
import mernstack from '../assets/mernstack-certificate.jpg';
import recommendation from '../assets/recommendation-ramjan.png';

// Skeleton Loading Components
const CertificateSkeleton = () => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
    <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-600/50 animate-pulse">
      <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
        <div className="h-6 w-20 bg-gray-500/70 rounded-full"></div>
        <div className="h-6 w-12 bg-gray-500/70 rounded-full"></div>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <div className="h-6 bg-gray-500/50 rounded w-3/4 mb-3 animate-pulse"></div>
      <div className="h-4 bg-gray-500/50 rounded w-1/2 mb-3 animate-pulse"></div>
      <div className="h-4 bg-gray-500/50 rounded w-full mb-2 animate-pulse"></div>
      <div className="h-4 bg-gray-500/50 rounded w-2/3 mb-4 animate-pulse"></div>
      <div className="flex items-center justify-between">
        <div className="h-4 bg-gray-500/50 rounded w-20 animate-pulse"></div>
        <div className="w-2 h-2 bg-gray-500/50 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

const StatsSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
    {[1, 2, 3].map((item) => (
      <div key={item} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
        <div className="h-8 bg-gray-500/50 rounded w-16 mx-auto mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-500/50 rounded w-20 mx-auto animate-pulse"></div>
      </div>
    ))}
  </div>
);

// Lazy Image Component with skeleton
const LazyCertificateImage = ({ src, alt, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative h-48 sm:h-56 w-full overflow-hidden">
      {/* Skeleton while loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-600/50 animate-pulse z-10"></div>
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF4E88]/20 to-[#4BB8FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
    </div>
  );
};

export default function CertificatesPage() {
  const certificates = [
    {
      id: 1,
      title: 'Complete Web Development Course',
      issuer: 'Programming Hero',
      year: '2025',
      image: mernstack,
      description: 'MERN Stack Development with JavaScript, HTML, CSS, React',
      batch: 'Batch 11 - WEB11-0149',
      instructor: 'Jhankar Mahbub',
      type: 'certificate'
    },
    {
      id: 2,
      title: 'Letter of Recommendation',
      issuer: 'Programming Hero',
      year: '2025',
      image: recommendation,
      description: 'Endgame Program - Vibe Pass Project with Nova Squad',
      validTill: '06 January 2026',
      rid: 'PH-R 1135',
      type: 'recommendation'
    },
    {
      id: 3,
      title: 'Communication Secrets',
      issuer: '10 Minute School',
      year: '2025',
      image: communication,
      description: 'Free online course on effective communication',
      certificateId: '68a037f5b4d6b',
      instructor: 'Ejazur Rahman',
      type: 'certificate'
    }
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Very short loading time to show skeleton briefly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Reduced from 1500ms to 500ms for instant feel

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'recommendation':
        return 'bg-green-500';
      case 'certificate':
        return 'bg-[#FF4E88]';
      default:
        return 'bg-[#4BB8FF]';
    }
  };

  const getBadgeText = (type) => {
    switch (type) {
      case 'recommendation':
        return 'Recommendation';
      case 'certificate':
        return 'Certificate';
      default:
        return 'Achievement';
    }
  };

  // Share functionality
  const handleShare = async (certificate) => {
    const shareData = {
      title: certificate.title,
      text: `${certificate.title} from ${certificate.issuer} - ${certificate.description}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(
          `${certificate.title} - ${certificate.issuer}\n${certificate.description}\n${window.location.href}`
        );
        alert('Certificate details copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  // Download functionality
  const handleDownload = (certificate) => {
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = certificate.image;
      link.download = `${certificate.title.replace(/\s+/g, '_')}_${certificate.issuer.replace(/\s+/g, '_')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log('Error downloading:', error);
      // Fallback: Open in new tab
      window.open(certificate.image, '_blank');
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header - Always show immediately */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 lg:mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Awards & Certificates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Professional certifications and achievements that showcase my dedication to continuous learning and excellence in web development
          </motion.p>
        </motion.div>

        {/* Certificates Grid - Show skeleton instantly, then content */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            // Skeleton Loading - Show immediately
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <CertificateSkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            // Actual Content - Replace skeleton
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    bg-white/10 
                    backdrop-blur-md 
                    border 
                    border-white/20 
                    rounded-2xl 
                    overflow-hidden 
                    cursor-pointer 
                    transition-all 
                    duration-300
                    hover:border-[#FF4E88]/50
                    hover:shadow-2xl
                    group
                  "
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Certificate Image with Lazy Loading */}
                  <div className="relative">
                    <LazyCertificateImage 
                      src={cert.image} 
                      alt={cert.title}
                      title={cert.title}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-30">
                      <span className={`${getBadgeColor(cert.type)} text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg cursor-default`}>
                        {getBadgeText(cert.type)}
                      </span>
                      <span className="
                        bg-black/70 
                        text-white 
                        text-xs 
                        px-2 
                        py-1 
                        rounded-full 
                        font-semibold
                        shadow-lg
                        cursor-default
                      ">
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-4 sm:p-6">
                    <h3 className="
                      text-white 
                      font-semibold 
                      text-lg 
                      sm:text-xl 
                      mb-2 
                      line-clamp-2
                      group-hover:text-[#FF4E88]
                      transition-colors
                      duration-300
                      cursor-pointer
                    ">
                      {cert.title}
                    </h3>
                    <p className="text-[#4BB8FF] text-sm sm:text-base mb-2 font-medium cursor-pointer">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2 cursor-pointer">
                      {cert.description}
                    </p>
                    
                    {/* Additional Info */}
                    <div className="space-y-1 cursor-pointer">
                      {cert.batch && (
                        <p className="text-gray-400 text-xs">{cert.batch}</p>
                      )}
                      {cert.instructor && (
                        <p className="text-gray-400 text-xs">Instructor: {cert.instructor}</p>
                      )}
                      {cert.validTill && (
                        <p className="text-green-400 text-xs">Valid till: {cert.validTill}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="
                        text-[#4BB8FF] 
                        text-xs 
                        sm:text-sm 
                        font-medium 
                        hover:text-[#FF4E88]
                        transition-colors
                        duration-300
                        cursor-pointer
                      ">
                        View Details
                      </span>
                      <div className="w-2 h-2 bg-[#FF4E88] rounded-full animate-pulse cursor-pointer" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats - Show skeleton instantly, then content */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="stats-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StatsSkeleton />
            </motion.div>
          ) : (
            <motion.div
              key="stats-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF4E88] mb-2">
                  {certificates.length}
                </div>
                <div className="text-gray-300 text-sm">Total Certificates</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-[#4BB8FF] mb-2">
                  {certificates.filter(c => c.type === 'certificate').length}
                </div>
                <div className="text-gray-300 text-sm">Certifications</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                  {certificates.filter(c => c.type === 'recommendation').length}
                </div>
                <div className="text-gray-300 text-sm">Recommendations</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="
                bg-gradient-to-br 
                from-gray-900 
                to-gray-800 
                border 
                border-white/20 
                rounded-2xl 
                max-w-4xl 
                w-full 
                max-h-[90vh] 
                overflow-hidden 
                shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="
                flex 
                items-center 
                justify-between 
                p-4 
                sm:p-6 
                border-b 
                border-white/10
              ">
                <div className="flex items-center gap-3">
                  <div className={`${getBadgeColor(selectedCert.type)} text-white text-sm px-3 py-1 rounded-full font-semibold cursor-default`}>
                    {getBadgeText(selectedCert.type)}
                  </div>
                  <div>
                    <h2 className="text-white text-xl sm:text-2xl font-bold cursor-default">
                      {selectedCert.title}
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base cursor-default">
                      {selectedCert.issuer} • {selectedCert.year}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="
                    text-gray-400 
                    hover:text-white 
                    hover:bg-white/10 
                    w-8 
                    h-8 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center 
                    transition-all 
                    duration-300
                    cursor-pointer
                  "
                >
                  ×
                </button>
              </div>

              {/* Certificate Image */}
              <div className="p-4 sm:p-6 max-h-[60vh] overflow-auto">
                <div className="relative rounded-xl overflow-hidden bg-black/20 cursor-default">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                
                {/* Certificate Details */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-default">
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold text-lg">Details</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-gray-400 text-sm">Description</p>
                        <p className="text-white text-sm">{selectedCert.description}</p>
                      </div>
                      {selectedCert.instructor && (
                        <div>
                          <p className="text-gray-400 text-sm">Instructor</p>
                          <p className="text-white text-sm">{selectedCert.instructor}</p>
                        </div>
                      )}
                      {selectedCert.batch && (
                        <div>
                          <p className="text-gray-400 text-sm">Batch</p>
                          <p className="text-white text-sm">{selectedCert.batch}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold text-lg">Additional Info</h3>
                    <div className="space-y-2">
                      {selectedCert.certificateId && (
                        <div>
                          <p className="text-gray-400 text-sm">Certificate ID</p>
                          <p className="text-white text-sm font-mono">{selectedCert.certificateId}</p>
                        </div>
                      )}
                      {selectedCert.rid && (
                        <div>
                          <p className="text-gray-400 text-sm">Reference ID</p>
                          <p className="text-white text-sm font-mono">{selectedCert.rid}</p>
                        </div>
                      )}
                      {selectedCert.validTill && (
                        <div>
                          <p className="text-gray-400 text-sm">Valid Until</p>
                          <p className="text-green-400 text-sm">{selectedCert.validTill}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="
                flex 
                flex-col 
                sm:flex-row 
                items-center 
                justify-between 
                gap-4 
                p-4 
                sm:p-6 
                border-t 
                border-white/10
              ">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="
                    text-gray-300 
                    hover:text-white 
                    hover:bg-white/10 
                    px-6 
                    py-2 
                    rounded-full 
                    transition-all 
                    duration-300
                    w-full 
                    sm:w-auto
                    cursor-pointer
                  "
                >
                  Close
                </button>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleShare(selectedCert)}
                    className="
                      border 
                      border-[#4BB8FF] 
                      text-[#4BB8FF] 
                      hover:bg-[#4BB8FF] 
                      hover:text-white 
                      px-6 
                      py-2 
                      rounded-full 
                      font-semibold 
                      transition-all 
                      duration-300 
                      w-full 
                      sm:w-auto
                      cursor-pointer
                    "
                  >
                    Share
                  </button>
                  <button
                    onClick={() => handleDownload(selectedCert)}
                    className="
                      bg-[#FF4E88] 
                      hover:bg-[#ff3377] 
                      text-white 
                      px-6 
                      py-2 
                      rounded-full 
                      font-semibold 
                      transition-all 
                      duration-300 
                      shadow-lg 
                      hover:shadow-xl
                      w-full 
                      sm:w-auto
                      cursor-pointer
                    "
                  >
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}