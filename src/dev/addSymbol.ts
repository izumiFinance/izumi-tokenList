import path from 'path'
import { fileDisplay } from './compileDev'
import { addSymbols } from './compileDev'


const symbolPath = fileDisplay(path.join(__dirname, "../dev/symbols"))
addSymbols(symbolPath)
