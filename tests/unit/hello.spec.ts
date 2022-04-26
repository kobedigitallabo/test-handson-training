import { setActivePinia, createPinia } from 'pinia'
import useHello from '../../src/store/hello'

// disable vue warning in jest
console.warn = jest.fn();
const mock = {
}
jest.mock('../../src/apis/endpoints', () => ({}))
jest.mock('../../src/apis', () => ({
  getHello: async (id: string) => {
  }
}))

describe('Hello Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('getHello: 正常パターン', async () => {
  })
})
