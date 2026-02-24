const counterElement = document.getElementById('counterElement')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')


let count = 0

const updateCounter = (value) => {
    count = count + value
    counterElement.innerText = count
    
    if(count >= 10 ){
        plus.setAttribute('disabled', true)
        
    }
    else{
        plus.removeAttribute('disabled', false)
    }

    // minusbtn

    if(count <= 0 ){
        minus.setAttribute('disabled', true)
        
    }
    else{
        minus.removeAttribute('disabled', false)
    }
}

plus.addEventListener('click', () => {
    
    updateCounter(1)
   
})

minus.addEventListener('click', () => {

    updateCounter(-1)
    
})