<script setup lang="ts">
const { getBenefits } = useApi()
const benefits = await getBenefits()
</script>

<template>
  <section class="container py-24 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <BenefitCard
        v-for="(benefit, index) in benefits"
        :key="benefit.id"
        :title="benefit.title"
        :description="benefit.description"
        :icon="benefit.icon"
        class="h-full"
      />
      
      <!-- Fallback if no API data (Design consistency) -->
      <template v-if="benefits.length === 0">
        <BenefitCard
          title="Путешествие"
          description="Путешествие на красную планету - это незабываемое приключение."
          icon="benefit_icon_1.svg"
        />
        <BenefitCard
          title="Безопасность"
          description="Мы гарантируем полную безопасность на протяжении всего полета."
          icon="benefit_icon_2.svg"
        />
        <BenefitCard
          title="Технологии"
          description="Используем только самые передовые технологии для вашего комфорта."
          icon="benefit_icon_3.svg"
        />
      </template>
    </div>
  </section>
</template>
