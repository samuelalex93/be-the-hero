import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg'

export default function Newincident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewincident(e){
    e.preventDefault();
    
    const data = {
      title,
      description,
      value,
    };

    try{
      await api.post('incidents', data,{
        headers: {
          Authorization: ongId,
        }
      });
      
      history.push('/profile');

    } catch (err) {
      alert("Falha ao cadastrar caso, tente novamente.");
    }
  }

  return ( 
  <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um heroí para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar a pagina inicial
          </Link>
        </section>

        <form onSubmit={handleNewincident}>
          <input 
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descriçao"
            value={description}
            onChange={e => setDescription(e.target.value)} 
          />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <div>
            <button className="button" type="submit">Cadastrar</button>
          </div>

        </form>
      </div>
    </div>
  )
}