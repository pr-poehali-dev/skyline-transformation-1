import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Кто может получить Пушкинскую карту?",
      answer:
        "Граждане России в возрасте от 14 до 22 лет включительно. Для оформления нужен подтверждённый аккаунт на портале Госуслуги.",
    },
    {
      question: "Сколько денег на карте и когда они пополняются?",
      answer:
        "На карте 5 000 рублей в год за счёт государства. Баланс обновляется ежегодно. Остаток можно потратить до конца календарного года.",
    },
    {
      question: "Где можно потратить деньги с карты?",
      answer:
        "В театрах, музеях, галереях, концертных залах и кинотеатрах, которые участвуют в программе. Список площадок постоянно расширяется — их уже тысячи по всей России.",
    },
    {
      question: "Как оплатить билет Пушкинской картой?",
      answer:
        "Через приложение «Госуслуги Культура» на смартфоне или на кассе площадки. Достаточно предъявить карту или QR-код из приложения.",
    },
    {
      question: "Можно ли купить билет для другого человека?",
      answer:
        "Нет. Пушкинская карта именная — билеты можно покупать только для себя. Это сделано для защиты программы от злоупотреблений.",
    },
    {
      question: "Что делать, если площадка не принимает карту?",
      answer:
        "Проверьте актуальный список участников программы на сайте culture.ru. Если любимая площадка ещё не в программе — она может подать заявку на участие.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-geist">
            Всё, что нужно знать о Пушкинской карте — кратко и по делу.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-yellow-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-yellow-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-geist">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
