import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient circles */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob"></div>
        <div className="absolute top-0 -right-10 w-[500px] h-[500px] bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-[300px] h-[300px] bg-violet-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-200"></div>
        
        {/* Additional layers for more movement */}
        <div className="absolute top-1/2 left-1/3 w-[50px] h-[50px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-reverse animation-delay-3000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[200px] h-[200px] bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob-reverse animation-delay-5000"></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;