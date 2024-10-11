import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center bg-[#2d2e2e] py-3">
        <Link href="/">
            <Image
                src="/logo.svg"
                width={200}
                height={43}
                alt="logo"
            />
        </Link>
    </div>
  );
}
