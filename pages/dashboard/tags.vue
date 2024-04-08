<script lang="ts" setup>
import { Badge } from '@/components/ui/badge'
import { Loader2 } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Alert,
  AlertTitle,
  AlertDescription
} from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { useTagStore } from '~/store/tags'

const tag_colors = [
  { label: 'Dark', color: 'bg-primary' },
  { label: 'Slate', color: 'bg-slate-500' },
  { label: 'Purple', color: 'bg-custom-secondary-darkest' },
  { label: 'Red', color: 'bg-red-500' },
  { label: 'Blue', color: 'bg-blue-500' },
  { label: 'Yellow', color: 'bg-yellow-500' },
  { label: 'Green', color: 'bg-green-500' }
]

const tag_name = ref();
const tag_color = ref();
const tagStore = useTagStore();

</script>

<template>
  <div>
    <NuxtLayout name="dashboard">
      <div class="flex flex-1 justify-center">
        <Card class="min-w-full bg-secondary border-primary">
          <CardHeader>
            <CardTitle>Create tags</CardTitle>
            <CardDescription class="mt-1 font-semibold">
              Add tags to your password tracks for easier viewing
            </CardDescription>
          </CardHeader>
          <hr class="border-primary">
          <CardContent class="mt-3">
            <form>
              <div class="grid grid-cols-2 gap-x-5">
                <FormField name="tag_name">
                  <FormItem>
                    <FormLabel>Tag Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Tag Name" v-model="tag_name" />
                    </FormControl>
                  </FormItem>
                </FormField>

                <FormField name="Tag Color">
                  <FormItem>
                    <FormLabel>Tag Color</FormLabel>
                    <FormControl>
                      <Select v-model="tag_color">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a color" />
                        </SelectTrigger>
                        <SelectContent>
                          <div v-for="tag in tag_colors" :key="tag.color">
                            <SelectItem :value="tag.color">
                              {{ tag.label }}
                            </SelectItem>
                          </div>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                </FormField>
              </div>

              <div class="flex justify-center mt-5" v-if="tag_name">
                <Alert class="bg-transparent border border-transparent">
                  <AlertTitle class="text-center">Tag Preview</AlertTitle>
                  <AlertDescription class="text-center mt-3">
                    <Badge class="text-sm" :class="`${tag_color}`">{{ tag_name }}</Badge>
                  </AlertDescription>
                </Alert>
              </div>

            </form>
          </CardContent>

          <CardFooter>
            <div class="flex justify-end min-w-full">
              <Button :disabled="tagStore.isLoading" @click="tagStore.createTag()">
                <Loader2 class="animate-spin w-4 h-4 mr-2" v-if="tagStore.isLoading"/>
                Create
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </NuxtLayout>
  </div>
</template>
