

// HTML elements------------------------------------------------------------------------

// Campo input de cep (usar .value)
const input = document.querySelector('#cep');

// Botao buscar
const formBuscar = document.querySelector('#formcep');

// Output numero cep (usar textContent)
const cep = document.querySelector(".numero-cep");

// Tag sucesso/fracasso 
const tag = document.querySelector(".tag-endereco");

// Output nome da rua
const rua = document.querySelector(".resposta-rua");

// Output nome do bairro
const bairro = document.querySelector(".resposta-bairro");

// Output cidade/uf
const cidade = document.querySelector(".resposta-cidade");

// Box de tags do footer - Buscar Novamente
const boxTagsFooter = document.querySelector('.box-tags-footer');


//----------------------------------------------------------------------------------------

// Formataçao automática do input de cep - Remove todo caractere que nao for dígito(num)
input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');
});
//-----------------------------------------------------------------------------------------


// Botao - Funcionalidade => Fetch na API => Retorna e 'formata' dados com json() => Troca elementos internos e classes dos cards
formBuscar.addEventListener('submit', async (event) => {
    event.preventDefault();
    const urlApi = `https://viacep.com.br/ws/${input.value}/json/`;
    if (input.value.length === 8) {
        const outputApi = await fetch(urlApi);
        // Processa dados brutos da API com json()
        const dados = await outputApi.json();
        // Enviar dados para os campos do box result (card)
        cep.textContent = dados.cep;
        if (!dados.erro) {
            tag.textContent = 'CEP Válido';
            tag.classList.remove('invalido');
            rua.textContent = dados.logradouro;
            bairro.textContent = dados.bairro;
            cidade.textContent = `${dados.localidade}/${dados.uf}`;
            let tagBotao = document.createElement('button');
            tagBotao.setAttribute('type', 'button');
            tagBotao.classList.add('tag-footer');
            tagBotao.textContent = dados.cep;
            input.value = '';
            boxTagsFooter.prepend(tagBotao);
            boxTagsFooter.lastElementChild.remove();

        } else {
            tag.classList.add('invalido');
            cep.textContent = 'Tente novamente';
            tag.textContent = 'CEP Inválido';
            rua.textContent = '...';
            bairro.textContent = '...';
            cidade.textContent = '...'
            let tagBotao = document.createElement('button');
            tagBotao.setAttribute('type', 'button');
            tagBotao.classList.add('fracasso', 'tag-footer');
            tagBotao.textContent = input.value.slice(0, 5);
            tagBotao.textContent += `-${input.value.slice(5)}`;
            input.value = '';
            boxTagsFooter.prepend(tagBotao);
            boxTagsFooter.lastElementChild.remove();
        }
    } else {
        alert('O CEP precisa ter 8 digitos.')
    }

});


// Botao busque novamente 

boxTagsFooter.addEventListener('click', (event) => {
    if (event.target.classList.contains('tag-footer')) {
        input.value = event.target.textContent.replace('-', '');
    }
})
