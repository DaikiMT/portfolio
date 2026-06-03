<script setup lang="ts">
import { ArrowUpRight, MapPin, Radio } from "@lucide/vue";
import { links, profile } from "@/data/portfolio";
import Badge from "@/components/ui/Badge.vue";
import Button from "@/components/ui/Button.vue";
</script>

<template>
  <section
    id="home"
    class="relative overflow-hidden bg-background py-14 sm:py-20 lg:min-h-[calc(100vh-4rem)] lg:py-24"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.28),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.22),transparent_28%),linear-gradient(135deg,rgba(255,209,102,0.06),transparent_38%)]"
    />
    <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />

    <div class="section-shell relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
      <div class="animate-rise space-y-8">
        <div class="flex flex-wrap gap-3">
          <Badge class="border-accent/40 text-accent">
            <MapPin class="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            {{ profile.location }}
          </Badge>
          <Badge class="border-primary/40 text-primary">
            <Radio class="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            {{ profile.availability }}
          </Badge>
        </div>

        <div class="space-y-2 leading-none">
          <p class="text-xs font-black uppercase tracking-[0.5em] text-muted-foreground sm:text-sm">
            {{ profile.name }}
          </p>
          <h1
            class="text-[17vw] font-black uppercase tracking-[-0.09em] text-foreground sm:text-[7.5rem] lg:text-[8.8rem]"
          >
            Junior
          </h1>
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
            <span
              class="text-[13vw] font-black uppercase tracking-[-0.08em] text-primary sm:text-[5.8rem] lg:text-[6.7rem]"
            >
              Full-Stack
            </span>
            <span
              class="text-[13vw] font-black uppercase tracking-[-0.08em] text-accent sm:text-[5.8rem] lg:text-[6.7rem]"
            >
              Developer
            </span>
          </div>
        </div>

        <p class="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          {{ profile.intro }}
        </p>

        <div class="flex flex-col gap-3 sm:flex-row">
          <Button :href="`mailto:${links.email}`">
            Email me
            <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            :href="links.github"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            :href="links.linkedin"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </div>
      </div>

      <aside
        class="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur"
      >
        <p class="text-xs font-black uppercase tracking-[0.4em] text-accent">Current focus</p>
        <div class="mt-10 space-y-6">
          <div>
            <p class="text-5xl font-black tracking-[-0.08em] text-foreground sm:text-7xl">Vue</p>
            <p class="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Frontend interfaces
            </p>
          </div>
          <div class="border-t border-white/10 pt-6">
            <p class="text-5xl font-black tracking-[-0.08em] text-foreground sm:text-7xl">
              FastAPI
            </p>
            <p class="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Backend foundations
            </p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
