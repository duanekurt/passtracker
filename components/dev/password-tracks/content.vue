<script setup>
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'
import { Eye, Loader2 } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge'
import { usePwTrackStore } from '~/store/passwords';

const pwtrack = usePwTrackStore();

onMounted(async () => {
    await pwtrack.getPasswordTracks();
})

</script>

<template>
    <div class="flex flex-1 justify-center items-center mt-24" v-if="pwtrack.pw_tracks.data.length <= 0">
        <span class="text-2xl font-bold">
            No passwords to track
        </span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" v-else>
        <Card v-for="item in pwtrack.pw_tracks.data" :key="item.id">
            <CardHeader class="bg-custom-secondary flex flex-row items-center justify-between">
                <div>
                    <CardTitle class="text-3xl mb-2 font-bold">{{ item.password_for }}</CardTitle>
                    <CardDescription class="text-lg font-semibold text-black">{{ item.account_type?.account_type_name }}
                    </CardDescription>
                </div>
                <Button variant="ghost" size="icon" @click="() => toast.info('Reveal')"
                    class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <Eye class="w-4 h-4" />
                </Button>
            </CardHeader>
            <CardContent class="bg-transparent mt-5">
                <div class="grid grid-cols-2">
                    <span class="text-lg font-bold">Email/Username:</span>
                    <span class="text-lg">{{ item.email_username }}</span>
                    <span class="text-lg font-bold">Password:</span>
                    <span class="text-lg">**********</span>
                </div>
            </CardContent>
            <hr>
            <CardFooter class="justify-around py-3 items-center">
                <!-- <Badge>Entertainment</Badge>
                <Badge>Entertainment</Badge>
                <Badge>Entertainment</Badge>
                <Badge>Entertainment</Badge> -->
            </CardFooter>
        </Card>
    </div>
</template>