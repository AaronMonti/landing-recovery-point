import ImageWithFallback from './ImageWithFallback';
import { IMAGES } from '../constants/images';

export default function Gallery() {
  const images = IMAGES.GALLERY;

  return (
    <section id="gallery" className="bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Nuestro Centro
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#273851] mb-4 px-4">
            Conocé Nuestro{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18759F] via-[#17B4BC] to-[#273851]">
              Espacio de Trabajo
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#273851]/80 max-w-3xl mx-auto px-4">
            Descubrí nuestras instalaciones modernas y equipadas, diseñadas para brindarte la mejor experiencia en tu proceso de recuperación.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/40">
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />

                {/* Capa oscura sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Info fija al pie */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-white/90 rounded-lg p-3">
                    <h3 className="text-base font-semibold text-[#273851] mb-1">{image.title}</h3>
                    <p className="text-sm text-[#273851]/70">{image.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-[#273851]/60">Instalación</span>
                    </div>
                  </div>
                </div>

                {/* Badge arriba a la izquierda */}
                <div className="absolute top-3 left-3">
                  <div className="bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-[#273851]">
                    {image.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
