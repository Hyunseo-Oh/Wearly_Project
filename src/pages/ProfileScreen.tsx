import { useState } from 'react';
import { Bell, UserPlus, Heart, MessageCircle, Settings } from 'lucide-react';

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

export default function ProfileScreen() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 pt-8 relative">
      <div className="px-4">
        {/* Profile Header */}
        <div className="flex items-center gap-5 bg-white p-5 rounded-[32px] shadow-sm mb-6">
          <div
            className="w-20 h-20 rounded-full bg-cover bg-center shadow-sm"
            style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80)`}}
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">Jane Doe</h2>
            <div className="flex gap-4 mt-2">
              <span className="flex flex-col text-xs"><strong className="text-gray-900 text-lg">120</strong> Followers</span>
              <span className="flex flex-col text-xs"><strong className="text-gray-900 text-lg">80</strong> Following</span>
              <span className="flex flex-col text-xs"><strong className="text-gray-900 text-lg">28</strong> Items</span>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-[#00D4FF] transition-colors">
            <Settings size={22} />
          </button>
        </div>

        {/* Section Tabs */}
        <div className="flex bg-white rounded-[20px] p-1.5 mb-6 shadow-sm">
          {[
            { key: 'profile', label: 'Profile' },
            { key: 'notifications', label: 'Activity', icon: Bell },
            { key: 'friends', label: 'Friends', icon: UserPlus },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`flex-1 py-3 rounded-[16px] text-sm font-bold transition-all ${
                activeSection === key ? 'bg-[#00D4FF] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeSection === 'profile' && (
          <div className="space-y-4">
            <div className="bg-white rounded-[32px] p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">About</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Fashion enthusiast sharing daily OOTD ✨
              </p>
            </div>
            <div className="bg-white rounded-[32px] p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Recent Items</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="aspect-square rounded-[16px] bg-cover bg-center"
                    style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80&sig=${i})`}}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'notifications' && (
          <div className="bg-white rounded-[32px] shadow-sm overflow-hidden">
            {notifications.length === 0 ? (
              <div className="py-16 text-center text-gray-400">
                <Bell size={32} className="mx-auto mb-3 opacity-50" />
                <p className="font-bold">No notifications yet</p>
              </div>
            ) : (
              notifications.map((n, idx) => (
                <div
                  key={n.id}
                  className={`flex items-center gap-3 p-4 ${idx < notifications.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center shrink-0"
                    style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${n.id + 10})`}}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700">
                      <strong className="text-gray-900">{n.user}</strong> {n.content}
                    </p>
                    <span className="text-xs text-gray-400">{n.time}</span>
                  </div>
                  {n.type === 'like' ? (
                    <Heart size={16} className="text-red-400 shrink-0" />
                  ) : n.type === 'comment' ? (
                    <MessageCircle size={16} className="text-[#00D4FF] shrink-0" />
                  ) : null}
                </div>
              ))
            )}
          </div>
        )}

        {activeSection === 'friends' && (
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 mb-2 px-1">Friend Requests</h3>
            {friendRequests.length === 0 ? (
              <div className="bg-white rounded-[32px] py-16 text-center text-gray-400 shadow-sm">
                <UserPlus size={32} className="mx-auto mb-3 opacity-50" />
                <p className="font-bold">No friend requests</p>
              </div>
            ) : (
              friendRequests.map((friend) => (
                <div key={friend.id} className="flex items-center justify-between bg-white p-4 rounded-[24px] shadow-sm border border-gray-50">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 bg-gray-200 rounded-full bg-cover bg-center"
                      style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${friend.img + 20})`}}
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{friend.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{friend.username}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-[#00D4FF] text-white text-xs font-bold rounded-full hover:bg-[#00D4FF]/80 transition-colors">
                      Accept
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-500 text-xs font-bold rounded-full hover:bg-gray-200 transition-colors">
                      Decline
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
