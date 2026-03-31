import { Button } from '@/app/components/Button'
import { Hero, H1, H2, H3, Body, Small, Label } from '@/app/components/Typography'

// Codehouse brand tokens
const C = {
  charcoal:      '#0E0E0E',
  red:           '#BC1A28',
  charcoalLight: '#5B5B5B',
  bg:            '#EEEEF5',
  white:         '#FFFFFF',
  grey:          '#CECECE',
  blueLight:     '#EEEFFD',
  mustardLight:  '#FFF8E7',
  greenLight:    '#DBFFFB',
}

export default function Home() {
  return (
    <main style={{ background: C.bg, minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 64px', borderBottom: `1px solid ${C.grey}`, background: C.white }}>
        <span style={{ fontWeight: 800, fontSize: '15px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.charcoal }}>
          House of <span style={{ color: C.red }}>Code</span>
        </span>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['Solutions', 'Services', 'Work', 'Resources', 'About'].map(item => (
            <a key={item} href="#" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: 500, color: C.charcoal }}>{item}</a>
          ))}
          <Button variant="red" size="sm">Contact</Button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '96px 64px', maxWidth: '1280px', margin: '0 auto' }}>
        <Label style={{ display: 'block', marginBottom: '24px' }}>Strategy · Design · Delivery</Label>
        <Hero style={{ marginBottom: '24px', maxWidth: '800px' }}>
          Experience architects,<br />
          powering the <span style={{ color: C.red }}>possible.</span>
        </Hero>
        <Body style={{ maxWidth: '560px', marginBottom: '40px' }}>
          We are composable DXP specialists and your award-winning digital enablement partner.
          We deliver personalised experiences that drive measurable business and marketing uplift.
        </Body>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary">See the difference</Button>
          <Button variant="secondary">View case studies</Button>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: '1px', background: C.grey, margin: '0 64px' }} />

      {/* SERVICES */}
      <section style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}>
        <Label style={{ display: 'block', marginBottom: '16px' }}>What we do</Label>
        <H1 style={{ marginBottom: '64px' }}>We do Strategy,<br />Design &amp; Delivery</H1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {[
            { title: 'Strategy', desc: 'We ask the right questions and help you plan for a successful product lifecycle.', bg: C.blueLight },
            { title: 'Design',   desc: 'We provide a user-centred approach to help you craft exceptional customer experiences.', bg: C.mustardLight },
            { title: 'Delivery', desc: 'We make complex engineering feel simple and help you scale smoothly.', bg: C.greenLight },
          ].map(({ title, desc, bg }) => (
            <div key={title} style={{ background: bg, padding: '40px', borderRadius: '4px' }}>
              <H3 style={{ marginBottom: '12px' }}>{title}</H3>
              <Body style={{ marginBottom: '24px' }}>{desc}</Body>
              <Button variant="ghost">View all</Button>
            </div>
          ))}
        </div>
      </section>

      {/* DARK TYPE SHOWCASE */}
      <section style={{ padding: '80px 64px', background: C.charcoal }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Label style={{ display: 'block', marginBottom: '24px', color: C.charcoalLight }}>Design system · Typography</Label>
          <H2 style={{ color: C.white, marginBottom: '48px' }}>Plus Jakarta Sans — one typeface, four weights</H2>
          {[
            { label: 'Hero / 800',  el: <Hero style={{ color: C.white, fontSize: 'clamp(28px, 4vw, 48px)' }}>Clarity, simplicity, neutrality.</Hero> },
            { label: 'H1 / 700',   el: <H1 style={{ color: C.white }}>Unlock the power of digital</H1> },
            { label: 'H2 / 700',   el: <H2 style={{ color: C.white }}>Award-winning digital enablement</H2> },
            { label: 'H3 / 500',   el: <H3 style={{ color: C.white }}>155% engagement surge — Clarion Housing</H3> },
            { label: 'Body / 300', el: <Body style={{ color: 'rgba(255,255,255,0.6)' }}>We design and deliver impactful digital solutions that drive growth and elevate user experience.</Body> },
            { label: 'Small / 400',el: <Small style={{ color: 'rgba(255,255,255,0.4)' }}>3 min read · January 2026 · Technology</Small> },
          ].map(({ label, el }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: '32px', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', minWidth: '90px', flexShrink: 0 }}>{label}</span>
              {el}
            </div>
          ))}
        </div>
      </section>

      {/* BUTTON SHOWCASE */}
      <section style={{ padding: '80px 64px', maxWidth: '1280px', margin: '0 auto' }}>
        <Label style={{ display: 'block', marginBottom: '24px' }}>Design system · Buttons</Label>
        <H2 style={{ marginBottom: '48px' }}>Button variants &amp; sizes</H2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="red">CH Red</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost link</Button>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="secondary" size="sm">Small</Button>
            <Button variant="secondary" size="md">Medium</Button>
            <Button variant="secondary" size="lg">Large</Button>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ padding: '96px 64px', background: C.red, textAlign: 'center' }}>
        <H1 style={{ color: C.white, marginBottom: '16px' }}>
          Talk to us about your challenges,<br />dreams, and ambitions
        </H1>
        <Body style={{ color: 'rgba(255,255,255,0.8)', margin: '0 auto 40px', maxWidth: '480px' }}>
          Let&apos;s build something remarkable together.
        </Body>
        <Button variant="secondary" size="lg" style={{ borderColor: C.white, color: C.white }}>
          Get in touch
        </Button>
      </section>

    </main>
  )
}
