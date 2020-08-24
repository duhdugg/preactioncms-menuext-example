function example(preaction) {
  return {
    name: `Current Page: ${
      preaction.page && preaction.page.title ? preaction.page.title : undefined
    }`,
    href: '//wikipedia.com',
    onClick: (event) => {
      event.preventDefault()
      window.open('//wikipedia.com', '_blank', 'noopener,noreferrer')
    },
    order: 20,
  }
}

example.extensionType = 'menu'

export { example }
