const path = "./src/file/texto.md";
const fs = require('fs');

async function readFile(path){
   try{
      let text = await fs.promises.readFile(path,"utf-8"); 
      return links(text);
   }catch(error){
       handle(erro);
   }
}

function links(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const links = [];
    let temp;
    
    while( (temp = regex.exec(texto) ) !== null) {
       links.push({ 
           [temp[1]]: temp[2] //Grupos do Regexp
      });
    }     
    console.log(links); 
   return links.length === 0 ? "links was found" : links;
 }   

function handle(error){
    throw new Error(error);
}

//readFile(path);
module.exports = readFile;