import React from 'react'
import MyProfile from './MyProfile'
import ProfileMenu from './ProfileMenu';
import Styles from './profile.module.css'
const MyAccount = () => {
  return (
    <section className={Styles.MyAccount}>
        <article>
        <div className={Styles.ProfileMenu}>
                <ProfileMenu/>
            </div>
            <div className={Styles.MyProfile}>
                <MyProfile/>
            </div>
            
        </article>
    </section>
  )
}

export default MyAccount