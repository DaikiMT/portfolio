<script setup lang="ts">
import { services } from "@/data/portfolio";
import Card from "@/components/ui/Card.vue";
</script>

<template>
  <section id="what-i-do" class="section-divider bg-muted/30 py-20 sm:py-28">
    <div class="section-shell">
      <div class="max-w-3xl">
        <p class="text-xs font-black uppercase tracking-[0.45em] text-accent">What I Do</p>
        <h2 class="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-6xl">
          Useful interfaces, clear APIs, and reliable data foundations.
        </h2>
      </div>

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card v-for="service in services" :key="service.id" class="min-h-64 bg-card/80">
          <p class="text-5xl font-black tracking-[-0.08em] text-primary/70">
            {{ service.id.slice(0, 2).toUpperCase() }}
          </p>
          <h3 class="mt-8 text-2xl font-black tracking-[-0.04em]">{{ service.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-muted-foreground">{{ service.description }}</p>
        </Card>
      </div>
    </div>
  </section>
</template>
