const drumButton = document.getElementsByClassName('drum')


for(let i=0; i<drumButton.length; i++){
    drumButton[i].addEventListener('click',()=> {
        let textButton = drumButton[i].innerText
        music(textButton)
           JSAnim(textButton)  
    })
}


    document.body.addEventListener('keypress',(e)=> {
        let keyBoard = e.key
        music(keyBoard)
            JSAnim(keyBoard) 
})


function music (press){
    switch (press) {
        case 'w': 
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
        break;

        case 'a': 
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
        break;

        case 's': 
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
        break;

        case 'd': 
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
        break;

        case 'j': 
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
        break;

        case 'k': 
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
        break;
    
        case 'l': 
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
        break;
        default:
            alert(`${press.toUpperCase()} harfi bilan nomlangan tugma mavjud emas.`)
            break;
       }
}

function JSAnim(anim){
    let getBtn = document.querySelector(`.${anim}`)
    getBtn.classList.add('pressed')
    setTimeout(()=>{
        getBtn.classList.remove('pressed')
    }, 200)
}