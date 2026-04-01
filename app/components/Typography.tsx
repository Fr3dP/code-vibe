import React from 'react'

interface TextProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const font = 'var(--font-plus-jakarta), sans-serif'

export function Hero({ children, style }: TextProps) {
  return <h1 style={{ fontFamily: font, fontWeight: 800, fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em', color: '#0E0E0E', ...style }}>{children}</h1>
}

export function H1({ children, style }: TextProps) {
  return <h1 style={{ fontFamily: font, fontWeight: 700, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0E0E0E', ...style }}>{children}</h1>
}

export function H2({ children, style }: TextProps) {
  return <h2 style={{ fontFamily: font, fontWeight: 700, fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.2, letterSpacing: '-0.01em', color: '#0E0E0E', ...style }}>{children}</h2>
}

export function H3({ children, style }: TextProps) {
  return <h3 style={{ fontFamily: font, fontWeight: 500, fontSize: '18px', lineHeight: 1.3, color: '#0E0E0E', ...style }}>{children}</h3>
}

export function Body({ children, style }: TextProps) {
  return <p style={{ fontFamily: font, fontWeight: 300, fontSize: '16px', lineHeight: 1.7, color: '#5B5B5B', ...style }}>{children}</p>
}

export function Small({ children, style }: TextProps) {
  return <p style={{ fontFamily: font, fontWeight: 400, fontSize: '13px', lineHeight: 1.6, color: '#5B5B5B', ...style }}>{children}</p>
}

export function Label({ children, style }: TextProps) {
  return <span style={{ fontFamily: font, fontWeight: 500, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B5B5B', ...style }}>{children}</span>
}

export function Link({ children, style, ...props }: TextProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a style={{ color: '#BC1A28', textDecoration: 'underline', textUnderlineOffset: '3px', ...style }} {...props}>{children}</a>
}
