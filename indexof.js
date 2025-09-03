const alunos = ['ana','maria','carlos','henrique','paulo','luiz','bento','laura']
const medias = [10,8,7.8,5.9,7,6.7,3.9,2]

const sala = [alunos, medias];

const receberAluno = function(aluno) {
    if(alunos.includes(aluno)) {
        let media = medias[alunos.indexOf(aluno)]
        return media
    }
    return 'aluno não encontrado'
}
console.log(receberAluno('luiz lins'))
