import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const PrivacyPolicy = () => {

    return (
        <>
            <SEO title="Privacy Policy" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne
                    title="Privacy Policy"
                    page="Privacy Policy"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                    {/* <div className="section-title">
                                    <h5 className="title">This Privacy policy was published on September 10th, 2021.</h5>
                                </div> */}
                                    <h4>General</h4>
                                    <p>
                                        We take the privacy of our users seriously. We are committed to safeguarding the privacy of our users while providing a personalised and valuable service. In addition to this Privacy Policy, we have taken the following steps to further safeguard your privacy:

                                        www.nxgtech.io has established a set of " Rules". These Binding Corporate Rules are a commitment by www.nxgtech.io to protect your Information regardless of where the data resides. Depending upon where you live, the Binding Corporate Rules may provide additional privacy rights through your local privacy regulator or government. For more information about our Rules, including information on how to contact us with any questions, write to us at legal@www.nxgtech.io
                                    </p>
                                    <h4>Information Collected</h4>
                                    <p><strong> Traffic Data Collected:</strong> We may automatically track and collect the following categories of information when you visit our Website:</p>
                                    <ul>
                                        <li>IP addresses;</li>
                                        <li>Domain servers;</li>
                                        <li>Types of computers accessing the Website;</li>
                                        <li>Types of web browsers used to access the Website;</li>
                                        <li>Referring source which may have sent you to the Website; and</li>

                                        <li>Other information associated with the interaction of your browser and the Website (collectively "Traffic Data").</li>
                                    </ul>
                                    <p className='mb-3'> Information Collected from You: In order for you to access certain areas of the Website, we may require you to provide us with certain information ("Personal Information"). Personal Information includes the following information:</p>

                                    <p className='mb-3'>Your full name, address, e-mail address, telephone number, date of birth and bank or payment card details and any proof of your identity and/or address that we may request;</p>

                                    <p className='mb-3'>Details of any transactions you carry out through our Website using your www.nxgtech.io account and of the fulfilment of your requests;</p>

                                    <p className='mb-3'>Details of any bank account (including but not limited to, account holder, account name, account number, sort code, online banking PIN, Transaction Authentication Number "TAN" and password, available balance and transaction history of your bank account), ITR, TAX certificates or any other income documents as necessary by us;</p>

                                    <p className='mb-3'>Details of any credit, debit or other card used by you for transactions; </p>
                                    <p className='mb-3'>Your participation in any promotion sponsored by us;</p>
                                    <p className='mb-3'>Information collected through cookies. Please see Paragraph I (Cookies) of this Privacy Policy for more details;</p>
                                    <p className='mb-3'>Your IP address, log-in times, operating system and browser type; and</p>
                                    <p className='mb-3'>Details of your visits to our Website including, but not limited to, Traffic Data, location data, weblogs and other communication data, whether this is required for our own billing purposes or otherwise and the resources that you access whilst visiting our Website.</p>

                                    <h4>Disclosure of Information.</h4>
                                    <p className="mb-3">Use and Storage of Information</p>

                                    <p className='mb-3'>We do not disclose your Information to any third parties other than the Website`s affiliates and the following:</p>

                                    <p className='mb-3'>To operate and administer your nxgtech.io account and to provide services that you have requested;</p>

                                    <p className='mb-3'>a prospective buyer of our business or a buyer of a substantial number of the shares in our business;</p>

                                    <p className='mb-3'>the police, other lawful enforcement body, regulatory body or court if we are under a duty or required by law to disclose or share your personal data , or to protect the rights, property, or safety of ourselves or our group companies, our customers, or others;</p>

                                    <p className='mb-3'>third parties where you have expressed an interest in receiving information about their goods and services;</p>

                                    <p className='mb-3'>third parties who referred you to us initially and to whom we owe a commission payment as a result of the referral. Where the commission payment is based on transaction volumes, numbers or types of transactions, we may share that information with that third party, but we will not disclose the full details of each of your transactions without your further written consent; and third parties we may occasionally use to provide you with the services that you have requested. We require these third parties to not use your personal information for any other purpose</p>
                                    <h4>Cookies</h4>
                                    <p className='mb-3'>"Cookies" are small computer files that are transferred to your computer`s hard drive that contain information such as user ID, user preferences, lists of pages visited and activities conducted while browsing the Website. At your option, expense and responsibility, you may block cookies or delete cookies from your hard drive. However, by disabling cookies, you may not have access to the entire set of features of the Website.</p>

                                    <p className='mb-3'>Generally, we use Cookies to customize your experience on our Website and to store your password so you do not have to re-enter it each time you visit the Website. In addition, our business partners may use Cookies to provide us with anonymous data and information regarding the use of our Website. Specifically, some of our business partners use Cookies to show the Website`s ads on other websites on the internet as a result of you using the Website. Such Cookies do not contain any Information. You may opt out of receiving Cookies placed by such third party vendors by visiting the opt-out page.</p>

                                    <p className='mb-3'>Other Cookies used by our business partners may collect other non-personally identifying information, such as the computer`s IP address, type of operating system, type of internet browsing software, what web pages were viewed at what time, the geographic location of your internet service provider and demographic information, such as gender and age range. This information is used to provide the Website with more information about our user`s demographics and internet behaviours. You may find out more about the information collected and how to opt-out of receiving these Cookies by visiting our partner`s website.</p>

                                    <p className='mb-3'>We do not link the information stored in these Cookies directly to any of your Information you submit while on the Website.</p>

                                    <p className='mb-3'>In order to comply with legislation, we have reviewed the use of Cookies on our Website and set out the information below. This is to ensure that you are aware of these cookies and are able to give your consent for the placing of some or all of these cookies on your device when you use our Website. In summary, we use the following types of cookies:</p>
                                    <h4>Website Analytics</h4>
                                    <p className='mb-3'>We may use third party website analytics services in connection with the Website. These website analytics services do not collect information that you do not voluntarily enter into the Website. These services do not track your browsing habits across websites which do not use their services. We are using the information collected from these services to find usability problems to make the Website easier to use.</p>

                                    <p className='mb-3'>The recordings will never identify you or your account. Security Checks, Review and Releases to maintain a high level of security, we reserves the right to conduct a security review at any time to validate your identity, verify your financial transactions and further document your consent to this Agreement. To facilitate these security checks, you agree to provide such identification or other information or documentation as we, in our sole and unfettered discretion, deem necessary. If you fail to comply with any security request, we reserve the right to void your nxgtech.io account. You will be notified of such verification request by e-mail or telephone and your nxgtech.io account balances will be forfeited if you fail to provide us with such requested documentation and information within the time period reasonably specified by us. Such request for documentation and information may include a sworn affidavit of identity and eligibility, release of liability in favour of us and publicity authorization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default PrivacyPolicy;