<script lang="ts" setup>
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
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


</script>

<template>
  <div>
    <NuxtLayout name="dashboard">
      <div class="flex w-full flex-1 justify-center items-center">
        <Card class="min-w-full border-primary bg-secondary">
          <CardHeader>
            <CardTitle>Create account type</CardTitle>
            <CardDescription class="mt-1 font-semibold">Relate your password thru account types!</CardDescription>
          </CardHeader>

          <hr class="border-primary">

          <CardContent class="mt-3">
            <form>
              <FormField name="Account type">
                <FormItem>
                  <FormLabel>Account type</FormLabel>
                  <FormControl>
                    <Input placeholder="Input account type" />
                  </FormControl>
                </FormItem>
              </FormField>
            </form>
          </CardContent>

          <CardFooter>
            <div class="flex justify-end min-w-full">
              <Button @click="">
                <!-- <Loader2 class="animate-spin w-4 h-4 mr-2"/> -->
                Create
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </NuxtLayout>
  </div>
</template>

<style></style>