import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#download', label: 'Download' },
  { href: '#features', label: 'Features' },
  { href: '#team', label: 'Team' },
  { href: '#repo', label: 'Repo' },
];

const downloadSteps = [
  {
    title: 'Install Godot',
    description:
      'Download the latest Godot Mono build from godotengine.org. Use the .NET-compatible version for this project.',
  },
  {
    title: 'Install .NET SDK',
    description:
      'Download the .NET SDK from dotnet.microsoft.com. The project uses C# scripts and requires the SDK for build/runtime support.',
  },
  {
    title: 'Import the project',
    description:
      'Open Godot, choose Import, select project.godot from the cloned repository, and import the project folder.',
  },
  {
    title: 'Configure GameManager',
    description:
      'In Project Settings > Globals, set res://src/Services/GameManager.cs as an autoload script and enable the global variable.',
  },
];

const features = [
  {
    title: 'Movement phase',
    description:
      'Use movement points to navigate tiles and choose when to transition into battle. Strategic positioning matters.',
  },
  {
    title: 'Battle phases',
    description:
      'Combat resolves automatically based on unit stats. Player and enemy battle phases alternate for a tactical rhythm.',
  },
  {
    title: 'Experience and leveling',
    description: 'Defeat enemies to earn experience, level up, and grow stronger for the next encounter.',
  },
  {
    title: 'Save persistence',
    description:
      'Saving from the pause menu stores progress between sessions. The game loads persisted character state automatically.',
  },
  {
    title: 'Enemy AI',
    description: 'Enemies make move and attack decisions based on proximity and available actions, creating emergent challenge.',
  },
];

const teamMembers = [
  {
    name: 'Adam Pastorok',
    role: 'Product Owner',
    details: 'Product direction, scope definition, and project coordination.',
    contact: 'Apastorok@gmail.com',
  },
  {
    name: 'Tanner Gleason',
    role: 'Scrum Master',
    details:
      'Weapon class, level implementation, enemy attributes, game over state, branch coordination, code review and testing.',
  },
  {
    name: 'Ahmad Idris',
    role: 'Developer',
    details:
      'Main menu, pause menu, GameManager integration, save/load persistence, menu listeners, and code reviews.',
  },
  {
    name: 'Fong Vang',
    role: 'Developer',
    details:
      'Character attributes, battle system, leveling UI, player battle phase UI, exp UI, and testing.',
  },
  {
    name: 'Jeffrey Cohn',
    role: 'Developer',
    details:
      'Enemy AI, character base implementation, display logic, damage/healing systems, and testing.',
  },
  {
    name: 'Manas Patel',
    role: 'Developer',
    details:
      'Enemy class, movement phase, player controller, movement UI, currency system, battle stats, and debugging.',
  },
];

function App() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light', isLight);
  }, [isLight]);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">GRIDFALL</div>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button type="button" className="theme-toggle" onClick={() => setIsLight((value) => !value)}>
          {isLight ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>

      <main>
        <section className="hero split-hero">
          <div className="hero-copy">
            <p className="eyebrow">JRPG Capstone Experience</p>
            <h1>GRIDFALL: a tactical story adventure</h1>
            <p className="hero-text">
              A Godot-powered JRPG built by a focused student team. Explore the current demo setup, download guide, development roles, and future executable release.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#download">
                Download Guide
              </a>
              <a className="button button-secondary" href="#repo">
                View Repo
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="mock-screen">
              <div className="mock-screen__header">
                <span />
                <span />
                <span />
              </div>
              <div className="mock-screen__content">
                <div className="stat-panel">
                  <h2>Playable phase demo</h2>
                  <p>Movement phase, battle phase, leveling, saves, and enemy tactics are all part of the game flow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-header">
            <h2>About GRIDFALL</h2>
            <p>
              GRIDFALL is a team-built Godot JRPG featuring tactical movement, automated combat phases, persistent progression, and a strong capstone story focus.
            </p>
          </div>
          <div className="two-column">
            <article className="text-block">
              <h3>A tactical RPG system</h3>
              <p>
                The game centers on movement points, phase transitions, and status-based combat. It blends classic JRPG design with a modern Unity-style project structure in Godot.
              </p>
            </article>
            <article className="text-block">
              <h3>Team-built capstone</h3>
              <p>
                The project uses Godot 4.7 Mono with C# integration. This page is a personal website built to present the game, the dev process, and the team contributions.
              </p>
            </article>
          </div>
        </section>

        <section id="download" className="section download-section">
          <div className="section-header">
            <h2>How to download and run GRIDFALL</h2>
            <p>Follow these steps to set up Godot, import the project, and start playing the current demo level.</p>
          </div>
          <div className="download-grid">
            {downloadSteps.map((step) => (
              <article key={step.title} className="download-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="download-notice">
            <p>
              <strong>Placeholder:</strong> A downloadable executable will be added once the team completes the build.
            </p>
          </div>
        </section>

        <section id="features" className="section feature-section">
          <div className="section-header">
            <h2>Gameplay systems</h2>
            <p>GRIDFALL currently includes movement, battle phases, leveling, save persistence, and enemy AI.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section preview-section">
          <div className="section-header">
            <h2>Placeholder visuals</h2>
            <p>Future screenshots will show inventory, UI, battle screens, and menu layouts.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-card">Main Menu UI</div>
            <div className="gallery-card">Inventory Screen</div>
            <div className="gallery-card">Battle UI</div>
            <div className="gallery-card">Save / Pause Menu</div>
          </div>
        </section>

        <section id="team" className="section team-section">
          <div className="section-header">
            <h2>Meet the team</h2>
            <p>Learn who built each major system and what their responsibilities were.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.details}</p>
                {member.contact ? <p>Contact: <a href={`mailto:${member.contact}`}>{member.contact}</a></p> : null}
              </article>
            ))}
          </div>
        </section>

        <section id="repo" className="section repo-section">
          <div className="section-header">
            <h2>Project repository</h2>
            <p>Visit the main GRIDFALL repository for the full source, README, and game instructions.</p>
          </div>
          <div className="repo-card">
            <p>The repository contains the Godot project files, build instructions, and the current project documentation.</p>
            <a className="button button-primary" href="https://github.com/manasp17/gridfall-website" target="_blank" rel="noreferrer">
              Open GRIDFALL Repo
            </a>
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-panel">
            <h2>Launch the capstone</h2>
            <p>
              This landing page is designed to present the game, the download path, the team, and the technical story behind GRIDFALL.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#download">
                Download Guide
              </a>
              <a className="button button-secondary" href="#team">
                Meet the Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="connect">
        <p>GRIDFALL landing page • built by Manas Patel</p>
        <p>
          <a href="https://github.com/manasp17/gridfall-website" target="_blank" rel="noreferrer">
            Source on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
