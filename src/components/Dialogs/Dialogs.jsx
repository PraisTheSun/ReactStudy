import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsData = [
        {id : 1, name : 'Aleksey'},
        {id : 2, name : 'Sergey'},
        {id : 3, name : 'Viktor'},
        {id : 4, name : 'Anna'},
        {id : 5, name : 'Svetlana'},
        {id : 6, name : 'Ekaterina'}
    ];

    let dialogsElements = dialogsData.map( d =>
        <DialogItem name={d.name} id={d.id}/>
    );

    let messagesData = [
        {id : 1, message : 'Hi'},
        {id : 2, message : 'How are you'},
        {id : 3, message : 'Yo'},
    ];

    let messagesElements = messagesData.map( m =>
        <Message message={m.message}/>
    );

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogItem name={dialogsElements} />
            </div>
            <div className={cl.messages}>
                <Message message={messagesElements}/>
            </div>
        </div>
    )
};

export default Dialogs;