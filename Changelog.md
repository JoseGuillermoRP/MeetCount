# 📝 Changelog

Todos los cambios notables en este proyecto serán documentados aquí.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-05-11

### ✨ Agregado
- Sistema de contador con incremento (+1)
- Sistema de decremento (-1) que aparece a partir de 3 asistentes
- Modal para nombrar eventos
- Persistencia de datos con localStorage
- Compartir reporte por WhatsApp con formato profesional
- Botón de reiniciar con confirmación
- Modal de información con contacto
- Footer con call-to-action para generar leads
- Sistema de tokens CSS para diseño consistente
- Animaciones suaves en botones y transiciones
- Responsive design para mobile, tablet y desktop
- Efectos visuales: arco luminoso en contador
- Componentes reutilizables (Boton, Contador)

### 🎨 Diseño
- Paleta de colores oscura profesional
- Tipografía optimizada para legibilidad
- Espaciado basado en sistema de 8pt
- Bordes redondeados consistentes
- Efectos hover y active en todos los botones
- Gradientes sutiles en botón principal

### 📱 UX/UI
- Flujo de primera vez con modal de bienvenida
- Feedback visual en todas las interacciones
- Confirmación antes de acciones destructivas
- Mensajes de WhatsApp pre-formateados
- Fecha y hora en formato local (es-PE)
- Botones grandes táctiles para mobile

### 🔧 Técnico
- React 18 con Hooks (useState, useEffect, useMemo)
- localStorage para persistencia sin backend
- Estructura de componentes modular
- CSS Modules con sistema de tokens
- Optimización de re-renders con memo
- Validación de entrada de datos

### 📖 Documentación
- README completo con ejemplos
- Guía de contribución
- Licencia MIT
- Estructura del proyecto documentada
- Comentarios en código clave

---

## [Unreleased] - Próximas versiones

### Planeado para v1.1.0
- [ ] PWA completa con service worker
- [ ] Modo offline
- [ ] Instalación en home screen
- [ ] Notificaciones push (opcional)

### Planeado para v1.2.0
- [ ] Historial de eventos
- [ ] Exportar a PDF
- [ ] Gráficos de asistencia
- [ ] Filtros por fecha

### Considerando para v2.0.0
- [ ] Múltiples contadores simultáneos
- [ ] Categorías de asistentes
- [ ] Sincronización en la nube
- [ ] Dashboard de estadísticas
- [ ] API REST

---

## Tipos de cambios

- `✨ Agregado` - Nuevas funcionalidades
- `🔧 Cambiado` - Cambios en funcionalidad existente
- `⚠️ Deprecado` - Funcionalidades que serán removidas
- `🗑️ Removido` - Funcionalidades eliminadas
- `🐛 Arreglado` - Corrección de bugs
- `🔒 Seguridad` - Vulnerabilidades corregidas
- `📖 Documentación` - Cambios solo en documentación
- `🎨 Diseño` - Cambios visuales sin funcionalidad nueva

---

**Leyenda de versionado:**
- Major (X.0.0): Cambios incompatibles con versión anterior
- Minor (1.X.0): Nueva funcionalidad compatible
- Patch (1.0.X): Correcciones de bugs compatibles

---

Última actualización: Mayo 11, 2026