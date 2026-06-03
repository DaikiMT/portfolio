<script setup lang="ts">
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
    <nav class="section-shell flex min-h-16 items-center justify-between gap-4">
      <a href="#home" class="text-sm font-black uppercase tracking-[0.35em] text-foreground">
        {{ profile.brand }}
      </a>
      <div
        class="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground md:flex"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="transition hover:text-foreground"
        >
          {{ item.label }}
        </a>
      </div>
      <a
        href="#contact"
        class="rounded-full border border-accent/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent transition hover:bg-accent hover:text-accent-foreground"
      >
        Contact
      </a>
    </nav>
  </header>
</template>
