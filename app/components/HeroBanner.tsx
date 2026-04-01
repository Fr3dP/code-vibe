// ============================================
// HeroBanner — fetches from Sitecore XM Cloud
// ============================================

const HERO_QUERY = `
  query {
    item(
      path: "/sitecore/content/insuro/house-of-code/Home/New Hero Banner"
      language: "en"
    ) {
      title: field(name: "Title") { value }
      subtitle: field(name: "Subtitle") { value }
      buttonText: field(name: "Button-text") { value }
    }
  }
`

async function getHeroBannerData() {
  try {
    const edgeUrl = process.env.SITECORE_EDGE_URL || ''
    const contextId = process.env.SITECORE_EDGE_CONTEXT_ID || ''
    const res = await fetch(`${edgeUrl}?sitecoreContextId=${contextId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: HERO_QUERY }),
      next: { revalidate: 60 },
    })
    const json = await res.json()
    return json?.data?.item ?? null
  } catch (err) {
    console.error('HeroBanner fetch error:', err)
    return null
  }
}

export default async function HeroBanner() {
  const data = await getHeroBannerData()

  const title      = data?.title?.value      || 'Experience architects, powering the possible.'
  const subtitle   = data?.subtitle?.value   || 'We are composable DXP specialists and your award-winning digital enablement partner.'
  const buttonText = data?.buttonText?.value || 'Get in touch'

  return (
    <section style={{ padding: '96px 64px', background: '#FFFFFF', maxWidth: '1280px', margin: '0 auto' }}>

      {/* Label */}
      <span style={{
        display: 'block',
        fontFamily: 'inherit',
        fontWeight: 500,
        fontSize: '11px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#5B5B5B',
        marginBottom: '24px',
      }}>
        Strategy · Design · Delivery
      </span>

      {/* Title */}
      <h1 style={{
        fontFamily: 'inherit',
        fontWeight: 800,
        fontSize: 'clamp(40px, 6vw, 72px)',
        lineHeight: 1,
        letterSpacing: '-0.03em',
        color: '#0E0E0E',
        marginBottom: '24px',
        maxWidth: '800px',
      }}>
        {title}
      </h1>

      {/* Subtitle */}
      <p style={{
        fontFamily: 'inherit',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: 1.7,
        color: '#5B5B5B',
        maxWidth: '560px',
        marginBottom: '40px',
      }}>
        {subtitle}
      </p>

      {/* Button */}
      <button style={{
        fontFamily: 'inherit',
        fontWeight: 500,
        fontSize: '14px',
        background: '#BC1A28',
        color: '#FFFFFF',
        border: 'none',
        padding: '14px 32px',
        borderRadius: '2px',
        cursor: 'pointer',
      }}>
        {buttonText}
      </button>

    </section>
  )
}
