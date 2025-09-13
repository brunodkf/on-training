import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge, Check, CheckCircle, Crown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



const plans = [
    {
        name: "Vida Saudável",
        img: "/emcasa.webp",
        price: 30,
        description: "Treinos leves, sem academia",
        features: ["Treinos em casa", "Exercícios básicos", "Suporte por chat"],
        popular: false,
    },
    {
        name: "Emagrecimento",
        img: "/saudavel.webp",
        price: 40,
        description: "Treinos + dicas alimentares",
        features: ["Treinos focados", "Plano alimentar", "Suporte WhatsApp", "Acompanhamento semanal"],
        popular: true,
    },
    {
        name: "Hipertrofia",
        img: "/hipertrofia.webp",
        price: 75,
        description: "Suporte completo + planos avançados",
        features: [
            "Treinos avançados",
            "Consultoria nutricional",
            "Suporte 24/7",
            "Planos personalizados",
            "Acesso VIP comunidade",
        ],
        popular: false,
    },
]

const Pricing = () => {
    return (
        <section id="planos" className="container mx-auto px-4">
            <div className="text-center mb-12 py-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    ESCOLHA SEU <span className="text-green-500">PLANO IDEAL</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto pb-20">
                {plans.map((plan, index) => (
                    <Card
                        key={plan.name}
                        className={`relative pt-0 bg-slate-800 border-slate-700 text-white ${plan.popular ? "ring-2 ring-green-500 scale-105" : ""
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <div className="bg-green-500 text-white px-4 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
                                    <Crown className="w-4 h-4" />
                                    Popular
                                </div>
                            </div>
                        )}

                        <Image
                            src={plan.img}
                            alt="Online Training"
                            width={400}
                            height={400}
                            className="rounded-xl rounded-b-none"
                        />

                        <CardHeader className="text-center pb-4">
                            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                            <div className="mb-3">
                                <span className="text-5xl font-bold text-green-500">R$ {plan.price}</span>
                                <span className="text-gray-400 text-sm">/mês</span>
                            </div>
                            <p className="text-gray-300 text-sm">{plan.description}</p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white font-medium py-3 mt-6" size="lg">
                                Escolher plano
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Pricing