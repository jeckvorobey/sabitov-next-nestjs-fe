<script setup lang="ts">
const { getNavigation } = useApi()
const navigationItems = await getNavigation()

// Fallback навигация по Figma
const defaultNavItems = [
  { id: 1, label: 'Главная', href: '/' },
  { id: 2, label: 'Технология', href: '/technology' },
  { id: 3, label: 'График полетов', href: '/schedule' },
  { id: 4, label: 'Гарантии', href: '/guarantees' },
  { id: 5, label: 'О компании', href: '/about' },
  { id: 6, label: 'Контакты', href: '/contacts' },
]

const navItems = navigationItems.length > 0 ? navigationItems : defaultNavItems
</script>

<template>
  <nav class="w-full z-50 relative">
    <!-- Полноширинный фон навигации (по Figma) -->
    <div class="absolute inset-x-0 top-0 h-[100px] bg-[#150A01]/20 border-b border-[#989393]/20"></div>

    <div class="relative container mx-auto px-4 h-[100px] flex items-center justify-center">
      <!-- Navigation Items -->
      <div class="flex items-center gap-16">
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="item.id"
          :to="item.href"
          class="nav-item text-white hover:text-gray-300 transition-colors text-sm font-normal relative group"
          :class="{ 'nav-active': index === 1 }"
        >
          {{ item.label }}
          <!-- Активная линия под пунктом -->
          <span
            class="absolute -bottom-2 left-0 w-full h-[1px] bg-[#3D3D3D] opacity-0 group-hover:opacity-100 transition-opacity"
            :class="{ 'opacity-100': index === 1 }"
          ></span>
        </NuxtLink>

        <!-- Декоративная иконка ракеты после активного пункта -->
        <img
          src="/images/rocket.svg"
          alt=""
          class="w-4 h-5 -ml-12 opacity-60"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-item {
  letter-spacing: 0.02em;
}

.nav-active {
  color: #B1B1B1;
}
</style>
