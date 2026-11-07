/**
 * @param {{ title?: string, children: import('react').ReactNode, className?: string }} props
 */
export default function Card({ title, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}>
      {title && <h2 className="mb-4 text-lg font-semibold text-slate-900">{title}</h2>}
      {children}
    </section>
  )
}
