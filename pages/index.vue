/
<script setup>
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-vue-next'
import { Toaster } from '@/components/ui/sonner'
import { useAuthStore } from '~/store/auth';
import { toast } from "vue-sonner";

const authStore = useAuthStore();
const email = ref('');
const password = ref('');

const first_name = ref('');
const last_name = ref('');
const check = async () => {
    authStore.checkUserExist(email.value);
}

const submit = async () => {
    const payload = {
        email: email.value,
        first_name: first_name.value,
        last_name: last_name.value,
        password: password.value
    }

    if (authStore.isExisting) {
        authStore.login(payload);
    } else {
        authStore.register(payload);
    }

}

definePageMeta({
    middleware: ['auth']
})
</script>

<template>
    <div>
        <NuxtLoadingIndicator />
        <Toaster richColors closeButton position="top-right"/>
        <div class="min-w-full h-screen flex flex-1 justify-center items-center bg-primary">
            <Card class="w-[30%] h-[50%] bg-secondary flex flex-col justify-around rounded-xl">
                <CardHeader class="text-center">
                    <CardTitle>Passtracker</CardTitle>
                    <!-- <CardDescription>Log-in your credentials</CardDescription> -->
                </CardHeader>
                <CardContent class="border border-primary mx-12 rounded-lg p-3">
                    <div class="flex justify-center w-full mb-7">
                        <span class="text-lg font-bold">Login / Sign Up</span>
                    </div>

                    <Input placeholder="E-mail" class="mb-3 " v-model="email" />

                    <div v-if="authStore.isSubmitted">
                        <!-- Exists -->
                        <div v-if="authStore.isExisting" class="grid grid-cols-1">
                            <Input placeholder="Password" class="mb-3 col-span-2" v-model="password" type="password" />
                        </div>

                        <!-- Not Exists -->
                        <div v-else class="grid grid-cols-2 gap-2">
                            <Input placeholder="First Name" class="mb-3" v-model="first_name" />

                            <Input placeholder="Last Name" class="mb-3" v-model="last_name" />

                            <Input placeholder="Password" class="mb-3 col-span-2" v-model="password" type="password" />
                        </div>
                    </div>

                    <Button :disabled="authStore.isLoading" variant="default" class="w-full"
                        @click="!authStore.isSubmitted ? check() : submit()">
                        <Loader2 class="mr-2 w-4 h-4 animate-spin" v-if="authStore.isLoading" />
                        Login
                    </Button>
                </CardContent>
                <CardFooter>
                    <div class="flex w-full h-auto justify-center items-center">
                        <span class="text-lg justify-center">Copyright @ Kurt Duane Dev</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    </div>
</template>