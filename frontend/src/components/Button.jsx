const variants = {
  primary: 'bg-emerald-800 text-white hover:bg-emerald-900 focus-visible:ring-emerald-700',
  secondary: 'border border-slate-500 bg-white text-slate-800 hover:bg-slate-100 focus-visible:ring-slate-500',
}

/**
 * @param {{ variant?: 'primary' | 'secondary', isLoading?: boolean, disabled?: boolean,
 * onClick?: (event: import('react').MouseEvent<HTMLButtonElement>) => void, children: import('react').ReactNode,
 * type?: 'button' | 'submit' | 'reset' }} props
 */
export default function Button({
  variant = 'primary',
  isLoading = false,
  disabled = false,
  onClick,
  children,
  type = 'button',
}) {
  const isDisabled = disabled || isLoading
  const selectedVariant = variants[variant] ? variant : 'primary'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={`inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto ${variants[selectedVariant]}`}
    >
      {isLoading && (
        <span
          aria-hidden="true"
          className={`size-4 animate-spin rounded-full border-2 border-current border-r-transparent ${selectedVariant === 'primary' ? 'text-white' : 'text-slate-700'}`}
        />
      )}
      <span role={isLoading ? 'status' : undefined} aria-live={isLoading ? 'polite' : undefined}>
        {isLoading ? 'Cargando...' : children}
      </span>
    </button>
  )
}
