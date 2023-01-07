const readFile = require('../index.js');

const arr = [{
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
}];

describe('Read File', () => {
  it('Is a function', () => {
    expect(typeof readFile).toBe('function');    
  });   
  
  it('Is an Array', async () =>{
     const links = await readFile('C:/xampp/htdocs/nodeTest/test/file/texto.md');
     expect(links).toEqual(arr);
  });

  it('Is an Error', async () => {
    const links = await readFile('C:/xampp/htdocs/nodeTest/test/file/texto_2.md');
    expect(links).toBe('links was found');
  });
});