import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
const Privacy = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>
    <Container>
   
    <div className='heightbanner'>
    <h1 className='hbanner'>Data Privacy Policy </h1>
    </div>
    </Container>
    </div>
    <Container>
    <Row>
      <Col>
        <div className='compdistext'>
        <h1 className='comdischeading'>Company Data Privacy Protection</h1>
          <p>Studio Dott. Ing. Gianni Bartoli is committed to safeguarding the privacy and protection of personal data in compliance with the General Data Protection Regulation (GDPR) and other relevant data protection laws. This Data Privacy Policy outlines how we collect, use, disclose, and protect your personal data. By interacting with Studio Dott. Ing. Gianni Bartoli ‘s services, you consent to the practices described in this policy.</p>
        <h2 className='comdischeading1'>1. Data Collection:
</h2>
<p>We collect and process personal data for specified and legitimate purposes, including but not limited to: – Contact Information: Name, email address, phone number, and address. – User Account Data: Username, password, and other account details. – Transaction Data: Purchase history, payment information, and order details. – Communication Data: Information shared through email, chat, or other communication channels. – Website Usage Data: Data collected through cookies, analytics, and other tracking technologies. – Social Media Data: Information shared on our social media pages.</p>
        <h2 className='comdischeading1'>2. Use of Personal Data:</h2>
<p>We use your personal data for the following purposes: – Providing Services: Delivering products, services, and customer support. – Communication: Sending information, updates, and promotional materials. – Transaction Processing: Processing payments and fulfilling orders. – Analytics: Understanding website usage, trends, and customer preferences. – Compliance: Meeting legal, regulatory, and contractual obligations. – Marketing: Providing targeted advertisements and promotions (with your consent).</p>
        <h2 className='comdischeading1'>3. Data Sharing:</h2>
<p>We may share your personal data with: – Service Providers: Third-party vendors assisting with services like payment processing and shipping. – Legal and Regulatory Authorities: When required by law, regulations, or legal proceedings. – Affiliated Entities: For internal business purposes.</p>
        <h2 className='comdischeading1'>4. Data Retention:</h2>
<p>We retain your personal data only as long as necessary for the purposes outlined in this policy or as required by law. When your data is no longer needed, it will be securely deleted or anonymized.
</p>
        <h2 className='comdischeading1'>5. Data Security:</h2>
<p>We implement appropriate technical and organizational measures to ensure the security of your personal data, protecting it from unauthorized access, loss, alteration, or disclosure.</p>
        <h2 className='comdischeading1'>6. Your Rights:</h2>
<p>Under applicable data protection laws, you have the following rights: – Access: Request access to your personal data. – Rectification: Request correction of inaccuracies in your data. – Erasure: Request deletion of your data. – Restriction: Request limitation of processing under certain conditions. – Data Portability: Request your data in a structured, machine-readable format. – Objection: Object to the processing of your data for certain purposes. – Withdrawal of Consent: Where processing relies on consent, you have the right to withdraw it at any time.</p>
        <h2 className='comdischeading1'>7. Cookies and Tracking:</h2>
<p>We use cookies and similar tracking technologies to enhance your experience on our website. You can adjust your browser settings to refuse cookies or receive alerts when they are being used.</p>
        <h2 className='comdischeading1'>8. Children’s Privacy:</h2>
<p>Our services are not directed to individuals under the age of [18], and we do not knowingly collect personal data from them. If you believe your child has provided us with personal data, please contact us.</p>
        <h2 className='comdischeading1'>9. Updates to the Policy:</h2>
<p>We may update this Data Privacy Policy to reflect changes in our practices or legal requirements. We encourage you to review it periodically.</p>
        <h2 className='comdischeading1'>10. Contact Information:</h2>
<p>For questions, concerns, or requests related to your personal data, please contact: info@studiobartoli.engineering By using our services, you acknowledge that you have read, understood, and consent to the practices described in this Data Privacy Policy.</p>

</div>
      </Col>
    </Row>
      </Container>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Privacy
