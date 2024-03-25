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
import {
    PinInput,
    PinInputGroup,
    PinInputInput,
} from '@/components/ui/pin-input'
import { useAuthStore } from '~/store/auth';

const auth = useAuthStore();
const payload = ref({
    master_password: '',
    master_password_confirm: ''
});
const master_password_confirm = ref();

const handleComplete = (e: string[]) => {
    payload.value.master_password = e.join('')
}

const handleCompleteConfirm = (e: string[]) => {
    payload.value.master_password_confirm = e.join('')
}

const submit = () => {
    auth.setMasterPassword(payload);
}
</script>

<template>
    <Dialog>
        <DialogTrigger>
            <slot />
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

                    <PinInput id="pin-input" placeholder="○" @complete="handleCompleteConfirm">
                        <PinInputGroup>
                            <PinInputInput v-for="(id, index) in 6" :key="id" :index="index"
                                class="border border-slate-400" />
                        </PinInputGroup>
                    </PinInput>
                </div>

            </div>
            <DialogFooter>
                <Button variant="ghost" class="border border-primary" @click="submit()">Save Changes</Button>
            </DialogFooter>
        </DialogContent>

    </Dialog>
</template>