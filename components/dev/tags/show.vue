<script setup>
import { useTagStore } from '~/store/tags';

const tagStore = useTagStore();
const modelValue = ref()
onMounted( async () => {
  await tagStore.getTags();
})
</script>
<template>
    <div class="grid grid-cols-4 gap-3">
        <Badge>Entertainment</Badge>
        <Badge>Entertainment</Badge>
        <Badge>Entertainment</Badge>
        <Badge>Entertainment</Badge>
        <Badge>Entertainment</Badge>
        <Badge>Entertainment</Badge>
        <Badge>Entertainment</Badge>
        <Badge>Entertainment</Badge>
        
    </div>
</template>