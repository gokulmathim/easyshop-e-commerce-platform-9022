'use client';

/**
 * PUBLIC_INTERFACE
 * Home Page: Main landing page layout adapted from Figma-derived HTML and design tokens,
 * matches the structure/visual of `screen_201-592.html`.
 */

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="header" style={{ width: "100vw", maxWidth: 1920, margin: "0 auto" }}>
        <div className="logo" style={{ background: "var(--color-card)", width: 144, height: 36, borderRadius: "var(--radius-base)", display: "inline-block" }} />
        <nav className="nav">
          <a className="nav-link active" href="#">Home</a>
          <a className="nav-link" href="#">Products</a>
          <a className="nav-link" href="#">Categories</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Contact Us</a>
        </nav>
        <div className="icons">
          <span style={{ width: 27, height: 27, background: "var(--color-card)", borderRadius: 7, display: "inline-block" }}></span>
          <span style={{ width: 27, height: 27, background: "var(--color-card)", borderRadius: 7, display: "inline-block" }}></span>
          <span style={{ width: 27, height: 27, background: "var(--color-card)", borderRadius: 7, display: "inline-block" }}></span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero" style={{ width: "100vw", maxWidth: 1920, boxSizing: "border-box" }}>
        <div style={{ maxWidth: 800 }}>
          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "var(--text-headline)",
            color: "var(--color-gray-00)",
            lineHeight: 1.05
          }}>
            Exclusive Deals of <br />Furniture Collection
          </h1>
          <div style={{
            fontSize: "var(--text-title-sm)",
            margin: "var(--space-lg) 0"
          }}>
            Explore different categories. Find the best deals.
          </div>
          <button className="btn" style={{ marginTop: "var(--space-md)" }}>
            Shop Now
          </button>
        </div>
      </section>

      {/* PRODUCT PREVIEW (SAMPLE) */}
      <main style={{maxWidth: 1200, margin: "var(--space-xxl) auto 0 auto"}}>
        <h2 className="title" style={{
          marginBottom: "var(--space-xl)",
          fontSize: "var(--text-title-md)"
        }}>Popular Products</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-lg)", justifyContent: "space-between" }}>
          {[...Array(3)].map((_, i) => (
            <div className="card" style={{ flex: "1 1 220px", minWidth: 300 }} key={i}>
              <div style={{
                height: 120,
                background: "var(--color-muted-bg)",
                borderRadius: "var(--radius-base)"
              }} title="Image placeholder"></div>
              <div style={{
                fontSize: "var(--text-title-sm)",
                marginTop: "var(--space-md)",
                marginBottom: "6px"
              }}>Sample Product {i+1}</div>
              <div style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-heading)"
              }}>
                Light single chair $145
              </div>
              <button className="btn" style={{ marginTop: "var(--space-md)" }}>Add to cart</button>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer" style={{
        maxWidth: 1920,
        margin: "var(--space-xxxl) auto 0",
        background: "var(--color-primary-200)",
        borderRadius: "var(--radius-card)"
      }}>
        <div className="footer-links" style={{
          display: "flex",
          gap: "var(--space-xl)",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}>
          <div className="footer-column">
            <div className="logo" style={{
              background: "var(--color-card)",
              width: 137,
              height: 36,
              borderRadius: "var(--radius-base)"
            }}></div>
            <div className="mt-xl" style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-heading)",
              marginTop: "1.5rem"
            }}>
              Address<br />+123 654 987<br />877 The Bronx, NY<br />14568, USA
            </div>
          </div>
          <div className="footer-column">
            <h6>My Account</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Sign in</li>
              <li>Register</li>
              <li>Order status</li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Help</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Sizing</li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Shop</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>All Products</li>
              <li>Bedroom</li>
              <li>Dinning Room</li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Legal Stuff</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Shipping & Delivery</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-xl" style={{
          textAlign: "center",
          fontSize: "var(--text-xs)",
          color: "var(--color-heading)",
          paddingTop: "var(--space-xl)"
        }}>
          Copyright ©2020 INWOOD. All Rights Reserved
        </div>
      </footer>
    </>
  );
}
