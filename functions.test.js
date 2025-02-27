const minhasFuncoes = require('./functions')

test('O mínimo é 5 e passei 3, tem que retornar false',
    () => {
        expect(minhasFuncoes.fnValidarMinimoDeCaracteres(5, 'bob')).toBe(false);
    }
)

test('O mínimo é 3 e passei 5, tem que retornar true',
    () => {
        expect(minhasFuncoes.fnValidarMinimoDeCaracteres(3, 'teste')).toBe(true);
    }
)

test('Válidar campo obrigatório, se vazio return false', () => {
    expect(minhasFuncoes.fnValidarCampoObrigatorio("")).toBe(false);
})

test('Válidar campo obrigatório, se diferente de vazio return true', () => {
    expect(minhasFuncoes.fnValidarCampoObrigatorio("guilherme")).toBe(true);
})

test('Validar senha igual, se igual return true', () => {
    expect(minhasFuncoes.fnValidarSenhaIgual("senhasIguais", "senhasIguais")).toBe(true);
})

test('Validar senha igual, se diferente return false', () => {
    expect(minhasFuncoes.fnValidarSenhaIgual("senha", "diferente")).toBe(false);
})

test('Validar senha maiúscula, se maiúscula return true', () => {
    expect(minhasFuncoes.fnValidarSenhaMaiuscula("TESTE")).toBe(true);
})

test('Validar senha maiúscula, se minúscula return false', () => {
    expect(minhasFuncoes.fnValidarSenhaMaiuscula("teste")).toBe(false);
})

test('Validar senha com caracter especial, senha contendo caractere especial return true', () => {
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial("tEsTO993!")).toBe(true);
})

test('Validar senha com caracter especial, sem caractere especial return false', () => {
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial("teste")).toBe(false);
})

test('Validar email, se campo preenchido diferente de um e-mail return false', () => {
    expect(minhasFuncoes.fnValidarEmail("qu4lqu3erc01s4")).toBe(false);
})

test('Validar email, se campo preenchido igual a um e-mail return true', () => {
    expect(minhasFuncoes.fnValidarEmail("teste123@gmail.com")).toBe(true);
})