<script setup>
const router = useRouter();
</script>

<template>
    <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto">
        <div class="h-full py-6 lg:py-8">
           <div class="w-full">
                <div class="pb-4">
                    <span class="mb-1 rounded-md px-2 py-1 font-bold text-xl mx-2">
                        Password Manager
                    </span>
                    <div class="grid grid-flow-row auto-rows-max mt-3">
                        <NuxtLink to="/dashboard"
                            class="flex items-center rounded-lg border mx-3 px-3 py-1 hover:bg-custom-secondary-darkest hover:text-white text-muted-forgeround border-transparent text-xl font-extrabold">
                            My
                            Passwords
                        </NuxtLink>
                        <NuxtLink to="/dashboard/account-types"
                            class="flex items-center rounded-lg border mx-3 px-3 py-1 hover:bg-custom-secondary-darkest hover:text-white text-muted-forgeround border-transparent text-xl font-extrabold">
                            Account Types
                        </NuxtLink>
                        <NuxtLink to="/dashboard/tags"
                            class="flex items-center rounded-lg border mx-3 px-3 py-1 hover:bg-custom-secondary-darkest hover:text-white text-muted-forgeround border-transparent text-xl font-extrabold">
                            Tags
                        </NuxtLink>
                    </div>
                </div>
                <!-- <div class="pb-4">
                    <h4 class="mb-1 rounded-md px-2 py-1 text-lg font-semibold">
                        Logs
                    </h4>
                    <div class="grid grid-flow-row auto-rows-max text-md mt-3">
                        <a href="/logging"
                            class="flex w-full items-center rounded-md border px-2 py-1 hover:bg-gray-800 text-muted-forgeround border-transparent">Client
                            Logging</a>
                    </div>
                </div> -->
            </div>
        </div>
    </aside>
</template>