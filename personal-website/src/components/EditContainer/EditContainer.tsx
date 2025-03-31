interface EditContainerProps {
    _active: boolean;
}

const EditContainer = ({_active = false}:EditContainerProps) => {

  return (
    <div>{_active}</div>
  )
}

export default EditContainer