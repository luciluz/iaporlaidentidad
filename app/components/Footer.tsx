import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logos */}
          <div className="flex items-center gap-6">
            <Image
              src="/images/logo-abuelas.png"
              alt="Abuelas de Plaza de Mayo"
              width={70}
              height={35}
              className="h-8 w-auto object-contain brightness-0 invert opacity-70"
            />
            <Image
              src="/images/Logo_exactas.svg"
              alt="FCEyN - UBA"
              width={70}
              height={35}
              className="h-8 w-auto object-contain brightness-0 invert opacity-70"
            />
            <Image
              src="/images/logo-quantit.svg"
              alt="Quantit"
              width={70}
              height={35}
              className="h-6 w-auto object-contain brightness-0 invert opacity-70"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-right">
            <p className="text-white font-semibold mb-1">IA por la Identidad</p>
            <span className="text-neutral-400 text-sm select-all">
              iaporlaidentidad@gmail.com
            </span>
            <p className="text-neutral-500 text-xs mt-3">
              iaporlaidentidad.org
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-700 text-center">
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} IA por la Identidad · Abuelas de Plaza
            de Mayo · FCEyN-UBA · Quantit
          </p>
        </div>
      </div>
    </footer>
  );
}
