const perguntas = [pergunta1 = {
    question: 'Quem pintou o quadro Mona Lisa?',
    answers: ['Leonardo da Vinci','Frida Kahlo','Van Gogh','Picasso'],
    correta: 0 },

    pergunta2 = {
    question: 'Quem criou os personagens Mickey e Minnie Mouse?',
    answers: ['João Bittencourt','Walt Disney','Jeff Dalmon','Jack lee'],
    correta: 1},

    pergunta3 = {
    question: 'Quem foi o vencedor do Big Brother Brasil 20?',
    answers: ['Sandra maltine','Maria Luíza','Pedro alckimin',' Thelma Assis'],
    correta: 4},

    pergunta4 = {
    question: 'Quem é o autor da série literária Sítio do Picapau Amarelo?',
    answers: ['Vagner de Assis','Roberto magalhães','Monteiro Lobato','Ana bittencourt'],
    correta: 3},

    pergunta5 = {
    question: 'Qual fruta envenenada comeu a Branca de Neve?',
    answers: ['Melão','Maça','Laranja','Manga'],
    correta: 1}];


function viewquestion(){
    let title = document.getElementById('pergunta')
    title.textContent = perguntas[0].question; 
};

function viewanswers(){
    let q = document.querySelectorAll(".answer");
    q.forEach(function(element, index)
    {
        element.textContent = perguntas[0].answers[index];
        element.addEventListener('click', function(){
            if(index == perguntas[0].correta){
                alert( 'acertou!');
            }else{
                alert('errou!')
            };
        });
    });
}

viewquestion();
viewanswers();
