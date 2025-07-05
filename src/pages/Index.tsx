import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Video" size={24} className="text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">
                VideoMount
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Заказать</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Профессиональный
                <br />
                <span className="text-blue-600">видеомонтаж</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Создаем качественные видеоролики для вашего бизнеса, социальных
                сетей и личных проектов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Обсудить проект
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/f5cceb48-141c-4bb7-add4-e34d26e3279f.jpg"
                alt="Профессиональный видеомонтаж"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Команда профессиональных видеомонтажеров с опытом работы более 5
              лет
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Опыт</h3>
              <p className="text-gray-600">
                Более 500 успешно завершенных проектов
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Скорость
              </h3>
              <p className="text-gray-600">
                Быстрая обработка и сдача проектов
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Качество
              </h3>
              <p className="text-gray-600">
                Профессиональный подход к каждому проекту
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг видеомонтажа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Scissors" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Монтаж роликов</CardTitle>
                <CardDescription>
                  Создание рекламных и презентационных роликов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Palette" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Цветокоррекция</CardTitle>
                <CardDescription>
                  Профессиональная обработка цвета и света
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Volume2" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Работа со звуком</CardTitle>
                <CardDescription>
                  Озвучка, музыка, звуковые эффекты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Анимация</CardTitle>
                <CardDescription>
                  Создание анимированной графики и эффектов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Type" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Титры и субтитры</CardTitle>
                <CardDescription>
                  Добавление текста и субтитров к видео
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Share2" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Социальные сети</CardTitle>
                <CardDescription>
                  Адаптация контента для соцсетей
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для обсуждения проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Напишите нам
              </h3>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Ваше имя" className="w-full" />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Электронная почта"
                    className="w-full"
                  />
                </div>
                <div>
                  <Input placeholder="Тема сообщения" className="w-full" />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите ваш проект..."
                    className="w-full h-32"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить сообщение
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Связаться с нами
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Электронная почта
                    </p>
                    <p className="text-gray-600">info@videomount.ru</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Телефон</p>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name="MessageCircle"
                      size={20}
                      className="text-blue-600"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telegram</p>
                    <p className="text-gray-600">@videomount</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Video" size={24} className="text-blue-400" />
              <span className="text-xl font-semibold">VideoMount</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональный видеомонтаж для вашего бизнеса
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 VideoMount. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
