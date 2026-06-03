<script setup lang="ts">
import AboutSection from "@/components/AboutSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import Navbar from "@/components/Navbar.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import TechStackSection from "@/components/TechStackSection.vue";
import WhatIDoSection from "@/components/WhatIDoSection.vue";
</script>

<template>
  <Navbar />
  <main class="min-h-screen bg-background text-foreground">
    <HeroSection />
    <AboutSection />
    <WhatIDoSection />
    <ProjectsSection />
    <TechStackSection />
  </main>
  <FooterSection />
</template>
