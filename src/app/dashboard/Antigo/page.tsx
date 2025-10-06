import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Award, Badge, Calendar, Clock, MessageCircle, Play, Target, TrendingUp } from 'lucide-react'


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="flex h-16 items-center px-6">
          <SidebarTrigger className="text-white hover:bg-gray-800" />
          <div className="ml-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <p className="text-sm text-gray-400">Bem-vindo de volta, João!</p>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Badge className="bg-anderson-green text-white">Plano Premium Ativo</Badge>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Transforme seu corpo com <span className="text-anderson-green">treinos inteligentes</span>
              </h2>
              <p className="text-gray-300 mb-4">Continue sua jornada de transformação. Você está no caminho certo!</p>
              <div className="flex gap-3">
                <Button className="bg-anderson-green hover:bg-green-600 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Continuar Treino
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com Anderson
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-gray-600 rounded-lg flex items-center justify-center">
                <Play className="w-12 h-12 text-anderson-green" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">progresso Semanal</CardTitle>
              <TrendingUp className="h-4 w-4 text-anderson-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">85%</div>
              <p className="text-xs text-gray-400">+12% desde a semana passada</p>
              <progress value={85} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Treinos Concluídos</CardTitle>
              <Target className="h-4 w-4 text-anderson-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24/30</div>
              <p className="text-xs text-gray-400">6 treinos restantes este mês</p>
              <progress value={80} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Tempo Total</CardTitle>
              <Clock className="h-4 w-4 text-anderson-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">18h 45m</div>
              <p className="text-xs text-gray-400">+2h 30m esta semana</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Conquistas</CardTitle>
              <Award className="h-4 w-4 text-anderson-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12</div>
              <p className="text-xs text-gray-400">3 novas esta semana</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Próximos Treinos */}
          <Card className="lg:col-span-2 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-anderson-green" />
                Próximos Treinos
              </CardTitle>
              <CardDescription className="text-gray-400">Seus treinos agendados para os próximos dias</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Treino de Peito e Tríceps",
                  time: "Hoje • 18:00",
                  duration: "45 min",
                  type: "Força",
                },
                {
                  title: "HIIT Cardio Intenso",
                  time: "Amanhã • 07:00",
                  duration: "30 min",
                  type: "Cardio",
                },
                {
                  title: "Treino de Costas e Bíceps",
                  time: "Sex • 18:00",
                  duration: "50 min",
                  type: "Força",
                },
              ].map((treino, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-anderson-green/20 rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-anderson-green" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{treino.title}</h4>
                      <p className="text-sm text-gray-400">
                        {treino.time} • {treino.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gray-600 text-gray-300">
                      {treino.type}
                    </Badge>
                    <Button size="sm" className="bg-anderson-green hover:bg-green-600">
                      Iniciar
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Plano Atual */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Seu Plano</CardTitle>
              <CardDescription className="text-gray-400">Plano Premium ativo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-anderson-green/20 to-green-600/20 rounded-lg border border-anderson-green/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">Premium</h3>
                  <Badge className="bg-anderson-green text-white">Ativo</Badge>
                </div>
                <p className="text-sm text-gray-300 mb-3">Acesso completo a todos os treinos e suporte direto</p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-anderson-green rounded-full"></div>
                    Treinos ilimitados
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-anderson-green rounded-full"></div>
                    Suporte direto com Anderson
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-anderson-green rounded-full"></div>
                    Planos personalizados
                  </div>
                </div>
              </div>

              <Button className="w-full bg-anderson-green hover:bg-green-600">
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar com Anderson
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Vídeos Recentes */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Play className="w-5 h-5 text-anderson-green" />
              Vídeos Recentes
            </CardTitle>
            <CardDescription className="text-gray-400">Continue assistindo seus treinos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Treino Completo de Peito",
                  duration: "35:20",
                  progress: 75,
                },
                {
                  title: "HIIT para Queima de Gordura",
                  duration: "28:15",
                  progress: 100,
                },
                {
                  title: "Treino de Costas Avançado",
                  duration: "42:30",
                  progress: 30,
                },
              ].map((video, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative bg-gray-700 rounded-lg overflow-hidden mb-3">
                    <div className="aspect-video bg-gray-600 flex items-center justify-center">
                      <Play className="w-12 h-12 text-anderson-green group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    {video.progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                        <div className="h-full bg-anderson-green" style={{ width: `${video.progress}%` }}></div>
                      </div>
                    )}
                  </div>
                  <h4 className="font-medium text-white group-hover:text-anderson-green transition-colors">
                    {video.title}
                  </h4>
                  {video.progress > 0 && video.progress < 100 && (
                    <p className="text-sm text-gray-400">{video.progress}% concluído</p>
                  )}
                  {video.progress === 100 && <p className="text-sm text-anderson-green">✓ Concluído</p>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard