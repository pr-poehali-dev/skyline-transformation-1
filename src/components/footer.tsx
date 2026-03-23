import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Пушкинская<span className="text-yellow-400"> Карта</span>
            </h2>
            <p className="font-geist text-gray-300 mb-6 max-w-md">
              Государственная программа поддержки молодёжи. Доступ к культуре для каждого молодого человека России.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Icon name="Globe" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Программа</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="font-geist text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#applications" className="font-geist text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Как получить
                </a>
              </li>
              <li>
                <a href="#faq" className="font-geist text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://culture.ru" target="_blank" rel="noreferrer" className="font-geist text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  culture.ru
                </a>
              </li>
              <li>
                <a href="https://gosuslugi.ru" target="_blank" rel="noreferrer" className="font-geist text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Госуслуги
                </a>
              </li>
              <li>
                <a href="#" className="font-geist text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Найти площадки
                </a>
              </li>
              <li>
                <a href="#" className="font-geist text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-geist text-gray-400 text-sm">© 2025 Пушкинская Карта. Министерство культуры РФ.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-geist text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Конфиденциальность
              </a>
              <a href="#" className="font-geist text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
