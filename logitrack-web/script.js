async function salvar() {
    //  Pegando os valores dos campos
    const codigo = document.getElementById('codigo').value;
    const destinatario = document.getElementById('destinatario').value;
    const cep = document.getElementById('cep').value;
    const logradouro = document.getElementById('logradouro').value;
    const bairro = document.getElementById('bairro').value;
    const localidade = document.getElementById('cidade').value;
    const uf = document.getElementById('estado').value;

    if (!codigo || !destinatario || !cep || !logradouro || !bairro || !localidade || !uf) {
        alert("⚠️ Erro: Todos os campos são obrigatórios! Por favor, preencha o endereço completo.");
        return; 
    }

    //  Criando o objeto para o Java
    const encomenda = {
        codigoRastreio: codigo,
        destinatario: destinatario,
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        localidade: localidade, 
        uf: uf,
        status: "POSTADO"
    };

    console.log("Tentando enviar dados:", encomenda);

    try {
        const response = await fetch('https://logitrack-api-production.up.railway.app/encomendas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(encomenda)
        });

        if (response.ok) {
            alert("✅ Sucesso! Encomenda cadastrada.");
            location.reload(); 
        } else {
            alert("❌ Erro no servidor Java.");
        }
    } catch (error) {
        console.error("Erro de conexão:", error);
        alert("❌ Erro: O Java (Backend) está ligado?");
    }
}

// Lógica do CEP mantendo a que já funciona
document.getElementById('cep').addEventListener('blur', async () => {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length === 8) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const dados = await response.json();
            if (!dados.erro) {
                document.getElementById('logradouro').value = dados.logradouro;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('cidade').value = dados.localidade;
                document.getElementById('estado').value = dados.uf;
            }
        } catch (e) {
            console.error("Erro ao buscar CEP");
        }
    }
});