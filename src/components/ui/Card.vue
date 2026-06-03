<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{ class?: string }>();

const classes = computed(() =>
  cn(
    "rounded-3xl border border-border bg-card p-6 text-card-foreground transition duration-200 hover:-translate-y-1 hover:border-primary/60",
    props.class,
  ),
);
</script>

<template>
  <article :class="classes">
    <slot />
  </article>
</template>
