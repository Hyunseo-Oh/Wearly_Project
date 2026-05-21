import { Heart, MessageCircle, Music } from 'lucide-react';

const posts = [1, 2, 3];

export default function FeedScreen() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 relative pt-8">
      <div className="space-y-8 px-4">
        {posts.map(post => (
          <div key={post} className="relative">
            <div className="sticky top-2 z-10 bg-[#F5F5F5]/80 backdrop-blur-md py-3 px-2 flex items-center gap-3 mb-2 rounded-[16px]">
              <div
                className="w-10 h-10 rounded-full bg-cover bg-center shadow-sm"
                style={{backgroundImage: `url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&sig=${post})`}}
              />
              <span className="font-bold text-gray-900 text-sm drop-shadow-sm">user_id_{post}</span>
            </div>

            <div className="bg-white rounded-[32px] p-4 shadow-sm flex flex-col">
              <input
                type="text"
                placeholder="제목이나 이모지를 입력하세요 ✨"
                className="w-full bg-transparent border-none outline-none font-bold text-gray-800 placeholder-gray-300 px-2 mb-4 text-base"
              />

              <div
                className="w-full aspect-[4/5] bg-gray-100 rounded-[24px] bg-cover bg-center"
                style={{backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&sig=${post})`}}
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
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
