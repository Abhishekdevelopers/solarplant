import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
const Generalteams = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>
    <Container>
    
    <div className='heightbanner'>
    <h1 className='hbanner'>General Terms Conditions For Services </h1>
    </div>
    </Container>
    </div>
    <Container>
    <Row>
      <Col>
        <div className='compdistext'>
        <h1 className='comdischeading'>Effective Date:</h1>
          <p>These General Terms & Conditions (“Terms”) govern the provision of services by Studio Dott. Ing. Gianni Bartoli to you, the client. By engaging our services, you agree to abide by these Terms.</p>
        <h2 className='comdischeading1'>1. Services:
</h2>
<p>We will provide the services described in the agreement or proposal between you and us. The scope, deliverables, and timelines will be outlined in the agreement.</p>
        <h2 className='comdischeading1'>2. Payment:</h2>
<p>Payment terms and rates are as agreed upon in the agreement or proposal. Unless otherwise specified, invoices are due within 30 (thirty) days from the invoice date. Late payments may incur interest at a rate of allow by Italian laws per month.</p>
        <h2 className='comdischeading1'>3. Changes and Amendments:</h2>
<p>Any changes to the scope of services or project details must be agreed upon in writing by both parties. Additional fees or adjustments to the project timeline may apply.</p>
        <h2 className='comdischeading1'>4. Confidentiality:</h2>
<p>Both parties agree to keep confidential information received from the other party during the course of the project. This includes business strategies, trade secrets, and other sensitive information.
</p>
        <h2 className='comdischeading1'>5. Intellectual Property:</h2>
<p>Unless otherwise specified, all intellectual property created during the project will belong to Studio Dott. Ing. Gianni Bartoli. Upon full payment, you will receive a non-exclusive, royalty-free license to use the deliverables for the intended purpose.</p>
        <h2 className='comdischeading1'>6. Termination:</h2>
<p>Either party may terminate the agreement with written notice in case of material breach of these Terms. Upon termination, you will be invoiced for services rendered up to the termination date.</p>
        <h2 className='comdischeading1'>7. Liability:</h2>
<p>We will provide services with reasonable care and skill. However, we are not liable for any loss, damage, or delay caused by circumstances beyond our control. In no event shall our liability exceed the total fees paid by you.</p>
        <h2 className='comdischeading1'>8. Indemnification:</h2>
<p>You agree to indemnify and hold us harmless from any claims, losses, liabilities, and expenses arising from your use of our services.</p>
        <h2 className='comdischeading1'>9. Force Majeure:</h2>
<p>Neither party shall be liable for delays or failures in performing their obligations due to causes beyond their reasonable control, including but not limited to acts of nature, war, or governmental regulations.</p>
        <h2 className='comdischeading1'>10. Governing Law and Dispute Resolution:</h2>
<p>These Terms shall be governed by and construed in accordance with the laws of Italy, Court of Pisa. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Pisa.</p>
        <h2 className='comdischeading1'>11. Entire Agreement:</h2>
<p>These Terms constitute the entire agreement between the parties and supersede any prior agreements, understandings, or representations.</p>
        <h2 className='comdischeading1'>12. Severability:</h2>
<p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. By engaging our services, you acknowledge that you have read, understood, and agreed to these General Terms & Conditions. If you have any questions or concerns, please contact us via email at info@studiobartoli.engineering .</p>

</div>
      </Col>
    </Row>
      </Container>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Generalteams
