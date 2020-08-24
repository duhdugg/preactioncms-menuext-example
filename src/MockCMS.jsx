import React from 'react'
import { Boilerplate, NavBar } from '@preaction/bootstrap-clips'
import { example } from './example.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const mockPreaction = {
  appRoot: '',
  editable: false,
  settings: { siteTitle: 'Preaction CMS Extension Testing' },
  page: { key: 'test', title: 'Test', settings: {} },
  navigate: (path) => {
    console.debug(`navigate('${path}')`)
  },
}

const mockMenu = [example(mockPreaction)]

function MockCMS() {
  return (
    <div className='App'>
      <Boilerplate
        navBar={
          <NavBar
            brand={{
              name: mockPreaction.settings.siteTitle,
              href: `${mockPreaction.appRoot}/`,
              onClick: (e) => {
                e.preventDefault()
                console.debug(true)
              },
            }}
            fixed-to='top'
            theme='dark'
            menu={mockMenu}
          />
        }
      ></Boilerplate>
    </div>
  )
}

export default MockCMS
