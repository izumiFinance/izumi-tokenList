import { addTokens } from "./compile";
import { fileDisplay } from "./compile";
import path from "path";

const tokenPath = fileDisplay(path.join(__dirname, "../prod/tokens"))
addTokens(tokenPath);