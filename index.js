setInterval( // executa a função anonima e carrega as informações diretamente na pagina
    function() {
        var date = new Date(),
            day = date.getDate(), // puxa a o dia
            month = date.getMonth(), // puxa o mês (0 = Janeiro, 11 = Dezembro)
            year = date.getFullYear(), // puxa o ano
            monthArray = [ // informa o mês por extenso (0 = Janeiro, 11 = Dezembro)
                'Janeiro',
                'Fevereiro', 
                'Março',
                'Abril',
                'Maio',
                'Junho', 
                'Julho',
                'Agosto', 
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ]; 
        ;
        
        month = monthArray[month];
        var today = day + ' de ' + month + ' de ' + year; // concatena as informações em uma só linha

        console.log(today);
        document.getElementById('data').innerHTML = today; // envia as informações obtidas para o arquivo HTML no elemento de id 'data'
    }
)

setInterval(  // executa a função anonima e carrega as informações diretamente na pagina
    
    
    function() {
        var date = new Date(),
        hour = date.getHours(), // puxa a hora
        mins = date.getMinutes(), // puxa os minutos
        secs = date.getSeconds() // puxa os segundos
        ;

        // para mostrar as horas no formato padrão (00:00:00) 
        // cria-se uma função denominada zero(x) que retornará 
        // uma concatenação de um ‘0’ em frente a x, 
        // com a condição de x ser menor que 10
    
        // a function zero concatena a string (número) 0 em frente aos números
        // mantendo o zero na frente dos números menores que 10.
        function zero(x){
            if (x < 10) {
                x = '0' + x;
            } return x;
        }

        // chama-se a função zero para que ela retorne a concatenação
        // com os minutos e segundos
        mins = zero(mins);
        secs = zero(secs);       

        var time = hour + ':' + mins + ':' + secs; // concatena as informações em uma só linha
        document.getElementById('hora').innerHTML = time; // envia as informações obtidas para o arquivo HTML no elemento de id 'time'
    }
    )