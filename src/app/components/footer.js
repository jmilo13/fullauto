import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center text-white bg-[#2d2e2e] py-6">
        <Image className="mb-5" src="/logo-short.svg" width={100} height={100} alt="Logo simple"/>
        <div className="flex flex-col items-center">
            <h2 className="font-bold mb-3">CONTACTO</h2>
            <p>Bogotá, Colombia</p>
            <p>3004560987</p>
        </div>
    </div>
  );
}
