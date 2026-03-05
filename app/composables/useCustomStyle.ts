export const useCustomStyle = () => {
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
  const buttonPt = {
    root: {
      class:
        'w-full font-semibold h-8 xl:h-9 rounded-md focus:outline-none focus:ring-2 focus:ring-ring-focus',
    },
    label: {
      class: 'text-xs xl:text-sm text-nowrap',
    },
  }

  return {
    selectInputPt,
    buttonPt,
  }
}
