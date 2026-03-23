const SlideWrapper = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div
    id={id}
    className="min-h-screen bg-[#0a0f1e] relative flex flex-col border-b border-yellow-500/10"
  >
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,140,50,0.05)_0%,_transparent_70%)]" />
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-yellow-500/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-yellow-500/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-yellow-500/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-yellow-500/30" />
    </div>
    <div className="relative z-10 flex flex-col flex-1 px-8 md:px-20 py-12 md:py-16">
      {children}
    </div>
  </div>
)

const SlideTitle = ({ number, title }: { number: string; title: string }) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-3">
      <span className="text-yellow-500/50 font-geist text-sm tracking-widest">СЛАЙД {number}</span>
      <div className="flex-1 h-px bg-yellow-500/20" />
    </div>
    <h2 className="font-orbitron text-2xl md:text-4xl font-bold text-white">{title}</h2>
    <div className="mt-3 w-16 h-1 bg-yellow-500 rounded-full" />
  </div>
)

export function SlideContents() {
  const items = [
    { num: "01", title: "Титульный лист" },
    { num: "02", title: "Содержание" },
    { num: "03", title: "Актуальность темы" },
    { num: "04", title: "Цель и задачи исследования" },
    { num: "05", title: "Основная часть" },
    { num: "06", title: "Методы исследования и результаты по России" },
    { num: "07", title: "Вывод" },
    { num: "08", title: "Заключение" },
  ]

  return (
    <SlideWrapper id="slide-contents">
      <SlideTitle number="02" title="Содержание" />
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {items.map((item) => (
            <div
              key={item.num}
              className="flex items-center gap-5 p-4 rounded-xl border border-yellow-500/15 bg-yellow-500/5 hover:bg-yellow-500/10 transition-colors"
            >
              <span className="text-yellow-400 font-orbitron text-2xl font-bold min-w-[2.5rem]">{item.num}</span>
              <span className="text-white font-geist text-base md:text-lg">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}

export function SlideRelevance() {
  return (
    <SlideWrapper id="slide-relevance">
      <SlideTitle number="03" title="Актуальность темы" />
      <div className="flex-1 flex flex-col justify-center gap-6 max-w-4xl">
        <p className="text-gray-300 font-geist text-base md:text-lg leading-relaxed">
          В современном обществе доступность культурных мероприятий для молодёжи остаётся серьёзной проблемой.
          Высокая стоимость билетов в театры, музеи и кинотеатры ограничивает культурное развитие
          значительной части молодых людей России.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { icon: "📉", label: "Снижение посещаемости", desc: "культурных учреждений среди молодёжи 14–22 лет" },
            { icon: "💸", label: "Финансовый барьер", desc: "средняя цена билета недоступна для студентов и школьников" },
            { icon: "🏛️", label: "Государственная задача", desc: "сохранение и популяризация культурного наследия России" },
          ].map((card) => (
            <div key={card.label} className="p-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-center">
              <div className="text-3xl mb-3">{card.icon}</div>
              <p className="text-yellow-400 font-geist font-semibold text-sm mb-2">{card.label}</p>
              <p className="text-gray-400 font-geist text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-5 rounded-xl border-l-4 border-yellow-500 bg-yellow-500/5">
          <p className="text-white font-geist text-base md:text-lg italic leading-relaxed">
            «Пушкинская карта» — ответ государства на эту проблему: инструмент, который делает культуру
            доступной каждому молодому человеку страны.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}

export function SlideGoals() {
  return (
    <SlideWrapper id="slide-goals">
      <SlideTitle number="04" title="Цель и задачи исследования" />
      <div className="flex-1 flex flex-col justify-center gap-8 max-w-4xl">

        <div className="p-6 rounded-xl border border-yellow-500/30 bg-yellow-500/8">
          <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-3">Цель исследования</p>
          <p className="text-white font-geist text-lg md:text-xl leading-relaxed font-medium">
            Изучить программу «Пушкинская карта», оценить её роль в повышении доступности
            культуры для молодёжи и проанализировать результаты реализации по России.
          </p>
        </div>

        <div>
          <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-5">Задачи исследования</p>
          <div className="space-y-3">
            {[
              "Изучить историю возникновения и нормативную базу программы «Пушкинская карта»",
              "Описать механизм работы карты и условия её получения",
              "Проанализировать охват программы и статистику использования по регионам России",
              "Выявить проблемы реализации программы и предложить пути их решения",
              "Оценить значимость программы для культурного развития молодёжи",
            ].map((task, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-white/3 border border-white/5">
                <span className="text-yellow-500 font-orbitron font-bold text-sm min-w-[1.5rem] mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-200 font-geist text-sm md:text-base leading-relaxed">{task}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}

export function SlideMain() {
  return (
    <SlideWrapper id="slide-main">
      <SlideTitle number="05" title="Основная часть" />
      <div className="flex-1 flex flex-col justify-center gap-6 max-w-4xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
            <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-3">Что такое Пушкинская карта</p>
            <p className="text-gray-200 font-geist text-sm leading-relaxed">
              Государственная программа, запущенная в сентябре 2021 года по поручению Президента РФ.
              Именная карта «Мир» с балансом <span className="text-yellow-400 font-semibold">5 000 ₽ в год</span> для
              граждан России от 14 до 22 лет.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
            <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-3">Для чего предназначена</p>
            <p className="text-gray-200 font-geist text-sm leading-relaxed">
              Оплата билетов в театры, музеи, галереи, концертные залы и кинотеатры.
              Средства выделяются из федерального бюджета — получатель не тратит собственные деньги.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-yellow-500/20 bg-white/3">
          <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-4">Ключевые факты программы</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "2021", label: "год запуска" },
              { value: "14–22", label: "возраст участников" },
              { value: "5 000 ₽", label: "баланс в год" },
              { value: "80+", label: "регионов участвуют" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-yellow-400 font-orbitron text-xl md:text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-400 font-geist text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-xl border border-yellow-500/20 bg-white/3">
          <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-3">Как получить</p>
          <div className="flex flex-col md:flex-row gap-3">
            {[
              { step: "1", text: "Подтверждённый аккаунт на Госуслугах" },
              { step: "2", text: "Оформление через приложение «Госуслуги Культура»" },
              { step: "3", text: "Карта Мир привязывается автоматически" },
            ].map((s) => (
              <div key={s.step} className="flex items-center gap-3 flex-1">
                <span className="w-7 h-7 rounded-full bg-yellow-500 text-black font-bold text-sm flex items-center justify-center flex-shrink-0">{s.step}</span>
                <p className="text-gray-300 font-geist text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideWrapper>
  )
}

export function SlideMethods() {
  return (
    <SlideWrapper id="slide-methods">
      <SlideTitle number="06" title="Методы исследования и результаты по России" />
      <div className="flex-1 flex flex-col justify-center gap-6 max-w-5xl">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-3">Методы</p>
            <div className="space-y-2">
              {["Анализ нормативных документов", "Изучение статистических данных", "Анкетирование среди сверстников", "Сравнительный анализ регионов"].map((m) => (
                <div key={m} className="flex items-center gap-3 p-3 rounded-lg border border-yellow-500/15 bg-yellow-500/5">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                  <p className="text-gray-300 font-geist text-sm">{m}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-3">Результаты по России</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "11 млн+", label: "карт выдано россиянам", color: "text-yellow-400" },
                { value: "18 000+", label: "площадок-участников", color: "text-yellow-400" },
                { value: "44 млрд ₽", label: "потрачено на культуру", color: "text-yellow-400" },
                { value: "85", label: "регионов охвачено", color: "text-yellow-400" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-center">
                  <p className={`font-orbitron text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-gray-400 font-geist text-xs mt-1 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 rounded-xl border border-yellow-500/20 bg-white/3">
              <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-2">Топ направлений посещаемости</p>
              <div className="space-y-2">
                {[
                  { label: "Театры и спектакли", pct: 38 },
                  { label: "Кинотеатры (российское кино)", pct: 32 },
                  { label: "Музеи и выставки", pct: 20 },
                  { label: "Концерты и другое", pct: 10 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <p className="text-gray-300 font-geist text-xs w-44 flex-shrink-0">{item.label}</p>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <p className="text-yellow-400 font-geist text-xs w-8 text-right">{item.pct}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}

export function SlideConclusion() {
  return (
    <SlideWrapper id="slide-conclusion">
      <SlideTitle number="07" title="Вывод" />
      <div className="flex-1 flex flex-col justify-center gap-6 max-w-4xl">

        <div className="p-6 rounded-xl border-l-4 border-yellow-500 bg-yellow-500/5">
          <p className="text-white font-geist text-base md:text-lg leading-relaxed">
            Программа «Пушкинская карта» является эффективным инструментом государственной культурной политики,
            который существенно повысил доступность культурных мероприятий для молодёжи России.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "✅",
              title: "Достигнуто",
              items: [
                "Миллионы молодых людей впервые посетили театры и музеи",
                "Культурные учреждения получили дополнительное финансирование",
                "Сформирована привычка к культурному досугу у молодёжи",
              ],
            },
            {
              icon: "⚠️",
              title: "Выявленные проблемы",
              items: [
                "Неравномерный охват в малых городах и сёлах",
                "Случаи мошенничества с перепродажей билетов",
                "Ограниченный выбор мероприятий в ряде регионов",
              ],
            },
          ].map((block) => (
            <div key={block.title} className="p-5 rounded-xl border border-yellow-500/20 bg-white/3">
              <p className="text-yellow-400 font-geist text-xs tracking-widest uppercase mb-4">
                {block.icon} {block.title}
              </p>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 font-geist text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-xl border border-yellow-500/30 bg-yellow-500/8 text-center">
          <p className="text-gray-300 font-geist text-sm leading-relaxed">
            <span className="text-yellow-400 font-semibold">Гипотеза подтверждена:</span> государственная поддержка
            в виде именной карты является действенным механизмом вовлечения молодёжи в культурную жизнь страны
            и заслуживает дальнейшего развития и расширения.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}

export function SlideFinal() {
  return (
    <SlideWrapper id="slide-final">
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8">

        <div className="relative">
          <div className="absolute -inset-8 bg-yellow-500/5 rounded-full blur-2xl" />
          <span className="relative text-6xl md:text-8xl">🏛️</span>
        </div>

        <div>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-4">
            Спасибо за внимание!
          </h2>
          <div className="mx-auto w-32 h-1 bg-yellow-500 rounded-full mb-6" />
          <p className="text-gray-300 font-geist text-base md:text-xl max-w-2xl leading-relaxed">
            Пушкинская карта — это не просто карта. Это возможность каждого молодого человека
            стать ближе к культуре и истории своей страны.
          </p>
        </div>

        <div className="mt-4 p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 max-w-lg">
          <p className="text-gray-400 font-geist text-xs tracking-widest uppercase mb-3">Исследовательская работа</p>
          <p className="text-white font-orbitron text-lg font-bold mb-3">«Пушкинская Карта»</p>
          <div className="h-px bg-yellow-500/20 mb-3" />
          <p className="text-gray-400 font-geist text-sm">Кизина Екатерина, 9А класс</p>
          <p className="text-gray-500 font-geist text-xs mt-1">МАОУ «Гимназия №4», Стерлитамак, 2026</p>
        </div>

      </div>
    </SlideWrapper>
  )
}
