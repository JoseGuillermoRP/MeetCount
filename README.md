# 📊 Contador de Asistentes

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Aplicación web para registro rápido y eficiente de asistencia a eventos, reuniones y actividades.**

[Demo en vivo](#) • [Reportar Bug](https://wa.me/51TUNUMERO) • [Solicitar Feature](https://wa.me/51TUNUMERO)

</div>

---

## 🎯 Descripción

Contador de Asistentes es una Progressive Web App (PWA) diseñada para facilitar el conteo de participantes en eventos, especialmente útil para iglesias, organizaciones comunitarias, empresas y cualquier entidad que necesite llevar registro de asistencia de manera simple y efectiva.

### ✨ Características principales

- ✅ **Contador intuitivo** - Incremento/decremento rápido con botones grandes
- 📝 **Gestión de eventos** - Nombra y organiza diferentes reuniones o actividades
- 💾 **Persistencia automática** - Los datos se guardan localmente sin necesidad de internet
- 📱 **Compartir por WhatsApp** - Genera reportes formateados para compartir instantáneamente
- 🔄 **Sistema de reinicio seguro** - Confirmación antes de borrar datos
- 🎨 **Interfaz moderna** - Diseño minimalista con efectos visuales sutiles
- 📱 **Totalmente responsive** - Optimizado para móviles, tablets y desktop
- ⚡ **Rápida y ligera** - Sin dependencias pesadas, carga instantánea
- 🌙 **Tema oscuro** - Diseño elegante que reduce fatiga visual

---

## 📸 Screenshots

<div align="center">

### Vista Principal
<img width="484" height="944" alt="image" src="https://github.com/user-attachments/assets/d26ed2ef-d6f3-4dab-9d79-775afc482135" />


### Contador Activo
<img width="489" height="936" alt="image" src="https://github.com/user-attachments/assets/c6423abb-5107-4e47-81db-698b22fa26b6" />


### Modal de Evento
<img width="485" height="923" alt="image" src="https://github.com/user-attachments/assets/01885195-271b-47d6-be68-9ed021707ec6" />


### Reporte WhatsApp
<img width="460" height="467" alt="image" src="https://github.com/user-attachments/assets/7166c988-78c1-45ea-96c1-997c6cf32cae" />


</div>

> 

## 🚀 Tecnologías utilizadas

### Core
- **React 18.x** - Biblioteca de UI con Hooks
- **JavaScript ES6+** - Sintaxis moderna
- **CSS3** - Estilizado con CSS Modules y variables CSS

### Características técnicas
- **localStorage API** - Persistencia de datos en el cliente
- **React Hooks** - `useState`, `useEffect`, `useMemo`
- **Responsive Design** - Mobile-first approach
- **Sistema de Tokens CSS** - Design system escalable y mantenible
- **Web Share API** - Integración nativa con WhatsApp

### Arquitectura
- **Componentes funcionales** - Código moderno y limpio
- **Estado global con Context** - Gestión centralizada del estado
- **Modales reutilizables** - Confirmaciones y formularios consistentes
- **Sistema de eventos** - Gestión de interacciones del usuario

---

## 📦 Instalación

### Prerrequisitos

- **Node.js** >= 14.x
- **npm** >= 6.x o **yarn** >= 1.22.x

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/contador-de-asistentes.git
cd contador-de-asistentes
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Iniciar en modo desarrollo**
```bash
npm start
# o
yarn start
```

La aplicación estará disponible en `http://localhost:3000`

4. **Compilar para producción**
```bash
npm run build
# o
yarn build
```

Los archivos optimizados estarán en la carpeta `build/`

---

## 🎮 Uso

### Flujo básico

1. **Primera vez:** La app te pedirá nombrar el evento
2. **Contar asistentes:** Toca el botón `+1 Contar`
3. **Ajustar (opcional):** Cuando llegues a 3 o más, aparece el botón `-1` para corregir
4. **Compartir:** Envía el reporte por WhatsApp con fecha, hora y total de asistentes
5. **Reiniciar:** Cuando termines, reinicia el contador para el próximo evento

### Funcionalidades avanzadas

#### Cambiar nombre del evento
- Toca el botón "✎ Cambiar" junto al nombre del evento
- Útil para reutilizar la app en diferentes actividades

#### Persistencia de datos
- Los datos se guardan automáticamente
- Puedes cerrar la app y al regresar todo estará como lo dejaste

#### Decrementar contador
- Aparece solo cuando hay 3 o más asistentes
- Útil para corregir errores sin reiniciar

---

## 📂 Estructura del proyecto

```
contador-de-asistentes/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── componentes/
│   │   ├── Boton.js           # Componente de botón reutilizable
│   │   └── Contador.js         # Componente visual del contador
│   ├── hojas-de-estilos/
│   │   ├── tokens.css          # Variables de diseño (colores, espaciado)
│   │   ├── App.css             # Estilos globales
│   │   ├── Boton.css           # Estilos de botones
│   │   └── Contador.css        # Estilos del contador
│   ├── Imagenes/
│   │   └── LogoJR.png          # Logo de la aplicación
│   ├── App.js                  # Componente principal
│   ├── index.js                # Punto de entrada
│   └── index.css               # Reset CSS
├── screenshots/                # Capturas de pantalla
├── package.json
├── README.md
└── .gitignore
```

---

## ⚙️ Configuración

### Variables de diseño (tokens.css)

El proyecto usa un sistema de tokens CSS para mantener consistencia visual:

```css
/* Colores principales */
--color-primary-500: #3b82f6;
--color-danger-500: #ef4444;
--color-success-500: #25d366;

/* Espaciado */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
/* ... más tokens */
```

Puedes personalizar colores y estilos editando `src/hojas-de-estilos/tokens.css`

### Personalizar mensaje de WhatsApp

En `App.js`, busca la función `compartirEnWhatsApp()` y edita el template:

```javascript
const mensaje =
  `📌 REGISTRO DE ASISTENCIA\n\n` +
  `Evento: ${evento}\n` +
  `Asistieron: ${numClics} personas\n\n` +
  // Agrega o modifica líneas aquí
```

### Cambiar logo

Reemplaza `src/Imagenes/LogoJR.png` con tu propio logo (recomendado: 200x200px, PNG transparente)

---

## 🛠️ Desarrollo

### Scripts disponibles

```bash
# Desarrollo
npm start                 # Inicia servidor de desarrollo

# Testing
npm test                  # Ejecuta tests (cuando se implementen)

# Producción
npm run build            # Crea build optimizado
npm run build:analyze    # Analiza tamaño del bundle

# Linting (cuando se configure)
npm run lint             # Revisa código
npm run lint:fix         # Corrige errores automáticamente
```

### Agregar nuevas funcionalidades

#### Ejemplo: Agregar un nuevo modal

1. Crear estado en `App.js`:
```javascript
const [showTuModal, setShowTuModal] = useState(false);
```

2. Agregar el JSX del modal:
```jsx
{showTuModal && (
  <div className="modal-overlay">
    <div className="modal-card">
      {/* Tu contenido */}
    </div>
  </div>
)}
```

3. Los estilos ya están definidos en `App.css` (`.modal-overlay`, `.modal-card`)

---

## 🎨 Sistema de Diseño

### Paleta de colores

| Color | Variable | Hex | Uso |
|-------|----------|-----|-----|
| Primary | `--color-primary-500` | `#3b82f6` | Botón principal |
| Danger | `--color-danger-500` | `#ef4444` | Decrementar, reiniciar |
| Success | `--color-success-500` | `#25d366` | WhatsApp |
| Background | `--color-bg-900` | `#0b1026` | Fondo principal |

### Tipografía

- **Familia:** System UI (nativa del OS)
- **Pesos:** 400 (regular), 500 (medium), 600 (semibold)
- **Escala:** Hero (4.5rem) → 2XL (2.25rem) → XL (1.5rem) → MD (1rem) → SM (0.875rem)

### Espaciado

Sistema basado en múltiplos de 4px: `4px, 8px, 12px, 16px, 20px, 24px...`

---

## 🚧 Roadmap

### En desarrollo
- [ ] PWA completa con service worker
- [ ] Modo offline
- [ ] Exportar reportes a PDF
- [ ] Historial de eventos pasados
- [ ] Gráficos de asistencia

### Planeado
- [ ] Múltiples contadores simultáneos
- [ ] Sincronización en la nube (opcional)
- [ ] Categorías de asistentes (adultos, niños, etc.)
- [ ] Integración con Google Calendar
- [ ] Dark/Light mode toggle
- [ ] Soporte multiidioma (ES/EN)

### Considerando
- [ ] Autenticación de usuarios
- [ ] Dashboard de estadísticas
- [ ] Notificaciones push
- [ ] Exportar a Excel/CSV
- [ ] API REST para integración externa

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica increíble'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de estilo

- Usa nombres descriptivos en español para variables y funciones
- Mantén componentes pequeños y enfocados
- Comenta código complejo
- Sigue la estructura de carpetas existente
- Usa el sistema de tokens CSS para estilos

---

## 🐛 Reportar Problemas

¿Encontraste un bug? [Contáctame por WhatsApp](https://wa.me/51TUNUMERO) o abre un issue describiendo:

1. **Qué esperabas que pasara**
2. **Qué pasó en realidad**
3. **Pasos para reproducir el error**
4. **Navegador y versión** (Chrome 120, Safari 17, etc.)
5. **Screenshots** (si aplica)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Derechos de Autor (c) 2026 José Rojas (SoftStudio). TODOS LOS DERECHOS RESERVADOS.

El acceso a este código fuente se otorga exclusivamente con fines de visualización, evaluación técnica o auditoría. Queda estrictamente prohibida la reproducción, distribución, modificación o cualquier otro uso de este software sin el consentimiento previo y por escrito del autor.
```

---

## 👨‍💻 Autor

**José Rojas** - [@SoftStudio](https://github.com/tuusuario)


- 📧 Email: joserojasdesign92@gmail.com
- 🌐Instagram:https://www.instagram.com/joserojas.code/
---

## 🙏 Agradecimientos

- Diseñado para comunidades que necesitan herramientas simples y efectivas
- Inspirado en el feedback de coordinadores de eventos
- Desarrollado con ❤️ en Lima, Perú

---

## 💡 Casos de uso

### Iglesias
- Reuniones dominicales
- Grupos pequeños / células
- Eventos especiales
- Retiros y conferencias

### Empresas
- Capacitaciones internas
- Team buildings
- Reuniones de área
- Eventos corporativos

### Educación
- Asistencia a talleres
- Actividades extracurriculares
- Eventos estudiantiles
- Conferencias académicas

### Gimnasios y centros deportivos
- Clases grupales
- Torneos
- Membresías activas por día

---

## 🔒 Seguridad y Privacidad

- **Sin servidor:** Todos los datos se almacenan localmente en tu dispositivo
- **Sin tracking:** No se recopila ninguna información del usuario
- **Sin autenticación:** No se requiere cuenta ni login
- **Datos efímeros:** Puedes borrar todo reiniciando el contador
- **Open source:** El código es auditable y transparente

---

## 📱 Instalación como PWA (Próximamente)

Una vez implementada la funcionalidad PWA:

### En Android (Chrome)
1. Abre la app en Chrome
2. Toca el menú (⋮) → "Añadir a pantalla de inicio"
3. Confirma el nombre y listo

### En iOS (Safari)
1. Abre la app en Safari
2. Toca el botón compartir (↑)
3. "Añadir a la pantalla de inicio"
4. Confirma y listo

---

## 📞 Soporte

¿Necesitas una app personalizada para tu organización?

**Ofrezco desarrollo de soluciones web y móviles:**
- Aplicaciones web a medida
- Progressive Web Apps (PWA)
- Landing pages optimizadas
- Dashboards y paneles de control
- Integraciones con APIs
- Automatizaciones

[Contáctame por WhatsApp](https://wa.me/51969198897?text=Hola%20José%2C%20vi%20tu%20app%20de%20contador%20y%20me%20gustaría%20conversar%20sobre%20un%20proyecto) para conversar sobre tu proyecto.

---

<div align="center">

**Desarrollado por Jose Rojas** 

Hecho con ❤️ y ☕ en Lima, Perú

⭐ Si te fue útil este proyecto, considera darle una estrella en GitHub

</div>

---



**Versión:** 1.0.0  
**Última actualización:** Mayo 2026  
**Estado:** ✅ En producción y mantenimiento activo
