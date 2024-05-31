const form = document.querySelector('#calculator')
const total = document.querySelector('#total')

form.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault()

  // Get values
  const salary = Number(document.querySelector('#salary').value)
  const shares = Number(document.querySelector('#shares').value)
  const strikePrice = Number(document.querySelector('#strikePrice').value)
  const preferredPrice = Number(document.querySelector('#preferredPrice').value)

  // Calculate total compensation
  const intrinsicValue = preferredPrice - strikePrice
  const totalEquty = shares * intrinsicValue
  const totalCompensation = salary + totalEquty

  // Display total
  total.value = totalCompensation
})
