import React,{useState} from 'react'
import api from '../../services/api';
import { Form, Container } from './styles';
import { useEffect } from 'react';




interface Cadastro {
  id:string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like?: number;
  dislike?: number;

}

const Dashboard: React.FC = () => {

  useEffect(() =>{
    api.get('/events').then((response) =>{
      setEvent(response.data);
    });
  },[]);


  const [events, setEvent] = useState<Cadastro[]>();

  async function handleAddProfessores(event: any) {
    event.preventDefault();

    const { target: form } = event;

    const Cadastro = {
      nomeevento: form.nomeevento.value,
      local: form.local.value,
      diasemana: form.diasemana.value,
      horario: form.horario.value,

    };

    await api
    .post('/events', Cadastro)
    .then(response => {
      window.location.href = `/${``}`;
    });

  form.reset();
}
  const deleteEvent = async (id: string) => {
    await api.delete(`/events/${id}`);
    return true;
  };


  const Like = async (id: string) => {

    const like = await api
      .post(`/events/like/${id}`)
      .then(response => response.data);

    setEvent({ ...events, ...like });

    return true;
  };

  const Dislike = async (id: string) => {

    const dislike = await api
      .post(`/events/dislike/${id}`)
      .then(response => response.data);

    setEvent({ ...events, ...dislike });

    return true;
  };



  return (

    <Container>
      <h1>Cadastro de Eventos</h1>
    <Form onSubmit={handleAddProfessores}>
      <input type='text' name='nomeevento' placeholder='Nome do Evento' />
      <input type='text' name='local' placeholder='Local do Evento' />
      <input type='text' name='diasemana' placeholder='Dia da Semana' />
      <input type='text' name="horario" placeholder="Horário" />
      <button type="submit">Cadastrar</button>
      </Form>

      <ul>

        {events ?
        events.map((evento) =>(


          <li key={evento.id}>
            <h3>Detalhes:</h3>
            <br></br>

          <p>{evento.nomeevento}</p>
          <p>{evento.local}</p>
          <p>{evento.diasemana}</p>
          <p>{evento.horario}</p>
          <p>Likes:{evento.like ? evento.like : "0"}</p>
          <p>Dislike:{evento.dislike ? evento.dislike: "0"}</p>

          <button onClick={() => deleteEvent(evento.id)}>Remover</button>
          <button onClick={() => Like(evento.id)}>Like</button>
          <button onClick={() => Dislike(evento.id)}>Dislike</button>


          </li>
        )):'Loading...'}


        <span>

        </span>

      </ul>

  </Container>


      )

};

export default Dashboard;
