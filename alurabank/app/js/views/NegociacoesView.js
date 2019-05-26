class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociaco => `
                    <tr>
                        <td>${negociaco.data.getDate()}/${negociaco.data.getMonth() + 1}/${negociaco.data.getFullYear()}</td>
                        <td>${negociaco.quantidade}</td>
                        <td>${negociaco.valor}</td>
                        <td>${negociaco.volume}</td>
                    </tr>
                    `).join()}
            </tbody>

            <tfoot>
            </tfoot>
        </table>    
        `;
    }
}
