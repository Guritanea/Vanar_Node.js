
const p=require('./food')

 const printMenu=p.helpers.printMenu
 let{menu}=p.menu

// const printMenu=p.helpers.printMenu
console.log('Id  Name'.padEnd(25)+'Volume     Price')

function mainLoop(){
  printMenu(menu, (option)=> {
    console.log("You've chosen", option)
    if(option!=""){
      menu.filter(element=>element.id==parseInt(option)?console.log(element.name+'  '+element.price.value+'  '+element.price.currency):false)
           //HW4:!!! мы имеим дело со стринг его необходимо конвертировать в целое число
        // добавить проверку и если выбрана не та опция вывести сообщение несуществуещая опция
       setTimeout(mainLoop, 500)
       }
  })
}

mainLoop()