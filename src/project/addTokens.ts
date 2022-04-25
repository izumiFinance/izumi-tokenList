import { addTokens } from "./compile";
import { fileDisplay } from "./compile";
import path from "path";

const tokenPath = fileDisplay(path.join(__dirname, "../project/tokens"))
addTokens(tokenPath);