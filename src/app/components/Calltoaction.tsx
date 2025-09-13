import { Button } from '@/components/ui/button'
import React from 'react'

const Calltoaction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-400/10 to-green-600/10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          MEU OBJETIVO É O
          <span className="text-green-400"> <br /> SEU RESULTADO !</span>
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
          Junte-se a centenas de alunos com resultados reais.
        </p>
        <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold text-xl px-12 py-5 cursor-pointer">
          Comece agora
        </Button>
      </div>
    </section>
  )
}

export default Calltoaction