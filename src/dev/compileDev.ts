import path from 'path'
import fs from 'fs'



let tokenlist: any[] = new Array();
let symbolList = {};

export function fileDisplay(filePath: string) {
  let temp: string[] = new Array();
  // return files in filePath
  const files = fs.readdirSync(filePath);
  for (let filename of files) {
    // get the absolute filepath
    const filepath = path.join(filePath, filename);
    const stats = fs.statSync(filepath);
    const isFile = stats.isFile(); 
    const isDir = stats.isDirectory(); 
    if (isFile) {
      temp.push(filepath);
    }
    if (isDir) {
      fileDisplay(filepath); 
    }
  }
  return temp;
}

export async function getTokenList(pathList:any) {
  
  for (let curr_path of pathList) {
    import(curr_path).then(tokens =>{
      tokenlist = [...tokenlist,...tokens.tokens]
    })
}
}

export async function addTokens(pathList:any){
  await getTokenList(pathList);
  await Promise.allSettled(tokenlist)
  console.log(JSON.stringify(tokenlist, null, "  "));
}


export async function getSymbolList(pathList:any) {
 
  for (let curr_path of pathList){
    import(curr_path).then(TokenSymbol =>{
      const datalist = TokenSymbol.TokenSymbol;
      symbolList = Object.assign(symbolList,datalist);   
    })
  }
  return [0];
}

export async function addSymbols(pathList:any){
  const endFlag = await getSymbolList(pathList);
  await Promise.allSettled(endFlag);
  
  var SymbolList = 'export enum TokenSymbol {\n';

for(let [key,val] of Object.entries(symbolList)){
    SymbolList = SymbolList + key + '=' + "'"+val+"'" + ',\n';
}
SymbolList = SymbolList + '}';
  console.log(SymbolList);

}




