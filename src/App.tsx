import { useState, useRef, useEffect } from 'react';
import {
  Home, Calendar as CalendarIcon, Camera, Shirt, User,
  Search, ChevronRight, Music, Heart, MessageCircle,
  Bell, UserPlus, Settings
} from 'lucide-react';

// ─── FeedScreen ─────────────────────────────────────────────
function FeedScreen() {
  const posts = [1, 2, 3];
  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 relative pt-8">
      <div className="space-y-8 px-4">
        {posts.map(post => (
          <div key={post} className="relative">
            <div className="sticky top-2 z-10 bg-[#F5F5F5]/80 backdrop-blur-md py-3 px-2 flex items-center gap-3 mb-2 rounded-[16px]">
              <div className="w-10 h-10 rounded-full bg-cover bg-center shadow-sm" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${post})`}} />
              <span className="font-bold text-gray-900 text-sm drop-shadow-sm">user_id_{post}</span>
            </div>
            <div className="bg-white rounded-[32px] p-4 shadow-sm flex flex-col">
              <input type="text" placeholder="제목이나 이모지를 입력하세요 ✨" className="w-full bg-transparent border-none outline-none font-bold text-gray-800 placeholder-gray-300 px-2 mb-4 text-base" />
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-[24px] bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&sig=${post})`}} />
              <div className="flex items-center gap-3 mt-4 px-1">
                <button className="text-gray-300 hover:text-red-500 transition-colors shrink-0 active:scale-90"><Heart size={26} strokeWidth={2.5} /></button>
                <button className="text-gray-300 hover:text-[#00D4FF] transition-colors shrink-0 mr-1 active:scale-90"><MessageCircle size={26} strokeWidth={2.5} /></button>
                <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-[#F5F5F5] rounded-[16px] border border-gray-100">
                  <Music size={16} className="text-[#00D4FF] shrink-0" />
                  <input type="text" placeholder="음악 제목 추가..." className="w-full bg-transparent border-none outline-none text-xs font-bold text-gray-700 placeholder-gray-400" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CalendarScreen ─────────────────────────────────────────
function CalendarScreen() {
  const [activeTab, setActiveTab] = useState('Calendar');
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 pt-10 px-4">
      <h1 className="text-2xl font-black mb-6 text-center text-[#00D4FF] tracking-widest">WEARLY</h1>
      <div className="flex items-center gap-5 mb-6 bg-white p-5 rounded-[32px] shadow-sm">
        <div className="w-20 h-20 rounded-full bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80)`}} />
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
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-[16px] text-sm font-bold transition-all ${activeTab === tab ? 'bg-[#00D4FF] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}>{tab}</button>
        ))}
      </div>
      {activeTab === 'Calendar' ? (
        <div className="bg-white rounded-[32px] p-6 shadow-sm">
          <h3 className="text-center font-bold text-lg mb-6 text-gray-900">March 2025</h3>
          <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center">
            {['S','M','T','W','T','F','S'].map((d, idx) => <div key={idx} className="text-xs font-bold text-gray-400 mb-2">{d}</div>)}
            {days.map(day => {
              const hasOutfit = day % 6 === 0;
              return (
                <div key={day} className="aspect-square flex flex-col items-center justify-center relative">
                  {hasOutfit && <div className="absolute inset-0 bg-cover bg-center rounded-xl opacity-90" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&q=80&sig=${day})`}} />}
                  <span className={`text-xs font-medium z-10 ${hasOutfit ? 'text-white drop-shadow-md font-bold' : 'text-gray-600'}`}>{day}</span>
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

// ─── CameraScreen ───────────────────────────────────────────
function CameraScreen() {
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
}

// ─── SeasonCarousel (for Wardrobe) ──────────────────────────
function SeasonCarousel({ season, idx }: { season: string; idx: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      setContainerWidth(width);
      const initialScroll = (64 + 8) * 2;
      containerRef.current.scrollLeft = initialScroll;
      setScrollPos(initialScroll);
    }
    const handleResize = () => { if (containerRef.current) setContainerWidth(containerRef.current.clientWidth); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => { if (containerRef.current) setScrollPos(containerRef.current.scrollLeft); };
  const items = [1, 2, 3, 4, 5, 6, 7];
  const IW = 64, GAP = 8;
  const padding = containerWidth > 0 ? (containerWidth - IW) / 2 : 150;

  return (
    <div className="relative overflow-hidden rounded-[32px] shadow-sm py-5 mb-6" style={{ background: `linear-gradient(135deg, #00D4FF ${idx * 10}%, #E0F7FA 100%)` }}>
      <div className="flex items-center justify-between px-5 mb-2">
        <h3 className="text-2xl font-black text-white drop-shadow-sm">{season}</h3>
        <span className="text-white/80 text-xs font-bold px-3 py-1 bg-white/20 rounded-full">{items.length} items</span>
      </div>
      <div ref={containerRef} onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center py-8"
        style={{ paddingLeft: padding, paddingRight: padding }}>
        {items.map((item, i) => {
          const cc = scrollPos + containerWidth / 2;
          const ic = padding + i * (IW + GAP) + IW / 2;
          const dist = Math.abs(cc - ic);
          const scale = containerWidth > 0 ? 1 + Math.max(0, 1 - dist / 120) * 0.6 : 1;
          return (
            <div key={item} className="snap-center shrink-0 rounded-[16px] shadow-md bg-cover bg-center border-2 border-white/80 cursor-pointer hover:brightness-110 transition-all"
              style={{ width: IW, height: IW * 1.4, marginRight: i === items.length - 1 ? 0 : GAP, transform: `scale(${scale})`, zIndex: 100 - Math.round(dist), transition: 'transform 0.1s ease-out', backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80&sig=${idx * 10 + item})` }} />
          );
        })}
      </div>
    </div>
  );
}

// ─── WardrobeScreen ─────────────────────────────────────────
function WardrobeScreen() {
  const seasons = [{ name: 'Spring', idx: 0 }, { name: 'Summer', idx: 1 }, { name: 'Fall', idx: 2 }, { name: 'Winter', idx: 3 }];
  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 pt-8 relative">
      <div className="px-4 sticky top-0 z-20 bg-[#F5F5F5]/90 backdrop-blur-md pb-4 pt-2">
        <h1 className="text-2xl font-black mb-3 text-center text-[#00D4FF] tracking-widest">WEARLY</h1>
        <div className="bg-white flex items-center px-4 py-3 rounded-[20px] mb-4 shadow-sm border border-gray-100">
          <Search size={20} className="text-gray-400 mr-3 shrink-0" />
          <input type="text" placeholder="Search your wardrobe..." className="bg-transparent border-none outline-none w-full text-sm font-medium text-gray-800 placeholder-gray-400" />
        </div>
      </div>
      <div className="px-4 pt-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-gray-900">My Closet</h2>
          <span className="text-xs font-bold text-gray-400">28 items</span>
        </div>
        {seasons.map(s => <SeasonCarousel key={s.name} season={s.name} idx={s.idx} />)}
      </div>
    </div>
  );
}

// ─── ProfileScreen ──────────────────────────────────────────
const notifications = [
  { id: 1, type: 'like', user: 'alice_k', content: 'liked your outfit', time: '2m ago' },
  { id: 2, type: 'comment', user: 'bob_lee', content: 'commented: "Love this style!"', time: '15m ago' },
  { id: 3, type: 'follow', user: 'charlie_p', content: 'started following you', time: '1h ago' },
  { id: 4, type: 'like', user: 'david_c', content: 'liked your outfit', time: '3h ago' },
];

const friendRequests = [
  { id: 1, name: 'Emma Watson', username: '@emma_w', img: 1 },
  { id: 2, name: 'Tom Hardy', username: '@tom_h', img: 2 },
  { id: 3, name: 'Lisa Kim', username: '@lisa_k', img: 3 },
];

function ProfileScreen() {
  const [section, setSection] = useState('profile');

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 pt-8 relative">
      <div className="px-4">
        <div className="flex items-center gap-5 bg-white p-5 rounded-[32px] shadow-sm mb-6">
          <div className="w-20 h-20 rounded-full bg-cover bg-center shadow-sm" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80)`}} />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">Jane Doe</h2>
            <div className="flex gap-4 mt-2">
              <span className="flex flex-col text-xs"><strong className="text-gray-900 text-lg">120</strong> Followers</span>
              <span className="flex flex-col text-xs"><strong className="text-gray-900 text-lg">80</strong> Following</span>
              <span className="flex flex-col text-xs"><strong className="text-gray-900 text-lg">28</strong> Items</span>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-[#00D4FF] transition-colors"><Settings size={22} /></button>
        </div>

        <div className="flex bg-white rounded-[20px] p-1.5 mb-6 shadow-sm">
          {['profile', 'notifications', 'friends'].map(key => (
            <button key={key} onClick={() => setSection(key)}
              className={`flex-1 py-3 rounded-[16px] text-sm font-bold transition-all capitalize ${section === key ? 'bg-[#00D4FF] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}>{key}</button>
          ))}
        </div>

        {section === 'profile' && (
          <div className="space-y-4">
            <div className="bg-white rounded-[32px] p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">About</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Fashion enthusiast sharing daily OOTD ✨</p>
            </div>
            <div className="bg-white rounded-[32px] p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Recent Items</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map(i => <div key={i} className="aspect-square rounded-[16px] bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80&sig=${i})`}} />)}
              </div>
            </div>
          </div>
        )}

        {section === 'notifications' && (
          <div className="bg-white rounded-[32px] shadow-sm overflow-hidden">
            {notifications.length === 0 ? (
              <div className="py-16 text-center text-gray-400"><Bell size={32} className="mx-auto mb-3 opacity-50" /><p className="font-bold">No notifications yet</p></div>
            ) : notifications.map((n, idx) => (
              <div key={n.id} className={`flex items-center gap-3 p-4 ${idx < notifications.length - 1 ? 'border-b border-gray-50' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-cover bg-center shrink-0" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${n.id + 10})`}} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700"><strong className="text-gray-900">{n.user}</strong> {n.content}</p>
                  <span className="text-xs text-gray-400">{n.time}</span>
                </div>
                {n.type === 'like' ? <Heart size={16} className="text-red-400 shrink-0" /> : <MessageCircle size={16} className="text-[#00D4FF] shrink-0" />}
              </div>
            ))}
          </div>
        )}

        {section === 'friends' && (
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 mb-2 px-1">Friend Requests</h3>
            {friendRequests.length === 0 ? (
              <div className="bg-white rounded-[32px] py-16 text-center text-gray-400 shadow-sm"><UserPlus size={32} className="mx-auto mb-3 opacity-50" /><p className="font-bold">No friend requests</p></div>
            ) : friendRequests.map(f => (
              <div key={f.id} className="flex items-center justify-between bg-white p-4 rounded-[24px] shadow-sm border border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${f.img + 20})`}} />
                  <div><div className="font-bold text-gray-900 text-sm">{f.name}</div><div className="text-xs text-gray-500 mt-0.5">{f.username}</div></div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-[#00D4FF] text-white text-xs font-bold rounded-full hover:bg-[#00D4FF]/80 transition-colors">Accept</button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-500 text-xs font-bold rounded-full hover:bg-gray-200 transition-colors">Decline</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SearchScreen (kept from original for the Explore/Feed merge) ─────
function SearchScreen() {
  const friends = [
    { name: 'Alice Kim', id: '@alice_k', img: 1 },
    { name: 'Bob Lee', id: '@bob_lee', img: 2 },
    { name: 'Charlie Park', id: '@charlie_p', img: 3 },
  ];
  const styles = ['Hip/Hipster', 'Street', 'Minimal', 'Vintage', 'Casual', 'Y2K'];
  const [viewType, setViewType] = useState('Picture');
  const [styleType, setStyleType] = useState('Hip/Hipster');

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-32 pt-8 relative">
      <div className="px-4 space-y-4 sticky top-0 z-20 bg-[#F5F5F5]/90 backdrop-blur-md pb-4 pt-2 border-b border-gray-200/50">
        <h1 className="text-2xl font-black mb-1 text-center text-[#00D4FF] tracking-widest">WEARLY</h1>
        <div className="bg-white flex items-center px-4 py-3 rounded-[20px] mb-4 shadow-sm border border-gray-100">
          <Search size={20} className="text-gray-400 mr-3 shrink-0" />
          <input type="text" placeholder="Search Your Style" className="bg-transparent border-none outline-none w-full text-sm font-medium text-gray-800 placeholder-gray-400" />
        </div>
        <div className="flex justify-between items-center gap-3">
          <select value={styleType} onChange={e => setStyleType(e.target.value)} className="bg-white border border-gray-200 text-sm font-bold text-gray-700 rounded-[16px] px-4 py-2.5 outline-none shadow-sm cursor-pointer appearance-none flex-1 text-center">
            {styles.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={viewType} onChange={e => setViewType(e.target.value)} className="bg-white border border-gray-200 text-sm font-bold text-gray-700 rounded-[16px] px-4 py-2.5 outline-none shadow-sm cursor-pointer appearance-none w-28 text-center">
            <option value="Picture">Picture</option><option value="Figure">Figure</option>
          </select>
        </div>
      </div>
      <div className="px-4 pt-6 space-y-6">
        {viewType === 'Picture' ? [1, 2, 3].map(post => {
          const seed = styleType.length + post * 10;
          return (
            <div key={post} className="relative">
              <div className="sticky top-[140px] z-10 bg-[#F5F5F5]/80 backdrop-blur-md py-3 px-2 flex items-center gap-3 mb-2 rounded-[16px]">
                <div className="w-10 h-10 rounded-full bg-cover bg-center shadow-sm" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${seed})`}} />
                <span className="font-bold text-gray-900 text-sm drop-shadow-sm">user_{styleType.split('/')[0].toLowerCase()}_{post}</span>
              </div>
              <div className="bg-white rounded-[32px] p-4 shadow-sm flex flex-col">
                <input type="text" placeholder="제목이나 이모지를 입력하세요 ✨" className="w-full bg-transparent border-none outline-none font-bold text-gray-800 placeholder-gray-300 px-2 mb-4 text-base" defaultValue={`#${styleType} ✨`} />
                <div className="w-full aspect-[4/5] bg-gray-100 rounded-[24px] bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&sig=${seed + 50})`}} />
                <div className="flex items-center gap-3 mt-4 px-1">
                  <button className="text-gray-300 hover:text-red-500 transition-colors shrink-0 active:scale-90"><Heart size={26} strokeWidth={2.5} /></button>
                  <button className="text-gray-300 hover:text-[#00D4FF] transition-colors shrink-0 mr-1 active:scale-90"><MessageCircle size={26} strokeWidth={2.5} /></button>
                  <div className="flex-1 flex items-center gap-2 px-3 py-2.5 bg-[#F5F5F5] rounded-[16px] border border-gray-100">
                    <Music size={16} className="text-[#00D4FF] shrink-0" />
                    <input type="text" placeholder="음악 제목 추가..." className="w-full bg-transparent border-none outline-none text-xs font-bold text-gray-700 placeholder-gray-400" defaultValue={`Trending ${styleType.split('/')[0]} Audio`} />
                  </div>
                </div>
              </div>
            </div>
          );
        }) : (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gray-500 mb-4 ml-2">Recommended Figures</h3>
            {friends.map((friend, idx) => (
              <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-[24px] shadow-sm border border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${friend.img + 20})`}} />
                  <div><div className="font-bold text-gray-900 text-sm">{friend.name}</div><div className="text-xs text-gray-500 mt-0.5">{friend.id}</div></div>
                </div>
                <button className="px-5 py-2 bg-[#F5F5F5] text-[#00D4FF] text-xs font-bold rounded-full hover:bg-[#00D4FF] hover:text-white transition-colors">Add</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main App ───────────────────────────────────────────────
const tabs = [
  { key: 'feed', icon: Home, label: 'Feed' },
  { key: 'calendar', icon: CalendarIcon, label: 'Calendar' },
  { key: 'camera', icon: Camera, label: 'Upload' },
  { key: 'wardrobe', icon: Shirt, label: 'Wardrobe' },
  { key: 'profile', icon: User, label: 'Profile' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <div className="fixed inset-0 bg-gray-900 flex justify-center items-center font-sans">
      <div className="w-full max-w-[400px] h-[850px] max-h-[100dvh] bg-[#F5F5F5] relative overflow-hidden sm:rounded-[40px] sm:border-[8px] border-gray-800 flex flex-col">
        {activeTab === 'feed' && <FeedScreen />}
        {activeTab === 'calendar' && <CalendarScreen />}
        {activeTab === 'camera' && <CameraScreen />}
        {activeTab === 'wardrobe' && <WardrobeScreen />}
        {activeTab === 'profile' && <ProfileScreen />}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[92%] bg-white/95 backdrop-blur-md border border-gray-200 rounded-[22px] px-4 py-1.5 flex justify-between items-center z-50 shadow-2xl">
          {tabs.map(({ key, icon: Icon, label }) => (
            <button key={key} onClick={() => setActiveTab(key)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-[14px] transition-all duration-300 min-w-[56px] ${activeTab === key ? 'text-[#00D4FF] bg-gray-100/80 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}>
              <Icon size={20} strokeWidth={activeTab === key ? 2.5 : 2} />
              <span className="text-[10px] font-bold mt-0.5 tracking-tight">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
