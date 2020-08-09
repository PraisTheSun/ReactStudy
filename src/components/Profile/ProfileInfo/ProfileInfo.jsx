import React from 'react';
import cl from './ProfileInfo.module.css';



const ProfileInfo = () => {

    return (
        <div>
            <div className={cl.item}>
                <img src='https://сезоны-года.рф/sites/default/files/images/shkolnikam/gora.jpg'></img>
            </div>
            <div className={cl.descriptionBlock}>
                ava + desc
            </div>

        </div>
    )
}

export default ProfileInfo;