    const fieldInputBin = document.getElementById('nunBin');
    const fieldOutDec = document.getElementById('resultDec');
    const alerta = document.getElementById('warning');

    function convertBinDec() {
        const numBinario = fieldInputBin.value;
        const nun = numBinario.length;
        let decimal = 0;

        for (let i = nun - 1; i >= 0; i--) {
            decimal += parseInt(numBinario[i]) * Math.pow(2, nun - 1 - i);
        }

        if (fieldOutDec === '') {
            fieldOutDec.value += '';
        } else {
            fieldOutDec.value = decimal;
        }
    };

    function clean() {
        fieldInputBin.value = '';
        fieldOutDec.value = '';
        alerta.innerHTML = '';

        fieldInputBin.focus();
    };

    fieldInputBin.addEventListener('input', (e) => {
        const field = e.target;
        let str = field.value.replace(/[^01]/g, '').substring(0, 20); // removendo tudo que não for 0 ou 1 

        if (str === '') {
            fieldOutDec.value = '';
        }
        field.value = str;
    });

    fieldInputBin.addEventListener('blur', (e) => {
        const field = e.target;
        let str = field.value;

        if (str === '') {
            alerta.innerHTML = '* Atenção o campo está vazio, por favor digitar número binário válido Ex. ( 001110 ) ';
            fieldOutDec.value = '';
        }
    });

    fieldInputBin.addEventListener('focus', (e) => {
        const field = e.target;
        let str = field.value;

        if (str === '') {
            alerta.innerHTML = '';
            fieldOutDec.value = '';

        }
    });
