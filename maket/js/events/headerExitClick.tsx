
type Tprops = {
    mainProjectListRefState: React.RefObject<HTMLDivElement>,
    event:  React.MouseEvent<HTMLDivElement, MouseEvent>
}

const headerMoreHendler = ({mainProjectListRefState, event}: Tprops) => {
    mainProjectListRefState.current?.classList.remove('active')
}
export default headerMoreHendler