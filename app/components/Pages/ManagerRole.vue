<script setup lang="ts">
defineProps<{
  data: UserAccount[] | any[]
}>()

const emit = defineEmits(['delete', 'bank', 'role'])

const form = ref({
  selected: '',
  role: '',
})

const chosenRole = (role: string) => {
  form.value.role = role
  emit('role', role)
}
</script>

<template>
  <div
    class="p-3 border rounded-lg border-border-dark-brown bg-account-manager-block"
  >
    <div class="flex flex-row items-center space-x-3">
      <input-select
        v-model="form.selected"
        :options="data"
        placeholder="Choose an account"
        @update:modelValue="$emit('bank', form.selected)"
      />

      <i
        class="bg-button-red hover:bg-button-red-hover p-1.5 rounded cursor-pointer text-button-main-label hover:text-button-main-hover-label pi pi-trash"
        style="font-size: 0.9rem"
        @click.prevent="$emit('delete', true)"
      />
    </div>

    <div class="flex items-center mt-5 space-x-2 text-sm">
      <p>Choose a role associated to this account:</p>

      <ul class="flex space-x-3">
        <li
          :class="[
            'border rounded-md py-0.5 px-3 text-xs cursor-pointer hover:border-border-dark-blue hover:bg-profile-manager transition duration-200 ease-linear',
            {
              'border-border-dark-blue bg-profile-manager': form.role === '1',
              'border-border-light-brown bg-button-cream-white':
                form.role !== '1',
            },
          ]"
          @click.prevent="chosenRole('1')"
        >
          Validation
        </li>

        <li
          <li
          :class="[
            'border rounded-md py-0.5 px-3 text-xs cursor-pointer hover:border-border-dark-blue hover:bg-profile-manager transition duration-200 ease-linear',
            {
              'border-border-dark-blue bg-profile-manager': form.role === '2',
              'border-border-light-brown bg-button-cream-white':
                form.role !== '2',
            },
          ]"
          @click.prevent="chosenRole('2')"
        >
          Saisie
        </li>
      </ul>
    </div>
  </div>
</template>
