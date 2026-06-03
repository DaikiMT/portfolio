# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vite+ Vue TypeScript portfolio scaffold for Daiki / Adrian Melgar with a dark recruiter-focused landing page and honest placeholder projects.

**Architecture:** The app is a frontend-only single-page portfolio. Content lives in a local typed data module, while Vue section components render the page from that data so projects can later move to a database/API source with minimal UI changes.

**Tech Stack:** Vite+, Vue, TypeScript, Tailwind CSS, shadcn-vue-style UI primitives, lucide-vue-next icons, local TypeScript content data.

---

## File Structure

- `package.json`: project metadata and scripts routed through Vite+.
- `index.html`: Vite app entry shell.
- `tsconfig.json`: TypeScript compiler configuration.
- `vite.config.ts`: Vue plugin and path alias configuration.
- `components.json`: shadcn-vue configuration.
- `tailwind.config.ts`: Tailwind content paths and theme tokens.
- `postcss.config.js`: Tailwind/PostCSS wiring.
- `src/main.ts`: Vue app bootstrap.
- `src/App.vue`: page composition only.
- `src/style.css`: global theme, Tailwind layers, base layout, responsive helpers, and animations.
- `src/lib/utils.ts`: class name merge helper for shadcn-style components.
- `src/data/portfolio.ts`: typed portfolio profile, links, services, projects, and stack data.
- `src/components/ui/Button.vue`: reusable button primitive.
- `src/components/ui/Card.vue`: reusable card primitive.
- `src/components/ui/Badge.vue`: reusable badge primitive.
- `src/components/Navbar.vue`: sticky pill navigation and contact link.
- `src/components/HeroSection.vue`: oversized hero headline and primary CTAs.
- `src/components/AboutSection.vue`: recruiter-friendly about copy.
- `src/components/WhatIDoSection.vue`: service cards.
- `src/components/ProjectsSection.vue`: honest project placeholder rows.
- `src/components/TechStackSection.vue`: curated stack display.
- `src/components/FooterSection.vue`: large branded footer and contact links.

## Task 1: Initialize Vite+ Vue TypeScript Project

**Files:**
- Create: `/home/daiki/dev/portfolio/package.json`
- Create: `/home/daiki/dev/portfolio/index.html`
- Create: `/home/daiki/dev/portfolio/tsconfig.json`
- Create: `/home/daiki/dev/portfolio/vite.config.ts`
- Create: `/home/daiki/dev/portfolio/src/main.ts`
- Create: `/home/daiki/dev/portfolio/src/App.vue`
- Create: `/home/daiki/dev/portfolio/src/style.css`

- [ ] **Step 1: Install Vite+ if `vp` is missing**

Run:

```bash
command -v vp || curl -fsSL https://vite.plus | bash
```

Expected: either prints the existing `vp` path or installs Vite+ successfully.

- [ ] **Step 2: Create the Vue TypeScript project skeleton**

Run:

```bash
vp create . --template vue-ts
```

Expected: Vite+ creates a Vue TypeScript app in `/home/daiki/dev/portfolio`.

- [ ] **Step 3: Install base dependencies**

Run:

```bash
vp install
```

Expected: dependencies install and the lockfile is created.

- [ ] **Step 4: Add UI/styling dependencies**

Run:

```bash
vp add tailwindcss @tailwindcss/postcss class-variance-authority clsx tailwind-merge lucide-vue-next
```

Expected: Tailwind, class helpers, and icons are added to `package.json`.

- [ ] **Step 5: Normalize `package.json` scripts**

Ensure `/home/daiki/dev/portfolio/package.json` includes these scripts:

```json
{
  "scripts": {
    "dev": "vp dev",
    "build": "vp build",
    "preview": "vp preview",
    "check": "vp check"
  }
}
```

Expected: Vite+ commands are available through package scripts and directly through `vp`.

- [ ] **Step 6: Run initial checks**

Run:

```bash
vp check
```

Expected: check command completes without project setup errors.

- [ ] **Step 7: Commit project initialization**

Run:

```bash
git init
git add .
git commit -m "chore: initialize portfolio app"
```

Expected: initial scaffold commit is created.

## Task 2: Configure Tailwind And shadcn-Style Primitives

**Files:**
- Create: `/home/daiki/dev/portfolio/components.json`
- Create: `/home/daiki/dev/portfolio/tailwind.config.ts`
- Create: `/home/daiki/dev/portfolio/postcss.config.js`
- Create: `/home/daiki/dev/portfolio/src/lib/utils.ts`
- Create: `/home/daiki/dev/portfolio/src/components/ui/Button.vue`
- Create: `/home/daiki/dev/portfolio/src/components/ui/Card.vue`
- Create: `/home/daiki/dev/portfolio/src/components/ui/Badge.vue`
- Modify: `/home/daiki/dev/portfolio/src/style.css`
- Modify: `/home/daiki/dev/portfolio/vite.config.ts`

- [ ] **Step 1: Configure path alias in `vite.config.ts`**

Set `/home/daiki/dev/portfolio/vite.config.ts` to:

```ts
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

- [ ] **Step 2: Create shadcn config**

Create `/home/daiki/dev/portfolio/components.json`:

```json
{
  "$schema": "https://shadcn-vue.com/schema.json",
  "style": "new-york",
  "typescript": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/style.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib"
  }
}
```

- [ ] **Step 3: Create Tailwind config**

Create `/home/daiki/dev/portfolio/tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 4: Create PostCSS config**

Create `/home/daiki/dev/portfolio/postcss.config.js`:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

- [ ] **Step 5: Create class merge helper**

Create `/home/daiki/dev/portfolio/src/lib/utils.ts`:

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 6: Create Button primitive**

Create `/home/daiki/dev/portfolio/src/components/ui/Button.vue`:

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost'
    class?: string
  }>(),
  {
    variant: 'primary',
  },
)

const classes = computed(() =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
    props.variant === 'primary' && 'border-primary bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]',
    props.variant === 'secondary' && 'border-border bg-card text-foreground hover:border-primary hover:text-primary',
    props.variant === 'ghost' && 'border-transparent bg-transparent text-muted-foreground hover:text-foreground',
    props.class,
  ),
)
</script>

<template>
  <a v-if="href" :href="href" :class="classes">
    <slot />
  </a>
  <button v-else type="button" :class="classes">
    <slot />
  </button>
</template>
```

- [ ] **Step 7: Create Card primitive**

Create `/home/daiki/dev/portfolio/src/components/ui/Card.vue`:

```vue
<script setup lang="ts">
import { cn } from '@/lib/utils'

defineProps<{ class?: string }>()
</script>

<template>
  <article :class="cn('rounded-3xl border border-border bg-card p-6 text-card-foreground transition duration-200 hover:-translate-y-1 hover:border-primary/60', $props.class)">
    <slot />
  </article>
</template>
```

- [ ] **Step 8: Create Badge primitive**

Create `/home/daiki/dev/portfolio/src/components/ui/Badge.vue`:

```vue
<script setup lang="ts">
import { cn } from '@/lib/utils'

defineProps<{ class?: string }>()
</script>

<template>
  <span :class="cn('inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground', $props.class)">
    <slot />
  </span>
</template>
```

- [ ] **Step 9: Replace global styles**

Set `/home/daiki/dev/portfolio/src/style.css` to:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&display=swap');
@import 'tailwindcss';

:root {
  --background: 120 7% 5%;
  --foreground: 55 100% 94%;
  --card: 120 5% 8%;
  --card-foreground: 55 100% 94%;
  --border: 60 10% 18%;
  --muted: 120 4% 12%;
  --muted-foreground: 60 9% 70%;
  --primary: 260 100% 70%;
  --primary-foreground: 55 100% 96%;
  --accent: 174 86% 46%;
  --accent-foreground: 120 7% 5%;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

#app {
  min-height: 100vh;
}

.section-shell {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section-divider {
  border-top: 1px solid hsl(var(--border));
}

.accent-purple {
  color: hsl(var(--primary));
}

.accent-cyan {
  color: hsl(var(--accent));
}

.accent-yellow {
  color: #ffd166;
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-rise {
  animation: rise-in 700ms ease both;
}
```

- [ ] **Step 10: Verify styling setup**

Run:

```bash
vp check
```

Expected: PASS with no TypeScript, lint, or format failures.

- [ ] **Step 11: Commit styling foundation**

Run:

```bash
git add components.json tailwind.config.ts postcss.config.js vite.config.ts src
git commit -m "chore: configure portfolio styling system"
```

Expected: commit created.

## Task 3: Add Typed Portfolio Data

**Files:**
- Create: `/home/daiki/dev/portfolio/src/data/portfolio.ts`

- [ ] **Step 1: Create portfolio data module**

Create `/home/daiki/dev/portfolio/src/data/portfolio.ts`:

```ts
export type Service = {
  title: string
  description: string
  accent: 'cyan' | 'purple' | 'yellow' | 'green'
}

export type Project = {
  title: string
  status: 'In Progress' | 'Coming Soon'
  year: string
  type: string
  summary: string
  technologies: string[]
}

export const profile = {
  brand: 'Daiki',
  name: 'Adrian Melgar',
  title: 'Junior Full-Stack Developer',
  location: 'Based in Peru',
  availability: 'Available remotely',
  headline: 'JUNIOR FULL-STACK DEVELOPER',
  intro: 'Building practical web apps with Vue, Python, FastAPI, and databases.',
  about:
    'I am Adrian Melgar, a junior full-stack developer focused on building clean interfaces, useful APIs, and database-backed web applications. I am growing through hands-on projects and looking for opportunities where I can contribute, learn quickly, and ship reliable work.',
} as const

export const links = {
  email: 'adrian.melgar.t@gmail.com',
  github: 'https://github.com/DaikiMT',
  linkedin: 'https://www.linkedin.com/in/adrianmelgart/',
} as const

export const services: Service[] = [
  {
    title: 'Frontend Interfaces',
    description: 'Creating responsive Vue interfaces that are clear, accessible, and easy to use.',
    accent: 'cyan',
  },
  {
    title: 'Backend APIs',
    description: 'Building practical FastAPI services that connect frontend flows to real data.',
    accent: 'purple',
  },
  {
    title: 'Databases',
    description: 'Working with PostgreSQL and Oracle DB to model, query, and organize application data.',
    accent: 'yellow',
  },
  {
    title: 'Deployment & Tools',
    description: 'Using Git, GitHub, Vite+, and AWS foundations to support reliable delivery.',
    accent: 'green',
  },
]

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    status: 'In Progress',
    year: '2026',
    type: 'Frontend Portfolio',
    summary: 'A dark, animated portfolio scaffold for presenting my work and growth as a developer.',
    technologies: ['Vite+', 'Vue', 'TypeScript', 'shadcn'],
  },
  {
    title: 'Full-Stack Dashboard',
    status: 'Coming Soon',
    year: '2026',
    type: 'Full-Stack App',
    summary: 'A future dashboard project focused on API design, data views, and database-backed workflows.',
    technologies: ['Vue', 'FastAPI', 'PostgreSQL'],
  },
  {
    title: 'Automation Tool',
    status: 'Coming Soon',
    year: '2026',
    type: 'Developer Tooling',
    summary: 'A future utility project for automating repetitive workflows with a simple web interface.',
    technologies: ['Python', 'Vue', 'GitHub'],
  },
]

export const stack = ['Vue', 'Vite+', 'JavaScript', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Oracle DB', 'Git', 'GitHub', 'AWS'] as const
```

- [ ] **Step 2: Verify data module compiles**

Run:

```bash
vp check
```

Expected: PASS with no TypeScript errors.

- [ ] **Step 3: Commit data module**

Run:

```bash
git add src/data/portfolio.ts
git commit -m "feat: add portfolio content data"
```

Expected: commit created.

## Task 4: Build Page Sections

**Files:**
- Create: `/home/daiki/dev/portfolio/src/components/Navbar.vue`
- Create: `/home/daiki/dev/portfolio/src/components/HeroSection.vue`
- Create: `/home/daiki/dev/portfolio/src/components/AboutSection.vue`
- Create: `/home/daiki/dev/portfolio/src/components/WhatIDoSection.vue`
- Create: `/home/daiki/dev/portfolio/src/components/ProjectsSection.vue`
- Create: `/home/daiki/dev/portfolio/src/components/TechStackSection.vue`
- Create: `/home/daiki/dev/portfolio/src/components/FooterSection.vue`
- Modify: `/home/daiki/dev/portfolio/src/App.vue`

- [ ] **Step 1: Create Navbar**

Create `/home/daiki/dev/portfolio/src/components/Navbar.vue`:

```vue
<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
import { links, profile } from '@/data/portfolio'
import Button from '@/components/ui/Button.vue'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
]
</script>

<template>
  <header class="fixed left-0 right-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
    <nav class="section-shell flex h-16 items-center justify-between gap-4">
      <a href="#home" class="rounded-full border border-border px-4 py-2 text-sm font800">
        <span class="mr-2 inline-block size-3 rounded-full bg-primary" />{{ profile.brand }}
      </a>

      <div class="hidden rounded-full border border-border bg-card/80 px-2 py-2 md:flex">
        <a v-for="item in navItems" :key="item.href" :href="item.href" class="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground">
          {{ item.label }}
        </a>
      </div>

      <Button :href="`mailto:${links.email}`" variant="secondary" class="px-4 py-2">
        <Mail class="size-4" />
        Contact
      </Button>
    </nav>
  </header>
</template>
```

- [ ] **Step 2: Create HeroSection**

Create `/home/daiki/dev/portfolio/src/components/HeroSection.vue`:

```vue
<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { links, profile } from '@/data/portfolio'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section id="home" class="section-shell flex min-h-screen flex-col justify-center pb-20 pt-28">
    <div class="animate-rise mx-auto max-w-5xl text-center">
      <div class="mb-8 flex flex-wrap items-center justify-center gap-3">
        <Badge>{{ profile.location }}</Badge>
        <Badge class="border-accent text-accent">{{ profile.availability }}</Badge>
      </div>

      <p class="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-muted-foreground">
        {{ profile.name }}
      </p>

      <h1 class="text-balance text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
        <span class="accent-purple">JUNIOR</span><br />
        <span>FULL-STACK</span><br />
        <span class="accent-cyan">DEVELOPER</span>
      </h1>

      <p class="mx-auto mt-8 max-w-2xl text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
        {{ profile.intro }}
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button :href="`mailto:${links.email}`">
          <Mail class="size-4" />
          Contact Me
        </Button>
        <Button :href="links.github" variant="secondary" target="_blank">
          <Github class="size-4" />
          GitHub
        </Button>
        <Button :href="links.linkedin" variant="secondary" target="_blank">
          <Linkedin class="size-4" />
          LinkedIn
        </Button>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 3: Create AboutSection**

Create `/home/daiki/dev/portfolio/src/components/AboutSection.vue`:

```vue
<script setup lang="ts">
import { Zap } from 'lucide-vue-next'
import { profile } from '@/data/portfolio'
</script>

<template>
  <section id="about" class="section-divider py-24">
    <div class="section-shell grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
      <div>
        <p class="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-primary">About Me</p>
        <h2 class="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Building the foundation for useful, reliable web experiences.
        </h2>
        <p class="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          {{ profile.about }}
        </p>
      </div>

      <div class="rounded-full border border-border bg-card p-8 text-center">
        <Zap class="mx-auto mb-4 size-10 text-accent" />
        <p class="text-sm font-semibold text-muted-foreground">Currently focused on</p>
        <p class="mt-2 text-2xl font-bold">Vue, FastAPI, and database-backed apps</p>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 4: Create WhatIDoSection**

Create `/home/daiki/dev/portfolio/src/components/WhatIDoSection.vue`:

```vue
<script setup lang="ts">
import { Code2, Database, Rocket, PanelsTopLeft } from 'lucide-vue-next'
import { services } from '@/data/portfolio'
import Card from '@/components/ui/Card.vue'

const icons = [PanelsTopLeft, Code2, Database, Rocket]
</script>

<template>
  <section id="services" class="section-divider py-24">
    <div class="section-shell">
      <p class="mb-10 text-center text-sm font-bold uppercase tracking-[0.35em] text-primary">What I Do</p>
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card v-for="(service, index) in services" :key="service.title" class="min-h-56">
          <component :is="icons[index]" class="mb-8 size-9" :class="{
            'text-cyan-400': service.accent === 'cyan',
            'text-primary': service.accent === 'purple',
            'text-yellow-300': service.accent === 'yellow',
            'text-green-400': service.accent === 'green',
          }" />
          <h3 class="mb-4 text-xl font-bold">{{ service.title }}</h3>
          <p class="leading-7 text-muted-foreground">{{ service.description }}</p>
        </Card>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 5: Create ProjectsSection**

Create `/home/daiki/dev/portfolio/src/components/ProjectsSection.vue`:

```vue
<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { projects } from '@/data/portfolio'
import Badge from '@/components/ui/Badge.vue'
</script>

<template>
  <section id="projects" class="section-divider py-24">
    <div class="section-shell">
      <div class="mb-10 flex items-end justify-between gap-6">
        <div>
          <p class="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-primary">My Projects</p>
          <h2 class="text-4xl font-black sm:text-5xl">Project pipeline</h2>
        </div>
        <p class="hidden max-w-sm text-right text-muted-foreground md:block">
          Honest placeholders for upcoming case studies while I build the real work behind them.
        </p>
      </div>

      <div class="divide-y divide-border border-y border-border">
        <article v-for="project in projects" :key="project.title" class="group grid gap-6 py-10 transition hover:bg-card/50 md:grid-cols-[1fr_1.2fr_0.2fr] md:items-center">
          <div>
            <h3 class="text-3xl font-bold transition group-hover:text-accent">{{ project.title }}</h3>
            <p class="mt-2 text-muted-foreground">{{ project.year }} · {{ project.type }}</p>
          </div>
          <div>
            <Badge class="mb-4">{{ project.status }}</Badge>
            <p class="mb-4 leading-7 text-muted-foreground">{{ project.summary }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge v-for="technology in project.technologies" :key="technology" class="bg-transparent text-muted-foreground">
                {{ technology }}
              </Badge>
            </div>
          </div>
          <ArrowUpRight class="size-8 text-muted-foreground transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
        </article>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 6: Create TechStackSection**

Create `/home/daiki/dev/portfolio/src/components/TechStackSection.vue`:

```vue
<script setup lang="ts">
import { stack } from '@/data/portfolio'
import Badge from '@/components/ui/Badge.vue'
</script>

<template>
  <section id="stack" class="section-divider py-24">
    <div class="section-shell text-center">
      <p class="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-primary">My Tech Stack</p>
      <h2 class="mx-auto max-w-4xl text-balance text-3xl font-bold leading-tight sm:text-5xl">
        Currently building with a practical mix of frontend, backend, database, and delivery tools.
      </h2>
      <div class="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
        <Badge v-for="item in stack" :key="item" class="px-4 py-2 text-sm">
          {{ item }}
        </Badge>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 7: Create FooterSection**

Create `/home/daiki/dev/portfolio/src/components/FooterSection.vue`:

```vue
<script setup lang="ts">
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-vue-next'
import { links, profile } from '@/data/portfolio'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <footer id="contact" class="section-divider pb-8 pt-20">
    <div class="section-shell rounded-3xl border border-border bg-card p-8 sm:p-12">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <p class="text-2xl font-bold">
            Where <span class="accent-purple">learning</span>, <span class="accent-cyan">building</span>, and practical web development meet.
          </p>
          <h2 class="mt-12 break-words text-7xl font-black leading-none tracking-tighter text-foreground sm:text-8xl lg:text-9xl">
            {{ profile.brand }}
          </h2>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 class="mb-4 text-lg font-bold text-yellow-300">Explore</h3>
            <div class="grid gap-3 text-muted-foreground">
              <a href="#home" class="hover:text-foreground">Home</a>
              <a href="#about" class="hover:text-foreground">About</a>
              <a href="#projects" class="hover:text-foreground">Projects</a>
              <a href="#stack" class="hover:text-foreground">Stack</a>
            </div>
          </div>

          <div>
            <h3 class="mb-4 text-lg font-bold text-accent">Follow / Contact</h3>
            <div class="grid gap-3">
              <a :href="`mailto:${links.email}`" class="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail class="size-4" /> Email</a>
              <a :href="links.github" target="_blank" class="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><Github class="size-4" /> GitHub</a>
              <a :href="links.linkedin" target="_blank" class="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><Linkedin class="size-4" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <p class="text-sm text-muted-foreground">{{ profile.name }} © 2026 · {{ profile.location }} · {{ profile.availability }}</p>
        <Button :href="`mailto:${links.email}`" variant="secondary">
          Say Hello
          <ArrowRight class="size-4" />
        </Button>
      </div>
    </div>
  </footer>
</template>
```

- [ ] **Step 8: Compose the app**

Set `/home/daiki/dev/portfolio/src/App.vue` to:

```vue
<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import Navbar from '@/components/Navbar.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TechStackSection from '@/components/TechStackSection.vue'
import WhatIDoSection from '@/components/WhatIDoSection.vue'
</script>

<template>
  <Navbar />
  <main>
    <HeroSection />
    <AboutSection />
    <WhatIDoSection />
    <ProjectsSection />
    <TechStackSection />
  </main>
  <FooterSection />
</template>
```

- [ ] **Step 9: Verify sections compile**

Run:

```bash
vp check
```

Expected: PASS with no Vue or TypeScript errors.

- [ ] **Step 10: Commit page sections**

Run:

```bash
git add src
git commit -m "feat: build portfolio landing sections"
```

Expected: commit created.

## Task 5: Polish Responsiveness, Metadata, And Build

**Files:**
- Modify: `/home/daiki/dev/portfolio/index.html`
- Modify: `/home/daiki/dev/portfolio/src/style.css`

- [ ] **Step 1: Set HTML metadata**

Set `/home/daiki/dev/portfolio/index.html` to:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Daiki, Adrian Melgar, is a Junior Full-Stack Developer based in Peru and available remotely." />
    <meta name="theme-color" content="#0d100d" />
    <title>Daiki | Junior Full-Stack Developer</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 2: Confirm mobile behavior manually**

Run:

```bash
vp dev
```

Expected: dev server starts and prints a local URL.

Manual checks:

- At desktop width, nav, hero, cards, project rows, and footer align cleanly.
- At mobile width, nav does not overflow, hero headline wraps, cards stack, project rows stack, and footer text remains readable.
- Contact CTA opens `mailto:adrian.melgar.t@gmail.com`.
- GitHub link opens `https://github.com/DaikiMT`.
- LinkedIn link opens `https://www.linkedin.com/in/adrianmelgart/`.

- [ ] **Step 3: Run production checks**

Run:

```bash
vp check
vp build
```

Expected: both commands pass and production assets are generated.

- [ ] **Step 4: Commit polish**

Run:

```bash
git add index.html src/style.css
git commit -m "chore: polish portfolio metadata and responsive styles"
```

Expected: commit created if files changed.

## Task 6: Final Verification And README

**Files:**
- Create: `/home/daiki/dev/portfolio/README.md`

- [ ] **Step 1: Create README**

Create `/home/daiki/dev/portfolio/README.md`:

```md
# Daiki Portfolio

Professional portfolio scaffold for Adrian Melgar, also branded as Daiki.

## Stack

- Vite+
- Vue
- TypeScript
- Tailwind CSS
- shadcn-style Vue components

## Commands

```bash
vp install
vp dev
vp check
vp build
```

## Content

Portfolio copy, links, services, project placeholders, and stack labels live in:

```text
src/data/portfolio.ts
```

Projects are local data for v1. Later, they can be loaded from a database-backed API without changing the page structure.
```

- [ ] **Step 2: Run final verification**

Run:

```bash
vp check
vp build
git status --short
```

Expected:

- `vp check` passes.
- `vp build` passes.
- `git status --short` shows only intentional README changes before the final commit.

- [ ] **Step 3: Commit README and final state**

Run:

```bash
git add README.md
git commit -m "docs: document portfolio setup"
```

Expected: README commit created.

## Self-Review

- Spec coverage: The plan covers project root, Vite+, Vue, TypeScript, shadcn-style UI primitives, local typed data, all approved sections, honest placeholder projects, contact links, responsive design, and future database path.
- Placeholder scan: No task uses incomplete-marker or fill-in instructions; every code-writing step includes concrete content.
- Type consistency: `profile`, `links`, `services`, `projects`, and `stack` names are consistent across the data module and all component imports.
- Scope check: Backend, database connection, auth, contact form, real case studies, blog, and CMS remain out of scope for v1.
