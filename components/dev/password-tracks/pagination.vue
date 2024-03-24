<script setup>
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft } from 'lucide-vue-next'
import { usePwTrackStore } from '~/store/passwords';

const pwtrack = usePwTrackStore()

const next = async () => {
    await pwtrack.getPasswordTracks(pwtrack.pw_tracks.current_page + 1)
}

const prev = async () => {
    await pwtrack.getPasswordTracks(pwtrack.pw_tracks.current_page - 1)
}
</script>

<template>
    <div class="w-full flex flex-row justify-center mt-6 gap-x-5" v-if="pwtrack.pw_tracks.data.length > 0">
        <Button variant="outline" size="icon" :disabled="pwtrack.pw_tracks.prev_page_url == null" @click="prev">
            <ArrowLeft class="w-4 h-4" />
        </Button>
        <span class="flex items-center font-bold">{{ pwtrack.pw_tracks.current_page }}</span>
        <Button variant="outline" size="icon" :disabled="pwtrack.pw_tracks.next_page_url == null" @click="next">
            <ArrowRight class=" w-4 h-4" />
        </Button>
    </div>
</template>