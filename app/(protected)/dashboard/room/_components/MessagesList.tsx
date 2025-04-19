interface Props {
  id: string;
}

export default async function MessagesList({ id }: Props) {
  const messages = await fetchMessages(id);
  return (
    <div className="overflow-y-auto p-4 overflow-auto">
      {messages.map(msg => (
        <div key={msg} className="bg-darkblue-2 p-4 rounded-2xl mb-4">
          <p className="text-sm">{msg}</p>
        </div>
      ))}
    </div>
  );
}

async function fetchMessages(roomId: string): Promise<string[]> {
  // Simula una llamada a una API externa
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        `Mensaje 1 de la sala ${roomId}`,
        `Mensaje 2 de la sala ${roomId}`,
        `¡Bienvenido a la sala ${roomId}!`,
        `Mensaje importante para ${roomId}`,
        `Notificación de la sala ${roomId}`,
        `Actualizaciones para ${roomId}`,
        `Anuncio especial - sala ${roomId}`,
        `Recordatorio para miembros de ${roomId}`,
        `Evento próximo en sala ${roomId}`,
        `Novedades de la sala ${roomId}`,
        `Información importante - ${roomId}`,
        `Mensaje del administrador - ${roomId}`,
        `Actualización de estado - sala ${roomId}`,
        `Mensaje destacado en ${roomId}`,
        `Noticia urgente - sala ${roomId}`,
        `Comunicado oficial - ${roomId}`,
        `Última hora - sala ${roomId}`,
        `Mensaje del sistema - ${roomId}`,
        `Actualización semanal - ${roomId}`,
        `Aviso importante - sala ${roomId}`,
        `Chat general - sala ${roomId}`,
        `Mensaje del día - ${roomId}`,
        `Recordatorio de reunión - ${roomId}`,
        `Mensaje de bienvenida - sala ${roomId}`,
        `Anuncio de evento - ${roomId}`,
        `Notificación de actividad - ${roomId}`,
        `Mensaje de seguimiento - ${roomId}`,
        `Actualización de seguridad - ${roomId}`,
        `Mensaje de alerta - ${roomId}`,
        `Notificación de cambio - ${roomId}`,
        `Mensaje de cierre - ${roomId}`,
        `Mensaje de despedida - ${roomId}`,
        `Mensaje de agradecimiento - ${roomId}`,
        `Mensaje de cumpleaños - ${roomId}`,
      ]);
    }, 1000);
  });
}
