export default function Settings() {
  const options = ['Perfil', 'Notificaciones', 'Privacidad']
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Configuración</h1>
      <ul className="list-disc pl-5">
        {options.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </div>
  )
}
