import Image from "next/image";
import {
  Monitor,
  Network,
  Shield,
  HardDrive,
  Clock3,
  Headphones,
  Lock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const tecnologias = [
  "Windows Server",
  "Linux",
  "Microsoft 365",
  "Google Workspace",
  "pfSense",
  "Fortinet",
  "VPN",
  "Virtualización",
];

const servicios = [
  {
    icono: Monitor,
    titulo: "Soporte IT Empresarial",
    texto:
      "Soporte remoto y presencial, resolución de incidencias, mantenimiento preventivo y asistencia a usuarios.",
  },
  {
    icono: Network,
    titulo: "Redes e Infraestructura",
    texto:
      "Administración de redes, VPN, conectividad segura, firewalls y optimización de infraestructura.",
  },
  {
    icono: HardDrive,
    titulo: "Backups y Recuperación",
    texto:
      "Respaldos locales y en la nube, monitoreo de copias y recuperación ante incidentes.",
  },
  {
    icono: Shield,
    titulo: "Seguridad Informática",
    texto:
      "Protección de equipos, antivirus administrado, firewalls, gestión de accesos y monitoreo.",
  },
];

const razones = [
  {
    icono: Clock3,
    titulo: "Monitoreo 24/7",
    texto: "Supervisión constante de equipos y servidores.",
  },
  {
    icono: HardDrive,
    titulo: "Backups Verificados",
    texto: "Control y validación periódica de respaldos.",
  },
  {
    icono: Lock,
    titulo: "Seguridad Informática",
    texto: "Protección de infraestructura y datos críticos.",
  },
  {
    icono: Headphones,
    titulo: "Atención Personalizada",
    texto: "Soluciones adaptadas a las necesidades de cada empresa.",
  },
];

const casos = [
  "Implementación y administración de Active Directory.",
  "Administración de servidores Windows y Linux.",
  "Backups locales y en la nube.",
  "VPN para acceso remoto seguro.",
  "Virtualización de infraestructura.",
  "Monitoreo proactivo de equipos y servidores.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-slate-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="DS Informática"
              width={80}
              height={80}
              className="h-20 w-20 object-contain"
              priority
            />

            <div>
              <p className="text-lg font-bold leading-none">DS Informática</p>
              <p className="text-sm text-slate-500">
                Soporte, Infraestructura y Seguridad Informática
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#servicios" className="hover:text-blue-600">
              Servicios
            </a>
            <a href="#monitoreo" className="hover:text-blue-600">
              Monitoreo
            </a>
            <a href="#contacto" className="hover:text-blue-600">
              Contacto
            </a>
          </nav>

          <a
            href="https://wa.me/5493513101671"
            target="_blank"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 md:inline-block"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative bg-gradient-to-b from-[#dbe3ee] via-slate-50 to-white">
  <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
    <div>
      <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        Soporte IT · Servidores · Backups · Seguridad
      </p>

      <h1 className="text-5xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
        Soporte IT para empresas
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Administramos servidores, redes, backups y seguridad informática
        para mantener tu empresa operativa y protegida.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="https://wa.me/5493513101671"
          target="_blank"
          className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
        >
          Contactar por WhatsApp
        </a>

        <a
          href="#servicios"
          className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-800 hover:bg-slate-100"
        >
          Ver servicios
        </a>
      </div>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
      <Image
        src="/logo.png"
        alt="Logo DS Informática"
        width={420}
        height={420}
        className="mx-auto -mt-8 h-auto w-full max-w-[260px] object-contain"
        priority
      />

      <div className="mt-14 rounded-2xl bg-slate-50 p-5 text-center">
        <p className="font-bold text-slate-900">
          Infraestructura monitoreada
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Soporte, seguridad, redes y backups para mantener la continuidad
          operativa de tu empresa.
        </p>
      </div>
    </div>
  </div>
</section>

      <section
  id="servicios"
  className="bg-gradient-to-b from-slate-50 via-blue-50/50 to-white px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-slate-900">
        Nuestros Servicios
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>

      <p className="mt-6 text-lg text-slate-600">
        Soluciones tecnológicas pensadas para garantizar la continuidad
        operativa y la seguridad de tu empresa.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {servicios.map((servicio) => {
        const Icon = servicio.icono;

        return (
          <div
            key={servicio.titulo}
            className="rounded-3xl border border-transparent bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
              <Icon className="text-blue-600" size={24} />
            </div>

            <h3 className="text-2xl font-bold">{servicio.titulo}</h3>

            <p className="mt-4 text-slate-600">{servicio.texto}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <section className="bg-gradient-to-b from-white via-blue-50/40 to-slate-50 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-slate-900">
        Tecnologías que administramos
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>

      <p className="mt-6 text-lg text-slate-600">
              Trabajamos con plataformas y herramientas utilizadas por empresas
              para mantener su infraestructura segura, estable y eficiente.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tecnologias.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
  id="monitoreo"
  className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-300 px-6 pt-32 pb-24"
>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            ¿Por qué elegir DS Informática?
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Nos enfocamos en prevenir problemas, proteger la información y
            mantener la continuidad operativa de tu empresa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {razones.map((item) => {
            const Icon = item.icono;

            return (
              <div
                key={item.titulo}
                className="min-h-[220px] rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={24} />
                </div>

                <h3 className="text-xl font-bold">{item.titulo}</h3>
                <p className="mt-3 text-slate-600">{item.texto}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Experiencia real
              </p>

              <h2 className="text-4xl font-bold text-slate-900">
                Proyectos y trabajos habituales
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Sin exponer información sensible de nuestros clientes,
                trabajamos diariamente en tareas críticas para la operación de
                empresas.
              </p>
            </div>

            <div className="grid gap-4">
              {casos.map((caso) => (
                <div
                  key={caso}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold text-slate-800"
                >
                  ✓ {caso}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            ¿Necesitás soporte IT para tu empresa?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Coordinemos una reunión y evaluemos juntos cómo mejorar la
            estabilidad, seguridad y rendimiento de tu infraestructura
            tecnológica.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/5493513101671"
              target="_blank"
              className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="mailto:soporte@dsinformatica.ar"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              soporte@dsinformatica.ar
            </a>
          </div>

          <p className="mt-8 text-slate-400">Córdoba Capital, Argentina</p>
        </div>
      </section>

      <footer className="bg-white px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="font-bold text-slate-900">DS Informática</p>
            <p className="text-sm text-slate-500">
              Soporte · Infraestructura · Seguridad
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 DS Informática. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      <a
  href="https://wa.me/5493513101671"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contactar por WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
>
  <FaWhatsapp size={34} />
</a>
    </main>
  );
}