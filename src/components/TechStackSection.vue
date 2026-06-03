<script setup lang="ts">
import { stack } from "@/data/portfolio";
import Badge from "@/components/ui/Badge.vue";
</script>

<template>
  <section id="tech-stack" class="section-divider bg-muted/30 py-20 sm:py-28">
    <div class="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div>
        <p class="text-xs font-black uppercase tracking-[0.45em] text-accent">Tech Stack</p>
        <h2 class="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-6xl">
          Tools I use to practice full-stack delivery.
        </h2>
      </div>
      <div class="flex flex-wrap gap-3">
        <Badge
          v-for="item in stack"
          :key="item"
          class="border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground"
        >
          {{ item }}
        </Badge>
      </div>
    </div>
  </section>
</template>
