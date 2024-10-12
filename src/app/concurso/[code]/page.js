'use client'

import Link from "next/link"
import Image from "next/image"

export default function Response({ params }) {
  let savedCode
  if(localStorage) {
    savedCode = localStorage.getItem("codeGenerated")
  }
  
  if(savedCode == params.code) {
  return <div className="text-center">
    <Image src="/ok.svg" width={200} height={200} alt="exito" className="mx-auto"/>
    <h1 className="font-bold text-xl mb-5">¡Felicitaciones!</h1>
    <p className="mb-4">Gracias por registrartte en nuestra página. Ya estas participando con el siguiente código:</p>
    <h2 className="mb-4 text-2xl text-[#4caf50]">{params.code}</h2>
    <p>Si resultas ganador o ganadora te estaremos contactando</p>
  </div>
  }
  else {
    return <div className="">
        <Image src="/error.svg" width={350} height={350} alt="error" className="mx-auto"/>
        <h1 className="text-xl text-center">Lo siento, tu codigo no es valido, por favor registrate en el siguiente <Link href={"/"}>formulario</Link></h1>
    </div>
  }

  }
  