<script setup lang="ts">
import { projects } from "@/data/portfolio";
import Badge from "@/components/ui/Badge.vue";
import Card from "@/components/ui/Card.vue";

const statusClass = {
  in_progress: "border-accent/40 text-accent",
  coming_soon: "border-primary/40 text-primary",
};
</script>

<template>
  <section id="projects" class="section-divider bg-background py-20 sm:py-28">
    <div class="section-shell">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-2xl">
          <p class="text-xs font-black uppercase tracking-[0.45em] text-primary">Projects</p>
          <h2 class="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-6xl">
            Honest project status, no fake launches.
          </h2>
        </div>
        <p class="max-w-sm text-sm leading-7 text-muted-foreground">
          A small, transparent project list focused on current work and planned learning milestones.
        </p>
      </div>

      <div class="mt-12 space-y-4">
        <Card
          v-for="project in projects"
          :key="project.id"
          class="grid gap-6 bg-white/[0.03] sm:grid-cols-[1fr_auto] sm:items-center"
        >
          <div>
            <div class="flex flex-wrap items-center gap-3">
              <h3 class="text-2xl font-black tracking-[-0.04em]">{{ project.title }}</h3>
              <Badge :class="statusClass[project.status]">{{ project.statusLabel }}</Badge>
            </div>
            <p class="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
              {{ project.description }}
            </p>
          </div>
          <div class="flex flex-wrap gap-2 sm:max-w-72 sm:justify-end">
            <Badge
              v-for="item in project.stack"
              :key="item"
              class="bg-background/70 text-muted-foreground"
            >
              {{ item }}
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
