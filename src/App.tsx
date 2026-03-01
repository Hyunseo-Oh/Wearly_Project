import React, { useState } from 'react';
import { Bell, Settings, Calendar as CalendarIcon, LayoutTemplate, Users, Search, ChevronRight, BarChart2, Camera } from 'lucide-react';

const FeedScreen = () => (
  <div className="flex-1 overflow-y-auto pb-24 bg-[#f7f7f7]">
    <div className="p-4 space-y-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex flex-col bg-white rounded-3xl p-4 shadow-sm border border-[#dddddd]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#dddddd] rounded-full bg-cover bg-center" style={{backgroundImage: `url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80&sig=${item + 10}")`}} />
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#000000]">jane_pk</span>
                <span className="text-xs text-gray-500">3h ago</span>
              </div>
            </div>
          </div>
          <div className="w-full aspect-[4/5] bg-[#dddddd] rounded-2xl overflow-hidden relative">
              <img src={`https://images.unsplash.com/photo-1550614000-4b95d466f914?auto=format&fit=crop&w=600&q=80&sig=${item}`} alt="feed" className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CalendarScreen = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div className="flex-1 overflow-y-auto pb-24 bg-[#f7f7f7] p-5">
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-lg text-[#000000]">@ntopsu</span>
        <div className="bg-white border border-[#dddddd] rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
          <span>🔥</span>
          <span className="font-bold text-[#000000]">12</span>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-cover bg-center border border-[#dddddd]" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80")'}} />
        <div className="ml-5 flex-1">
          <h2 className="font-bold text-2xl text-[#000000]">ntopsu</h2>
          <div className="flex gap-4 text-sm mt-1 text-gray-600">
            <span><strong className="text-[#000000]">37</strong> followers</span>
            <span><strong className="text-[#000000]">35</strong> following</span>
          </div>
        </div>
      </div>
      <div className="bg-[#dddddd] rounded-2xl p-1 flex mb-6">
        <button className="flex-1 py-2 text-sm font-bold rounded-xl bg-white text-[#000000] shadow-sm">Calendar</button>
        <button className="flex-1 py-2 text-sm font-bold rounded-xl text-gray-500">Outfit</button>
      </div>
      <div className="bg-white rounded-3xl p-4 border border-[#dddddd]">
        <div className="grid grid-cols-7 text-center text-gray-400 font-semibold text-xs mb-4">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>R</span><span>F</span><span>S</span>
        </div>
        <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm">
          {days.map(day => {
            const hasOutfit = day === 8 || day === 9;
            return (
              <div key={day} className="flex flex-col items-center justify-start h-14">
                {hasOutfit ? (
                  <div className="w-8 h-8 mb-1 rounded-lg bg-cover bg-center border border-[#dddddd]" style={{backgroundImage: `url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=100&q=80&sig=${day}")`}} />
                ) : (
                  <div className="w-8 h-8 mb-1 rounded-lg bg-[#f7f7f7] border border-dashed border-[#dddddd]" />
                )}
                <span className="text-xs text-[#000000]">{day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const AddScreen = () => (
  <div className="flex-1 flex flex-col items-center justify-center bg-[#f7f7f7] p-6 pb-24">
    <div className="w-full aspect-[3/4] bg-white rounded-3xl border-2 border-[#dddddd] flex flex-col items-center justify-center gap-6 p-8 shadow-sm">
      <p className="text-center text-[#000000] font-medium text-lg">
        Tap here to upload a picture of your daily outfit !
      </p>
      <span className="text-6xl">📸</span>
    </div>
    <button className="mt-8 flex items-center gap-2 text-[#000000] font-bold text-xl bg-transparent border-none">
      Send <ChevronRight size={24} className="text-[#00ffff]" />
    </button>
  </div>
);

const FriendsScreen = () => {
  const friends = [
    { name: 'Brian Choi', id: 'b.choi', img: '1' },
    { name: 'mosesmoon', id: 'moonste', img: '2' },
    { name: 'alex', id: 'alextaetyang', img: '3' },
  ];
  return (
    <div className="flex-1 overflow-y-auto pb-24 bg-[#f7f7f7] p-5">
      <h1 className="text-center font-black text-2xl tracking-widest text-[#00ffff] mb-6">WEARLY</h1>
      <div className="bg-white flex items-center px-4 py-3 rounded-2xl mb-8 border border-[#dddddd]">
        <Search size={20} className="text-[#00ffff] mr-3" />
        <input type="text" placeholder="Search friends" className="bg-transparent border-none outline-none w-full text-sm text-[#000000]" />
      </div>
      <h3 className="text-sm font-bold text-gray-500 mb-4">Recommended Friends</h3>
      <div className="space-y-4">
        {friends.map((friend, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-[#dddddd]">
            <div className="w-12 h-12 bg-[#dddddd] rounded-full bg-cover bg-center" style={{backgroundImage: `url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80&sig=${friend.img}")`}} />
            <div>
              <div className="font-bold text-[#000000] text-sm">{friend.name}</div>
              <div className="text-xs text-gray-500">{friend.id}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatsScreen = () => (
  <div className="flex-1 flex items-center justify-center bg-[#f7f7f7] pb-24">
    <p className="text-[#000000] font-bold">Stats Screen</p>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');
  return (
    <div className="fixed inset-0 bg-[#000000] flex justify-center items-center font-sans">
      <div className="w-full max-w-[400px] h-[850px] max-h-[100dvh] bg-[#f7f7f7] relative overflow-hidden sm:border-[8px] border-[#333333] sm:rounded-[40px] flex flex-col">
        <div className="bg-[#f7f7f7] px-5 py-4 flex justify-between items-center border-b border-[#dddddd] z-10">
          <h1 className="font-black text-xl tracking-widest text-[#00ffff]">WEARLY</h1>
          <div className="flex gap-4">
            <Bell size={24} className="text-[#00ffff]" />
            <Settings size={24} className="text-[#00ffff]" />
          </div>
        </div>
        {activeTab === 'feed' && <FeedScreen />}
        {activeTab === 'calendar' && <CalendarScreen />}
        {activeTab === 'add' && <AddScreen />}
        {activeTab === 'friends' && <FriendsScreen />}
        {activeTab === 'stats' && <StatsScreen />}
        <div className="absolute bottom-0 w-full bg-white border-t border-[#dddddd] px-6 py-4 pb-8 flex justify-between items-center z-30">
          <button onClick={() => setActiveTab('feed')} className={`flex flex-col items-center gap-1 ${activeTab === 'feed' ? 'text-[#00ffff]' : 'text-[#dddddd]'}`}>
            <LayoutTemplate size={24} />
          </button>
          <button onClick={() => setActiveTab('calendar')} className={`flex flex-col items-center gap-1 ${activeTab === 'calendar' ? 'text-[#00ffff]' : 'text-[#dddddd]'}`}>
            <CalendarIcon size={24} />
          </button>
          <button onClick={() => setActiveTab('add')} className={`flex flex-col items-center gap-1 ${activeTab === 'add' ? 'text-[#00ffff]' : 'text-[#dddddd]'}`}>
            <Camera size={28} />
          </button>
          <button onClick={() => setActiveTab('friends')} className={`flex flex-col items-center gap-1 ${activeTab === 'friends' ? 'text-[#00ffff]' : 'text-[#dddddd]'}`}>
            <Users size={24} />
          </button>
          <button onClick={() => setActiveTab('stats')} className={`flex flex-col items-center gap-1 ${activeTab === 'stats' ? 'text-[#00ffff]' : 'text-[#dddddd]'}`}>
            <BarChart2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
