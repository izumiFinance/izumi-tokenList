//import { tokens } from "./tokens/tokensDev";

import path from 'path'
import fs from 'fs'

export function fileDisplay(filePath: string) {
  let temp: string[] = new Array();
  // 根据文件路径读取文件，返回一个文件列表
  const files = fs.readdirSync(filePath);
  // 遍历读取到的文件列表
  for (let filename of files) {
    // path.join得到当前文件的绝对路径
    const filepath = path.join(filePath, filename);
    // 根据文件路径获取文件信息
    const stats = fs.statSync(filepath);
    const isFile = stats.isFile(); // 是否为文件
    const isDir = stats.isDirectory(); // 是否为文件夹
    if (isFile) {
      temp.push(filepath);
    }
    if (isDir) {
      fileDisplay(filepath); 
    }
  }
  return temp;
}

let tokenlist: any[] = new Array();
export async function getTokenList(pathList:any) {
  
  for (let curr_path of pathList) {
    import(curr_path).then(tokens =>{
      //console.log(tokens)
      tokenlist = [...tokenlist,...tokens.tokens]
      //console.log(JSON.stringify(tokenlist, null, "  "));
    })
}
}
export async function addTokens(pathList:any){
  await getTokenList(pathList);
  await Promise.allSettled(tokenlist)
  console.log(JSON.stringify(tokenlist, null, "  "));
}

let symbolList = {};
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




