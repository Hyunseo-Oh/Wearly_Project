import React, { useState, useRef, useEffect } from 'react';
import { Home, Calendar as CalendarIcon, Camera, User, Search, ChevronRight, Music, Heart, MessageCircle } from 'lucide-react';

// --- Screen 4: Feed Screen ---
const FeedScreen = () => {
  const posts = [1, 2, 3];
  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 relative pt-8">
      <div className="space-y-8 px-4">
        {posts.map(post => (
          <div key={post} className="relative">
            {/* User Profile Info - Separated and Sticky */}
            <div className="sticky top-2 z-10 bg-[#F5F5F5]/80 backdrop-blur-md py-3 px-2 flex items-center gap-3 mb-2 rounded-[16px]">
              <div 
                className="w-10 h-10 rounded-full bg-cover bg-center shadow-sm" 
                style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${post})`}} 
              />
              <span className="font-bold text-gray-900 text-sm drop-shadow-sm">user_id_{post}</span>
            </div>
            
            {/* Main Post Card */}
            <div className="bg-white rounded-[32px] p-4 shadow-sm flex flex-col">
              {/* Title / Emoji Input */}
              <input 
                type="text" 
                placeholder="제목이나 이모지를 입력하세요 ✨" 
                className="w-full bg-transparent border-none outline-none font-bold text-gray-800 placeholder-gray-300 px-2 mb-4 text-base"
              />
              
              {/* Photo */}
              <div 
                className="w-full aspect-[4/5] bg-gray-100 rounded-[24px] bg-cover bg-center" 
                style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&sig=${post})`}} 
              />
              
              {/* Actions & Music Input */}
              <div className="flex items-center gap-3 mt-4 px-1">
                <button className="text-gray-300 hover:text-red-500 transition-colors shrink-0 active:scale-90">
                  <Heart size={26} strokeWidth={2.5} />
                </button>
                <button className="text-gray-300 hover:text-[#00D4FF] transition-colors shrink-0 mr-1 active:scale-90">
                  <MessageCircle size={26} strokeWidth={2.5} />
                </button>
                
                <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-[#F5F5F5] rounded-[16px] border border-gray-100">
                  <Music size={16} className="text-[#00D4FF] shrink-0" />
                  <input 
                    type="text" 
                    placeholder="음악 제목 추가..." 
                    className="w-full bg-transparent border-none outline-none text-xs font-bold text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SeasonCarousel = ({ season, idx }: { season: string, idx: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      setContainerWidth(width);
      // Start at the 3rd item (index 2) so multiple photos are visible initially
      const initialScroll = (64 + 8) * 2; 
      containerRef.current.scrollLeft = initialScroll;
      setScrollPos(initialScroll);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPos(containerRef.current.scrollLeft);
    }
  };

  const items = [1, 2, 3, 4, 5, 6, 7];
  const ITEM_WIDTH = 64;
  const GAP = 8;
  const padding = containerWidth > 0 ? (containerWidth - ITEM_WIDTH) / 2 : 150;

  return (
    <div 
      className="relative overflow-hidden rounded-[32px] shadow-sm py-5 mb-6" 
      style={{ background: `linear-gradient(135deg, #00D4FF ${idx * 10}%, #E0F7FA 100%)` }}
    >
      <h3 className="text-2xl font-black text-white drop-shadow-sm mb-2 px-5">{season}</h3>
      
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center py-8"
        style={{ paddingLeft: padding, paddingRight: padding }}
      >
        {items.map((item, i) => {
          const containerCenter = scrollPos + containerWidth / 2;
          const itemCenter = padding + i * (ITEM_WIDTH + GAP) + ITEM_WIDTH / 2;
          const distance = Math.abs(containerCenter - itemCenter);
          
          // Center is largest (1.6x), adjacent are smaller, all remain visible
          const scale = containerWidth > 0 ? 1 + Math.max(0, 1 - distance / 120) * 0.6 : 1;
          const zIndex = 100 - Math.round(distance);

          return (
            <div
              key={item}
              className="snap-center shrink-0 rounded-[16px] shadow-md bg-cover bg-center border-2 border-white/80"
              style={{
                width: ITEM_WIDTH,
                height: ITEM_WIDTH * 1.4,
                marginRight: i === items.length - 1 ? 0 : GAP,
                transform: `scale(${scale})`,
                zIndex: zIndex,
                transition: 'transform 0.1s ease-out',
                backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80&sig=${idx * 10 + item})`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

// --- Screen 1 & 3: Calendar & OOTD (Wardrobe) Screen ---
const ProfileCalendarScreen = () => {
  const [activeTab, setActiveTab] = useState('Calendar');
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 pt-10 px-4">
      <h1 className="text-2xl font-black mb-6 text-center text-[#00D4FF] tracking-widest">WEARLY</h1>
      
      {/* Profile Header */}
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

      {/* Tabs */}
      <div className="flex bg-white rounded-[20px] p-1.5 mb-6 shadow-sm">
        {['Calendar', 'OOTD'].map(tab => (
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

      {/* Main Content */}
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
        <div className="space-y-2">
          {['Spring', 'Summer', 'Fall', 'Winter'].map((season, idx) => (
            <SeasonCarousel key={season} season={season} idx={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

// --- Screen 2: Camera / Upload Screen ---
const CameraScreen = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#F5F5F5] pb-28 pt-10 px-4">
      <h1 className="text-2xl font-black mb-6 text-center text-[#00D4FF] tracking-widest">WEARLY</h1>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full">
        <div className="w-full aspect-square border-[3px] border-dashed border-[#00D4FF]/50 rounded-[40px] flex flex-col items-center justify-center bg-white/50">
          <Camera size={48} className="text-[#00D4FF]/50 mb-4" />
          <span className="text-[#00D4FF]/70 font-semibold">Tap to capture OOTD</span>
        </div>
        
        <button className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-[#00D4FF] border-4 border-[#F5F5F5] ring-4 ring-[#00D4FF]/20 active:scale-95 transition-transform">
          <div className="w-14 h-14 rounded-full bg-[#00D4FF]" />
        </button>
      </div>

      <button className="mt-auto mb-4 flex items-center justify-center gap-2 text-3xl font-black text-gray-900 active:scale-95 transition-transform">
        SEND <ChevronRight size={32} className="text-[#00D4FF]" strokeWidth={3} />
      </button>
    </div>
  );
};

// --- Screen 5: Search Screen ---
const SearchScreen = () => {
  const friends = [
    { name: 'Alice Kim', id: '@alice_k', img: 1 },
    { name: 'Bob Lee', id: '@bob_lee', img: 2 },
    { name: 'Charlie Park', id: '@charlie_p', img: 3 },
    { name: 'David Choi', id: '@david_c', img: 4 },
    { name: 'Emma Watson', id: '@emma_w', img: 5 },
  ];

  const styles = ['Hip/Hipster', 'Street', 'Minimal', 'Vintage', 'Casual', 'Y2K'];
  const [viewType, setViewType] = useState('Picture');
  const [styleType, setStyleType] = useState('Hip/Hipster');

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-32 pt-8 relative">
      <div className="px-4 space-y-4 sticky top-0 z-20 bg-[#F5F5F5]/90 backdrop-blur-md pb-4 pt-2 border-b border-gray-200/50">
        <h1 className="text-2xl font-black mb-1 text-center text-[#00D4FF] tracking-widest">WEARLY</h1>
        
        {/* Search Field */}
        <div className="bg-white flex items-center px-4 py-3 rounded-[20px] mb-4 shadow-sm border border-gray-100">
          <Search size={20} className="text-gray-400 mr-3 shrink-0" />
          <input 
            type="text" 
            placeholder="Search Your Style" 
            className="bg-transparent border-none outline-none w-full text-sm font-medium text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Tab / Filter Boxes */}
        <div className="flex justify-between items-center gap-3">
          <select 
            value={styleType}
            onChange={(e) => setStyleType(e.target.value)}
            className="bg-white border border-gray-200 text-sm font-bold text-gray-700 rounded-[16px] px-4 py-2.5 outline-none shadow-sm cursor-pointer appearance-none flex-1 text-center"
          >
            {styles.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <select 
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
            className="bg-white border border-gray-200 text-sm font-bold text-gray-700 rounded-[16px] px-4 py-2.5 outline-none shadow-sm cursor-pointer appearance-none w-28 text-center"
          >
            <option value="Picture">Picture</option>
            <option value="Figure">Figure</option>
          </select>
        </div>
      </div>

      <div className="px-4 pt-6 space-y-6">
        {viewType === 'Picture' ? (
          // Picture View
          [1, 2, 3].map(post => {
            const seed = styleType.length + post * 10;
            return (
              <div key={post} className="relative animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="sticky top-[140px] z-10 bg-[#F5F5F5]/80 backdrop-blur-md py-3 px-2 flex items-center gap-3 mb-2 rounded-[16px]">
                  <div 
                    className="w-10 h-10 rounded-full bg-cover bg-center shadow-sm" 
                    style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${seed})`}} 
                  />
                  <span className="font-bold text-gray-900 text-sm drop-shadow-sm">user_{styleType.split('/')[0].toLowerCase()}_{post}</span>
                </div>
                
                <div className="bg-white rounded-[32px] p-4 shadow-sm flex flex-col">
                  <input 
                    type="text" 
                    placeholder="제목이나 이모지를 입력하세요 ✨" 
                    className="w-full bg-transparent border-none outline-none font-bold text-gray-800 placeholder-gray-300 px-2 mb-4 text-base"
                    defaultValue={`#${styleType} ✨`}
                  />
                  <div 
                    className="w-full aspect-[4/5] bg-gray-100 rounded-[24px] bg-cover bg-center" 
                    style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&sig=${seed + 50})`}} 
                  />
                  
                  <div className="flex items-center gap-3 mt-4 px-1">
                    <button className="text-gray-300 hover:text-red-500 transition-colors shrink-0 active:scale-90">
                      <Heart size={26} strokeWidth={2.5} />
                    </button>
                    <button className="text-gray-300 hover:text-[#00D4FF] transition-colors shrink-0 mr-1 active:scale-90">
                      <MessageCircle size={26} strokeWidth={2.5} />
                    </button>
                    <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-[#F5F5F5] rounded-[16px] border border-gray-100">
                      <Music size={16} className="text-[#00D4FF] shrink-0" />
                      <input 
                        type="text" 
                        placeholder="음악 제목 추가..." 
                        className="w-full bg-transparent border-none outline-none text-xs font-bold text-gray-700 placeholder-gray-400"
                        defaultValue={`Trending ${styleType.split('/')[0]} Audio`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          // Figure View
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-sm font-bold text-gray-500 mb-4 ml-2">Recommended Figures</h3>
            {friends.map((friend, idx) => (
              <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-[24px] shadow-sm border border-gray-50">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 bg-gray-200 rounded-full bg-cover bg-center" 
                    style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${friend.img + 20})`}} 
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{friend.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{friend.id}</div>
                  </div>
                </div>
                <button className="px-5 py-2 bg-[#F5F5F5] text-[#00D4FF] text-xs font-bold rounded-full hover:bg-[#00D4FF] hover:text-white transition-colors">
                  Add
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="fixed inset-0 bg-gray-900 flex justify-center items-center font-sans">
      <div className="w-full max-w-[400px] h-[850px] max-h-[100dvh] bg-[#F5F5F5] relative overflow-hidden sm:rounded-[40px] sm:border-[8px] border-gray-800 flex flex-col">
        
        {/* Render Active Screen */}
        {activeTab === 'home' && <FeedScreen />}
        {activeTab === 'calendar' && <ProfileCalendarScreen />}
        {activeTab === 'camera' && <CameraScreen />}
        {activeTab === 'search' && <SearchScreen />}

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[92%] bg-white/95 backdrop-blur-md border border-gray-200 rounded-[22px] px-6 py-1.5 flex justify-between items-center z-50 shadow-2xl">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-[14px] transition-all duration-300 w-16 ${
              activeTab === 'home' ? 'text-[#00D4FF] bg-gray-100/80 shadow-sm' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Home size={20} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-0.5 tracking-tight">Feed</span>
          </button>
          <button 
            onClick={() => setActiveTab('calendar')} 
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-[14px] transition-all duration-300 w-16 ${
              activeTab === 'calendar' ? 'text-[#00D4FF] bg-gray-100/80 shadow-sm' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <CalendarIcon size={20} strokeWidth={activeTab === 'calendar' ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-0.5 tracking-tight">Calendar</span>
          </button>
          <button 
            onClick={() => setActiveTab('camera')} 
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-[14px] transition-all duration-300 w-16 ${
              activeTab === 'camera' ? 'text-[#00D4FF] bg-gray-100/80 shadow-sm' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Camera size={20} strokeWidth={activeTab === 'camera' ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-0.5 tracking-tight">Add</span>
          </button>
          <button 
            onClick={() => setActiveTab('search')} 
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-[14px] transition-all duration-300 w-16 ${
              activeTab === 'search' ? 'text-[#00D4FF] bg-gray-100/80 shadow-sm' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Search size={20} strokeWidth={activeTab === 'search' ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-0.5 tracking-tight">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
