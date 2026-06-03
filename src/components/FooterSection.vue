<script setup lang="ts">
import { ArrowUpRight } from "@lucide/vue";
import { links, profile } from "@/data/portfolio";
import Button from "@/components/ui/Button.vue";
</script>

<template>
  <footer id="contact" class="section-divider bg-background py-16 sm:py-24">
    <div class="section-shell">
      <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
        <p class="text-xs font-black uppercase tracking-[0.45em] text-primary">Contact</p>
        <div class="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 class="max-w-3xl text-4xl font-black tracking-[-0.06em] sm:text-6xl">
              Let’s build something practical.
            </h2>
            <p class="mt-5 text-muted-foreground">
              {{ profile.location }} · {{ profile.availability }}
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button :href="`mailto:${links.email}`">
              {{ links.email }}
              <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              :href="links.github"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</Button
            >
            <Button
              :href="links.linkedin"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</Button
            >
          </div>
        </div>
      </div>

      <div
        class="mt-8 flex flex-col gap-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
      >
        <p>{{ profile.brand }} · {{ profile.title }}</p>
        <a href="#home" class="transition hover:text-foreground">Back to top</a>
      </div>
    </div>
  </footer>
</template>
