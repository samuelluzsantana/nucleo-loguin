const scrollToContato = () => {
  const section = document.getElementById('contato')
  if (section) {
    const yOffset = 50 // Altura de deslocamento
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export { scrollToContato }
