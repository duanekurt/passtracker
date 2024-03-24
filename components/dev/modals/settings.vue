<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Wrench } from 'lucide-vue-next'
import {
    PinInput,
    PinInputGroup,
    PinInputInput,
} from '@/components/ui/pin-input'

const handleComplete = (e: string[]) => alert(e.join(''))
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <Button variant="ghost" size="sm" class="mb-3 w-full">
                <Wrench class="mr-2 h-4 w-4" /> Settings
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Settings</DialogTitle>
            </DialogHeader>
            <hr class="bg-black">
            <div class="grid w-full border border-slate-400 rounded-lg">
                <div class="flex flex-col rounded-lg p-3 justify-center items-center">
                    <span class="font-bold mb-3">Master Password</span>

                    <PinInput id="pin-input" placeholder="○" @complete="handleComplete">
                        <PinInputGroup>
                            <PinInputInput v-for="(id, index) in 6" :key="id" :index="index"
                                class="border border-slate-400" />
                        </PinInputGroup>
                    </PinInput>
                </div>

                <div class="flex flex-col rounded-lg p-3 justify-center items-center">
                    <span class="font-bold mb-3">Confirm Master Password</span>

                    <PinInput id="pin-input" placeholder="○" @complete="handleComplete">
                        <PinInputGroup>
                            <PinInputInput v-for="(id, index) in 6" :key="id" :index="index"
                                class="border border-slate-400" />
                        </PinInputGroup>
                    </PinInput>
                </div>

            </div>
            <DialogFooter>
                <Button variant="ghost" class="border border-primary">Save Changes</Button>
            </DialogFooter>
        </DialogContent>

    </Dialog>
</template>