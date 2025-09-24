import React from 'react';
interface Props {
  onBack: () => void;
}

const CertificatesMenu: React.FC<Props> = ({ onBack }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 max-w-3xl w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">My Certificates & Courses</h2>
      {/* Slideshow will be added here */}
      <button
        onClick={onBack}
        className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 transition-all"
      >
        ← Back to Menu
      </button>
    </div>
  </div>
);

export default CertificatesMenu;
