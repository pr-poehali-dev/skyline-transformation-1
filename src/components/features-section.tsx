import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Бесплатно для молодёжи",
    description: "Карта выдаётся гражданам России от 14 до 22 лет абсолютно бесплатно. Никаких скрытых платежей и условий.",
    icon: "gift",
    badge: "Бесплатно",
  },
  {
    title: "5 000 ₽ каждый год",
    description: "Ежегодное пополнение баланса на 5 000 рублей за счёт государства для посещения культурных мероприятий.",
    icon: "wallet",
    badge: "Гос. поддержка",
  },
  {
    title: "Тысячи площадок",
    description: "Театры, музеи, выставки, кинотеатры и концертные залы по всей стране принимают Пушкинскую карту.",
    icon: "map",
    badge: "По всей России",
  },
  {
    title: "Удобная оплата",
    description: "Оплата через приложение «Госуслуги Культура» или на кассе. Просто, быстро и без лишних шагов.",
    icon: "phone",
    badge: "Цифровая",
  },
  {
    title: "Широкий выбор",
    description: "От классического балета до современного арт-хауса — выбирайте мероприятия по своему вкусу.",
    icon: "star",
    badge: "Разнообразие",
  },
  {
    title: "Только легальные билеты",
    description: "Все билеты приобретаются через официальные сервисы. Никаких перекупщиков и поддельных мест.",
    icon: "shield",
    badge: "Безопасно",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Всё что нужно знать</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Пушкинская карта — государственная программа поддержки молодёжи и культуры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "gift" && "🎁"}
                    {feature.icon === "wallet" && "💰"}
                    {feature.icon === "map" && "🗺️"}
                    {feature.icon === "phone" && "📱"}
                    {feature.icon === "star" && "⭐"}
                    {feature.icon === "shield" && "🛡️"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
