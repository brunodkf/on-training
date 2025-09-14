import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Training = () => {
    return (
        <section className="py-25 px-4">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 ">
                        <h2 className="text-4xl lg:text-5xl font-bold text-center">
                            TREINE DE <span className="text-green-400">ONDE ESTIVER</span>
                        </h2>
                        <p className="text-xl text-black leading-relaxed">
                            Acesse todos os materiais, vídeos e guias online. Nossa plataforma foi desenvolvida para você treinar em
                            casa, na academia ou onde preferir, com total flexibilidade e acompanhamento profissional.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-green-400 hover:bg-green-500 cursor-pointer text-black font-semibold text-lg px-8 py-4 shadow-lg rounded-xl flex items-center gap-2">
                                Começar agora
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-green-400 text-green-400 bg-black hover:bg-green-400 cursor-pointer hover:text-black text-lg px-8 py-4 font-semibold rounded-xl flex items-center gap-2"
                            >
                                Ver materiais
                                
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-green-400/20 to-transparent rounded-3xl p-8 h-96 flex items-center justify-center">
                            <Image
                                src="/mockup.webp"
                                alt="Online Training"
                                width={400}
                                height={400}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Training