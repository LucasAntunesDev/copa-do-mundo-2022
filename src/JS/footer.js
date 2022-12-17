const montarFooter = () => {
    const body = document.getElementById('body')
    const footerContainer = document.createElement('footer')
    const texto1 = document.createElement('h3')
    texto1.innerHTML = 'Feito por Lucas Antunes, 2022 &nbsp;&nbsp;|'
    const texto2 = document.createElement('h3')
    const github = document.createElement('a')
    github.setAttribute('href','https://github.com/LucasAntunes06')
    github.innerHTML = ' GitHub'
    footerContainer.appendChild(texto1)
    texto2.appendChild(github)
    texto2.setAttribute('class','hover:text-yellow-500 cursor-pointer')
    footerContainer.appendChild(texto2)
    footerContainer.setAttribute('class','h-12 mt-10 mb-0 w-full align-middle bg-gradient-to-r from-indigo-700 via-purple-700 to-purple-800 text-white border-t-2 border-purple-500 flex flex-row justify-center gap-x-4 items-center')
    body.appendChild(footerContainer)
  
  }
  
  montarFooter()