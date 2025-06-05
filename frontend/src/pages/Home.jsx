export default function Home() {
  const daysTrained = 3
  const exercises = [
    { name: 'Press de banca', date: '2025-06-03' },
    { name: 'Sentadilla', date: '2025-06-02' },
    { name: 'Dominadas', date: '2025-06-01' },
  ]
  const progress = [
    { exercise: 'Press de banca', weight: '80kg' },
    { exercise: 'Sentadilla', weight: '120kg' },
    { exercise: 'Peso muerto', weight: '140kg' },
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Resumen semanal</h1>
      <p>Días entrenados esta semana: {daysTrained}</p>

      <div>
        <h2 className="font-semibold">Últimos ejercicios registrados</h2>
        <ul className="list-disc pl-5">
          {exercises.map((e) => (
            <li key={e.name}>{e.name} - {e.date}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Progreso de fuerza</h2>
        <ul className="list-disc pl-5">
          {progress.map((p) => (
            <li key={p.exercise}>{p.exercise}: {p.weight}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
