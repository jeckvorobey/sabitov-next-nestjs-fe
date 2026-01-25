<script setup lang="ts">
const { getNavigation } = useApi()
const navigationItems = await getNavigation()
</script>

<template>
  <nav class="w-full flex justify-center py-8 z-50 relative">
    <div class="nav-box px-12 py-4 flex items-center gap-12 bg-space-dark/80 backdrop-blur-sm">
      <!-- Decorative Corners -->
      <img src="~/assets/images/nav_box_corner_1.png" class="absolute -top-1 -left-1 w-2 h-2" alt="" />
      <img src="~/assets/images/nav_box_corner_2.png" class="absolute -top-1 -right-1 w-2 h-2" alt="" />
      <img src="~/assets/images/nav_box_corner_3.png" class="absolute -bottom-1 -left-1 w-2 h-2" alt="" />
      <img src="~/assets/images/nav_box_corner_4.png" class="absolute -bottom-1 -right-1 w-2 h-2" alt="" />

      <!-- Navigation Items -->
      <NuxtLink
        v-for="item in navigationItems"
        :key="item.id"
        :to="item.href"
        class="text-gray-300 hover:text-white transition-colors uppercase tracking-widest text-sm font-light relative group"
      >
        {{ item.label }}
        <span class="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.nav-box {
  border: 1px solid #5C5C5C;
}
</style>
