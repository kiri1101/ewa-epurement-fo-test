<script setup lang="ts">
defineProps<{
  type: string
}>()

const form = ref({
  import: {
    name: '',
    registry: '',
    address: '',
    profession: '',
    immatriculation: '',
  },
  supplier: {
    name: '',
    country: '',
    address: '',
  },
  service: {
    name: '',
    description: '',
    chapter: '',
    quantity: '',
    checkIn: '',
    fob: '',
    caf: '',
    customNom: '',
    receiptRef: '',
    foreignAmount: '',
    baseAmount: '',
    paymentDateline: null,
  },
})
const validErrorMsg = ref({
  import: {
    name: '',
    registry: '',
    address: '',
    profession: '',
    immatriculation: '',
  },
  supplier: {
    name: '',
    country: '',
    address: '',
  },
  service: {
    name: '',
    description: '',
    chapter: '',
    quantity: '',
    checkIn: '',
    fob: '',
    caf: '',
    customNom: '',
    receiptRef: '',
    foreignAmount: '',
    baseAmount: '',
    paymentDateline: '',
  },
})
</script>

<template>
  <div>
    <section aria-label="Importer information">
      <Divider align="center" type="dotted">
        <b class="font-medium text-text-muted">Importer</b>
      </Divider>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label for="importName" class="text-xs text-text-muted">
            Nom ou raison sociale
            <span class="text-status-error font-semibold">(mandatory)</span>
          </label>

          <input-bg-normal
            v-model="form.import.name"
            identifier="importName"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.import.name.trim().length > 0"
            :label="validErrorMsg.import.name"
          />
        </div>

        <div>
          <label for="importRegistry" class="text-xs text-text-muted">
            Registration number or commercial register
            <span class="text-status-error font-semibold">(mandatory)</span>
          </label>

          <input-bg-normal
            v-model="form.import.registry"
            identifier="importRegistry"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.import.registry.trim().length > 0"
            :label="validErrorMsg.import.registry"
          />
        </div>

        <div>
          <label for="importAddress" class="text-xs text-text-muted">
            Complete address
            <span class="text-status-error font-semibold">(mandatory)</span>
          </label>

          <input-bg-normal
            v-model="form.import.address"
            identifier="importAddress"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.import.address.trim().length > 0"
            :label="validErrorMsg.import.address"
          />
        </div>

        <div>
          <label for="importProfession" class="text-xs text-text-muted">
            Profession
          </label>

          <input-bg-normal
            v-model="form.import.profession"
            identifier="importProfession"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.import.profession.trim().length > 0"
            :label="validErrorMsg.import.profession"
          />
        </div>

        <div>
          <label for="importImmatriculation" class="text-xs text-text-muted">
            Immatriculation
          </label>

          <input-bg-normal
            v-model="form.import.immatriculation"
            identifier="importImmatriculation"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.import.immatriculation.trim().length > 0"
            :label="validErrorMsg.import.immatriculation"
          />
        </div>
      </div>
    </section>

    <section aria-label="Supplier information">
      <Divider align="center" type="dotted">
        <b class="font-medium text-text-muted">Supplier</b>
      </Divider>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label for="supplierName" class="text-xs text-text-muted">
            Nom ou raison sociale
            <span class="text-status-error font-semibold">(mandatory)</span>
          </label>

          <input-bg-normal
            v-model="form.supplier.name"
            identifier="supplierName"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.supplier.name.trim().length > 0"
            :label="validErrorMsg.supplier.name"
          />
        </div>

        <div>
          <label for="supplierCountry" class="text-xs text-text-muted">
            Country of origin
            <span class="text-status-error font-semibold">(mandatory)</span>
          </label>

          <input-bg-normal
            v-model="form.supplier.country"
            identifier="supplierCountry"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.supplier.country.trim().length > 0"
            :label="validErrorMsg.supplier.country"
          />
        </div>

        <div>
          <label for="supplierAddress" class="text-xs text-text-muted">
            Address in country of origin
            <span class="text-status-error font-semibold">(mandatory)</span>
          </label>

          <input-bg-normal
            v-model="form.supplier.address"
            identifier="supplierAddress"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.supplier.address.trim().length > 0"
            :label="validErrorMsg.supplier.address"
          />
        </div>
      </div>
    </section>

    <section aria-label="Service information">
      <Divider align="center" type="dotted">
        <b class="font-medium text-text-muted">Service</b>
      </Divider>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label for="serviceName" class="text-xs text-text-muted">
            Trade name
          </label>

          <input-bg-normal
            v-model="form.service.name"
            identifier="serviceName"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.service.name.trim().length > 0"
            :label="validErrorMsg.service.name"
          />
        </div>

        <div v-if="type === 'BIEN'">
          <label for="serviceCheckIn" class="text-xs text-text-muted">
            Check-in counter
          </label>

          <input-bg-normal
            v-model="form.service.checkIn"
            identifier="serviceCheckIn"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.service.checkIn.trim().length > 0"
            :label="validErrorMsg.service.checkIn"
          />
        </div>

        <div v-if="type === 'BIEN'">
          <label for="serviceFob" class="text-xs text-text-muted"> FOB </label>

          <input-custom-number
            v-model="form.service.fob"
            identifier="serviceFob"
            placeholder="0"
          />

          <input-error-msg
            v-if="validErrorMsg.service.fob.trim().length > 0"
            :label="validErrorMsg.service.fob"
          />
        </div>

        <div v-if="type === 'BIEN'">
          <label for="serviceCaf" class="text-xs text-text-muted"> CAF </label>

          <input-custom-number
            v-model="form.service.caf"
            identifier="serviceCaf"
            placeholder="0"
          />

          <input-error-msg
            v-if="validErrorMsg.service.caf.trim().length > 0"
            :label="validErrorMsg.service.caf"
          />
        </div>

        <div v-if="type === 'BIEN'">
          <label for="serviceQuantity" class="text-xs text-text-muted">
            Quantity
          </label>

          <input-custom-number
            v-model="form.service.quantity"
            identifier="serviceQuantity"
            placeholder="0"
          />

          <input-error-msg
            v-if="validErrorMsg.service.quantity.trim().length > 0"
            :label="validErrorMsg.service.quantity"
          />
        </div>

        <div v-if="type === 'SERVICE'">
          <label for="serviceChapter" class="text-xs text-text-muted">
            Chapter
          </label>

          <input-bg-normal
            v-model="form.service.chapter"
            identifier="serviceChapter"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.service.chapter.trim().length > 0"
            :label="validErrorMsg.service.chapter"
          />
        </div>

        <div v-if="type === 'SERVICE'" class="col-span-2">
          <label for="serviceDescription" class="text-xs text-text-muted">
            Description
          </label>

          <Textarea
            v-model="form.service.description"
            rows="5"
            cols="10"
            class="block w-full"
            placeholder="Describe the service"
            style="border-color: var(--color-border-main) !important"
          />

          <input-error-msg
            v-if="validErrorMsg.service.description.trim().length > 0"
            :label="validErrorMsg.service.description"
          />
        </div>

        <div>
          <label for="serviceCustomNom" class="text-xs text-text-muted">
            Customs nomenclature
          </label>

          <input-bg-normal
            v-model="form.service.customNom"
            identifier="serviceCustomNom"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.service.customNom.trim().length > 0"
            :label="validErrorMsg.service.customNom"
          />
        </div>

        <div>
          <label for="serviceReceiptRef" class="text-xs text-text-muted">
            Receipt reference
          </label>

          <input-bg-normal
            v-model="form.service.receiptRef"
            identifier="serviceReceiptRef"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.service.receiptRef.trim().length > 0"
            :label="validErrorMsg.service.receiptRef"
          />
        </div>

        <div>
          <label for="serviceForeignAmount" class="text-xs text-text-muted">
            Amount in foreign currency
          </label>

          <InputGroup>
            <input-bg-normal
              v-model="form.service.foreignAmount"
              identifier="serviceForeignAmount"
              class="uppercase"
            />

            <!-- <input-select
                  v-model="form.currency"
                  :options="currencyList"
                  :loading="isSettingLoading"
                  :name-key="`name.${locale}`"
                  filter
                  placeholder="USD"
                  @update:modelValue="(e: string) => form.currency = e"
                /> -->
          </InputGroup>

          <input-error-msg
            v-if="validErrorMsg.service.foreignAmount.trim().length > 0"
            :label="validErrorMsg.service.foreignAmount"
          />
        </div>

        <div>
          <label for="serviceBaseAmount" class="text-xs text-text-muted">
            Amount in CFA francs
          </label>

          <input-bg-normal
            v-model="form.service.baseAmount"
            identifier="serviceBaseAmount"
            class="uppercase"
          />

          <input-error-msg
            v-if="validErrorMsg.service.baseAmount.trim().length > 0"
            :label="validErrorMsg.service.baseAmount"
          />
        </div>

        <div>
          <label for="serviceBaseAmount" class="text-xs text-text-muted">
            Payment dateline
          </label>

          <input-date-picker
            v-model="form.service.paymentDateline"
            showIcon
            fluid
            icon-display="input"
            :min-date="new Date()"
          />

          <input-error-msg
            v-if="validErrorMsg.service.paymentDateline.trim().length > 0"
            :label="validErrorMsg.service.paymentDateline"
          />
        </div>
      </div>
    </section>
  </div>
</template>
