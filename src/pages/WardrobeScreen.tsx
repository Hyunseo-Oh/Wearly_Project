import { useRef, useState, useEffect } from 'react';
import { Search } from 'lucide-react';

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

    const handleResize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) setScrollPos(containerRef.current.scrollLeft);
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
      <div className="flex items-center justify-between px-5 mb-2">
        <h3 className="text-2xl font-black text-white drop-shadow-sm">{season}</h3>
        <span className="text-white/80 text-xs font-bold px-3 py-1 bg-white/20 rounded-full">{items.length} items</span>
      </div>

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
          const scale = containerWidth > 0 ? 1 + Math.max(0, 1 - distance / 120) * 0.6 : 1;
          const zIndex = 100 - Math.round(distance);

          return (
            <div
              key={item}
              className="snap-center shrink-0 rounded-[16px] shadow-md bg-cover bg-center border-2 border-white/80 cursor-pointer hover:brightness-110 transition-all"
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
}

export default function WardrobeScreen() {
  const seasons = [
    { name: 'Spring', idx: 0 },
    { name: 'Summer', idx: 1 },
    { name: 'Fall', idx: 2 },
    { name: 'Winter', idx: 3 },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-28 pt-8 relative">
      <div className="px-4 sticky top-0 z-20 bg-[#F5F5F5]/90 backdrop-blur-md pb-4 pt-2">
        <h1 className="text-2xl font-black mb-3 text-center text-[#00D4FF] tracking-widest">WEARLY</h1>

        <div className="bg-white flex items-center px-4 py-3 rounded-[20px] mb-4 shadow-sm border border-gray-100">
          <Search size={20} className="text-gray-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search your wardrobe..."
            className="bg-transparent border-none outline-none w-full text-sm font-medium text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="px-4 pt-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-gray-900">My Closet</h2>
          <span className="text-xs font-bold text-gray-400">28 items</span>
        </div>
        {seasons.map((s) => <SeasonCarousel key={s.name} season={s.name} idx={s.idx} />)}
      </div>
    </div>
  );
}
