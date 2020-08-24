import React from 'react'
import { render } from '@testing-library/react'
import MockCMS from './MockCMS'

test('renders learn react link', () => {
  const result = render(<MockCMS />)
  expect(result).toBeTruthy()
})
