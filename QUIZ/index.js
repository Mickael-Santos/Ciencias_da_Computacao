const perguntas = [pergunta1 = {
    question: 'Quem pintou o quadro Mona Lisa?',
    answers: ['Leonardo da Vinci','Frida Kahlo','Van Gogh','Picasso'],
    correta: 0,
    status: 0},

    pergunta2 = {
    question: 'Quem criou os personagens Mickey e Minnie Mouse?',
    answers: ['João Bittencourt','Walt Disney','Jeff Dalmon','Jack lee'],
    correta: 1,
    status: 0},

    pergunta3 = {
    question: 'Quem foi o vencedor do Big Brother Brasil 20?',
    answers: ['Sandra maltine','Maria Luíza','Pedro alckimin',' Thelma Assis'],
    correta: 3,
    status: 0},

    pergunta4 = {
    question: 'Quem é o autor da série literária Sítio do Picapau Amarelo?',
    answers: ['Vagner de Assis','Roberto magalhães','Monteiro Lobato','Ana bittencourt'],
    correta: 2,
    status: 0},

    pergunta5 = {
    question: 'Qual fruta envenenada comeu a Branca de Neve?',
    answers: ['Melão','Maça','Laranja','Manga'],
    correta: 1,
    status: 0}
    

    ];


let indexnumber = 0;
let MAX_QUESTION = perguntas.length;
let pontuacao = 0;

viewquestion()

function setNewQuestion()
{   
    indexnumber += 1
    return indexnumber;
}   



function viewquestion(){

    if(indexnumber == MAX_QUESTION)
    {
        selectedDiv = document.getElementById('conteudo').style.display="none";
        if(pontuacao >= 200)
        {
            selectedEnd = document.getElementById('endgame').style.display="block";
        }else
        {
            selectedEnd = document.getElementById('gameover').style.display="block";
        }
    }else{

        let cliqueStatus = 1;

        let title = document.getElementById('pergunta')
        title.textContent = perguntas[indexnumber].question; 

        let q = document.querySelectorAll(".answer");
        q.forEach(function(element, index)
        {
            element.textContent = perguntas[indexnumber].answers[index];
            element.addEventListener('click', function(){
                if(index == perguntas[indexnumber -2].correta){ 
                    if(cliqueStatus == 1)
                    {
                        pontuacao += 50;
                        cliqueStatus = 0;
                        console.log(pontuacao);
                    }
                    
                }else{
                    if(cliqueStatus == 1)
                    {
                        cliqueStatus = 0;
                        console.log(pontuacao);
                    }      
                };
            });
        });

        indexnumber = setNewQuestion();
        
    }
};




