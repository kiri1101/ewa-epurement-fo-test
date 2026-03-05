import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        class: [
          "hover:fill-sidebar-active-text",
          {
            "fill-white": !__props.active,
            "fill-sidebar-active-text": __props.active
          }
        ],
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M15.8785 8.90958C15.7902 8.90958 15.6138 8.99779 15.5256 9.086L14.6435 9.96814L16.4959 11.8206L17.3781 10.9385C17.5545 10.7621 17.5545 10.4092 17.3781 10.2328L16.2313 9.086C16.1431 8.99779 16.0549 8.90958 15.8785 8.90958ZM14.2024 10.4974L8.82136 15.7902V17.6427H10.6738L16.0549 12.2617L14.2024 10.4974ZM15.8785 5.29282H8.82136V0H15.8785V5.29282ZM8.82136 13.285V7.05709H15.8785V7.1453C15.208 7.1453 14.617 7.49816 14.2818 7.84219L8.82136 13.285ZM7.05709 8.82136H0V0H7.05709V8.82136ZM7.05709 15.8785H0V10.5856H7.05709V15.8785Z"></path></svg>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Dashboard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const SvgDashboard = Object.assign(_sfc_main$7, { __name: "SvgDashboard" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Wallet",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "19",
        height: "19",
        viewBox: "0 0 19 19",
        class: [
          "hover:fill-sidebar-active-text",
          {
            "fill-white": !__props.active,
            "fill-sidebar-active-text": __props.active
          }
        ],
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.91667 4.66667H18.6667V18.6667H3.5C2.57174 18.6667 1.6815 18.2979 1.02513 17.6415C0.368749 16.9852 0 16.0949 0 15.1667L0 3.5C0 2.57174 0.368749 1.6815 1.02513 1.02513C1.6815 0.368749 2.57174 0 3.5 0L15.1667 0V2.91667H2.91667V4.66667ZM15.1667 13.125C15.5534 13.125 15.9244 12.9714 16.1979 12.6979C16.4714 12.4244 16.625 12.0534 16.625 11.6667C16.625 11.2799 16.4714 10.909 16.1979 10.6355C15.9244 10.362 15.5534 10.2083 15.1667 10.2083C14.7799 10.2083 14.409 10.362 14.1355 10.6355C13.862 10.909 13.7083 11.2799 13.7083 11.6667C13.7083 12.0534 13.862 12.4244 14.1355 12.6979C14.409 12.9714 14.7799 13.125 15.1667 13.125Z"></path></svg>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Wallet.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SvgWallet = Object.assign(_sfc_main$6, { __name: "SvgWallet" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Beneficiary",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "22",
        height: "22",
        viewBox: "0 0 22 22",
        class: [
          "hover:fill-sidebar-active-text group-hover:fill-sidebar-active-text",
          {
            "fill-white": !__props.active,
            "fill-sidebar-active-text": __props.active
          }
        ],
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><g clip-path="url(#a)"><path d="M5.041 6.417a2.292 2.292 0 1 1 4.584 0 2.292 2.292 0 0 1-4.584 0M7.333 2.75a3.667 3.667 0 1 0 0 7.333 3.667 3.667 0 0 0 0-7.333m6.875 4.583a1.375 1.375 0 1 1 2.75 0 1.375 1.375 0 0 1-2.75 0m1.375-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-4.812 7.334c.275 0 .538.055.78.152a2.3 2.3 0 0 0-1.277 1.223H3.896a.69.69 0 0 0-.688.687v.236l.006.073c.007.068.022.172.05.302.061.257.182.601.422.943.452.646 1.427 1.425 3.647 1.425 1.29 0 2.159-.263 2.75-.61v1.523c-.725.286-1.629.462-2.75.462-2.592 0-4.024-.94-4.774-2.012a4.1 4.1 0 0 1-.713-1.897 3 3 0 0 1-.013-.19v-.254a2.063 2.063 0 0 1 2.063-2.063zM11 14.208a1.375 1.375 0 0 1 1.375-1.375h7.333a1.375 1.375 0 0 1 1.375 1.375v3.667a1.375 1.375 0 0 1-1.375 1.375h-7.333A1.375 1.375 0 0 1 11 17.875zm.916.459v.916a1.833 1.833 0 0 0 1.834-1.833h-.917a.917.917 0 0 1-.917.917m8.25.916v-.916a.917.917 0 0 1-.916-.917h-.917a1.834 1.834 0 0 0 1.833 1.833m-1.833 2.75h.917a.916.916 0 0 1 .916-.916V16.5a1.833 1.833 0 0 0-1.833 1.833M11.916 16.5v.917a.916.916 0 0 1 .917.916h.917a1.833 1.833 0 0 0-1.834-1.833m4.125 1.146a1.604 1.604 0 1 0 0-3.21 1.604 1.604 0 0 0 0 3.21" class="${ssrRenderClass([
        "hover:fill-sidebar-active-text group-hover:fill-sidebar-active-text",
        {
          "fill-white": !__props.active,
          "fill-sidebar-active-text": __props.active
        }
      ])}"></path></g><defs><clipPath id="a"><path d="M0 0h22v22H0z"></path></clipPath></defs></svg>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Beneficiary.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SvgBeneficiary = Object.assign(_sfc_main$5, { __name: "SvgBeneficiary" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Transfer",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        class: [
          "hover:fill-sidebar-active-text",
          {
            "fill-white": !__props.active,
            "fill-sidebar-active-text": __props.active
          }
        ],
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><g clip-path="url(#clip0_234_366)"><path d="M15.3996 -0.433144V7.96686C15.3996 7.96686 13.9996 6.91686 13.2996 6.91686C12.2496 6.91686 11.5496 8.31686 12.5996 9.36686L15.3996 12.1669V15.6669H5.59961V-0.433144H15.3996ZM6.29961 12.8669V14.9669H8.39961C8.39961 13.5669 7.69961 12.8669 6.29961 12.8669ZM14.6996 12.8669C13.2996 12.8669 12.5996 13.5669 12.5996 14.9669H14.6996V12.8669ZM10.1496 5.86686C8.38561 5.86686 7.69961 6.80486 7.69961 7.96686C7.69961 9.12886 8.39961 10.0669 10.1496 10.0669C11.5496 10.0669 11.8996 9.36686 11.8996 9.36686C11.1996 8.31686 11.5496 7.26686 12.2496 6.56686C12.2496 6.56686 11.5496 5.86686 10.1496 5.86686ZM14.6996 0.266856H12.5996C12.5996 1.66686 13.2996 2.36686 14.6996 2.36686V0.266856ZM8.39961 0.266856H6.29961V2.36686C7.69961 2.36686 8.39961 1.66686 8.39961 0.266856Z"></path><path d="M4.9 15.4L6.3 16.8H14.7L16.1 15.4V12.6C16.1 12.6 12.908 9.73 12.6 9.1C12.25 8.4 12.6 7 14.7 8.4C16.002 9.268 17.5 10.5 18.2 11.2C18.9 11.9 19.6 15.4 19.6 16.8C19.6 18.2 16.8 21 16.8 21H11.2C11.2 21 8.582 19.39 7 18.2C1.4 14 1.4 11.2 4.9 13.3C1.4 11.2 0.7 8.4 4.9 10.5C0.7 8.4 0.7 5.6 4.9 7.7C0.7 5.6 2.8 4.2 4.9 5.25V15.4Z"></path></g><defs><clipPath id="clip0_234_366"><rect width="21" height="21"></rect></clipPath></defs></svg>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Transfer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SvgTransfer = Object.assign(_sfc_main$4, { __name: "SvgTransfer" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Profile",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        class: [
          "hover:fill-sidebar-active-text",
          {
            "fill-white": !__props.active,
            "fill-sidebar-active-text": __props.active
          }
        ],
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M10 4C8.93913 4 7.92172 4.42143 7.17157 5.17157C6.42143 5.92172 6 6.93913 6 8C6 9.06087 6.42143 10.0783 7.17157 10.8284C7.92172 11.5786 8.93913 12 10 12C11.0609 12 12.0783 11.5786 12.8284 10.8284C13.5786 10.0783 14 9.06087 14 8C14 6.93913 13.5786 5.92172 12.8284 5.17157C12.0783 4.42143 11.0609 4 10 4ZM10 6C10.5304 6 11.0391 6.21071 11.4142 6.58579C11.7893 6.96086 12 7.46957 12 8C12 8.53043 11.7893 9.03914 11.4142 9.41421C11.0391 9.78929 10.5304 10 10 10C9.46957 10 8.96086 9.78929 8.58579 9.41421C8.21071 9.03914 8 8.53043 8 8C8 7.46957 8.21071 6.96086 8.58579 6.58579C8.96086 6.21071 9.46957 6 10 6ZM17 12C16.84 12 16.76 12.08 16.76 12.24L16.5 13.5C16.28 13.68 15.96 13.84 15.72 14L14.44 13.5C14.36 13.5 14.2 13.5 14.12 13.6L13.16 15.36C13.08 15.44 13.08 15.6 13.24 15.68L14.28 16.5V17.5L13.24 18.32C13.16 18.4 13.08 18.56 13.16 18.64L14.12 20.4C14.2 20.5 14.36 20.5 14.44 20.5L15.72 20C15.96 20.16 16.28 20.32 16.5 20.5L16.76 21.76C16.76 21.92 16.84 22 17 22H19C19.08 22 19.24 21.92 19.24 21.76L19.4 20.5C19.72 20.32 20.04 20.16 20.28 20L21.5 20.5C21.64 20.5 21.8 20.5 21.8 20.4L22.84 18.64C22.92 18.56 22.84 18.4 22.76 18.32L21.72 17.5V16.5L22.76 15.68C22.84 15.6 22.92 15.44 22.84 15.36L21.8 13.6C21.8 13.5 21.64 13.5 21.5 13.5L20.28 14C20.04 13.84 19.72 13.68 19.4 13.5L19.24 12.24C19.24 12.08 19.08 12 19 12H17ZM10 13C7.33 13 2 14.33 2 17V20H11.67C11.39 19.41 11.19 18.77 11.09 18.1H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.43 14.9 10.87 14.94 11.3 15C11.5 14.36 11.77 13.76 12.12 13.21C11.34 13.08 10.6 13 10 13ZM18.04 15.5C18.84 15.5 19.5 16.16 19.5 17.04C19.5 17.84 18.84 18.5 18.04 18.5C17.16 18.5 16.5 17.84 16.5 17.04C16.5 16.16 17.16 15.5 18.04 15.5Z"></path></svg>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Profile.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SvgProfile = Object.assign(_sfc_main$3, { __name: "SvgProfile" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Domiciliation",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        class: [
          "hover:fill-sidebar-active-text group-hover:fill-sidebar-active-text",
          {
            "fill-white": !__props.active,
            "fill-sidebar-active-text": __props.active
          }
        ]
      }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22m3.45-9.808c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02m-2 2.159c-1.912-2.065-4.987-2.065-6.9 0a.75.75 0 1 1-1.1-1.02c2.506-2.705 6.594-2.705 9.1 0a.75.75 0 1 1-1.1 1.02m-2 2.158c-.808-.871-2.092-.871-2.9 0a.75.75 0 1 1-1.1-1.019c1.401-1.513 3.699-1.513 5.1 0a.75.75 0 0 1-1.1 1.02" class="${ssrRenderClass([
        "hover:fill-sidebar-active-text group-hover:fill-sidebar-active-text",
        {
          "fill-white": !__props.active,
          "fill-sidebar-active-text": __props.active
        }
      ])}"></path></svg>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Domiciliation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SvgDomiciliation = Object.assign(_sfc_main$2, { __name: "SvgDomiciliation" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Users",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "22",
        height: "22",
        viewBox: "0 0 22 22",
        class: [
          "fill-primary-light stroke-primary-light group-hover:stroke-white",
          {
            "fill-white stroke-white": __props.active,
            "fill-primary-light stroke-primary-light": !__props.active
          }
        ],
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M10.7812 11.2812H10.7822C11.5652 11.2806 12.3398 11.4454 13.0547 11.7646C13.7694 12.0838 14.4087 12.5505 14.9307 13.1338C15.4527 13.7172 15.8458 14.4046 16.084 15.1504C16.3221 15.8963 16.3999 16.6848 16.3125 17.4629V17.4639C16.3094 17.4909 16.3001 17.5173 16.2852 17.54C16.2703 17.5627 16.25 17.5812 16.2266 17.5947C14.5698 18.5452 12.6923 19.0446 10.7822 19.042H10.7812C8.99064 19.0444 7.22874 18.6055 5.65039 17.7676L5.33691 17.5947C5.31343 17.5812 5.29323 17.5627 5.27832 17.54C5.27079 17.5285 5.26437 17.5158 5.25977 17.5029L5.25098 17.4639C5.11345 16.1996 5.40963 14.9264 6.09082 13.8525C6.59385 13.0645 7.28758 12.4151 8.10742 11.9658C8.92705 11.5168 9.84667 11.2812 10.7812 11.2812ZM4.7168 6.56445C5.29906 6.56445 5.85781 6.79629 6.26953 7.20801C6.681 7.61964 6.91204 8.17774 6.91211 8.75977C6.91211 9.342 6.68121 9.90078 6.26953 10.3125C5.85781 10.7242 5.29906 10.9551 4.7168 10.9551C4.13457 10.955 3.57576 10.7242 3.16406 10.3125C2.75245 9.9008 2.52148 9.34194 2.52148 8.75977C2.52155 8.17779 2.75266 7.61963 3.16406 7.20801C3.57576 6.79631 4.13457 6.56448 4.7168 6.56445ZM16.8467 6.56445C17.4288 6.56455 17.9868 6.79637 18.3984 7.20801C18.8101 7.61967 19.0419 8.17762 19.042 8.75977C19.042 9.34203 18.8102 9.90078 18.3984 10.3125C17.9868 10.724 17.4287 10.955 16.8467 10.9551C16.2644 10.9551 15.7057 10.7242 15.2939 10.3125C14.8822 9.90078 14.6514 9.34203 14.6514 8.75977C14.6514 8.17768 14.8824 7.61965 15.2939 7.20801C15.7057 6.79629 16.2644 6.56445 16.8467 6.56445ZM10.7812 3.19531C11.5422 3.19531 12.2725 3.49804 12.8105 4.03613C13.3485 4.57417 13.6513 5.30363 13.6514 6.06445C13.6514 6.82543 13.3486 7.55566 12.8105 8.09375C12.2725 8.63177 11.5422 8.93359 10.7812 8.93359C10.0205 8.9335 9.29092 8.63161 8.75293 8.09375C8.21484 7.55566 7.91211 6.82543 7.91211 6.06445C7.91215 5.30358 8.21494 4.57418 8.75293 4.03613C9.29094 3.49812 10.0204 3.19541 10.7812 3.19531Z"></path><path d="M4.56599 12.8066L4.53365 12.8561C3.67045 14.2144 3.26985 15.8155 3.39169 17.4203C2.85187 17.3385 2.32093 17.2061 1.80588 17.025L1.70255 16.989C1.61018 16.9566 1.52927 16.898 1.46975 16.8202C1.41022 16.7425 1.37466 16.6491 1.36742 16.5515L1.35844 16.4428C1.35125 16.3523 1.34766 16.2622 1.34766 16.1723C1.34771 15.3049 1.68231 14.4709 2.28179 13.844C2.88127 13.2171 3.69944 12.8455 4.56599 12.8066ZM18.1725 17.4203C18.2954 15.7953 17.8826 14.1748 16.9973 12.8066C17.4494 12.8269 17.8927 12.938 18.3009 13.1334C18.7091 13.3287 19.0737 13.6043 19.3731 13.9437C19.6725 14.283 19.9004 14.6792 20.0433 15.1086C20.1862 15.5379 20.2411 15.9917 20.2048 16.4428L20.1959 16.5515C20.1885 16.649 20.1528 16.7422 20.0933 16.8197C20.0338 16.8973 19.953 16.9558 19.8607 16.9881L19.7574 17.0241C19.2477 17.205 18.7194 17.3371 18.1725 17.4203Z"></path></svg>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Users.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SvgUsers = Object.assign(_sfc_main$1, { __name: "SvgUsers" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Infos",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "24",
        height: "23",
        viewBox: "0 0 24 23",
        class: [
          "group-hover:fill-sidebar-active-text",
          {
            "fill-bg-secondary stroke-primary-light group-hover:stroke-sidebar-active-text": !__props.active,
            "fill-white stroke-sidebar-active-text": __props.active
          }
        ],
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M16.3648 7.19174V9.53003M16.3631 4.3546C16.335 4.3546 16.3072 4.34904 16.2813 4.33825C16.2554 4.32746 16.2319 4.31165 16.2121 4.29173C16.1924 4.27181 16.1768 4.24817 16.1662 4.22219C16.1556 4.1962 16.1503 4.16837 16.1505 4.14031C16.1505 4.02031 16.2465 3.92603 16.3631 3.92603M16.3665 4.3546C16.423 4.35414 16.4771 4.33137 16.5169 4.29123C16.5567 4.25109 16.5791 4.19685 16.5791 4.14031C16.5793 4.11225 16.574 4.08443 16.5634 4.05844C16.5528 4.03245 16.5372 4.00881 16.5174 3.98889C16.4976 3.96897 16.4741 3.95316 16.4482 3.94237C16.4223 3.93158 16.3945 3.92602 16.3665 3.92603M0.86077 21.8437H21.4442M0.857422 21.8455V20.0901C0.857422 18.6931 1.41235 17.3534 2.40013 16.3656C3.38791 15.3778 4.72763 14.8229 6.12456 14.8229C7.5215 14.8229 8.86122 15.3778 9.849 16.3656C10.8368 17.3534 11.3917 18.6931 11.3917 20.0901V21.8455M12.0671 11.3043C13.0633 12.2791 14.3636 12.8829 15.7511 13.0149C17.1386 13.147 18.5294 12.7993 19.6916 12.0298C20.8538 11.2604 21.717 10.1158 22.1372 8.7869C22.5575 7.458 22.5094 6.02517 22.001 4.72743C21.4927 3.42968 20.5547 2.34548 19.3436 1.65568C18.1325 0.965877 16.7215 0.712178 15.3459 0.936903C13.9704 1.16163 12.7135 1.85119 11.7849 2.89056C10.8563 3.92993 10.3121 5.25627 10.2431 6.64834M2.80134 11.498C2.80134 11.9345 2.88732 12.3668 3.05437 12.7701C3.22141 13.1734 3.46626 13.5398 3.77492 13.8484C4.08358 14.1571 4.45002 14.402 4.8533 14.569C5.25659 14.736 5.68883 14.822 6.12534 14.822C6.56186 14.822 6.9941 14.736 7.39738 14.569C7.80067 14.402 8.1671 14.1571 8.47576 13.8484C8.78443 13.5398 9.02927 13.1734 9.19632 12.7701C9.36336 12.3668 9.44934 11.9345 9.44934 11.498C9.44934 11.0615 9.36336 10.6293 9.19632 10.226C9.02927 9.8227 8.78443 9.45626 8.47576 9.1476C8.1671 8.83894 7.80067 8.5941 7.39738 8.42705C6.9941 8.26 6.56186 8.17403 6.12534 8.17403C5.68883 8.17403 5.25659 8.26 4.8533 8.42705C4.45002 8.5941 4.08358 8.83894 3.77492 9.1476C3.46626 9.45626 3.22141 9.8227 3.05437 10.226C2.88732 10.6293 2.80134 11.0615 2.80134 11.498Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Infos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SvgInfos = Object.assign(_sfc_main, { __name: "SvgInfos" });
const navLinkRegistry = () => {
  return {
    dashboard: SvgDashboard,
    wallet: SvgWallet,
    beneficiary: SvgBeneficiary,
    transfer: SvgTransfer,
    profile: SvgProfile,
    domiciliation: SvgDomiciliation,
    users: SvgUsers,
    infos: SvgInfos
  };
};

export { navLinkRegistry as n };
//# sourceMappingURL=navlink-CM_94z47.mjs.map
