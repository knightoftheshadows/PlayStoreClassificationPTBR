# Text Classification 

This is an easy to understand script for 'Text Classfication' using SVM and Naive Bayes.

- coletei usando o scraper:
  36 reviews do cartao atacadao
  100 do banco do brasil
  89 cartao carrefour
  28 cartao luiza
  56 delivery much
  100 cartao digio
  83 hipercard
  100  ifood
  100 itau
  20 do mercado livre 
  100 no muambator,
  100 do nubank 
  100 do olx
  100 do ourocard
  100 do cartao riachuelo
  5 techtudo
  100 tudo gostoso
  14 do urbano norte, 
  100 99taxis
  100 afinador cifra club
  34 apontador
  100 bike itau
  9 bike registrada
  100 btg pactual digital
  100 caixa
  100 chama gas
  100 cittamobil
  100 easynvest
  16 fogas
  24 rede
  80 rendafixa
  100 santander
  41 tesouro direto
  15 tri
  11 ufrgs mobile
  36 uninove
  100 xp investimentos
  100 yellow

TOTAL> 2692 reviews
  
script para usar o scraper:
node playscraper.js > output.txt
grep -E '(    text:)' output.txt > output2.txt
mv output2.txt itau.txt
