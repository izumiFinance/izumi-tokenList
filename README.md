# iZiSwap-tokenList

The default token list maintained by iZUMi.finance.

## Adding a token
To request that we add a token to the list, 
[file an issue](https://github.com/izumiFinance/izumi-tokenList/issues/new?assignees=&labels=token+request&template=issue--token-request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D).


## Usage
### dev
1、run `npm run-script build_symbolsDev` to merge symbols in ./src/dev/symbols/

2、run `npm run-script build_tokensDev`  to merge tokens in ./src/dev/tokens/ and output ./build/tokenListDev.josn 
### prod
1、run `npm run-script build_symbols` to merge symbols in ./src/prod/symbols/

2、run `npm run-script build_tokens`  to merge tokens in ./src/prod/tokens/ and output ./build/tokenList.json
