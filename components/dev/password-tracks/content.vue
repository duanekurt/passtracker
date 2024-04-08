<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-vue-next';
import { usePwTrackStore } from '~/store/passwords';

const pwtrack = usePwTrackStore();
const selectedPwTrack = ref({
    id: null,
    decoded: ''
})
onMounted(async () => {
    await pwtrack.getPasswordTracks();
})

const showPassword = async (pw_track_id: number) => {
    const { data } = await pwtrack.showPassword(pw_track_id);
    selectedPwTrack.value.id = data.id
    selectedPwTrack.value.decoded = data.decoded
}

</script>

<template>
    <div class="flex flex-1 justify-center items-center mt-24"
        v-if="pwtrack.pw_tracks.data && pwtrack.pw_tracks.data.length <= 0">
        <span class="text-2xl font-bold">
            No passwords to track
        </span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" v-else>
        <Card v-for="item in pwtrack.pw_tracks.data" :key="item.id">
            <CardHeader class="bg-primary flex flex-row items-center justify-between rounded-t-xl text-white">
                <div>
                    <CardTitle class="text-3xl mb-2 font-bold">{{ item.password_for }}</CardTitle>
                    <CardDescription class="text-lg font-semibold text-white">{{ item.account_type?.account_type_name }}
                    </CardDescription>
                </div>
                <Button variant="ghost" size="icon" @click="showPassword(item.id)"
                    class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <Eye class="w-4 h-4" />
                </Button>
            </CardHeader>
            <CardContent class="bg-transparent mt-5">
                <div class="grid grid-cols-2">
                    <span class="text-lg font-bold">Email/Username:</span>
                    <span class="text-lg">{{ item.email_username }}</span>
                    <span class="text-lg font-bold">Password:</span>
                    <span class="text-lg" v-if="selectedPwTrack.id == item.id">{{ selectedPwTrack.decoded }}</span>
                    <span class="text-lg" v-else>{{ item.hashed_password.slice(0, 20) }}</span>
                </div>
            </CardContent>
            <hr>
            <CardFooter class="justify-between py-3 items-baselibe">
                <DevTagsShow/>
                <DevPasswordTracksOptions/>
            </CardFooter>
        </Card>
    </div>
</template>