import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Анастасия, 19 лет",
    role: "Студентка, Санкт-Петербург",
    avatar: "/professional-woman-scientist.png",
    content:
      "Благодаря Пушкинской карте побывала в Эрмитаже, Мариинском театре и на выставке Айвазовского. Раньше не могла себе этого позволить — теперь хожу каждый месяц!",
  },
  {
    name: "Дмитрий, 21 год",
    role: "Студент, Москва",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Думал, что музеи — это скучно. Пошёл на современное искусство по карте и теперь подписан на пять галерей. Карта реально открыла новый мир.",
  },
  {
    name: "Екатерина, 17 лет",
    role: "Школьница, Казань",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "5000 рублей на культуру — это целых 5 театральных спектаклей! Оформила за 10 минут через Госуслуги, всё очень просто и удобно.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-orbitron">Что говорят молодые</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи молодых людей уже открыли для себя культуру благодаря Пушкинской карте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
