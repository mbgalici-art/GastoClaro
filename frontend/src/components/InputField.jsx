/**
 * @param {{ label: string, name: string, type?: string, value: string,
 * onChange: (event: import('react').ChangeEvent<HTMLInputElement>) => void,
 * error?: string | null, required?: boolean }} props
 */
export default function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error = null,
  required = false,
}) {
  const inputId = name
  const errorId = `${name}-error`
  const hasError = Boolean(error)

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-slate-800 sm:text-base">
        {label}
        {required && <span className="ml-1 text-red-700" aria-hidden="true">*</span>}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        className={`block w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-600 focus:ring-2 sm:px-4 sm:py-3 ${hasError ? 'border-red-600 focus:border-red-600 focus:ring-red-600' : 'border-slate-500 focus:border-emerald-700 focus:ring-emerald-700'}`}
      />
      {hasError && <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  )
}
