// Very simple state tracking
const containerWide = ref(false)
const container = ref(true)
const menuActive = ref(false)

const toggleMenuActive = () => {
  return (menuActive.value = !menuActive.value)
}

export default () => {
  return { menuActive, container, containerWide, toggleMenuActive }
}
