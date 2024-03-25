<script setup>
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Wrench } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Settings, LogOut } from 'lucide-vue-next'
import { useAuthStore } from '~/store/auth';

const auth = useAuthStore();

const logout = async () => {
    auth.logout()
}
</script>
<template>
    <header class="sticky top-0 z-50 w-full border-b border-border/40  backdrop-blur bg-primary">
        <div class="container flex max-w-screen-2xl items-center h-14">
            <div class="mr-3 hidden md:flex">
                <div class="mr-6 flex items-center space-x-2">
                    <span class="font-bold text-2xl text-white">Passtracker</span>
                </div>

                <nav class="flex items-center gap-6 text-sm">
                    <!-- <a href="#">Logout</a> -->
                </nav>
            </div>
            <div class="flex flex-1 items-center justify-end space-x-2">
                <div class="w-full flex-1 md:w-auto md:flex-none">
                    <Popover>
                        <PopoverTrigger>
                            <Button class="bg-primary text-white" variant="outline" size="icon">
                                <Settings class="w-4 h-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div class="grid">
                                <DevModalsSettings>
                                    <Button variant="ghost" size="sm" class="mb-3 w-full">
                                        <Wrench class="mr-2 h-4 w-4" /> Settings
                                    </Button>
                                </DevModalsSettings>
                            </div>

                            <Button variant="ghost" size="sm" class="border-destructive border w-full"
                                @click="logout()">
                                <LogOut class="mr-2 w-4 h-4" /> Logout
                            </Button>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    </header>

</template>