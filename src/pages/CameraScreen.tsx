import { Camera, ChevronRight } from 'lucide-react';

export default function CameraScreen() {
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
