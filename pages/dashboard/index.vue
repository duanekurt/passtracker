<script setup>
import { Input } from '@/components/ui/input'
import { Alert } from '@/components/ui/alert'

definePageMeta({
  middleware: ['not-auth']
})
</script>

<template>
    <div>
        <NuxtLayout name="dashboard">
            <!-- <Alert variant="default" class="mb-5">All Passwords are encrypted and secured 🔐</Alert> -->
            <!-- Search -->
            <div class="flex gap-12 flex-row mb-5">
                <Input name="search" placeholder="Search for something ..." />
                <DevModalsAddPwTrack />
            </div>

            <DevPasswordTracksContent />

            <DevPasswordTracksPagination />
        </NuxtLayout>
    </div>
</template>