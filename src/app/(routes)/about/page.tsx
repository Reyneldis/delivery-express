import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Imagen de portada */}
      <div className="mb-8 flex justify-center">
        <Image
          src="/nn.jpg"
          alt="Equipo"
          width={320}
          height={180}
          className="rounded-xl shadow-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Sobre nosotros</h1>
      {/* Misión, visión y valores */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Nuestra misión</h2>
        <p className="mb-4">
          Ofrecer productos de calidad para el hogar, el cuidado personal y la
          tecnología, brindando una experiencia de compra sencilla, segura y
          satisfactoria.
        </p>
        <h2 className="text-xl font-semibold mb-2">Nuestra visión</h2>
        <p className="mb-4">
          Ser la tienda online de referencia en innovación, variedad y servicio
          al cliente en el mercado hispanohablante.
        </p>
        <h2 className="text-xl font-semibold mb-2">Nuestros valores</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Calidad y confianza</li>
          <li>Atención personalizada</li>
          <li>Innovación constante</li>
          <li>Compromiso con el cliente</li>
        </ul>
      </section>
      {/* Testimonios */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-6 text-center">Testimonios</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <p className="text-lg text-neutral-800 dark:text-neutral-100 font-medium mb-2">
              Excelente atención y productos de primera calidad. ¡Repetiré mi
              compra!
            </p>
            <span className="text-sm font-semibold text-primary mt-2">
              Ana G.
            </span>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <p className="text-lg text-neutral-800 dark:text-neutral-100 font-medium mb-2">
              La entrega fue rápida y el empaque impecable. Muy recomendados.
            </p>
            <span className="text-sm font-semibold text-primary mt-2">
              Luis M.
            </span>
          </div>
        </div>
      </section>
      {/* Botón de contacto */}
      <div className="mb-8 flex justify-center">
        <Link href="mailto:contacto@tutienda.com">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold shadow hover:bg-primary/80 transition">
            Contáctanos
          </button>
        </Link>
      </div>
      {/* Redes sociales */}
      <div className="flex justify-center space-x-6">
        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
          <svg
            className="w-6 h-6 text-muted-foreground hover:text-primary transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
          </svg>
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <svg
            className="w-6 h-6 text-muted-foreground hover:text-primary transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg>
        </Link>
        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
          <svg
            className="w-6 h-6 text-muted-foreground hover:text-primary transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
