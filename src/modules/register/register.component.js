import "./register.css";
const { default: eventSubmit } = require("./register");

const templateRegistration = () => {
  const form = document.createElement('form');
  const register = `
  <section class="register">
    <div class="header-section bg-dark-slate-gray">
      <div class="container">
        <h1>Cadastro</h1>
      </div>
    </div>
    <div class="container container-form bg-gray-lightest">
        <fieldset>
          <legend>Dados pessoais:</legend>
            <label for="name" class="">
              Nome: *
              <input class="form-control" name="name" id="name" type="text" data-rel="name" required/>
            </label>

            <div class="group group-form group-form-2">
              <label for="birth" class="">
                Data de nascimento: *
                <input class="form-control" name="birth" id="birth" type="date" min="1901-01-01" data-rel="birth" required/>
              </label>
              <label for="cpf" class="">
                CPF: *              
                <input class="form-control" minlength="11" type="text" name="cpf" id="cpf" data-rel="cpf" required/>
              </label>
            </div>

            <label for="email">
              E-mail: *
              <input class="form-control" name="email" id="email" type="email" data-rel="email" required/>
            </label>
        </fieldset>

        <fieldset>
          <legend>Dados para contato:</legend>
            <label for="cep" class="">
              CEP: *
              <input class="form-control" name="cep" id="cep" type="text" data-rel="cep" minlength="8" maxlength="9" required/>
            </label>
            <label for="address">
              Logradouro: *
              <input class="form-control" name="address" id="address" type="text" data-rel="address" required/>
            </label>
            <div class="group group-form group-form-2">
              <label for="number" class="">
                Número: *
                <input class="form-control" name="number" id="number" type="text" data-rel="number" required/>
              </label>
              <label for="complement" class="">
                Complemento:
                <input class="form-control" name="complement" id="complement" data-rel="complement" type="text"/>
              </label>
            </div>
            <div class="group group-form group-form-3">
              <label for="city" class="">
                Cidade: *
                <input class="form-control" name="city" id="city" type="text" data-rel="city" required/>
              </label>
              <label for="district" class="">
                Bairro: *
                <input class="form-control" name="district" id="district" type="text" data-rel="district" required/>
              </label>
              <label for="uf" class="">
                UF: *
                <input class="form-control" name="uf" id="uf" type="text" data-rel="uf" required/>
              </label>
            </div>
            <label for="description">
              Descrição: 
              <textarea class="form-control" id="description" data-rel="description" rows="3"></textarea>
            </label>
        </fieldset>

        <div class="form-footer">
          <button type="submit" class="btn-register">Cadastrar</button>
        </div>      
    </div>
  </section>`

  form.innerHTML = register;
  eventSubmit(form);
  return form;
}

export default  templateRegistration;