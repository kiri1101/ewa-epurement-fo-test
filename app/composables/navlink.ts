import SvgDashboard from '@/components/Svg/Dashboard.vue'
import SvgWallet from '@/components/Svg/Wallet.vue'
import SvgBeneficiary from '@/components/Svg/Beneficiary.vue'
import SvgTransfer from '@/components/Svg/Transfer.vue'
import SvgProfile from '@/components/Svg/Profile.vue'
import SvgDomiciliation from '@/components/Svg/Domiciliation.vue'
import SvgUsers from '@/components/Svg/Users.vue'
import SvgInfos from '@/components/Svg/Infos.vue'

export const navLinkRegistry = () => {
  return {
    dashboard: SvgDashboard,
    wallet: SvgWallet,
    beneficiary: SvgBeneficiary,
    transfer: SvgTransfer,
    profile: SvgProfile,
    domiciliation: SvgDomiciliation,
    users: SvgUsers,
    infos: SvgInfos,
  }
}
