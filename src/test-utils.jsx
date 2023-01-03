import React from 'react'
import {render} from '@testing-library/react'
import { Provider } from 'react-redux'
import { AllTheProviders } from './providers/app-providers'



const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}