import { useState, useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
//  COMMAND REGISTRY
//  Add new commands here. Return a string (shown as output) or null (clears).
// ─────────────────────────────────────────────────────────────────────────────
const COMMANDS = {
  help: `Available commands:

  NAVIGATE ───────────────────────────
  ls              List files in current dir
  cd <dir>        Change directory
  pwd             Print working dir
  cat <file>      Read a file

  BASICS ─────────────────────────────
  whoami          About me
  skills          Tech stack
  experience      Work history
  projects        Side projects
  contact         Get in touch

  JUST FOR FUN ───────────────────────
  f1              🏎️  For motorsport fans
  cricket         🏏 The gentleman's game
  git log         Recent "commits"
  neofetch        System info
  ping            ping google.com
  sudo            sudo [anything]
  echo $VIBES     Check the vibes

  ✨ MAGIC ────────────────────────────
  [try a spell...]

  history         Command history
  clear           Clear terminal

  TIPS: Tab to autocomplete · ↑/↓ for history · ⤢ to go fullscreen`,

  whoami: `Saumay Khandelwal
SWE-III @ Google (Nest) · Mountain View, CA
Ex-Uber | Ex-Upstox | Ex-Sabre
VIT Vellore '19 (CGPA 9.35) · ERC'18: 2nd in Asia, 18th worldwide

"Building things that scale, and occasionally break in interesting ways."`,

  skills: `Languages:   Java · Go · Python
Systems:     Distributed Systems · Microservices · Kafka · GCP
Databases:   SQL / NoSQL (and reads their source code for fun)
AI/ML:       LLM Agents · Fine-tuning · Prompt Engineering`,

  experience: `💼 Work history:

  Google (Nest)   Nov 2023 – Present
  ├ SWE-III
  ├ On-demand virtual device infrastructure
  └ LLM-contract integration-testing framework

  Uber            Nov 2022 – Nov 2023
  ├ SDE-2 · Growth & Marketing Platform
  └ Multi-tenant subscription, notification & anomaly detection
    on the ad-ingestion pipeline

  Upstox          April 2021 – Nov 2022
  ├ Senior SWE · Customer Acquisition & Platform
  ├ Automated Demat onboarding (regulatory + government integrations)
  └ Rebuilt profile / onboarding / notification services for scale

  Sabre           Jan 2019 – April 2021
  ├ Intern → Associate SWE → Contributor SWE
  ├ Lifted PNR services (Frequent Flyer, Display, Commit) off mainframe
  ├ Replaced MQ with Kafka; SSO via LDAP
  └ Winner: Sabre Hackathon + Demo Day`,

  projects: `🚀 Projects:

  🤖 European Rover Challenge '18   [Programming Lead, team of 7]
     Autonomous Mars rover. In-house ML object detection & avoidance,
     robotic arm simulator, remote controller.
     → 2nd in Asia, 18th worldwide (out of 65 teams).
     (Yes, an actual Mars rover. Yes, really.)

  👁️  Sabrina                        [Tech Lead]
     Voice navigation device for the visually impaired.
     Camera + ultrasonic sensors + real-time ML on-device.

  Tip: cd projects/ then ls to poke around.`,

  contact: `📬 Get in touch:

  Email     khandelwalsaumay@gmail.com
  LinkedIn  linkedin.com/in/saumay-khandelwal1997
  GitHub    github.com/Saumay

  Response time: faster than a Verstappen pit stop. 🏎️`,

  // ── F1 ─────────────────────────────────────────────────────────────────────
  f1: `🏎️  Formula 1 mode activated.

"To finish first, first you must finish."  - Michael Schumacher

Try: f1 --goat  |  f1 --team  |  f1 --moment  |  drs`,

  'f1 --goat': `🏆 The GOAT debate (I have opinions):

Schumacher  - 7 titles. Clinical. Ruthless. Dominant era.
Hamilton    - 7 titles. Most diverse grid in history. Longevity.
Verstappen  - Generational. The era is just getting started.

Hot take: The GOAT debate is like CAP theorem.
You can optimise for raw pace, consistency, or legacy.
You cannot have all three simultaneously.
Choose your constraints.`,

  'f1 --team': `Team allegiance: [CLASSIFIED]

// This information has been redacted for self-preservation.
// My colleagues, family members, and the general public
// would not survive the discourse.

// What I can tell you:
// - I have a strong opinion
// - It causes arguments at brunch
// - That's all you're getting`,

  'f1 --moment': `🏁 Greatest F1 moment ever (unpopular opinion incoming):

Monaco 1984. Ayrton Senna. Rain.
A rookie lapping 2–3 seconds faster than everyone else.
In the WET. At MONACO.

Then Jacky Ickx red-flagged it.
Senna was robbed of what would have been his first win.

The universe has a truly cruel sense of humour.`,

  drs: `🔓 DRS ENABLED

Drag Reduction System activated on the main straight.
+∞ km/h. Overtake incoming.

In distributed systems terms:
DRS ≈ temporarily relaxing consistency guarantees
      to gain throughput on the critical path.

Make of that what you will.`,

  // ── Cricket ────────────────────────────────────────────────────────────────
  cricket: `🏏 Cricket mode activated.

"Cricket is a game of glorious uncertainties."

Favourite format: Test cricket. Obviously.
Five days. A deteriorating pitch. A spinner
becoming increasingly unplayable. Perfection.

Try: cricket --goat  |  cricket --india  |  duckworth-lewis`,

  'cricket --goat': `🐐 The GOAT debate:

Sachin Tendulkar - The God. 100 international centuries.
                   Played when pitches were pitches.
                   No DRS. No T20 dilution. Just greatness.

Virat Kohli      - Chases everything. Made impossible look routine.
                   The modern benchmark.

Brian Lara       - 400* in Tests. Pure art. Caribbean flair.

My take: Sachin. Non-negotiable.
(I will not be taking questions at this time.)`,

  'cricket --india': `🇮🇳 India cricket timeline of emotions:

1983  World Cup win → cricket became a religion
2011  World Cup → Dhoni's six. Enough said.
2013  ICC Champions Trophy → Kohli era begins
2023  WTC Champions → dominant, measured, finally
2024  T20 World Cup → the 11-year wait ends 🏆

Every Indian engineer secretly moonlights
as a cricket commentator. I am no exception.`,

  'duckworth-lewis': `📊 Duckworth-Lewis-Stern Method

The DLS method is a statistical tool used in
limited-overs cricket to recalculate targets
when matches are interrupted by rain.

It works by computing "resources" (overs + wickets)
remaining for each team, then adjusting the target.

Understanding it fully requires:
  - A degree in mathematics
  - 30 years of following cricket
  - Willingness to argue about it for hours

Nobody fully understands it. Not even the umpires.
This is by design.`,

  // ── Harry Potter ───────────────────────────────────────────────────────────
  lumos: `🕯️  *tip of wand glows softly*

"Happiness can be found even in the darkest of times,
if one only remembers to turn on the light."
- Albus Dumbledore

Also applies to: dark mode portfolios.
Type 'nox' to extinguish.`,

  nox: `🌑  *light fades*

"Nox."

The terminal dims. The silence deepens.
Type 'lumos' to illuminate.`,

  'expecto patronum': `🦌  *silver light erupts from wand*

A Patronus takes the form of the thing
that gives you the most strength.

Saumay's Patronus manifests as...
a resilient distributed microservice.

It repels Dementors, cascading failures,
and poorly scoped tickets alike.`,

  'wingardium leviosa': `🪶  *swishes and flicks with perfect technique*

The card levitates...

Actually the hover animations on the cards are pretty good.
Try hovering over the Projects section. Same energy.`,

  alohomora: `🔓  *satisfying click*

Alohomora! The lock yields.

[HIDDEN FACT UNLOCKED]
Saumay can recite π to 20 decimal places:
3.14159265358979323846

He learned this for no practical reason.
He regrets nothing.`,

  'avada kedavra': `⚡  ...

Error: Unforgivable Curse blocked.
This terminal is protected by ancient magic
(and a solid error boundary).

Lily Potter's protection: active.
No dark magic beyond this point.`,

  expelliarmus: `⚡  Expelliarmus!

Your keyboard flies out of your hands.

...

You retrieve it from across the room.
The terminal waits patiently.`,

  'riddikulus': `🤡  Riddikulus!

The terrifying production incident transforms into...
a tiny bug that was fixed in 3 lines of code.

Laughter is the best defence.
Against boggarts and on-call alerts.`,

'i solemnly swear that i am up to no good': `🗺️

  ✦ · · · · · · · · · · · · · · · · · · · · ✦
  ·                                           ·
  ·   M E S S R S .  M O O N Y ,             ·
  ·   W O R M T A I L ,  P A D F O O T       ·
  ·   & P R O N G S                          ·
  ·                                           ·
  ·   are proud to present                   ·
  ·                                           ·
  ·   THE PORTFOLIO OF                        ·
  ·   SAUMAY KHANDELWAL                      ·
  ·                                           ·
  ✦ · · · · · · · · · · · · · · · · · · · · ✦

Type 'mischief managed' when you're done.`,

  // ── Classics ───────────────────────────────────────────────────────────────
  'git log': `📝 commit a1b2c3d  (HEAD -> main, origin/main)
Author: Saumay Khandelwal <khandelwalsaumay@gmail.com>
Date:   Just now

    fix: finally built personal website after years of procrastinating

commit d4e5f6a
    feat(google): LLM-contract integration testing framework

commit 7g8h9i0
    feat(uber): anomaly detection on ad-ingestion pipeline

commit a9b8c7d
    feat(upstox): rebuild onboarding & notification services for scale

commit 1j2k3l4
    feat(erc'18): autonomous Mars rover → 2nd in Asia, 18th worldwide

commit 5m6n7o8
    chore(sabre): replace MQ with Kafka, lift PNR services off mainframe

commit 9p0q1r2
    init: hello world 👋`,

  neofetch: `
        ██████████
      ██  ██  ██  ██         saumay @ portfolio
    ██  ██  ██  ██  ██       ─────────────────────────
  ██  ██  ██  ██  ██  ██     Role     SWE-III @ Google
    ██  ██  ██  ██  ██       OS       macOS Sequoia
      ██  ██  ██  ██         Shell    zsh
        ██████████           Editor   whatever gets the job done
                             Uptime   7+ years in industry
                             Coffee   ☕☕☕ (critical)
                             F1       Yes
                             Cricket  Obviously
                             HP       Always`,

  'ping google.com': `PING google.com (142.250.x.x): 56 bytes of data

64 bytes: icmp_seq=0 time=0.3ms  ✓
64 bytes: icmp_seq=1 time=0.3ms  ✓
64 bytes: icmp_seq=2 time=0.3ms  ✓

--- google.com ping statistics ---
3 packets transmitted · 3 received · 0% packet loss

Fun fact: I work there.`,

  'sudo make coffee': `☕  [sudo] password for saumay: ········

Permission granted.
Initiating coffee brew sequence...

Error: /dev/kettle: no such device
       Please use physical kettle.

I run on espresso. This is non-negotiable.`,

  'sudo make me a sandwich': `🥪  [sudo] password for saumay: ········

Okay.`,

  'sudo rm -rf /': `⚠️   Nice try.

EPERM: operation not permitted, unlink '/'
This portfolio is hardened against
unnecessary destruction.

Unlike some production databases I've seen.
(We don't talk about that incident.)`,

  'echo $VIBES': `calming but technical ✨`,

  'echo hello': `hello`,
};

// Aliases (forgiving)
const ALIASES = {
  ping: 'ping google.com',
  ls: '__ls__',
  pwd: '__pwd__',
  cd: '__cd__',
  cat: '__cat__',
  history: '__history__',
};

// ─────────────────────────────────────────────────────────────────────────────
//  VIRTUAL FILESYSTEM
//  Files reference COMMANDS keys (`cmd`) or carry inline `text`.
// ─────────────────────────────────────────────────────────────────────────────
const FS = {
  type: 'dir',
  children: {
    'about.txt':       { type: 'file', cmd: 'whoami' },
    'skills.txt':      { type: 'file', cmd: 'skills' },
    'experience.log':  { type: 'file', cmd: 'experience' },
    'contact.md':      { type: 'file', cmd: 'contact' },
    'projects': {
      type: 'dir',
      children: {
        'mars-rover.txt': {
          type: 'file',
          text: `🤖 European Rover Challenge '18

Programming Lead. Team of 7.
Built an autonomous Mars rover. In-house ML for object detection
and avoidance, robotic arm simulator, remote controller.

Result: 2nd in Asia, 18th worldwide (out of 65 teams).
Location: Kielce, Poland.

The rover survived. The team's sleep schedule did not.`,
        },
        'sabrina.txt': {
          type: 'file',
          text: `👁️  Sabrina

Tech Lead. Two-person hack week.
Voice-enabled portable navigation device for the visually impaired.
Camera + ultrasonic sensors. Real-time ML object detection on-device.

Built to give back independence on the move.`,
        },
      },
    },
    'fun': {
      type: 'dir',
      children: {
        'f1.txt':       { type: 'file', cmd: 'f1' },
        'cricket.txt':  { type: 'file', cmd: 'cricket' },
        'magic.spell':  {
          type: 'file',
          text: `Try a spell:
  lumos · nox · alohomora · expelliarmus
  expecto patronum · wingardium leviosa · riddikulus
  i solemnly swear that i am up to no good`,
        },
      },
    },
  },
};

function resolveDir(cwd) {
  let node = FS;
  for (const part of cwd) {
    if (!node || node.type !== 'dir' || !node.children[part]) return null;
    node = node.children[part];
  }
  return node;
}

function pwdString(cwd) {
  return cwd.length === 0 ? '/' : '/' + cwd.join('/');
}

// ─────────────────────────────────────────────────────────────────────────────
//  Command processor
// ─────────────────────────────────────────────────────────────────────────────
const CLEAR_COMMANDS = new Set(['clear', 'obliviate', 'mischief managed']);

function processCommand(raw, ctx) {
  const input = raw.trim();
  const lower = input.toLowerCase();

  if (CLEAR_COMMANDS.has(lower)) return { type: 'clear', text: lower };

  // FS commands first (they need ctx)
  if (lower === 'ls' || lower.startsWith('ls ')) return { type: 'output', text: cmdLs(ctx) };
  if (lower === 'pwd') return { type: 'output', text: pwdString(ctx.cwd) };
  if (lower === 'cd' || lower.startsWith('cd ')) return cmdCd(input.slice(2).trim(), ctx);
  if (lower.startsWith('cat ')) return { type: 'output', text: cmdCat(input.slice(4).trim(), ctx) };
  if (lower === 'cat') return { type: 'output', text: 'usage: cat <file>' };
  if (lower === 'history') return { type: 'output', text: cmdHistory(ctx) };

  // Exact match (multi-word commands)
  if (COMMANDS[lower] !== undefined) return { type: 'output', text: COMMANDS[lower] };

  // Aliases
  if (ALIASES[lower] && COMMANDS[ALIASES[lower]] !== undefined) {
    return { type: 'output', text: COMMANDS[ALIASES[lower]] };
  }

  // accio [anything]
  if (lower.startsWith('accio ')) {
    const thing = input.slice(6);
    return {
      type: 'output',
      text: `🪄  *summoning charm*\n\nAccio ${thing}!\n*dramatic whooshing*\n\nSorry, ${thing} is beyond terminal range.\nTry summoning something simpler.`,
    };
  }

  // sudo passthrough
  if (lower.startsWith('sudo ')) {
    const sub = lower.slice(5);
    if (COMMANDS[`sudo ${sub}`]) return { type: 'output', text: COMMANDS[`sudo ${sub}`] };
    return { type: 'output', text: `[sudo] password for saumay: ········\n\nCommand '${sub}' executed with root privileges.\nNothing happened. (Or did it?)` };
  }

  return {
    type: 'output',
    text: `command not found: ${input.split(' ')[0]}\nType 'help' for available commands. Or try a spell.`,
  };
}

function cmdLs(ctx) {
  const node = resolveDir(ctx.cwd);
  if (!node) return 'ls: no such directory';
  const entries = Object.entries(node.children).sort(([a], [b]) => a.localeCompare(b));
  if (entries.length === 0) return '(empty)';
  const dirs = entries.filter(([, v]) => v.type === 'dir').map(([k]) => `${k}/`);
  const files = entries.filter(([, v]) => v.type === 'file').map(([k]) => k);
  return [...dirs, ...files].join('   ');
}

function cmdCd(arg, ctx) {
  if (arg === '' || arg === '~' || arg === '/') {
    ctx.setCwd([]);
    return { type: 'output', text: '' };
  }
  if (arg === '..') {
    ctx.setCwd(ctx.cwd.slice(0, -1));
    return { type: 'output', text: '' };
  }
  // Strip trailing slash
  const clean = arg.replace(/\/$/, '');
  // Absolute or relative? We support relative single-step + multi-step like a/b
  const parts = clean.split('/').filter(Boolean);
  let next = [...ctx.cwd];
  for (const p of parts) {
    if (p === '..') { next = next.slice(0, -1); continue; }
    const node = resolveDir(next);
    if (!node || node.type !== 'dir' || !node.children[p]) {
      return { type: 'output', text: `cd: no such directory: ${arg}` };
    }
    if (node.children[p].type !== 'dir') {
      return { type: 'output', text: `cd: not a directory: ${p}` };
    }
    next.push(p);
  }
  ctx.setCwd(next);
  return { type: 'output', text: '' };
}

function cmdCat(arg, ctx) {
  if (!arg) return 'usage: cat <file>';
  const node = resolveDir(ctx.cwd);
  if (!node || !node.children[arg]) return `cat: no such file: ${arg}`;
  const f = node.children[arg];
  if (f.type !== 'file') return `cat: ${arg}: is a directory`;
  if (f.text) return f.text;
  if (f.cmd && COMMANDS[f.cmd]) return COMMANDS[f.cmd];
  return '(empty file)';
}

function cmdHistory(ctx) {
  if (ctx.cmdHistory.length === 0) return '(no history yet)';
  return ctx.cmdHistory
    .slice()
    .reverse()
    .map((c, i) => `  ${String(i + 1).padStart(3, ' ')}  ${c}`)
    .join('\n');
}

// ─────────────────────────────────────────────────────────────────────────────
//  Tab completion
// ─────────────────────────────────────────────────────────────────────────────
const TOP_LEVEL_CMDS = [
  'help', 'whoami', 'skills', 'experience', 'projects', 'contact',
  'ls', 'pwd', 'cd', 'cat', 'history', 'clear',
  'f1', 'cricket', 'drs', 'duckworth-lewis',
  'git log', 'neofetch', 'ping', 'ping google.com',
  'sudo', 'echo $VIBES', 'echo hello',
  'lumos', 'nox', 'alohomora', 'expelliarmus', 'riddikulus',
  'expecto patronum', 'wingardium leviosa', 'avada kedavra',
  'mischief managed', 'obliviate',
  'i solemnly swear that i am up to no good',
];

function autocomplete(input, cwd) {
  const lower = input.toLowerCase();

  // Empty: list everything (limited)
  if (lower === '') return TOP_LEVEL_CMDS.slice().sort();

  // cat / cd: complete with FS entries in cwd
  const catMatch = lower.match(/^(cat|cd)\s+(.*)$/);
  if (catMatch) {
    const [, head, prefix] = catMatch;
    const node = resolveDir(cwd);
    if (!node || node.type !== 'dir') return [];
    let entries = Object.entries(node.children);
    if (head === 'cd') entries = entries.filter(([, v]) => v.type === 'dir');
    return entries
      .map(([k, v]) => (v.type === 'dir' ? `${head} ${k}/` : `${head} ${k}`))
      .filter(c => c.toLowerCase().startsWith(`${head} ${prefix}`));
  }

  // Top-level prefix
  return TOP_LEVEL_CMDS.filter(c => c.startsWith(lower)).sort();
}

function commonPrefix(strings) {
  if (strings.length === 0) return '';
  if (strings.length === 1) return strings[0];
  let prefix = strings[0];
  for (const s of strings.slice(1)) {
    while (!s.startsWith(prefix)) prefix = prefix.slice(0, -1);
    if (prefix === '') return '';
  }
  return prefix;
}

const WELCOME = [
  "Welcome to Saumay's terminal. Type 'help' to get started.",
  "Hint: try `ls`, hit Tab for completion, or cast a spell. 👀",
];

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────
export default function Terminal() {
  const [lines, setLines]           = useState([]);
  const [input, setInput]           = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx]       = useState(-1);
  const [cwd, setCwd]               = useState([]);
  const [fullscreen, setFullscreen] = useState(false);
  const outputRef = useRef(null);
  const inputRef  = useRef(null);

  // Welcome sequence on mount
  useEffect(() => {
    const timers = WELCOME.map((text, i) =>
      setTimeout(() =>
        setLines(l => [...l, { id: Date.now() + i, kind: 'system', text }]),
        i * 600
      )
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (outputRef.current)
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines]);

  // ESC exits fullscreen
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = e => { if (e.key === 'Escape') setFullscreen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [fullscreen]);

  // Re-focus input when fullscreen toggles
  useEffect(() => { inputRef.current?.focus(); }, [fullscreen]);

  const submit = (e) => {
    e.preventDefault();
    const raw = input.trim();
    if (!raw) return;

    const ctx = { cwd, setCwd, cmdHistory };
    const result = processCommand(raw, ctx);

    if (result.type === 'clear') {
      const lc = raw.toLowerCase();
      const clearMsg =
        lc === 'obliviate'
          ? '*Obliviate!*\n\nYou remember nothing. Fresh start.'
          : lc === 'mischief managed'
          ? '🗺️  Mischief managed.\n\n*The terminal clears itself.*'
          : null;
      setLines(clearMsg ? [{ id: Date.now(), kind: 'system', text: clearMsg }] : []);
    } else {
      const newLines = [{ id: Date.now(), kind: 'input', text: raw, cwd: pwdString(cwd) }];
      if (result.text !== '') {
        newLines.push({ id: Date.now() + 1, kind: 'output', text: result.text });
      }
      setLines(l => [...l, ...newLines]);
    }

    setCmdHistory(h => [raw, ...h]);
    setHistIdx(-1);
    setInput('');
  };

  const handleKey = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? '' : cmdHistory[next]);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const matches = autocomplete(input, cwd);
      if (matches.length === 0) return;
      if (matches.length === 1) {
        setInput(matches[0]);
        return;
      }
      // Multiple: try to extend to common prefix; also print options
      const prefix = commonPrefix(matches);
      if (prefix.length > input.length) setInput(prefix);
      setLines(l => [
        ...l,
        { id: Date.now(), kind: 'input', text: input, cwd: pwdString(cwd) },
        { id: Date.now() + 1, kind: 'output', text: matches.join('   ') },
      ]);
    }
  };

  const promptPath = pwdString(cwd) === '/' ? '~/saumay' : `~/saumay${pwdString(cwd)}`;

  return (
    <section id="terminal" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-tag mb-3">// Interactive</p>
        <h2 className="text-4xl font-bold mb-4">
          Poke <span className="gradient-text">around</span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl">
          Type <span className="font-mono text-accent-primary">help</span> to get started.
          Try <span className="font-mono text-accent-primary">ls</span>, hit{' '}
          <span className="font-mono text-accent-primary">Tab</span> to autocomplete,
          or just cast a spell.
        </p>

        {/* Terminal window */}
        <div
          className={`flex flex-col overflow-hidden border border-dark-border shadow-2xl shadow-black/40 cursor-text bg-dark-card ${
            fullscreen
              ? 'fixed inset-0 z-50 rounded-none'
              : 'rounded-xl'
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* macOS-style title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-dark-surface border-b border-dark-border flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="ml-3 font-mono text-xs text-slate-500 select-none flex-1">
              saumay@portfolio:{pwdString(cwd)}
            </span>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setFullscreen(v => !v); }}
              className="font-mono text-xs text-slate-500 hover:text-accent-primary px-2 py-0.5 rounded transition-colors"
              aria-label={fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              title={fullscreen ? 'Exit fullscreen (Esc)' : 'Fullscreen'}
            >
              {fullscreen ? '✕ exit' : '⤢ fullscreen'}
            </button>
          </div>

          {/* Output area */}
          <div
            ref={outputRef}
            className={`overflow-y-auto p-5 font-mono text-sm space-y-3 ${
              fullscreen ? 'flex-1 min-h-0' : 'h-80'
            }`}
          >
            {lines.map(line => (
              <div key={line.id}>
                {line.kind === 'input' && (
                  <p className="flex flex-wrap gap-2">
                    <span className="text-accent-green select-none">
                      {line.cwd && line.cwd !== '/' ? `~/saumay${line.cwd}` : '~/saumay'}
                    </span>
                    <span className="text-slate-500 select-none">$</span>
                    <span className="text-slate-200">{line.text}</span>
                  </p>
                )}
                {(line.kind === 'output' || line.kind === 'system') && (
                  <pre
                    className={`whitespace-pre-wrap leading-relaxed ${
                      line.kind === 'system' ? 'text-slate-500 italic' : 'text-slate-300'
                    }`}
                  >
                    {line.text}
                  </pre>
                )}
              </div>
            ))}
            <div className="h-1" />
          </div>

          {/* Input row */}
          <div className="border-t border-dark-border bg-dark-card px-5 py-3 flex-shrink-0">
            <form onSubmit={submit} className="flex items-center gap-2 font-mono text-sm">
              <span className="text-accent-green select-none">{promptPath}</span>
              <span className="text-slate-500 select-none">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                className="flex-1 bg-transparent text-slate-200 outline-none caret-accent-primary placeholder-slate-600"
                placeholder="enter a command..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>

        {/* Subtle hints */}
        <p className="mt-4 font-mono text-xs text-slate-600">
          Tab autocomplete &nbsp;·&nbsp; ↑ / ↓ history &nbsp;·&nbsp; Esc exits fullscreen
        </p>
      </div>
    </section>
  );
}
