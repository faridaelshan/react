import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Footertext = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='d-flex flex-column align-items-center m-5'>
        <h4 className='text-center '>KIDZ - WOOCOMMERCE THEME FOR BABY STORE</h4>
        <div style={{"backgroundColor":"rgb(93, 172, 245)",width:"540px",height:"4px"}}></div>
      </div>
        <div className='row container'>
         <div className='col'>
             <p>Sed dictum eros nec sapien ultricies, sit amet vulputate tellus congue. Aenean viverra porta nulla, et auctor lacus convallis ut. Pellentesque cursus, nisl vitae placerat efficitur, felis nisi consectetur ante, in consectetur arcu metus et diam. Sed ut orci sed dolor semper blandit quis at metus. Cras id mi a purus aliquet tincidunt at quis metus. Morbi ut fringilla dui, ut pretium tortor.</p>
             <p>Sed hendrerit, tortor eget sodales posuere, lacus ante ornare sapien, ut consequat sapien ipsum ut ex. In hac habitasse platea dictumst. Quisque blandit metus ut felis ultricies, nec feugiat nibh fermentum. Maecenas eget eros eget nunc varius vestibulum non a ligula.</p>
             <p>Fusce ut ullamcorper lacus. Morbi non tempus nisl, sit amet maximus sapien. Maecenas accumsan tincidunt libero, in pretium elit imperdiet ac.</p>
         </div>
         <div className='col'>
             <p>Morbi justo felis, cursus nec velit eu, facilisis porta tortor. Aliquam accumsan et massa vel scelerisque. Pellentesque egestas sem sit amet massa lacinia, et scelerisque ante lobortis.</p>
             <p>Morbi at nisi nisi. Nunc aliquet, sem vel volutpat egestas, justo metus facilisis mauris, eget gravida dui metus quis elit. Vestibulum justo arcu, finibus ac sodales facilisis, ultricies et tortor. Sed ligula felis, venenatis et tempor sit amet, dapibus a libero.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor ac lacus maximus suscipit in non nisl. Phasellus in vehicula mauris. Nunc quis odio felis. Proin mi turpis, pretium at suscipit sit amet, iaculis non enim. Sed dictum eros nec sapien ultricies, sit amet vulputate tellus congue.</p>
         </div>
         </div>
        <Link to="/contact" className='btn btn-primary m-3'>Read more</Link>
    </div>
  )
}

export default Footertext