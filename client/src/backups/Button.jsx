import { useState } from 'react'
import Button from './components/Button.jsx'
import ButtonGroup from './components/ButtonGroup.jsx'

export default function App() {
  const [isLoadingForCancel, setIsLoadingForCancel] = useState(false)
  const [isLoadingForSave, setIsLoadingForSave] = useState(false)
  const [isLoadingForDelete, setIsLoadingForDelete] = useState(false)
  return (
    <ButtonGroup direction="vertical">
      <Button
        variant="primary"
        width={100}
        loading={isLoadingForCancel}
        onClick={function () {
          setIsLoadingForCancel(!isLoadingForCancel)
        }}>
        취소
      </Button>
      <Button
        variant="secondary"
        width={100}
        loading={isLoadingForSave}
        onClick={function () {
          setIsLoadingForSave(!isLoadingForSave)
        }}>
        저장
      </Button>
      <Button
        variant="danger"
        width={100}
        loading={isLoadingForDelete}
        onClick={function () {
          setIsLoadingForDelete(!isLoadingForDelete)
        }}>
        삭제
      </Button>
    </ButtonGroup>
  )
}
