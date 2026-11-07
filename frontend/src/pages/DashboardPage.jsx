export default function DashboardPage() {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Resumen</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Tus finanzas, más claras</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        El scaffolding está conectado al backend para autenticación. Aquí se agregarán los resúmenes, movimientos y presupuestos de la API.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {['Ingresos', 'Gastos', 'Presupuesto'].map((title) => (
          <article key={title} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-medium text-slate-600">{title}</h2>
            <p className="mt-3 text-2xl font-semibold text-slate-400">—</p>
            <p className="mt-1 text-xs text-slate-500">Pendiente de integrar</p>
          </article>
        ))}
      </div>
    </section>
  )
}
