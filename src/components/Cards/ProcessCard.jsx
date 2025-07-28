import React from 'react';

const ProcessCard = ({ image, customLines, rotate = false }) => {
  if (rotate) {
    return (
      <div className="bg-[#FFFFFF33] grid grid-cols-2 h-[400px] w-full max-w-[950px]">
        {/* Text on Left */}
        <div className="flex flex-col justify-center p-6 space-y-4 ">
          {customLines.map((line, index) => (
            <div
              key={index}
              className="text-[#999999] text-base relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-yellow-500"
            >
              {line}
            </div>
          ))}
        </div>
        {/* Image on Right */}
        <div className="w-full h-full overflow-hidden relative">
          <img src={image} alt="Process" className="w-full h-full object-cover " />
          <div className="absolute inset-0 bg-slate-600 opacity-40 pointer-events-none" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#E0382859] grid grid-cols-2 h-[400px] w-full max-w-[950px]">
      {/* Image on Left */}
      <div className="w-full h-full overflow-hidden relative">
        <img src={image} 
              alt="Process" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-red-500 opacity-30 pointer-events-none" />
      </div>
      {/* Text on Right */}
      <div className="flex flex-col justify-center p-6 space-y-4">
        {customLines.map((line, index) => (
          <div
            key={index}
            className="text-[#999999] text-base relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-yellow-500"
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessCard;
