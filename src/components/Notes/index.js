import {useState} from 'react'
import {
  NotesContainer,
  CardContainer,
  NotesHeading,
  Input,
  TextArea,
  ButtonContainer,
  AddButton,
  ParaTitle,
  ParaDesc,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [idCounter, setIdCounter] = useState(0)

  const handleAddNote = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      setNotes(prevNotes => [...prevNotes, {id: idCounter, title, description}])
      setIdCounter(prevId => prevId + 1)
      setTitle('')
      setDescription('')
    }
  }

  return (
    <NotesContainer>
      <NotesHeading>Notes</NotesHeading>
      <CardContainer>
        <div>
          <Input
            type="text"
            value={title}
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />
          <br />
          <TextArea
            value={description}
            placeholder="Take a Note..."
            onChange={e => setDescription(e.target.value)}
          />
          <br />
          <ButtonContainer>
            <AddButton type="submit" onClick={handleAddNote}>
              Add
            </AddButton>
          </ButtonContainer>
        </div>
      </CardContainer>
      {notes.length === 0 ? (
        <>
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <br />
          <ParaTitle>No Notes Yet</ParaTitle>
          <ParaDesc>Notes you add will appear here</ParaDesc>
        </>
      ) : (
        <ul>
          {notes.map(note => (
            <NoteItem
              key={note.id}
              title={note.title}
              description={note.description}
            />
          ))}
        </ul>
      )}
    </NotesContainer>
  )
}

export default Notes
