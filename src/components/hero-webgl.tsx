export const Hero3DWebGL = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1e] relative overflow-hidden flex flex-col">
      {/* Декоративный фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,140,50,0.08)_0%,_transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-60" />
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-40" />
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-40" />
        {/* Орнаментальные уголки */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-yellow-500/50" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-yellow-500/50" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-yellow-500/50" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-yellow-500/50" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen px-8 md:px-16 py-12 md:py-16">

        {/* Верх — название учреждения */}
        <div className="text-center pt-4 md:pt-8">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-geist max-w-2xl mx-auto">
            Муниципальное автономное общеобразовательное учреждение
          </p>
          <p className="text-white text-base md:text-lg font-semibold leading-relaxed font-geist max-w-2xl mx-auto mt-1">
            «Гимназия № 4» городского округа
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-geist max-w-2xl mx-auto">
            город Стерлитамак Республики Башкортостан
          </p>
          <div className="mt-4 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>

        {/* Центр — главное содержимое */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
          <div className="mb-6">
            <span className="text-yellow-500/60 text-xs md:text-sm font-geist tracking-[0.3em] uppercase">
              — научная работа —
            </span>
          </div>

          <h2 className="text-white text-xl md:text-2xl font-semibold font-geist tracking-widest uppercase mb-8 opacity-80">
            ИССЛЕДОВАТЕЛЬСКАЯ РАБОТА
          </h2>

          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-500/5 rounded-xl blur-xl" />
            <h1 className="relative text-4xl md:text-6xl xl:text-7xl font-extrabold font-orbitron text-white leading-tight">
              Пушкинская
            </h1>
            <h1 className="relative text-4xl md:text-6xl xl:text-7xl font-extrabold font-orbitron leading-tight mt-1">
              <span className="text-yellow-400">Карта</span>
            </h1>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-16 h-px bg-yellow-500/40" />
            <span className="text-yellow-500/70 text-2xl">✦</span>
            <div className="w-16 h-px bg-yellow-500/40" />
          </div>
        </div>

        {/* Низ — автор справа + город по центру */}
        <div className="flex items-end justify-between pb-4 md:pb-8">

          {/* Пустое место слева */}
          <div className="flex-1" />

          {/* Город по центру */}
          <div className="flex-1 text-center">
            <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent mb-3" />
            <p className="text-gray-400 text-sm font-geist tracking-widest">
              Стерлитамак 2026
            </p>
          </div>

          {/* Автор справа */}
          <div className="flex-1 flex justify-end">
            <div className="text-right max-w-xs">
              <div className="w-full h-px bg-gradient-to-l from-yellow-500/40 to-transparent mb-4" />
              <p className="text-gray-300 text-sm font-geist leading-relaxed">
                Выполнила ученица 9А класса
              </p>
              <p className="text-gray-300 text-sm font-geist leading-relaxed">
                МАОУ «Гимназия №4»
              </p>
              <p className="text-gray-300 text-sm font-geist leading-relaxed">
                ГО г. Стерлитамак РБ
              </p>
              <p className="text-white text-base font-semibold font-geist mt-2">
                Кизина Екатерина
              </p>
              <div className="mt-3 pt-3 border-t border-yellow-500/20">
                <p className="text-gray-400 text-xs font-geist leading-relaxed">
                  Научный руководитель
                </p>
                <p className="text-gray-400 text-xs font-geist leading-relaxed">
                  учитель обществознания и истории
                </p>
                <p className="text-gray-400 text-xs font-geist leading-relaxed">
                  высшей квалификационной категории
                </p>
                <p className="text-white text-sm font-semibold font-geist mt-1">
                  Шакбасарова Гульназ Фаргатовна
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero3DWebGL