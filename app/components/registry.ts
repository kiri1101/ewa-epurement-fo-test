import BgNormal from '@/components/Input/BgNormal.vue'
import Phone from '@/components/Input/Phone.vue'
import Select from '@/components/Input/Select.vue'
import CustomNumber from '@/components/Input/CustomNumber.vue'

export const fieldRegistry: Record<string, any> = {
  input: {
    text: BgNormal,
    phone_number: Phone,
    email: BgNormal,
    number: CustomNumber,
  },
  select: {
    text: Select,
  },
}
