<script>
import JetBanner from '@/Jetstream/Banner.vue';
import Toast from '@/Components/Toast.vue';
import Icon from '@/Components/Icon.vue';
import AppHead from '@/Components/AppHead.vue';
import MainNavbar from '@/Shared/MainNavbar.vue';

export default {
    components: {
        AppHead,
        Icon,
        Toast,
        JetBanner,
        MainNavbar
    },

    data() {
        return {
            title: 'MineTrax'
        };
    },
};
</script>

<template>
  <AppHead :title="title" />

  <div>
    <jet-banner />
    <toast
      :toast="$page.props.toast"
      :popstate="$page.props.popstate"
    />

    <inertia-link
      v-if="$page.props.isImpersonating"
      v-tippy
      :title="__('Leave Impersonation')"
      as="a"
      :href="route('admin.impersonate.leave')"
      class="fixed flex p-2 text-white bg-red-500 rounded-full bottom-4 right-4 hover:bg-red-700"
    >
      <icon
        name="ban"
        class="w-8 h-8"
      />
    </inertia-link>

    <div
      class="min-h-screen"
      :class="{ 'border-4 border-red-500' : $page.props.isImpersonating}"
    >
      <!-- NavBar -->
      <MainNavbar />

      <!-- Page Content -->
      <main>
        <slot />
      </main>

      <footer class="flex flex-col items-center justify-center p-5">
        <div class="text-sm text-gray-800 dark:text-gray-400">
          &copy; {{ $page.props.generalSettings.site_name }} {{ new Date().getFullYear() }}
        </div>
        <div
          v-if="$page.props.showPoweredBy"
          class="text-xs text-gray-500"
        >
          Powered with
          <icon
            class="absolute inline-flex w-4 h-4 text-red-500 opacity-75 animate-ping"
            name="heart-fill"
          />
          <icon
            class="relative inline-flex w-4 h-4 text-red-500"
            name="heart-fill"
          />
          by <a
            target="_blank"
            href="https://minetrax.github.io"
            class="hover:underline hover:text-light-blue-500"
          >MineTrax</a>
        </div>
      </footer>
    </div>
  </div>
</template>
