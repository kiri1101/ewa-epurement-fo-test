<script setup lang="ts">
defineProps<{
  data: accountType[] | any[]
}>()

const emit = defineEmits(['delete', 'bank', 'role'])

const selectInputPt = {
  root: {
    class:
      'w-full h-9 placeholder-text-muted focus:outline-none focus:ring-2 peer',
  },
  label: {
    style: 'font-size: 0.875rem; line-height: 1.25rem;',
  },
  optionLabel: {
    style: 'font-size: 0.875rem; line-height: 1.25rem;',
  },
}
const form = ref({
  selected: {} as accountType,
  role: '',
})

const chosenRole = (role: string) => {
  form.value.role = role
  emit('role', role)
}
</script>

<template>
  <div
    class="p-3 border rounded-lg border-border-main bg-bg-secondary"
  >
    <div class="flex flex-row items-center space-x-3">
      <!-- <input-select
        v-model="form.selected"
        :options="data"
        placeholder="Choose an account"
        @update:modelValue="$emit('bank', form.selected)"
      /> -->

      <Select
        v-model="form.selected"
        :options="data"
        :placeholder="$t('placeholder.select_account')"
        :pt="selectInputPt"
        @update:modelValue="$emit('bank', form.selected)"
      >
        <template #value="slotProps">
          <div v-if="slotProps.value">
            <span class="text-sm">{{ slotProps.value.iban }} - </span>
            <span class="text-sm">{{ slotProps.value.type }}</span>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="flex items-center gap-2">
            <i
              v-if="slotProps.option"
              class="pi pi-building-columns"
              style="font-size: 1.3rem"
            />

            <div>
              <p class="text-sm">{{ slotProps.option.iban }}</p>

              <div class="text-xs">
                <span>{{ slotProps.option.agency }} - </span>
                <span>{{ slotProps.option.type }}</span>
              </div>
            </div>
          </div>
        </template>
      </Select>

      <i
        class="bg-accent hover:bg-accent-light p-1.5 rounded cursor-pointer text-white pi pi-trash"
        style="font-size: 0.9rem"
        @click.prevent="$emit('delete', true)"
      />
    </div>

    <div class="flex items-center mt-5 space-x-2 text-sm">
      <p>{{$t('page.profile.new.role.title')}}:</p>

      <ul class="flex space-x-3">
        <li
          :class="[
            'border rounded-md py-0.5 px-3 text-xs cursor-pointer hover:border-primary-dark hover:bg-bg-main transition duration-200 ease-linear',
            {
              'border-primary-dark bg-bg-main': form.role === '1',
              'border-border-main bg-bg-secondary':
                form.role !== '1',
            },
          ]"
          @click.prevent="chosenRole('1')"
        >
          {{$t('page.profile.new.role.validation')}}
        </li>

        <li
          <li
          :class="[
            'border rounded-md py-0.5 px-3 text-xs cursor-pointer hover:border-primary-dark hover:bg-bg-main transition duration-200 ease-linear',
            {
              'border-primary-dark bg-bg-main': form.role === '2',
              'border-border-main bg-bg-secondary':
                form.role !== '2',
            },
          ]"
          @click.prevent="chosenRole('2')"
        >
          {{$t('page.profile.new.role.saisie')}}
        </li>
      </ul>
    </div>
  </div>
</template>
