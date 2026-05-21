import { useState } from 'react';

export default function CalendarScreen() {
  const [activeTab, setActiveTab] = useState('Calendar');
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 pt-10 px-4">
      <h1 className="text-2xl font-black mb-6 text-center text-[#00D4FF] tracking-widest">WEARLY</h1>

      <div className="flex items-center gap-5 mb-6 bg-white p-5 rounded-[32px] shadow-sm">
        <div
          className="w-20 h-20 rounded-full bg-cover bg-center"
          style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80)`}}
        />
        <div>
          <h2 className="text-xl font-bold text-gray-900">Jane Doe</h2>
          <div className="flex gap-4 mt-2 text-sm text-gray-500">
            <span className="flex flex-col"><strong className="text-gray-900 text-lg">120</strong> Followers</span>
            <span className="flex flex-col"><strong className="text-gray-900 text-lg">80</strong> Following</span>
          </div>
        </div>
      </div>

      <div className="flex bg-white rounded-[20px] p-1.5 mb-6 shadow-sm">
        {['Calendar', 'History'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-[16px] text-sm font-bold transition-all ${
              activeTab === tab ? 'bg-[#00D4FF] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Calendar' ? (
        <div className="bg-white rounded-[32px] p-6 shadow-sm">
          <h3 className="text-center font-bold text-lg mb-6 text-gray-900">March 2025</h3>
          <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, idx) => (
              <div key={idx} className="text-xs font-bold text-gray-400 mb-2">{d}</div>
            ))}
            {days.map(day => {
              const hasOutfit = day % 6 === 0;
              return (
                <div key={day} className="aspect-square flex flex-col items-center justify-center relative">
                  {hasOutfit ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-xl opacity-90"
                      style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&q=80&sig=${day})`}}
                    />
                  ) : null}
                  <span className={`text-xs font-medium z-10 ${hasOutfit ? 'text-white drop-shadow-md font-bold' : 'text-gray-600'}`}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-2 text-center py-20 text-gray-400">
          <p className="font-bold">No outfit history yet</p>
          <p className="text-sm">Start posting your OOTD!</p>
        </div>
      )}
    </div>
  );
}
