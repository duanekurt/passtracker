<script setup>
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { EllipsisVertical } from 'lucide-vue-next';
import { Button } from '@/components/ui/button'

</script>

<template>
    <Popover>
        <PopoverTrigger>
            <Button size="sm" variant="ghost" class="text-end">
                <EllipsisVertical class="size-5" />
            </Button>
        </PopoverTrigger>
        <PopoverContent>
                <DevModalsAddTag>
                    <Button variant="outline" size="sm" class="w-full">
                        Add tags
                    </Button>
                </DevModalsAddTag>
        </PopoverContent>
    </Popover>
</template>