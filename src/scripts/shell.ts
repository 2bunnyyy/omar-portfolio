// Tiny fake shell for the contact section.

type TermData = {
  name: string;
  email: string;
  linkedin: string;
  cv: string;
  roles: string[];
  languages: string[];
  interests: string[];
  skills: string[];
  hops: string[];
};

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function initShell() {
  const out = document.getElementById('shell-out');
  const form = document.getElementById('shell-form') as HTMLFormElement | null;
  const input = document.getElementById('shell-input') as HTMLInputElement | null;
  const raw = document.getElementById('term-data')?.textContent;
  if (!out || !form || !input || !raw) return;
  const d: TermData = JSON.parse(raw);

  const history: string[] = [];
  let cursor = 0;

  const commands: Record<string, () => string> = {
    help: () =>
      [
        '<span class="t">Commandes disponibles :</span>',
        '  <span class="c">whoami</span>      qui suis-je',
        '  <span class="c">skills</span>      ma pile OSI',
        '  <span class="c">parcours</span>    traceroute de ma carrière',
        '  <span class="c">safeinbox</span>   le projet primé',
        '  <span class="c">langues</span>     langues parlées',
        '  <span class="c">hobbies</span>     hors ligne',
        '  <span class="c">contact</span>     me joindre',
        '  <span class="c">cv</span>          télécharger le CV',
        '  <span class="c">clear</span>       effacer le terminal',
      ].join('\n'),
    whoami: () => `<span class="t">${esc(d.name)}</span>\n${d.roles.map((r) => `  › ${esc(r)}`).join('\n')}`,
    skills: () => d.skills.map((s) => `  <span class="c">${esc(s.slice(0, 2))}</span>${esc(s.slice(2))}`).join('\n'),
    parcours: () => d.hops.map((h, i) => `  ${i + 1}  ${esc(h)}`).join('\n') + '\n  ' + (d.hops.length + 1) + '  <span class="a">* * * votre projet ?</span>',
    safeinbox: () =>
      '<span class="t">SafeInbox</span> — sécurité email propulsée par SafeAI.\n' +
      '  › détecte phishing, fraude et injection de prompt\n' +
      '  › modèle conçu, entraîné et exécuté à Djibouti\n' +
      '  › <span class="a">1er prix — Forum National sur l\'IA 2026</span>',
    langues: () => d.languages.join(' · '),
    hobbies: () => d.interests.join(' · '),
    contact: () =>
      `  email     <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>\n` +
      `  linkedin  <a href="${esc(d.linkedin)}" target="_blank" rel="noopener">${esc(d.linkedin.replace('https://www.', ''))}</a>`,
    cv: () => {
      const a = document.createElement('a');
      a.href = d.cv;
      a.download = '';
      a.click();
      return 'Téléchargement de <span class="c">CV-Omar-Abdillahi-Omar.pdf</span>…';
    },
    'sudo hire omar': () =>
      '[sudo] mot de passe : ********\n<span class="c">✔ Accès accordé.</span> Excellente décision.\n' +
      `Ouverture de la messagerie… → <a href="mailto:${esc(d.email)}?subject=Opportunit%C3%A9%20%E2%80%94%20via%20votre%20portfolio">${esc(d.email)}</a>`,
    sudo: () => '<span class="a">usage :</span> sudo hire omar',
    ls: () => 'cv.pdf  projets/  safeinbox/  odoo-modules/  reseaux/',
    pwd: () => '/home/omar/djibouti',
  };

  const print = (html: string) => {
    const p = document.createElement('p');
    p.innerHTML = html;
    out.appendChild(p);
    out.scrollTop = out.scrollHeight;
  };

  const run = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase().replace(/\s+/g, ' ');
    if (!cmd) return;
    history.push(cmd);
    cursor = history.length;
    print(`<span class="c">omar@djibouti:~$</span> <span class="t">${esc(cmd)}</span>`);
    if (cmd === 'clear') { out.innerHTML = ''; return; }
    const fn = commands[cmd];
    print(fn ? fn() : `commande introuvable : ${esc(cmd)} — tapez <span class="c">help</span>`);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    run(input.value);
    input.value = '';
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && cursor > 0) { input.value = history[--cursor]; e.preventDefault(); }
    if (e.key === 'ArrowDown') { cursor = Math.min(history.length, cursor + 1); input.value = history[cursor] ?? ''; }
    if (e.key === 'Tab') {
      e.preventDefault();
      const match = Object.keys(commands).find((c) => c.startsWith(input.value.toLowerCase()));
      if (match && input.value) input.value = match;
    }
  });

  document.querySelectorAll<HTMLButtonElement>('[data-cmd]').forEach((b) =>
    b.addEventListener('click', () => { run(b.dataset.cmd!); input.focus({ preventScroll: true }); }),
  );
}
