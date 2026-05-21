import { useState, useRef, useEffect } from 'react';
import { Home, CalendarDays, Camera, Shirt, User, Search, Music, Heart, MessageCircle, Bell, UserPlus, ChevronRight } from 'lucide-react';

// ─── FeedScreen ─────────────────────────────────────────────
function FeedScreen() {
  return (
    <div className="flex-1 overflow-y-auto bg-white pb-24 pt-6">
      <div className="space-y-6 px-5">
        {[1, 2, 3].map(post => (
          <div key={post}>
            <div className="flex items-center gap-3 mb-3 px-1">
              <div className="w-9 h-9 rounded-full bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${post})`}} />
              <span className="text-sm font-medium text-[#222]">user_id_{post}</span>
            </div>
            <div className="bg-white rounded-[10px] overflow-hidden">
              <input type="text" placeholder="제목이나 이모지를 입력하세요" className="w-full bg-transparent border-none outline-none text-sm font-normal text-[#333] placeholder-[#aaa] px-3 pt-3 pb-2" />
              <div className="w-full aspect-[4/5] bg-[#f5f5f5] bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&sig=${post})`}} />
              <div className="flex items-center gap-3 px-3 py-3">
                <Heart size={20} strokeWidth={1.5} className="text-[#888] hover:text-red-400 cursor-pointer" />
                <MessageCircle size={20} strokeWidth={1.5} className="text-[#888] hover:text-[#38B6FF] cursor-pointer" />
                <div className="flex-1 flex items-center gap-2 ml-2">
                  <Music size={14} strokeWidth={1.5} className="text-[#38B6FF]" />
                  <input type="text" placeholder="음악 추가" className="w-full bg-transparent border-none outline-none text-xs font-normal text-[#555] placeholder-[#bbb]" />
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
  const [tab, setTab] = useState('calendar');
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div className="flex-1 overflow-y-auto bg-white pb-24 pt-6 px-5">
      <h1 className="text-lg font-semibold text-center text-[#38B6FF] tracking-[0.2em] mb-6">WEARLY</h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80)`}} />
        <div>
          <h2 className="text-base font-medium text-[#222]">Jane Doe</h2>
          <div className="flex gap-3 mt-1.5 text-xs text-[#888]">
            <span><strong className="text-[#333] font-medium">120</strong> Followers</span>
            <span><strong className="text-[#333] font-medium">80</strong> Following</span>
          </div>
        </div>
      </div>
      <div className="flex bg-[#f8f8f8] rounded-[8px] p-0.5 mb-6">
        {['calendar', 'history'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-2.5 rounded-[7px] text-xs font-medium transition-all capitalize ${tab === t ? 'bg-white text-[#222]' : 'text-[#888]'}`}>{t}</button>
        ))}
      </div>
      {tab === 'calendar' ? (
        <div className="bg-[#fafafa] rounded-[10px] p-5">
          <h3 className="text-center text-sm font-medium text-[#333] mb-5">March 2025</h3>
          <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center">
            {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} className="text-[11px] font-normal text-[#aaa] mb-1">{d}</div>)}
            {days.map(day => {
              const hasOutfit = day % 6 === 0;
              return (
                <div key={day} className={`aspect-square flex items-center justify-center rounded-[6px] ${hasOutfit ? 'bg-[#38B6FF]' : ''}`}>
                  <span className={`text-[12px] ${hasOutfit ? 'text-white font-medium' : 'text-[#666] font-normal'}`}>{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 text-[#aaa]">
          <p className="text-sm font-medium">No outfit history yet</p>
        </div>
      )}
    </div>
  );
}

// ─── CameraScreen ───────────────────────────────────────────
function CameraScreen() {
  return (
    <div className="flex-1 flex flex-col bg-white pb-24 pt-6 px-5">
      <h1 className="text-lg font-semibold text-center text-[#38B6FF] tracking-[0.2em] mb-6">WEARLY</h1>
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <div className="w-full aspect-square border border-dashed border-[#38B6FF]/40 rounded-[12px] flex flex-col items-center justify-center">
          <Camera size={40} strokeWidth={1} className="text-[#38B6FF]/40 mb-3" />
          <span className="text-sm font-normal text-[#38B6FF]/50">Tap to capture OOTD</span>
        </div>
        <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-[#38B6FF]" />
        </div>
      </div>
      <button className="mt-auto mb-4 flex items-center justify-center gap-1 text-lg font-medium text-[#222]">
        SEND <ChevronRight size={20} strokeWidth={1.5} className="text-[#38B6FF]" />
      </button>
    </div>
  );
}

// ─── WardrobeScreen ─────────────────────────────────────────
function SeasonRow({ season }: { season: string }) {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2 px-1">
        <h3 className="text-sm font-medium text-[#222]">{season}</h3>
        <span className="text-[11px] text-[#aaa] font-normal">{items.length}</span>
      </div>
      <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-1">
        {items.map(i => (
          <div key={i} className="shrink-0 w-[60px] h-[80px] rounded-[8px] bg-[#f5f5f5] bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80&sig=${i})`}} />
        ))}
      </div>
    </div>
  );
}

function WardrobeScreen() {
  return (
    <div className="flex-1 overflow-y-auto bg-white pb-24 pt-6">
      <div className="px-5 sticky top-0 bg-white pb-3">
        <h1 className="text-lg font-semibold text-center text-[#38B6FF] tracking-[0.2em] mb-4">WEARLY</h1>
        <div className="flex items-center gap-2 bg-[#f5f5f5] px-3 py-2.5 rounded-[8px]">
          <Search size={16} strokeWidth={1.5} className="text-[#888] shrink-0" />
          <input type="text" placeholder="Search your wardrobe" className="bg-transparent border-none outline-none w-full text-sm font-normal text-[#333] placeholder-[#aaa]" />
        </div>
      </div>
      <div className="px-5 pt-3">
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="text-sm font-medium text-[#222]">My Closet</h2>
          <span className="text-xs text-[#aaa]">28 items</span>
        </div>
        {['Spring', 'Summer', 'Fall', 'Winter'].map(s => <SeasonRow key={s} season={s} />)}
      </div>
    </div>
  );
}

// ─── ProfileScreen ──────────────────────────────────────────
const notifications = [
  { id: 1, type: 'like', user: 'alice_k', text: 'liked your outfit', time: '2m' },
  { id: 2, type: 'comment', user: 'bob_lee', text: 'commented on your post', time: '15m' },
  { id: 3, type: 'follow', user: 'charlie_p', text: 'started following you', time: '1h' },
];

function ProfileScreen() {
  const [section, setSection] = useState('profile');
  return (
    <div className="flex-1 overflow-y-auto bg-white pb-24 pt-6">
      <div className="px-5">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80)`}} />
          <div className="flex-1">
            <h2 className="text-base font-medium text-[#222]">Jane Doe</h2>
            <div className="flex gap-3 mt-1 text-xs text-[#888]">
              <span><strong className="text-[#333] font-medium">120</strong> followers</span>
              <span><strong className="text-[#333] font-medium">80</strong> following</span>
              <span><strong className="text-[#333] font-medium">28</strong> items</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mb-6">
          {['profile', 'activity', 'friends'].map(s => (
            <button key={s} onClick={() => setSection(s)}
              className={`flex-1 py-2 rounded-[7px] text-xs font-medium capitalize transition-all ${section === s ? 'bg-[#38B6FF] text-white' : 'bg-[#f5f5f5] text-[#888]'}`}>{s === 'activity' ? 'Activity' : s === 'friends' ? 'Friends' : 'Profile'}</button>
          ))}
        </div>
        {section === 'profile' && (
          <div>
            <div className="mb-5"><h3 className="text-sm font-medium text-[#222] mb-2">About</h3><p className="text-xs text-[#888] leading-relaxed">Fashion enthusiast sharing daily OOTD</p></div>
            <div><h3 className="text-sm font-medium text-[#222] mb-2">Recent</h3>
              <div className="grid grid-cols-3 gap-1.5">{[1,2,3].map(i => <div key={i} className="aspect-square rounded-[8px] bg-[#f5f5f5] bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80&sig=${i})`}} />)}</div>
            </div>
          </div>
        )}
        {section === 'activity' && (
          <div>
            {notifications.length === 0 ? (
              <div className="text-center py-16 text-[#aaa]"><Bell size={24} strokeWidth={1.5} className="mx-auto mb-3 opacity-50" /><p className="text-sm font-medium">No notifications</p></div>
            ) : notifications.map((n, i) => (
              <div key={n.id} className={`flex items-center gap-3 py-3 ${i < notifications.length - 1 ? 'border-b border-[#f0f0f0]' : ''}`}>
                <div className="w-9 h-9 rounded-full bg-cover bg-center shrink-0" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${n.id + 10})`}} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#555]"><strong className="text-[#333] font-medium">{n.user}</strong> {n.text}</p>
                  <span className="text-[11px] text-[#aaa]">{n.time}</span>
                </div>
                {n.type === 'like' && <Heart size={14} strokeWidth={1.5} className="text-red-300 shrink-0" />}
              </div>
            ))}
          </div>
        )}
        {section === 'friends' && (
          <div>
            <h3 className="text-sm font-medium text-[#222] mb-3">Requests</h3>
            {[{name:'Emma', uname:'@emma_w'},{name:'Tom', uname:'@tom_h'}].map((f, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-[#f0f0f0]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#f0f0f0] rounded-full bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${i + 20})`}} />
                  <div><div className="text-sm font-medium text-[#222]">{f.name}</div><div className="text-xs text-[#aaa]">{f.uname}</div></div>
                </div>
                <button className="px-4 py-1.5 bg-[#38B6FF] text-white text-xs font-medium rounded-full">Accept</button>
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
  { key: 'calendar', icon: CalendarDays, label: 'Calendar' },
  { key: 'camera', icon: Camera, label: 'Upload' },
  { key: 'wardrobe', icon: Shirt, label: 'Wardrobe' },
  { key: 'profile', icon: User, label: 'Profile' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center">
      <div className="w-full max-w-[400px] h-[850px] max-h-[100dvh] bg-white relative overflow-hidden sm:rounded-[20px] sm:border-[6px] border-gray-900 flex flex-col">
        {activeTab === 'feed' && <FeedScreen />}
        {activeTab === 'calendar' && <CalendarScreen />}
        {activeTab === 'camera' && <CameraScreen />}
        {activeTab === 'wardrobe' && <WardrobeScreen />}
        {activeTab === 'profile' && <ProfileScreen />}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[92%] bg-white border-t border-[#eee] px-5 py-2 flex justify-between items-center z-50">
          {tabs.map(({ key, icon: Icon, label }) => (
            <button key={key} onClick={() => setActiveTab(key)}
              className={`flex flex-col items-center justify-center py-1 px-2 min-w-[48px] ${activeTab === key ? 'text-[#38B6FF]' : 'text-[#bbb]'}`}>
              <Icon size={20} strokeWidth={activeTab === key ? 2 : 1.5} />
              <span className="text-[10px] font-normal mt-0.5">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
