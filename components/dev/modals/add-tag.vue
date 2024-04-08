<script setup>
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
</script>

<template>
    <Dialog>
        <DialogTrigger class="min-w-full">
            <slot />
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle class="text-center">Add tag</DialogTitle>
            </DialogHeader>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">
                            Apple
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <DialogFooter>
                Save changes
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>