import React from 'react'

type ButtonVariant = 'primary' | 'red' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}

const base: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontWeight: 500,
  borderRadius: '2px',
  cursor: 'pointer',
  border: 'none',
  transition: 'all 0.15s',
  letterSpacing: '0.01em',
}

const variants: Record<ButtonVariant, React.CSSProperties> = {
  primary:   { background: '#0E0E0E', color: '#ffffff' },
  red:       { background: '#BC1A28', color: '#ffffff' },
  secondary: { background: 'transparent', color: '#0E0E0E', border: '1.5px solid #0E0E0E' },
  ghost:     { background: 'transparent', color: '#BC1A28', textDecoration: 'underline', textUnderlineOffset: '4px', borderRadius: '0', paddingLeft: '0', paddingRight: '0' },
}

const sizes: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '8px 18px',  fontSize: '12px' },
  md: { padding: '12px 28px', fontSize: '14px' },
  lg: { padding: '16px 36px', fontSize: '16px' },
}

export function Button({ variant = 'primary', size = 'md', children, style, ...props }: ButtonProps) {
  return (
    <button style={{ ...base, ...variants[variant], ...sizes[size], ...style }} {...props}>
      {children}
    </button>
  )
}
