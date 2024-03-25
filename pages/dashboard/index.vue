<script setup>
import { Input } from '@/components/ui/input'
import { Alert } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-vue-next'
import { useAuthStore } from '~/store/auth';

const auth = useAuthStore();
definePageMeta({
    middleware: ['not-auth']
})
</script>

<template>
    <div>
        <NuxtLayout name="dashboard">
            <Alert variant="default" class="mb-5 bg-transparent border border-red-700 font-bold" v-if="auth.user !== null && auth.user.master_password == null">
                <div class="flex flex-row items-center justify-between">
                    <div class="flex">
                        <AlertCircle class="mr-2 size-6 text-red-700" />
                        You haven't setup your master password yet.
                    </div>
                    <DevModalsSettings>
                        <Button size="sm" variant="destructive">Setup master password</Button>
                    </DevModalsSettings>

                </div>
            </Alert>
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