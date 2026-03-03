import './styles/tokens.css';
import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        <div className="site-title">Mert Sarıtop</div>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img src="https://via.placeholder.com/200" alt="Mert Sarıtop vesikalık fotoğrafı" />
            </figure>
            <div>
              <p>Fırat Üniversitesi Yazılım Mühendisliği bölümünde eğitimime devam ediyorum. Hem oyun hem de web geliştirme süreçleriyle yakından ilgileniyorum.</p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>React</li>
                <li>TypeScript</li>
                <li>Unity</li>
                <li>CSS Grid/Flexbox</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Korsan temalı oyun uzay gemisi tasarımı" />
              <h3>Modüler Uzay Gemisi Tasarımı</h3>
              <p>Korsan temalı mobil oyun projesi için geliştirilmiş, parçaları değiştirilebilir modüler uzay gemisi altyapısı.</p>
              <ul className="skill-tags">
                <li>Unity</li>
                <li>C#</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Arduino tabanlı devre" />
              <h3>4-Bit Binary Counter</h3>
              <p>Arduino ve LED'ler kullanılarak Tinkercad üzerinde modellenmiş ve kodlanmış dijital mantık sayacı projesi.</p>
              <ul className="skill-tags">
                <li>Arduino</li>
                <li>C++</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Rock ve Metal Müzik Festival platformu mock-up" />
              <h3>Rock & Metal Konser Takvimi</h3>
              <p>Türkiyedeki rock ve metal konserlerinin listelendiği, tarihe göre filtrelenebilen etkinlik takip arayüzü.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Vite</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajiniz: </label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>
              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Mert Sarıtop. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App;