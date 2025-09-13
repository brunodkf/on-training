import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
          <footer id="contato" className="bg-gray-900 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="mb-4">
                <Image src="/logo.webp" alt="AM PERSONAL TRAINER" width={150} height={60} className="h-16 w-auto" />
              </div>
              <p className="text-gray-400">Transformando vidas através do fitness e bem-estar.</p>
              <div className="flex space-x-4">
                <div className="bg-green-400 w-10 h-10 rounded-full flex items-center justify-center">
                  <BsInstagram className="w-5 h-5 text-black" />
                </div>
                <div className="bg-green-400 w-10 h-10 rounded-full flex items-center justify-center">
                  <FaFacebook className="w-5 h-5 text-black" />
                </div>
                <div className="bg-green-400 w-10 h-10 rounded-full flex items-center justify-center">
                  <BsYoutube className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Suporte
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Termos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Política de privacidade
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Contato</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-green-400" />
                  <span>(21) 99999-9999</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-green-400" />
                  <span>contato@ampersonaltrainer.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-green-400" />
                  <span>Rio de Janeiro, RJ</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Newsletter</h4>
              <p className="text-gray-400 mb-4">Receba dicas e novidades</p>
              <div className="flex items-center max-h-[50px] h-[40px]">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 h-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-400"
                />
                <Button className="bg-green-400 hover:bg-green-500 text-black rounded-l-none h-full">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AM PERSONAL TRAINER. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer