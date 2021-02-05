import { reportWebVitals } from './reportWebVitals'
import { waitFor } from '@testing-library/react'
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}))

test('reportWebVitals', async () => {
  reportWebVitals(() => null)
  await waitFor(() => expect(getCLS).toHaveBeenCalled())
  await waitFor(() => expect(getFID).toHaveBeenCalled())
  await waitFor(() => expect(getFCP).toHaveBeenCalled())
  await waitFor(() => expect(getLCP).toHaveBeenCalled())
  await waitFor(() => expect(getTTFB).toHaveBeenCalled())
})
