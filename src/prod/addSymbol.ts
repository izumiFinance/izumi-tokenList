import path from 'path'
import { fileDisplay } from './compile'
import { addSymbols } from './compile'


const symbolPath = fileDisplay(path.join(__dirname, "../prod/symbols"))
addSymbols(symbolPath)
