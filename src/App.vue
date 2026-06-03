<script setup lang="ts">
import { Sparkles } from "lucide-vue-next";
</script>

<template>
  <main class="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
    <section
      class="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur"
    >
      <div
        class="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300"
      >
        <Sparkles class="h-5 w-5" aria-hidden="true" />
        Portfolio
      </div>
      <div class="space-y-4">
        <h1 class="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Vite, Vue, and TypeScript are ready.
        </h1>
        <p class="max-w-2xl text-lg leading-8 text-slate-300">
          This scaffold is the starting point for the portfolio app.
        </p>
      </div>
    </section>
  </main>
</template>
