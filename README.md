# DocAI

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
![Static Badge](https://img.shields.io/badge/Version-1.0-blue)
![Vercel](https://vercelbadge.vercel.app/api/MatheusOliveiraAzevedo/assistente-docs)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)


Projeto construido para facilitar a extração de informações de PDFs, principalmente os mais extensos. Basta anexar o PDF e fazer uma pergunta sobre o documento.

## Demonstração

[Visualizar o projeto!](https://assistente-docs.vercel.app/)

<p float="left">
  <img src="public/assets/screenshot.png" width="70%" />
  <img src="public/assets/screenshot2.png" width="20%" />
</p>

## Instalação

```bash
git clone https://github.com/MatheusOliveiraAzevedo/assistente-docs.git
cd assistente-docs
npm install
npm run dev
```

## Instruções de uso

Ao abrir a tela do DocAI, você vera na base da tela um campo de input de texto, e a direita um botão de anexo. 

Clique em ***Anexo***, escolha um arquivo .pdf para que o assistente possa te auxiliar. 

Depois do arquivo carregado, você só precisa escrever uma pergunta sobre o documento no campo de texto e clicar em ***Enviar***, ou pressionar a tecla ***Enter***

Você vera na tela a resposta do assistente escrita no campo logo acima do input de texto, onde as suas perguntas foram registradas.

## Técnologias utilizadas

- React.js
- Next.js
- TypeScript
- Tailwind CSS
- OpenAI API
- Supabase
