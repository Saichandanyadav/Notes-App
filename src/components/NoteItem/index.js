import {NoteItemContainer, NoteTitle, NoteDescription} from './styledComponents'

const NoteItem = ({title, description}) => (
  <NoteItemContainer>
    <NoteTitle>{title}</NoteTitle>
    <NoteDescription>{description}</NoteDescription>
  </NoteItemContainer>
)

export default NoteItem
