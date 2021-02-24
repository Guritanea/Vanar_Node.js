const fs=require('fs')
filenames = fs.readdirSync(__dirname); 
  
filenames.forEach(file => { 
  if (
    !file.endsWith('.json')&&
    file!='index.js'
  )
  {
        module.exports[file.split('.')[0]]=require('./'+file.split('.')[0])
   
  } 
}); 

