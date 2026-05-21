import React, { useState } from 'react';
import { Home, Calendar as CalendarIcon, Camera, Search, Heart, MessageCircle, Bell, Settings, ChevronLeft, ChevronRight, Users, Music, Image as ImageIcon, Plus, Lock, HelpCircle, Info } from 'lucide-react';

const Avatar = ({ src, size = 'w-10 h-10', border = false, borderColor = 'white' }: any) => (
  <div className={`${size} rounded-full bg-gray-200 bg-cover bg-center ${border ? (borderColor === 'black' ? 'border border-black' : 'border-2 border-white') : ''}`} style={{backgroundImage: src ? `url(${src})` : 'none'}} />
);

const FeedScreen = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-36 pt-10 px-4">
      <div className="space-y-8">
        {[1, 2].map(post => (
          <div key={post} className="">
            <div className="flex items-center gap-3 mb-3 px-3">
              <Avatar src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${post}`} />
              <div>
                <div className="font-semibold text-[14px] text-gray-900 leading-tight">irene_yk</div>
                <div className="text-[12px] text-gray-500 mt-0.5 leading-tight">3h ago</div>
              </div>
            </div>
            <div className="bg-white rounded-[32px] p-4 shadow-sm">
              <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&sig=${post})`}}>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#00D4FF] flex items-center shadow-sm">
                  ❄️ cold
                </div>
                <div className="absolute bottom-3 right-3 bg-[#E5FAFF]/90 backdrop-blur rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#00D4FF] flex items-center gap-1 shadow-sm">
                  <Music size={12}/> BABIES - Justin Bieber
                </div>
              </div>
              <div className="flex items-center gap-4 px-2 mt-4 mb-2">
                <div className="flex items-center gap-1.5 text-gray-900 font-semibold text-[14px] cursor-pointer">
                  <Heart size={24} className="text-gray-900 hover:text-red-500 transition-colors" /> 18
                </div>
                <div className="flex items-center gap-1.5 text-gray-900 font-semibold text-[14px] cursor-pointer">
                  <MessageCircle size={24} className="text-gray-900 hover:text-[#00D4FF] transition-colors" /> 4
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const CalendarScreen = ({ setOverlay }: any) => {
  const [mode, setMode] = useState('closet');
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-36 pt-10 px-4">
      <div className="flex justify-between items-center mb-6 px-1">
        <div className="font-semibold text-gray-900 text-[15px]">@httpssu</div>
        <div className="flex gap-4">
          <Bell size={22} className="text-gray-900 cursor-pointer" onClick={() => setOverlay('notifications')} />
          <Settings size={22} className="text-gray-900 cursor-pointer" onClick={() => setOverlay('settings')} />
        </div>
      </div>

      <div className="flex items-center gap-5 mb-8 px-1">
        <div className="flex flex-col items-center">
          <Avatar src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&sig=prof`} size="w-16 h-16" />
          <div className="mt-[-10px] bg-[#E5FAFF] text-[#00D4FF] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-10 border-2 border-[#F5F5F5]">
            🔥 12
          </div>
        </div>
        <div>
          <div className="font-semibold text-[18px] text-gray-900 leading-tight mb-0.5">httpssu</div>
          <div className="flex gap-4 text-[14px] text-gray-500 mt-1">
            <span><strong className="text-gray-900 font-semibold">37</strong> followers</span>
            <span><strong className="text-gray-900 font-semibold">35</strong> following</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-200/50 p-1 rounded-[24px] flex text-[13px] font-semibold text-gray-500 mb-8 max-w-[240px]">
        <button 
          onClick={() => setMode('closet')} 
          className={`flex-1 py-1.5 rounded-[20px] transition-all ${mode === 'closet' ? 'bg-white shadow-sm text-[#00D4FF]' : ''}`}>
          Closet...
        </button>
        <button 
          onClick={() => setMode('calendar')} 
          className={`flex-1 py-1.5 rounded-[20px] transition-all ${mode === 'calendar' ? 'bg-white shadow-sm text-[#00D4FF]' : ''}`}>
          Calendar
        </button>
      </div>

      {mode === 'calendar' ? (
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-6 px-4">
            <ChevronLeft size={20} className="text-gray-400 cursor-pointer" />
            <h3 className="font-semibold text-gray-900 text-[15px]">March 2026</h3>
            <ChevronRight size={20} className="text-gray-400 cursor-pointer" />
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-gray-400 mb-2 px-6">
            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
          </div>
          <div className="bg-white rounded-[32px] p-6 shadow-sm">
            <div className="grid grid-cols-7 gap-1">
            {days.map(day => {
              const hasOutfit = day === 1 || day === 2;
              return (
                <div key={day} className={`aspect-[2/3] flex justify-center items-center rounded-lg overflow-hidden relative ${hasOutfit ? '' : 'text-gray-800 font-bold text-xs'}`}>
                  {hasOutfit ? (
                    <img src={`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&q=80&sig=${day}`} className="w-full h-full object-cover" />
                  ) : day}
                </div>
              )
            })}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {['Spring 🌸', 'Summer ☀️', 'Fall 🍁', 'Winter ❄️'].map((season, sIdx) => (
            <div key={season} className="bg-white p-4 rounded-[32px] shadow-sm">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-4 px-2">{season}</h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-[100px] aspect-[3/4] rounded-[24px] flex items-center justify-center shrink-0 overflow-hidden relative ${i === 4 ? 'bg-[#E5FAFF] cursor-pointer' : 'bg-gray-100'}`}>
                    {i === 4 ? (
                      <Plus size={28} className="text-[#00D4FF]" />
                    ) : (
                      <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80&sig=${sIdx * 10 + i})`}} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const AddScreen = () => {
  return (
    <div className="flex-1 flex flex-col items-center p-6 h-full bg-[#F5F5F5] pb-28 pt-8">
      <div className="w-full mt-auto aspect-[4/5] max-h-[50vh] rounded-[32px] border-2 border-dashed border-[#00D4FF]/40 bg-white flex flex-col items-center justify-center text-center p-6 shadow-sm">
        <div className="text-[#00D4FF] mb-2">
          <ImageIcon size={40} strokeWidth={1.5} />
        </div>
        <div className="text-[#00D4FF] font-semibold text-[14px] mb-1">slot</div>
        <div className="text-xs text-[#00D4FF]/60 max-w-[200px]">Tap here to upload a picture of your today's outfit!</div>
      </div>
      
      <div className="mt-8 mb-auto cursor-pointer flex justify-center items-center">
        <Camera size={40} strokeWidth={1.5} className="text-gray-900" />
      </div>
      
      <div className="text-[40px] mt-4 mb-[-16px] font-normal font-inter tracking-[0.1em] text-gray-900 flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
        SEND <ChevronRight size={40} strokeWidth={1.5} />
      </div>
    </div>
  )
}

const SearchScreen = () => {
  const [searchMode, setSearchMode] = useState<'feed' | 'friends'>('feed');

  const recommendedFriends = [
    { name: 'Brian Choi', handle: 'b.choi' },
    { name: 'mosesmoon', handle: 'moonste' },
    { name: 'alex', handle: 'alextaetyang' },
    { name: 'Boey', handle: 'soy_beanz' },
    { name: 'Aiden', handle: 'kim.aidenn' },
    { name: 'Ashley', handle: 'ashleyeskim' }
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-36 pt-10 px-4">
      <div className="text-center font-bruno text-[#00D4FF] text-[22px] tracking-wider mb-4 uppercase">WEARLY</div>
      
      <div className="flex items-center gap-3 mb-6 relative">
        <div className="bg-[#EAEAEA] flex-1 flex items-center px-4 py-3 rounded-full relative z-10 transition-colors focus-within:bg-white focus-within:shadow-sm">
          <Search size={18} className="text-gray-400 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Search your style" 
            className="w-full bg-transparent outline-none font-medium text-[15px] text-gray-800 placeholder-gray-500" 
            onFocus={() => setSearchMode('friends')}
          />
        </div>
        {searchMode === 'friends' && (
          <button 
            onClick={() => setSearchMode('feed')} 
            className="text-[14px] font-medium text-gray-900 shrink-0 pr-1 animate-in slide-in-from-right fade-in duration-200"
          >
            Cancel
          </button>
        )}
      </div>
      
      {searchMode === 'feed' ? (
        <div className="animate-in fade-in duration-300">
          <div className="mb-4">
            <button className="bg-white px-3.5 py-1.5 rounded-[20px] text-[13px] font-medium flex items-center justify-center gap-1.5 text-gray-800 shadow-sm border border-gray-100 transition-colors">
              Hip/Hipster <ChevronRight size={14} className="rotate-90 text-gray-400" />
            </button>
          </div>

          <div className="space-y-8">
            {[1].map(post => (
              <div key={post} className="">
                <div className="flex items-center gap-3 mb-3 px-3">
                  <Avatar border={true} borderColor="black" src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${post + 20}`} />
                  <div>
                    <div className="font-semibold text-[14px] text-gray-900 leading-tight">irene_yk</div>
                  </div>
                </div>
                <div className="bg-white rounded-[32px] p-4 shadow-sm border border-black/5">
                  <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&sig=${post + 40})`}}>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur rounded-[16px] px-2.5 py-1 text-[11px] font-semibold text-[#00D4FF] flex items-center shadow-sm">
                      ❄️ cold
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#E5FAFF]/90 backdrop-blur rounded-[16px] px-3 py-1 text-[11px] font-semibold text-[#00D4FF] flex items-center gap-1.5 shadow-sm">
                      <Music size={12}/> BABIES - Justin Bieber
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-2 mt-4 mb-2">
                    <div className="flex items-center gap-1.5 text-gray-900 font-semibold text-[14px] cursor-pointer">
                      <Heart size={24} className="text-gray-900 hover:text-red-500 transition-colors" /> 1.2K
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-900 font-semibold text-[14px] cursor-pointer">
                      <MessageCircle size={24} className="text-gray-900 hover:text-[#00D4FF] transition-colors" /> 53
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <h3 className="text-[13px] font-semibold text-gray-500 mb-6 px-1">Recommended Friends</h3>
          <div className="space-y-5 px-1">
            {recommendedFriends.map((f, i) => (
              <div key={i} className="flex items-center gap-4 cursor-pointer hover:bg-gray-100/50 p-2 -ml-2 rounded-[16px] transition-colors">
                <div className="w-[45px] h-[45px] rounded-full bg-[#E5E5E5] shrink-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] border border-black"></div>
                <div className="flex flex-col">
                  <span className="text-[#00D4FF] font-semibold text-[14px] leading-tight">{f.name}</span>
                  <span className="text-gray-500 text-[13px] leading-tight mt-0.5">{f.handle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const NotificationsScreen = ({ onBack, onOpenRequests }: any) => (
  <div className="absolute inset-0 bg-[#F5F5F5] z-[100] flex flex-col pt-10 pb-10 overflow-y-auto">
    <div className="px-4 flex items-center mb-8 relative">
      <button onClick={onBack} className="absolute left-4 p-2"><ChevronLeft size={24} className="text-gray-900" /></button>
      <h1 className="w-full text-center font-bruno text-[#00D4FF] text-[20px] tracking-wide">Notifications</h1>
    </div>
    
    <div className="px-4">
      <div onClick={onOpenRequests} className="rounded-[24px] px-2 py-4 flex justify-between items-center mb-6 cursor-pointer hover:bg-gray-200/50 transition-colors">
        <div className="flex items-center gap-4">
          <Users size={24} className="text-gray-900" />
          <span className="font-semibold text-[15px] text-gray-900">Friend requests</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">3</span>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>

      <h3 className="text-[11px] font-semibold text-gray-500 mb-2 px-2 tracking-wide uppercase">LAST 7 DAYS</h3>
      <div className="space-y-1">
        {[
          { text: <><strong>Erin</strong> and <strong>Eileen</strong> commented on your post.</>, unread: true },
          { text: <><strong>Jessica</strong> reacted on your post.</>, unread: false },
          { text: <><strong>Sorina</strong> has also commented on their post.</>, unread: false },
        ].map((notif, idx) => (
          <div key={idx} className="flex items-center gap-4 px-2 py-3 rounded-[24px] relative">
            {notif.unread && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />}
            <Avatar src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${idx + 100}`} size="w-12 h-12" />
            <div className="text-[14px] text-gray-900 leading-tight">{notif.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const FriendRequestsScreen = ({ onBack }: any) => {
  const [tab, setTab] = useState('received');
  return (
    <div className="absolute inset-0 bg-[#F5F5F5] z-[100] flex flex-col pt-10 pb-10 overflow-y-auto">
      <div className="px-4 flex items-center mb-8 relative">
        <button onClick={onBack} className="absolute left-4 p-2"><ChevronLeft size={24} className="text-gray-900" /></button>
        <h1 className="w-full text-center font-bruno text-[#00D4FF] text-[20px] tracking-wide">Friend requests</h1>
      </div>
      
      <div className="px-4">
        <div className="bg-gray-200/50 p-1 rounded-[24px] flex text-[13px] font-semibold text-gray-500 mb-6 w-full">
          <button onClick={() => setTab('received')} className={`flex-1 py-1.5 rounded-[20px] transition-all ${tab === 'received' ? 'bg-white shadow-sm text-gray-900' : ''}`}>Received (3)</button>
          <button onClick={() => setTab('sent')} className={`flex-1 py-1.5 rounded-[20px] transition-all ${tab === 'sent' ? 'bg-white shadow-sm text-gray-900' : ''}`}>Sent</button>
        </div>
        
        {tab === 'received' ? (
          <div className="space-y-2">
            {[
              { id: 'sydney', handle: 'sydneychoi' },
              { id: 'Walden', handle: 'waldenl' },
              { id: 'Kai', handle: 'kainakafuji' }
            ].map((usr, i) => (
              <div key={i} className="flex items-center gap-4 px-2 py-2">
                 <div className="w-12 h-12 rounded-full bg-gray-200" />
                 <div><div className="font-semibold text-gray-900 text-[14px] leading-tight">{usr.id}</div><div className="text-[13px] text-gray-500 mt-0.5 leading-tight">{usr.handle}</div></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center mt-32 text-center px-8">
            <div className="font-semibold text-[#00D4FF] mb-2 text-[15px]">It's empty here!</div>
            <div className="text-xs text-gray-400 leading-relaxed font-medium">Try sending friend requests from your recommended friends list.</div>
          </div>
        )}
      </div>
    </div>
  )
}

const SettingsScreen = ({ onBack }: any) => (
  <div className="absolute inset-0 bg-[#F5F5F5] z-[100] flex flex-col pt-10 pb-10 overflow-y-auto">
    <div className="px-4 flex items-center mb-8 relative">
      <button onClick={onBack} className="absolute left-4 p-2"><ChevronLeft size={24} className="text-gray-900" /></button>
      <h1 className="w-full text-center font-semibold text-[#00D4FF] text-[16px]">Settings</h1>
    </div>
    
    <div className="px-4 space-y-6">
      <div className="bg-white rounded-[24px] py-2 px-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Avatar size="w-12 h-12" src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&sig=prof`} />
          <div>
            <div className="font-semibold text-gray-900 text-[16px] leading-tight">Kelly</div>
            <div className="text-[13px] text-gray-500 mt-0.5 leading-tight">susie.o4</div>
          </div>
        </div>
        <ChevronRight size={20} className="text-gray-400" />
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-wide font-semibold text-gray-500 mb-3 px-2">Features</h3>
        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center gap-3 text-gray-900 font-medium text-sm"><Music size={18} className="text-gray-400" /> Audio</div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-wide font-semibold text-gray-500 mb-3 px-2">Settings</h3>
        <div className="bg-white rounded-md shadow-sm overflow-hidden divide-y divide-gray-50">
          <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center gap-3 text-gray-900 font-medium text-sm"><Bell size={18} className="text-gray-400" /> Notifications</div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center gap-3 text-gray-900 font-medium text-sm"><Lock size={18} className="text-gray-400" /> Privacy</div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-wide font-semibold text-gray-500 mb-3 px-2">About</h3>
        <div className="bg-white rounded-md shadow-sm overflow-hidden divide-y divide-gray-50 mb-6">
          <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center gap-3 text-gray-900 font-medium text-sm"><HelpCircle size={18} className="text-gray-400" /> Help</div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center gap-3 text-gray-900 font-medium text-sm"><Info size={18} className="text-gray-400" /> About</div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-[3px] text-center font-medium text-[15px] mb-8">
        <div className="bg-gray-100 border border-gray-200 rounded-md py-2 text-red-500 cursor-pointer hover:bg-gray-200 transition-colors">Log Out</div>
        <div className="bg-gray-100 border border-gray-200 rounded-md py-2 text-red-500 cursor-pointer hover:bg-gray-200 transition-colors">Delete Account</div>
      </div>
    </div>
  </div>
)

const TABS = [
  { key: 'feed', icon: Home, label: 'Feed' },
  { key: 'calendar', icon: CalendarIcon, label: 'Calendar' },
  { key: 'add', icon: Camera, label: 'Add' },
  { key: 'search', icon: Search, label: 'Search' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [overlay, setOverlay] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 bg-gray-900 flex justify-center items-center font-sans">
      <div className="w-full max-w-[400px] h-[850px] max-h-[100dvh] bg-[#F5F5F5] relative overflow-hidden sm:rounded-[40px] sm:border-[8px] border-gray-800 flex flex-col shadow-2xl">
        
        {/* Main Screens */}
        {activeTab === 'feed' && <FeedScreen />}
        {activeTab === 'calendar' && <CalendarScreen setOverlay={setOverlay} />}
        {activeTab === 'add' && <AddScreen />}
        {activeTab === 'search' && <SearchScreen />}

        {/* Overlays */}
        {overlay === 'notifications' && <NotificationsScreen onBack={() => setOverlay(null)} onOpenRequests={() => setOverlay('friend_requests')} />}
        {overlay === 'friend_requests' && <FriendRequestsScreen onBack={() => setOverlay('notifications')} />}
        {overlay === 'settings' && <SettingsScreen onBack={() => setOverlay(null)} />}

        {/* Bottom Nav */}
        <div 
          className={`absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] rounded-[28px] px-2 py-1.5 flex justify-between items-center z-50 transition-all ${activeTab === 'add' ? 'bg-transparent' : 'shadow-[0_8px_30px_rgb(0,0,0,0.08)]'}`}
          style={activeTab === 'add' ? {} : { backgroundColor: 'color-mix(in srgb, #F7F7F7 100%, rgba(255, 255, 255, 0.65))' }}
        >
          {TABS.map(({ key, icon: Icon, label }) => (
            <button 
              key={key} 
              onClick={() => { setActiveTab(key); setOverlay(null); }}
              className={`flex flex-col items-center justify-center w-[23%] py-1.5 rounded-[20px] transition-all duration-300 ${activeTab === key ? (activeTab === 'add' ? 'text-[#00D4FF]' : 'bg-[#DDDDDD] text-[#00D4FF]') : 'text-black hover:opacity-70'}`}
            >
              <Icon size={22} strokeWidth={activeTab === key ? 2.5 : 2} />
              {activeTab !== 'add' && <span className="text-[9px] font-medium mt-1 tracking-tight">{label}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
