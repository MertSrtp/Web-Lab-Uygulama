function App() {
  return (
    <>
      {/* Erişilebilirlik için Skip Link */}
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h1>Mert Sarıtop - Portfolyo</h1>
          <h2>Hakkimda</h2>
          <figure>
            <img src="https://via.placeholder.com/150" alt="Mert Sarıtop'un vesikalik fotografi" />
            <figcaption>Yazılım Mühendisliği Öğrencisi</figcaption>
          </figure>
          <p>Web geliştirme ve yazılım mühendisliği üzerine çalışmalar yapıyorum.</p>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Proje 1: AI Mülakat Simülasyonu</h3>
            <p>Yapay zeka destekli mülakat hazırlık sistemi.</p>
          </article>
          <article>
            <h3>Proje 2: Modüler Uzay Gemisi</h3>
            <p>Unity ile geliştirilen modüler gemi tasarım sistemi.</p>
          </article>
        </section>

        {/* İletişim Bölümü */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz: </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Mert Sarıtop. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}
export default App;