<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    class?: string;
  }>(),
  {
    variant: "primary",
  },
);

const classes = computed(() =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    props.variant === "primary" &&
      "border-primary bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]",
    props.variant === "secondary" &&
      "border-border bg-card text-foreground hover:border-primary hover:text-primary",
    props.variant === "ghost" &&
      "border-transparent bg-transparent text-muted-foreground hover:text-foreground",
    props.class,
  ),
);
</script>

<template>
  <a v-if="href" :href="href" :class="classes">
    <slot />
  </a>
  <button v-else type="button" :class="classes">
    <slot />
  </button>
</template>
