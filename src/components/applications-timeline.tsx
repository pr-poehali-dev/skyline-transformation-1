import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Шаг 1: Получите карту",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Зарегистрируйтесь на портале Госуслуги — карта оформляется онлайн за несколько минут.
            Доступно для граждан России от 14 до 22 лет.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Подтверждённый аккаунт на Госуслугах
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Возраст от 14 до 22 лет включительно
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Гражданство Российской Федерации
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 2: Выберите мероприятие",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Откройте приложение «Госуслуги Культура» или сайт culture.ru и выбирайте из тысяч
            мероприятий по всей России — от театральных премьер до выставок современного искусства.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Театры и концертные залы
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Музеи и выставочные галереи
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Кинотеатры с российским кино
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 3: Наслаждайтесь культурой",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Оплатите билет картой через приложение или на кассе. Баланс 5 000 ₽ обновляется
            каждый год — успевайте посетить больше мероприятий!
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Оплата в один клик через приложение
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Или на кассе с предъявлением карты
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Остаток переносится — деньги не сгорают до конца года
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как это работает</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три простых шага — и весь мир культуры открыт для тебя. Пушкинская карта
            сделана так, чтобы начать было легко и приятно.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
