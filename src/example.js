function example(preaction) {
  return {
    name:
      preaction.page && preaction.page.title
        ? `Search Wikipedia: ${preaction.page.title}`
        : 'Wikipedia',
    href: 'https://en.wikipedia.com',
    onClick: (event) => {
      if (preaction.page && preaction.page.title) {
        event.preventDefault()
        window.open(
          'https://en.wikipedia.org/w/index.php?search=' +
            encodeURIComponent(preaction.page.title),
          '_blank',
          'noopener,noreferrer'
        )
      }
    },
    order: 20,
  }
}

example.extensionType = 'menu'

export { example }
