import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../images/header-image.jpg'

const headerStyle = {
  backgroundImage: `url(${BackgroundImage})`
}

export default () => (
  <header className='sans-serif'>
    <div className='cover bg-left bg-center-l' style={ headerStyle }>
      <div className='bg-black-80 pb5 pb6-m pb6-l'>
        <nav className='dt w-100 mw8 center'>
          <div className='dtc tr v-mid pa3'>
            <Link className='f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3' to="/">Find an Engineer</Link>
            <Link className='f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3' to="/contact">Contact an Engineer</Link>
          </div>
        </nav>

        <div className='tc-l mt4 mt5-m mt6-1 ph3'>
          <h1 className='f2 f1-l fw2 white-90 mb0 lh-title'>How Busy is Your Engineer?</h1>
        </div>
      </div>
    </div>
  </header>
)
