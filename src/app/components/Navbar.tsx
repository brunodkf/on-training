import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50" >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Image src="/logo.webp" alt="AM PERSONAL TRAINER" width={120} height={50} className="h-12 w-auto" />
                </div>
                <div className="flex gap-6 text-white">
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#inicio" className="hover:text-green-400 transition-colors">
                            Início
                        </Link>
                        <Link href="#planos" className="hover:text-green-400 transition-colors">
                            Planos
                        </Link>
                        <Link href="#depoimentos" className="hover:text-green-400 transition-colors">
                            Depoimentos
                        </Link>
                        <Link href="#comunidade" className="hover:text-green-400 transition-colors">
                            Comunidade
                        </Link>
                        <Link href="#contato" className="hover:text-green-400 transition-colors">
                            Contato
                        </Link>

                    </div>


                    <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold cursor-pointer">Quero começar</Button>

                    <Button className=" text-green-400 border-green-400 border-2 hover:text-black hover:bg-green-400 font-semibold cursor-pointer">Login</Button>



                </div>

            </div>
        </nav >

    )
}

export default Navbar