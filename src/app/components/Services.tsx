"use client"
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Heart, Icon, MessageCircle, Play, Target, TrendingUp, Users, Zap } from 'lucide-react'
import React from 'react'

const Services = () => {

    const services = [
        {
            icon: <Play className="w-8 h-8 text-black" />,
            title: "Acesso a treinos e vídeos",
            description:
                "Biblioteca completa com exercícios detalhados",
        },
        {
            icon: <MessageCircle className="w-8 h-8 text-black" />,
            title: "Suporte via WhatsApp e Telegram",
            description:
                "Tire suas dúvidas diretamente com nossa equipe",
        },
        {
            icon: <Heart className="w-8 h-8 text-black" />,
            title: "Consultas com nutricionistas parceiros",
            description:
                "Acompanhamento nutricional especializado",
        },
        {
            icon: <Users className="w-8 h-8 text-black" />,
            title: "Comunidade de alunos",
            description:
                "Conecte-se com outros alunos e compartilhe resultados",
        },
    ]

    return (
        <section className="py-20 px-4 bg-black relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                        NA PLATAFORMA VOCÊ <span className="text-green-400">ENCONTRA:</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {
                        services.map((item, e) => {
                            return (
                                <Card key={e} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors">
                                    <CardContent className="p-8 text-center">
                                        <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-white text-xl font-semibold mb-4">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Services