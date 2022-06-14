import { useState } from 'react';
import Form from "./Form";
import DeleteModal from "./DeleteModal";

const AssignmentView = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (

  <article >
  <div className='modalBackdrop'>
    <div className={`form-modalContainer ${props.status?.toLowerCase()}`}>
      <div id="cancel-X" onClick={props.onBack}>x</div>
      <header id="assignment-header"><h3>{props.title}</h3></header>
      <br />
      <p>{props.subject?.name}</p>
      <br />
      <p>{props.description}</p>
      <br />
      <p>{props.url}</p>
      <br />
      <p>{props.status}</p>
      <br />
      {!props.adminMode &&
      <button disabled={['Started', 'Complete'].includes(props.status)} onClick={props.onStart}>Start</button>}
      {!props.adminMode && <button disabled={props.status === 'Complete'} onClick={props.onComplete}>Complete</button>}
      {props.adminMode && <button onClick={() => { setShowForm((prev) => !prev); }}>Edit</button>}
      {props.adminMode && <button onClick={() => setShowModal(true)}> Delete </button>}


      {showForm && <Form
        id={props.id}
        title={props.title}
        subject={props.subject?.name}
        description={props.description}
        url={props.url}
        defaultdueDate={props.defaultDueDate}
        onBack={props.onBack}
        toggle={props.edit}
        adminMode={props.adminMode}

      />}
      </div>
      </div>
      {showModal && <DeleteModal closeModal={() => setShowModal(false)} id={props.id} title={props.title} onBack={props.onBack} adminMode={props.adminMode}/>}
    </article>
  );
};

export default AssignmentView;