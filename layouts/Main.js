import Header from '../components/framework/Header.js'
import Footer from '../components/framework/Footer.js'
import Subnav from '../components/framework/Subnav.js'
import Mainmenu from '../components/framework/Mainmenu.js'

export default ({children}) => (
    <div>
      <Header />
      <body>
      <Mainmenu />
        <div class="container">
          <div className="col-md-12">
            <div className="row">
              <div class="col-sm-3">
                <Subnav />
              </div>
              <div class="col-sm-9">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </div>
  )