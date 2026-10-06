import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowUp, MapPin, GraduationCap, Linkedin, Menu, X, Code2, Braces, Globe, Sparkles, BrainCircuit, FolderCode, Trophy, Terminal, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import backdrop from '@/assets/developer-backdrop.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Shubham Murari — B.Tech CSE Student | Portfolio' },
    { name: 'description', content: 'Shubham Murari, B.Tech CSE student at JECRC University in Jaipur. Exploring artificial intelligence, web development, and digital productivity.' },
    { property: 'og:title', content: 'Shubham Murari — Student & Technology Enthusiast' },
    { property: 'og:description', content: 'Explore Shubham’s education, skills, and interests in technology, AI, and web development. Based in Jaipur, India.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

const sections: [string, string][] = [ ['home', 'Home'], ['about', 'About Me'], ['education', 'Education'], ['skills', 'Skills'], ['projects', 'Projects'], ['achievements', 'Achievements'], ['contact', 'Contact'] ];
const linkedin = 'https://www.linkedin.com/in/shubham-murari-a1a1b1428/';
const email = 'shubhammurari85@gmail.com';
const skills = [
  { name: 'C', category: 'Programming', glyph: 'C' },
  { name: 'Python', category: 'Programming', icon: Terminal },
  { name: 'HTML', category: 'Web technology', icon: Code2 },
  { name: 'CSS', category: 'Web technology', glyph: '#' },
  { name: 'JavaScript', category: 'Programming', glyph: 'JS' },
  { name: 'Web Development', category: 'Development', icon: Globe },
  { name: 'AI Tools', category: 'Technology', icon: Sparkles },
  { name: 'Problem Solving', category: 'Core skill', icon: BrainCircuit },
];

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-heading"><span className="section-number">{number}.</span><h2>{children}</h2></div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-20% 0px -55% 0px' });
    for (const [id] of sections) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return <>
    <header className="site-header">
      <div className="page-container header-inner">
        <a className="wordmark" href="#home" aria-label="Shubham Murari home">sm<span>.</span></a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {sections.map(([id, label]) => <a key={id} href={`#${id}`} className="nav-link" data-active={active === id} aria-current={active === id ? 'location' : undefined}>{label}</a>)}
        </nav>
        <Button variant="portfolioOutline" size="sm" asChild className="header-contact"><a href={`mailto:${email}`}>Let’s talk <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{sections.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="nav-link" data-active={active === id} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>}
    </header>

    <main>
      <section id="home" className="hero">
        <img className="hero-image" src={backdrop} alt="" width={1920} height={1024} fetchPriority="high" />
        <div className="page-container hero-inner reveal">
          <p className="eyebrow">Hello, world. I’m</p>
          <h1>Shubham<br /><span className="gradient-text">Murari.</span></h1>
          <p className="hero-role">B.Tech CSE Student <span>/</span> <span className="text-cyan">Tech Enthusiast</span></p>
          <p className="hero-description">Exploring technology. Learning by building.<br />Interested in artificial intelligence, web development,<br className="hidden sm:block" /> and making everyday life a little more productive.</p>
          <div className="hero-actions">
            <Button variant="portfolio" size="lg" asChild><a href="#contact">Get in touch <ArrowUpRight /></a></Button>
            <Button variant="portfolioOutline" size="lg" asChild><a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn</a></Button>
          </div>
          <div className="hero-details"><span><MapPin size={13} /> Jaipur, India</span><span><GraduationCap size={15} /> JECRC University</span></div>
        </div>
        <div className="page-container hero-bottom"><a href="#about"><ArrowDown size={14} /> SCROLL TO EXPLORE</a><span>LEARN. BUILD. GROW.</span></div>
      </section>

      <section id="about" className="section">
        <div className="page-container">
          <SectionHeading number="01">About me</SectionHeading>
          <div className="about-grid">
            <div><p className="about-copy">I am a <strong>B.Tech student</strong> interested in technology, artificial intelligence, web development and digital productivity. I am learning modern technologies and building practical projects.</p>
              <div className="interest-list"><span className="interest"><Cpu size={13} /> Technology</span><span className="interest">Artificial intelligence</span><span className="interest">Digital productivity</span></div>
            </div>
            <dl className="profile-facts">
              <div className="fact"><GraduationCap size={18} /><div><dt>Currently studying</dt><dd>B.Tech in Computer Science</dd></div></div>
              <div className="fact"><MapPin size={18} /><div><dt>Based in</dt><dd>Jaipur, India</dd></div></div>
              <div className="fact"><Braces size={18} /><div><dt>Interested in</dt><dd>AI & Web Development</dd></div></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="education" className="section"><div className="page-container">
        <SectionHeading number="02">Education</SectionHeading>
        <div className="education-content"><div className="education-icon"><GraduationCap size={28} /></div><div><h3>JECRC University</h3><p>Bachelor of Technology · Computer Science & Engineering</p></div><span className="education-tag">CURRENTLY PURSUING</span></div>
      </div></section>

      <section id="skills" className="section"><div className="page-container">
        <SectionHeading number="03">My toolkit</SectionHeading>
        <div className="skills-grid">{skills.map((skill) => <div className="skill-item" key={skill.name}><span className="skill-icon">{skill.icon ? <skill.icon size={24} strokeWidth={1.5} /> : skill.glyph}</span><div className="min-w-0"><h3>{skill.name}</h3><p>{skill.category}</p></div></div>)}</div>
      </div></section>

      <div className="section"><div className="page-container empty-sections">
        <section id="projects"><SectionHeading number="04">Projects</SectionHeading><div className="empty-state"><FolderCode size={27} strokeWidth={1.3} /><div><h3>A space for what’s next.</h3><p>No projects listed yet.</p></div></div></section>
        <section id="achievements"><SectionHeading number="05">Achievements</SectionHeading><div className="empty-state"><Trophy size={27} strokeWidth={1.3} /><div><h3>The journey is just beginning.</h3><p>No achievements listed yet.</p></div></div></section>
      </div></div>

      <section id="contact" className="section contact-section"><div className="page-container">
        <p className="eyebrow">06 · Contact</p><h2>Let’s <span className="gradient-text">connect.</span></h2><p>Have a question or want to talk about technology? Say hello.</p>
        <a className="contact-email" href={`mailto:${email}`}>{email} <ArrowUpRight size={22} /></a>
        <div className="contact-social"><Button variant="portfolioOutline" asChild><a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> Connect on LinkedIn <ArrowUpRight /></a></Button></div>
      </div></section>
    </main>
    <footer className="border-t border-border"><div className="page-container footer-inner"><span>© {new Date().getUTCFullYear()} Shubham Murari</span><a href="#home">Back to top <ArrowUp size={13} /></a></div></footer>
  </>;
}
