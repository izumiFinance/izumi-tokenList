import path from 'path'
import { fileDisplay } from './compile'
import { addSymbols } from './compile'


const symbolPath = fileDisplay(path.join(__dirname, "../project/symbols"))
addSymbols(symbolPath)
