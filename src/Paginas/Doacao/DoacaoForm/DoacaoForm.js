import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import './DoacaoForm.css';
import Modal from '../../../Componentes/Modal/Modal'; 

function DoacaoForm() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  function handleModalClose() {
    setIsSuccessModalOpen(false);
  }

  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
    actions.resetForm(); 
    setIsSuccessModalOpen(true); 
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }

  return (
    <div className="Doacao-form">
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
          telefone: '', // Adicionando o campo de telefone
        }}
        render={({ isValid, setFieldValue }) => (
          <Form>
            <div className="form-control-group">
              <label>Cep: </label>
              <Field name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
            </div>
            <div className="form-control-group">
              <label>Logradouro: </label>
              <Field name="logradouro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Número: </label>
              <Field name="numero" type="text" />
            </div>
            <div className="form-control-group">
              <label>Complemento: </label>
              <Field name="complemento" type="text" />
            </div>
            <div className="form-control-group">
              <label>Bairro: </label>
              <Field name="bairro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Cidade: </label>
              <Field name="cidade" type="text" />
            </div>
            <div className="form-control-group">
              <label>Doação: </label>
              <Field name="doacao" as="select">
                <option value="">Selecione uma opção</option>
                <option value="cesta-basica">Cesta Básica</option>
                <option value="alimentos">Alimentos</option>
                <option value="refeicao-completa">Refeição Completa</option>
              </Field>
            </div>
            <div className="form-control-group">
              <label>Validade: </label>
              <Field name="validade" type="date" />
            </div>
            <div className="form-control-group">
              <label>Entrega: </label>
              <div className="opc-doacao">
                <label>
                  <Field type="radio" name="entrega" value="retirar" />
                  Retirar no Estabelecimento
                </label>
                <label>
                  <Field type="radio" name="entrega" value="entregar" />
                  Entregamos o Produto
                </label>
              </div>
            </div>
            <div className="form-control-group">
              <label>Telefone: </label>
              <Field name="telefone" type="text" />
            </div>
            <button className="bttn" type="submit" disabled={!isValid}>
              Cadastrar
            </button>
          </Form>
        )}
      />
      <Modal isOpen={isSuccessModalOpen} onClose={handleModalClose}>
        Doação cadastrada com sucesso!
      </Modal>
    </div>
  );
}

export default DoacaoForm;

