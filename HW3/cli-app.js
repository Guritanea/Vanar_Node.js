//let menu=require('./food/index').menu
//let {menu}=require('./food/index')

// let {menu}=require('./food/menu')
// let {printMenu, printMessage}=require('./food/helpers')

let {menu, printMenu, printMessage}=require('./food')


function mainLoop(){
    printMenu(menu, (option)=> {
    console.log("You've chosen", option)
    if(option!=""){
        //HW4:!!! мы имеим дело со стринг его необходимо конвертировать в целое число
        // добавить проверку и если выбрана не та опция вывести сообщение сообщение несуществуещая опция
       setTimeout(mainLoop, 500)
       }
  })
}

mainLoop()