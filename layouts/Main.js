import Header from '../components/framework/Header.js'
import Footer from '../components/framework/Footer.js'
import Subnav from '../components/framework/Subnav.js'
import Mainmenu from '../components/framework/Mainmenu.js'
import {topPadding, border} from '../components/css/styles.js'

export default ({children}) => (
    <div>
      <Header />
      <body>
      <Mainmenu />
        <div className="container" style={topPadding}>
            <div className="row">
              <div className="col-sm-3" style={border}>
                <Subnav />
              </div>
              <div className="col-sm-9" style={border}>
                {children}
              </div>
            </div>
          <Footer />
        </div>
      </body>
    </div>
  )