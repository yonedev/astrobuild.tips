<template>
	<header class="border-b-2 border-b-gray-300 bg-white dark:border-b-0 dark:bg-gray-800">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<svg
						width="150"
						height="30"
						viewBox="0 0 150 30"
						class="hidden h-8 w-auto dark:block"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<image
							x="0"
							y="0"
							width="150"
							height="30"
							xlink:href="data:image/png;base64, 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"
						/>
					</svg>

					<svg
						width="150"
						height="30"
						viewBox="0 0 150 30"
						class="block h-8 w-auto dark:hidden"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<image
							id="Capa-de-imagen"
							x="0"
							y="0"
							width="150"
							height="30"
							xlink:href="data:image/png;base64, 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"
						/>
					</svg>
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					@click="mobileMenuOpen = true"
				>
					<span class="sr-only">Open main menu</span>
					<Bars3Icon class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<PopoverGroup class="hidden lg:flex lg:gap-x-12">
				<Popover class="relative">
					<PopoverButton
						class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
					>
						Product
						<ChevronDownIcon
							class="h-5 w-5 flex-none text-gray-400 dark:text-slate-50"
							aria-hidden="true"
						/>
					</PopoverButton>

					<transition
						enter-active-class="transition ease-out duration-200"
						enter-from-class="opacity-0 translate-y-1"
						enter-to-class="opacity-100 translate-y-0"
						leave-active-class="transition ease-in duration-150"
						leave-from-class="opacity-100 translate-y-0"
						leave-to-class="opacity-0 translate-y-1"
					>
						<PopoverPanel
							class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
						>
							<div class="p-4">
								<div
									v-for="item in products"
									:key="item.name"
									class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
								>
									<div
										class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
									>
										<component
											:is="item.icon"
											class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
											aria-hidden="true"
										/>
									</div>
									<div class="flex-auto">
										<a :href="item.href" class="block font-semibold text-gray-900">
											{{ item.name }}
											<span class="absolute inset-0" />
										</a>
										<p class="mt-1 text-gray-600">{{ item.description }}</p>
									</div>
								</div>
							</div>
							<div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
								<a
									v-for="item in callsToAction"
									:key="item.name"
									:href="item.href"
									class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
								>
									<component
										:is="item.icon"
										class="h-5 w-5 flex-none text-gray-400"
										aria-hidden="true"
									/>
									{{ item.name }}
								</a>
							</div>
						</PopoverPanel>
					</transition>
				</Popover>

				<a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
					>Features</a
				>
				<a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
					>Marketplace</a
				>
				<a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
					>Company</a
				>
				<slot />
			</PopoverGroup>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</nav>
		<Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
			<div class="fixed inset-0 z-10" />
			<DialogPanel
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						@click="mobileMenuOpen = false"
					>
						<span class="sr-only">Close menu</span>
						<XMarkIcon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<Disclosure as="div" class="-mx-3" v-slot="{ open }">
								<DisclosureButton
									class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Product
									<ChevronDownIcon
										:class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
										aria-hidden="true"
									/>
								</DisclosureButton>
								<DisclosurePanel class="mt-2 space-y-2">
									<DisclosureButton
										v-for="item in [...products, ...callsToAction]"
										:key="item.name"
										as="a"
										:href="item.href"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>{{ item.name }}</DisclosureButton
									>
								</DisclosurePanel>
							</Disclosure>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-slate-900"
								>Features</a
							>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Marketplace</a
							>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Company</a
							>
						</div>
						<div class="py-6">
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Log in</a
							>
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel
} from '@headlessui/vue'
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const products = [
	{
		name: 'Analytics',
		description: 'Get a better understanding of your traffic',
		href: '#',
		icon: ChartPieIcon
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers',
		href: '#',
		icon: CursorArrowRaysIcon
	},
	{
		name: 'Security',
		description: 'Your customers’ data will be safe and secure',
		href: '#',
		icon: FingerPrintIcon
	},
	{
		name: 'Integrations',
		description: 'Connect with third-party tools',
		href: '#',
		icon: SquaresPlusIcon
	},
	{
		name: 'Automations',
		description: 'Build strategic funnels that will convert',
		href: '#',
		icon: ArrowPathIcon
	}
]
const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
	{ name: 'Contact sales', href: '#', icon: PhoneIcon }
]

const mobileMenuOpen = ref(false)
</script>
