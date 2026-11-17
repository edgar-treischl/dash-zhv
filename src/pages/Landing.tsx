import type { ShellAppProps } from '../types';
import './Landing.css';
import { FilePenLine, Handshake, UsersCollaboration } from 'lucide-react';

interface LandingProps extends ShellAppProps {
  onNavigate: (view: 'landing' | 'select' | 'form' | 'history' | 'view' | 'new' | 'all') => void;
}

export function Landing({ onNavigate, shellContext }: LandingProps) {
  const forceHide = import.meta.env.VITE_FORCE_HIDE_ROLE_SELECTOR === 'true';
  const useLocal = import.meta.env.VITE_USE_LOCAL_ROLE_SELECTOR === 'true';
  const showStart = !!shellContext || (!forceHide && useLocal);



  const logoLeft = new URL('../utils/assets/startchancen.png', import.meta.url).href;
  const logoRight = new URL('../utils/assets/isb_raute.png', import.meta.url).href;


  return (
    <div className="landing">
      <div className="landing-logos">
        <img
          className="landing-logo-startchancen"
          src={logoLeft}
          alt="Startchancen-Programm"
        />

        <img
          className="landing-logo-isb"
          src={logoRight}
          alt="Staatsinstitut für Schulqualität und Bildungsforschung"
        />
      </div>

      <section className="landing-benefits" aria-labelledby="landing-title" lang="de">
        <div className="landing-intro">
          <span className="landing-eyebrow">Prototyp</span>
          <h1 id="landing-title">
            Ziel- und Handlungsvereinbarungs<br />
            <span><i>App</i> </span>
          </h1>
          <div className="landing-note">
            <span className="landing-note-icon" aria-hidden="true">✓</span>
            <span>Digital. Übersichtlich. Einfach.</span>
          </div>
          {showStart ? (
            <div className="landing-actions">
              <button
                className="landing-start"
                onClick={() => onNavigate('select')}
              >
                Start
              </button>
            </div>
          ) : (
            <div className="landing-actions">
              <p className="landing-access-note">
                Die App funktioniert nur für registrierte User. Bitte registrieren Sie sich
                auf der Dash-Demo Plattform, um Einblicke in die App Entwicklung zu bekommen.
              </p>
              <a
                className="landing-start landing-portal-link"
                href="https://edgar-treischl.pages.gitlab.lrz.de/dash-demo/"
                title="Öffnet die Dash Demo in einem neuen Tab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zur Dash-Demo
                <svg className="landing-external-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          )}
        </div>

        <div className="landing-benefits-visual">
          <div className="landing-benefit">
            <div className="landing-benefit-icon landing-icon-blue">
              <FilePenLine />
            </div>
            <div className="landing-benefit-copy">
              <span className="landing-benefit-number">01 / DIGITALISIERUNG</span>
              <h2>Vereinbarungen digital erstellen</h2>
              <p>
                Ziel- und Handlungsvereinbarungen digital erstellen, überarbeiten
                und direkt einreichen.
              </p>
            </div>
          </div>

          <div className="landing-benefit">
            <div className="landing-benefit-icon landing-icon-turquoise">
              <Handshake />
            </div>
            <div className="landing-benefit-copy">
              <span className="landing-benefit-number">02 / ZUSAMMENARBEIT</span>
              <h2>Zusammenarbeit mit der Schulaufsicht</h2>
              <p>
                Mehr als ein digitales Formular: Vereinbarungen einreichen um Rückmeldungen zu erhalten, sich auszutauschen und um nächste Schritte zu planen.
              </p>
            </div>
          </div>

          <div className="landing-benefit">
            <div className="landing-benefit-icon landing-icon-lightblue">
              <UsersCollaboration />
            </div>
            <div className="landing-benefit-copy">
              <span className="landing-benefit-number">03 / VERNETZUNG</span>
              <h2>Mit anderen Schulen vernetzen</h2>
              <p>
                Schulen mit gleichen Zielen entdecken und sich vernetzen – für neue Perspektiven
                und gemeinsame Weiterentwicklung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
