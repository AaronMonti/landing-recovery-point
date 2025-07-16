# Manejo de Imágenes en Recovery Point

## Configuración

### Next.js Config
El proyecto está configurado para permitir imágenes externas de Unsplash en `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'plus.unsplash.com',
      port: '',
      pathname: '/**',
    },
  ],
},
```

## Componentes

### ImageWithFallback
Componente personalizado que maneja errores de carga de imágenes:

```typescript
<ImageWithFallback
  src={IMAGES.HERO}
  alt="Descripción de la imagen"
  fill
  className="object-cover"
  priority
/>
```

### Constantes de Imágenes
Todas las URLs de imágenes están centralizadas en `src/app/constants/images.ts`:

```typescript
export const IMAGES = {
  HERO: "https://images.unsplash.com/...",
  ABOUT: "https://images.unsplash.com/...",
  GALLERY: [...],
  FALLBACK: "https://images.unsplash.com/..."
};
```

## URLs Optimizadas

### Formato de URL
Todas las URLs de Unsplash incluyen parámetros de optimización:

- `ixlib=rb-4.0.3` - Versión de la librería
- `ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` - ID de la imagen
- `auto=format` - Formato automático
- `fit=crop` - Ajuste de recorte
- `w=800&q=80` - Ancho y calidad

### Tamaños Recomendados
- **Hero**: 1350px de ancho
- **Galería**: 800px de ancho
- **About**: 1350px de ancho

## Solución de Problemas

### Imágenes no se cargan en producción
1. Verificar que `next.config.ts` incluya los dominios correctos
2. Asegurar que las URLs tengan el formato correcto con parámetros de optimización
3. Usar el componente `ImageWithFallback` para manejar errores

### Imágenes de baja calidad
1. Aumentar el parámetro `q` en la URL (ej: `q=80` a `q=90`)
2. Aumentar el parámetro `w` para imágenes más grandes
3. Usar `priority` para imágenes importantes

### Fallback automático
Si una imagen falla al cargar, el componente `ImageWithFallback` automáticamente cargará la imagen de respaldo definida en `IMAGES.FALLBACK`.

## Mejores Prácticas

1. **Siempre usar el componente `ImageWithFallback`** en lugar de `Image` directamente
2. **Centralizar URLs** en el archivo de constantes
3. **Incluir parámetros de optimización** en todas las URLs de Unsplash
4. **Usar `priority`** para imágenes above-the-fold
5. **Proporcionar `alt` descriptivos** para accesibilidad
6. **Mantener consistencia** en tamaños y formatos

## Agregar Nuevas Imágenes

1. Agregar la URL optimizada al archivo `src/app/constants/images.ts`
2. Usar el componente `ImageWithFallback` en el componente
3. Probar en desarrollo y producción
4. Verificar que la imagen se cargue correctamente 