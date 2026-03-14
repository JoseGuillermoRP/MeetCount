import './App.css';
import Boton from './componentes/Boton';
import joseLogo from './Imagenes/LogoJR.png';
import Contador from './componentes/Contador';
import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'attendance_app_v1';

function App() {
  // 1) Cargamos TODO desde localStorage (1 sola key)
  const [appData, setAppData] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return { contador: 0, evento: '' };
      }
      const parsed = JSON.parse(raw);
      return {
        contador: Number(parsed?.contador ?? 0),
        evento: String(parsed?.evento ?? ''),
      };
    } catch {
      return { contador: 0, evento: '' };
    }
  });

  const numClics = appData.contador;
  const nombreEvento = appData.evento;

  // 2) Guardamos automáticamente cada cambio
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  }, [appData]);

  // 3) Estados UI (modales)
  const [showEventModal, setShowEventModal] = useState(() => !nombreEvento.trim());
  const [showResetModal, setShowResetModal] = useState(false);

  // Input controlado del modal inicial
  const [eventoDraft, setEventoDraft] = useState(() => nombreEvento);

  // Si el usuario cambia el evento guardado, sincronizamos el draft
  useEffect(() => {
    setEventoDraft(nombreEvento);
  }, [nombreEvento]);

  // Fecha visible en UI (hoy) — memo para no recalcular en cada render
  const fechaUI = useMemo(() => {
    return new Date().toLocaleDateString('es-PE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }, []);

  // --- Lógica principal ---
  const manejarClic = () => {
    setAppData(prev => ({ ...prev, contador: prev.contador + 1 }));
  };

  // En vez de reiniciar directo: abrimos confirmación
  const solicitarReinicio = () => {
    if (numClics <= 0) return;
    setShowResetModal(true);
  };

  const confirmarReinicio = () => {
    setAppData(prev => ({ ...prev, contador: 0 }));
    setShowResetModal(false);
  };

  const cancelarReinicio = () => {
    setShowResetModal(false);
  };

  // Modal inicial: Empezar / Saltar
  const empezarConEvento = () => {
    const limpio = eventoDraft.trim().slice(0, 30); // corto y rápido
    setAppData(prev => ({ ...prev, evento: limpio }));
    setShowEventModal(false);
  };

  const saltarEvento = () => {
    setAppData(prev => ({ ...prev, evento: '' }));
    setShowEventModal(false);
  };

  const abrirEditarEvento = () => {
    setShowEventModal(true);
  };

  // WhatsApp: evento + fecha + hora + número
  const compartirEnWhatsApp = () => {
    if (numClics <= 0) return;

    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-PE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    const hora = ahora.toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const evento = nombreEvento.trim() ? nombreEvento.trim() : 'Evento (sin nombre)';

    const mensaje =
      `📌 REGISTRO DE ASISTENCIA\n\n` +
      `Evento: ${evento}\n` +
      `Asistieron: ${numClics} personas\n\n` +
      `Fecha: ${fecha}\n` +
      `Hora: ${hora}`;

    const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      {/* Header / Marca */}
      <div className="logo-contenedor">
        <img className="jose-logo" src={joseLogo} alt="Logo de Jose" />
        <h1 className="app-title">CONTADOR DE ASISTENTES</h1>
      </div>

      <div className="contenedor-principal">
        {/* Info del evento */}
<div className="card evento-barra">

        <div className="evento-top">
            <div className="evento-titulo">
             Evento: <strong>{nombreEvento.trim() ? nombreEvento : '—'}</strong>
            </div>

            <button
               className="btn-outline"
               onClick={abrirEditarEvento}
             type="button"
          >
              ✎ Cambiar
            </button>
        </div>

  <div className="evento-fecha">
    Hoy · {fechaUI}
  </div>

</div>

        {/* Contador */}
        <Contador numClics={numClics} />

        {/* Botón principal */}
        <Boton 
          texto="+1 Contar"
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
      <div className="contenedor-botones">

         {/* Acciones secundarias */}
        {numClics > 0 && (
          <Boton
            texto="Enviar por WhatsApp"
            esBotonDeClic={false}
            manejarClic={compartirEnWhatsApp}
          />
        )}

        {numClics > 0 && (
          <Boton
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={solicitarReinicio}
            className="btn-reset"
          />
        )}


        </div>
       
      </div>

      {/* MODAL INICIAL: Nombre del evento */}
      {showEventModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card">
            <h3 className="modal-title">Nombre del evento</h3>

            <input
              className="modal-input"
              value={eventoDraft}
              onChange={(e) => setEventoDraft(e.target.value)}
              placeholder="Ej: Conferencia, Taller, Culto..."
              maxLength={30}
              autoFocus
            />

            <div className="modal-actions">
              <button className="modal-btn secondary" onClick={saltarEvento} type="button">
                Saltar
              </button>
              <button className="modal-btn primary" onClick={empezarConEvento} type="button">
                Empezar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CONFIRMACIÓN: Reiniciar */}
      {showResetModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card">
            <h3 className="modal-title">¿Seguro que deseas reiniciar?</h3>
            <p className="modal-text">Esta acción no se puede deshacer.</p>

            <div className="modal-actions">
              <button className="modal-btn secondary" onClick={cancelarReinicio} type="button">
                Cancelar
              </button>
              <button className="modal-btn danger" onClick={confirmarReinicio} type="button">
                Reiniciar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;