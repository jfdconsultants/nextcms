import Header from '../components/framework/Header.js'
import Footer from '../components/framework/Footer.js'
import Adminmenu from '../components/framework/Adminmenu.js'
import {topPadding, border} from '../components/css/admin.js'

export default ({children}) => (
    <div>
      <Header />
      <body>
      <Adminmenu />
        <div class="container" style={topPadding}>
          <div className="col-md-12">
            <div className="row">
              <div class="col-sm-12">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </div>
  )