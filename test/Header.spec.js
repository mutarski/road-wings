import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/Header.vue'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
