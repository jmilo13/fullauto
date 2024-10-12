import Image from "next/image";

export default function NotFound() {
    return <>
      <Image src="/404.svg" width={350} height={350} alt="Página no encontrada" className="mx-auto"/>
      <h1 className="text-center text-2xl">La página a la que estas tratando de acceder no existe</h1>
    </>
  }
  