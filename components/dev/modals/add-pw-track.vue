<script lang="ts" setup>
import { Eye, Plus, Loader2 } from 'lucide-vue-next';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useAccountTypeStore } from '~/store/account_types';
import { usePwTrackStore } from '~/store/passwords';

const formSchema = toTypedSchema(z.object({
    password_for: z.string({ required_error: 'Field is required' }),
    email_username: z.string().optional(),
    password: z.string({ required_error: 'Field is required' }).min(6, { message: 'minimum of 6 characters' }),
    account_type_id: z.string({ required_error: 'Field is required' })
}));


const visible = ref(false);
const account_types = useAccountTypeStore()
const pwtrack = usePwTrackStore()

const loading = account_types.isLoading
const opened = ref();
const selectAccountType = async (opened: any) => {
    if (opened) {
        await account_types.getAccountTypes();
    }
}

const { handleSubmit } = useForm({
    validationSchema: formSchema
})

const submit = handleSubmit((values) => {
    pwtrack.createPasswordTrack(values)
    opened.value = false
})

</script>

<template>
    <Sheet :open="opened">
        <SheetTrigger as-child>
            <Button size="icon" variant="outline" class="rounded-3xl bg-custom-secondary text-primary">
                <Plus class="w-4 h-4" />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" class="bg-secondary">
            <SheetHeader>
                <SheetTitle class="text-2xl">Add new password to track</SheetTitle>
                <SheetDescription>
                    <div class="p-3 mt-5 border border-primary rounded-xl">
                        <form @submit="submit">
                            <div class="mb-3">
                                <FormField name="password_for" v-slot="{ componentField }">
                                    <FormItem>
                                        <div class="flex flex-row justify-between items-center">
                                            <FormLabel>Password for</FormLabel>
                                            <FormMessage />
                                        </div>
                                        <FormControl>
                                            <Input placeholder="Enter what is this password for"
                                                v-bind="componentField" />
                                        </FormControl>
                                    </FormItem>
                                </FormField>
                            </div>

                            <div class="mb-3">
                                <FormField name="email_username" v-slot="{ componentField }">
                                    <FormItem>
                                        <FormLabel>E-mail / Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter email or username" v-bind="componentField" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </FormField>
                            </div>

                            <div class="mb-3">
                                <FormField name="password" v-slot="{ componentField }">
                                    <FormItem>
                                        <div class="flex flex-row items-center justify-between">
                                            <div>
                                                <FormLabel>Password</FormLabel>
                                                <Button class="size-3 ml-2 mt-2" size="icon" variant="link"
                                                    type="button" @mousedown="visible = true"
                                                    @mouseup="visible = false">
                                                    <Eye class="size-3" />
                                                </Button>
                                            </div>
                                            <FormMessage />
                                        </div>
                                        <FormControl>
                                            <Input placeholder="Enter Password" :type="!visible ? 'password' : 'text'"
                                                v-bind="componentField" autocomplete />
                                        </FormControl>
                                    </FormItem>
                                </FormField>
                            </div>

                            <div class="mb-3">
                                <FormField name="account_type_id" v-slot="{ componentField }">
                                    <FormItem>
                                        <div class="flex flex-row items-center justify-between">
                                            <FormLabel>Select Account Type</FormLabel>
                                            <FormMessage />
                                        </div>
                                        <Select @update:open="selectAccountType" v-bind="componentField">
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select an account type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <div class="flex min-w-full justify-center items-center" v-if="loading">
                                                    <Loader2 class="animate-spin my-2" />
                                                </div>
                                                <SelectItem v-for="item in account_types.account_types"
                                                    :value="item.id.toString()" :key="item.id">
                                                    {{ item.account_type_name }}
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                </FormField>
                            </div>

                            <div class="mt-5 flex flex-1">
                                <Button class="w-full" type="submit" variant="default">Submit</Button>
                            </div>
                        </form>
                    </div>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
</template>