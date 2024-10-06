// import React from 'react'


import DesktopHeader from './desktopHeader/DesktopHeader'
import MobileBottomNav from './mobileBottomNav/MobileBottomNav'
import MobileHeader from './mobileHeader/MobileHeader'

export default function Header() {
  return (
    <>
        <DesktopHeader/>
        <MobileHeader/>
        <MobileBottomNav/>
    </>
  )
}
