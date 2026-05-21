import { useState } from 'react';
import { Home, Calendar as CalendarIcon, Camera, Shirt, User } from 'lucide-react';
import FeedScreen from './pages/FeedScreen';
import CalendarScreen from './pages/CalendarScreen';
import CameraScreen from './pages/CameraScreen';
import WardrobeScreen from './pages/WardrobeScreen';
import ProfileScreen from './pages/ProfileScreen';

const tabs = [
  { key: 'feed', icon: Home, label: 'Feed' },
  { key: 'calendar', icon: CalendarIcon, label: 'Calendar' },
  { key: 'camera', icon: Camera, label: 'Upload' },
  { key: 'wardrobe', icon: Shirt, label: 'Wardrobe' },
  { key: 'profile', icon: User, label: 'Profile' },
] as const;

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
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-[14px] transition-all duration-300 min-w-[56px] ${
                activeTab === key
                  ? 'text-[#00D4FF] bg-gray-100/80 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon size={20} strokeWidth={activeTab === key ? 2.5 : 2} />
              <span className="text-[10px] font-bold mt-0.5 tracking-tight">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
