<script setup lang="ts">
import { profile } from "@/data/portfolio";
import Card from "@/components/ui/Card.vue";
</script>

<template>
  <section id="about" class="section-divider bg-background py-20 sm:py-28">
    <div class="section-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
      <div>
        <p class="text-xs font-black uppercase tracking-[0.45em] text-primary">About</p>
        <h2 class="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-6xl">
          Building practical software while sharpening judgment.
        </h2>
      </div>
      <Card class="bg-white/[0.03] p-7 sm:p-10">
        <p class="text-xl leading-9 text-muted-foreground">
          {{ profile.about }}
        </p>
      </Card>
    </div>
  </section>
</template>
