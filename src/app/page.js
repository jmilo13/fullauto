import Image from "next/image";
import Form from "./components/form"

export default function Home() {
  return (
    <>
      <h1 className="text-center text-2xl mb-5 font-bold">¡Participa de nuestro concurso!</h1>
      <p className="mb-5">Registrate en nuestra página en el siguiente formulario y recibe un código con el cual estarás participando por uno de nuestros grandes premios.</p>
      <Form/>
    </>
  );
}
