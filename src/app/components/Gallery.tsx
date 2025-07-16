import ImageWithFallback from './ImageWithFallback';
import { IMAGES } from '../constants/images';

export default function Gallery() {

  const images = IMAGES.GALLERY;

  return (
    <section id="gallery" className="relative bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] py-12 sm:py-16 lg:py-20 overflow-hidden">
      

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6">
            Nuestro Centro
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#273851] leading-tight mb-4 sm:mb-6 px-4">
            Conocé Nuestro{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18759F] via-[#17B4BC] to-[#273851]">
              Espacio de Trabajo
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#273851]/80 max-w-3xl mx-auto leading-relaxed px-4">
            Descubrí nuestras instalaciones modernas y equipadas, diseñadas para brindarte 
            la mejor experiencia en tu proceso de recuperación.
          </p>
        </div>

        {/* Grid de imágenes optimizado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 sm:group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay con información - optimizado para móviles */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[#273851] mb-1">{image.title}</h3>
                    <p className="text-sm text-[#273851]/70">{image.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <button className="bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>

                {/* Badge de categoría */}
                <div className="absolute top-3 left-3">
                  <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#273851]">
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