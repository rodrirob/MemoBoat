const name = document.getElementById('uname')
const pass = document.getElementById('password')
const form = document.getElementById('myform')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let errors = []
    if (name.value === '' || name.value == null){
        errors.push('*User Name is required')
    }

    if (pass.value === '' || pass.value == null){
        errors.push('*Password is required')
        if (pass.length < 8) {
            errors.push("*Password must be at least 8 characters")
        }
    
    else if (pass.value.search(/[a-z]/i) < 0) {
            errors.push("*Password must contain at least one letter.")
        }
    
    else if (pass.value.search(/[0-9]/) < 2) {
            errors.push("*Password must contain at least three digit.")
        }
    }
  
    if(errors.length > 0) {
        e.preventDefault()
        errorElement.innerText = errors.join('\n ')
    }

})


