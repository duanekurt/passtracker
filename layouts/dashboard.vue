<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'

</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <Toaster richColors closeButton />
    <div class="flex relative min-h-screen flex-col bg-secondary">
      <DevHeader />
      <div class="flex-1">
        <div class="border-b">
          <div
            class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <!--Sidebar-->
            <aside
              class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto">
              <DevSidebar />
            </aside>

            <!-- Content Area -->
            <div class="relative py-6 lg:gap-10 lg:py-8">
              <slot />
            </div>
            <!-- End Content Area -->
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>