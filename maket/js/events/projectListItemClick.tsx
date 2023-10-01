import { ReactEventHandler } from 'react';

const projectListItemClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement
    const projectListItem = target.closest('#projectListItem')
    const projectListItemAll = document.querySelectorAll('#projectListItem')

    if(!target.closest('#projectListSubItem')){
        projectListItem?.classList.toggle('active') 
    }
    projectListItemAll.forEach(el=>{
        if(el !== projectListItem){el.classList.remove('active')}
    })
}
export default projectListItemClick