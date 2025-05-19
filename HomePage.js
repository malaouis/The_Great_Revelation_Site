
import React from 'react';

export default function HomePage() {
  return (
    <main>
      <section style={{ backgroundColor: '#222', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>The Great Revelation</h1>
        <h2 style={{ fontStyle: 'italic' }}>Unveiling Humanity’s True Origin and Purpose</h2>
        <p style={{ maxWidth: '600px', margin: '2rem auto' }}>
          A groundbreaking exploration of divine truth, evolution, and the Quran’s hidden message—presented through a new lens of linguistic precision and metaphysical insight.
        </p>
        <button style={{ padding: '1rem 2rem', backgroundColor: 'orange', color: 'white', borderRadius: '8px' }}>
          Read the Revelation
        </button>
      </section>
    </main>
  );
}
