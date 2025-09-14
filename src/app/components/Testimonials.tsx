"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge, ChevronLeft, ChevronRight, Heart, MapPin, MessageCircle, Play, Smartphone, Star, Trophy, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const testimonials = [
    {
        id: 1,
        name: "Cliente Satisfeito",
        age: 35,
        location: "Barra da Tijuca, RJ",
        image: "/dep01.jpg",
        rating: 5,
        text: "Excelente profissional! Comecei a treinar com Anderson, por conta das dores na coluna, com muita técnica, profissionalismo, eliminamos 18 kilos. Hoje, livre das dores, não consigo mais parar de treinar. Super indico!",
        results: "18kg perdidos + Dores eliminadas",
        time: "Transformação completa",
    },
    {
        id: 2,
        name: "Aluna Transformada",
        age: 28,
        location: "Barra da Tijuca, RJ",
        image: "/dep02.jpg",
        rating: 5,
        text: "Quando começamos, eu nem percebia o tamanho que eu estava. Hoje, ver essa calça larga em mim é surreal. Obrigada por todo apoio, paciência e orientação — o resultado está aí, visível e transformador!",
        results: "Transformação corporal completa",
        time: "Resultado visível",
    },
    {
        id: 3,
        name: "Aluna Fiel",
        age: 32,
        location: "Barra da Tijuca, RJ",
        image: "/dep03.jpg",
        rating: 5,
        text: "Desde 2023, venho treinando semanalmente com o Anderson, e posso dizer que foi uma das melhores decisões que tomei. Nesse tempo, meu corpo se transformou — hoje tenho o corpo que sempre sonhei, e isso só foi possível graças ao acompanhamento atento e personalizado do Anderson.",
        results: "Corpo dos sonhos alcançado",
        time: "Desde 2023",
    },
]

const Testimonials = () => {

    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial()
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    const nextTestimonial = () => {
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
            setIsTransitioning(false)
        }, 150)
    }

    const prevTestimonial = () => {
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            setIsTransitioning(false)
        }, 150)
    }

    const goToTestimonial = (index: number) => {
        if (index !== currentTestimonial) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentTestimonial(index)
                setIsTransitioning(false)
            }, 150)
        }
    }

    return (
        <section id="depoimentos" className="py-20 bg-black bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                        DEPOIMENTOS DOS MEUS <span className="text-green-400">ALUNOS</span>
                    </h2>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
                        Histórias reais de transformação com Anderson Marlon
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl">
                        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700/50 shadow-2xl">
                            <CardContent className="p-0">
                                <div
                                    className={`transition-all duration-300 ease-in-out ${isTransitioning ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
                                        }`}
                                >
                                    <div className="grid lg:grid-cols-2 gap-0 m-4">
                                        <div className="relative p-8 lg:p-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500/10 to-blue-500/10">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
                                                <Image
                                                    className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-3xl object-cover border-4 border-green-400 shadow-2xl"
                                                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                                                    alt={testimonials[currentTestimonial].name}
                                                    width={500} height={300} />

                                                <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg">
                                                    <div className="flex items-center space-x-1">
                                                        <Star className="w-4 h-4 text-white fill-current" />
                                                        <span className="text-white font-bold text-sm">5.0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                                            <div className="space-y-6">
                                                <div className="space-y-3">
                                                    <div className="flex items-center space-x-2 text-yellow-400">
                                                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                                            <Star key={i} className="w-5 h-5 fill-current" />
                                                        ))}
                                                    </div>
                                                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                                        {testimonials[currentTestimonial].name}
                                                    </h3>
                                                    <div className="flex items-center text-slate-400">
                                                        <MapPin className="w-4 h-4 mr-2" />
                                                        <span>
                                                            {testimonials[currentTestimonial].age} anos •{" "}
                                                            {testimonials[currentTestimonial].location}
                                                        </span>
                                                    </div>
                                                </div>

                                                <blockquote className="text-lg lg:text-xl text-slate-200 leading-relaxed italic border-l-4 border-green-400 pl-6">
                                                    &quot;{testimonials[currentTestimonial].text}&quot;
                                                </blockquote>

                                                <div className="flex flex-wrap gap-3">
                                                    <span className="rounded-sm bg-green-600 text-white border-green-500 px-4 py-2 text-sm font-semibold flex items-center">
                                                        <Trophy className="w-4 h-4 mr-2 " />
                                                        <p>{testimonials[currentTestimonial].results}</p>
                                                    </span>

                                                    <span className="rounded-sm bg-blue-600 text-white border-blue-500 px-4 py-2 text-sm font-semibold">
                                                        ⏱️ {testimonials[currentTestimonial].time}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>


                    {/* <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/90 border-slate-600 hover:bg-slate-700 hover:border-green-400 transition-all duration-300 backdrop-blur-sm w-12 h-12"
                        onClick={prevTestimonial}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button> */}



                    <div className="flex justify-center mt-8 space-x-3">
                        <Button
                            variant="outline"
                            size="icon"
                            className="text-white hover:text-green-400 cursor-pointer left-6 -translate-y-1/3 bg-slate-800/90 border-slate-600 hover:bg-slate-700 hover:border-green-400 transition-all duration-300 backdrop-blur-sm w-12 h-12"
                            onClick={prevTestimonial}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>


                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`transition-all duration-300 rounded-full ${index === currentTestimonial ? "w-8 h-3 bg-green-500" : "w-3 h-3 bg-slate-600 hover:bg-slate-500"
                                    }`}
                                onClick={() => goToTestimonial(index)}
                            />
                        ))}


                        <Button
                            variant="outline"
                            size="icon"
                            className="text-white hover:text-green-400 cursor-pointer right-6 -translate-y-1/3 bg-slate-800/90 border-slate-600 hover:bg-slate-700 hover:border-green-400 transition-all duration-300 backdrop-blur-sm w-12 h-12"
                            onClick={nextTestimonial}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>

                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                            200+
                        </div>
                        <div className="text-slate-300 text-lg">Alunos Transformados</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                            5+
                        </div>
                        <div className="text-slate-300 text-lg">Anos de Experiência</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                            100%
                        </div>
                        <div className="text-slate-300 text-lg">Satisfação</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials