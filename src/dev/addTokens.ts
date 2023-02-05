import { addTokens } from "./compileDev";
import { fileDisplay } from "./compileDev";
import path from "path";

const tokenPath = fileDisplay(path.join(__dirname, "../dev/tokens"));
addTokens(tokenPath);