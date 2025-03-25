import DefaultLayout from "@/layouts/default";

export default function TermsPage() {
  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_220px]">
          <div>
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Last updated: March 19, 2025
              </p>
              <p>
                Subject to the provisions hereinafter set forth (this "Comprehensive Agreement"), Veloce Studios ("Veloce", the "Company", or "Provider") extends access to its comprehensive suite of Services. The term "Services" encompasses all products and technological solutions offered by Veloce and its affiliated corporate entities; with the explicit understanding that utilization of specific Services mandates adherence to supplementary terms delineated in Schedule I hereof; and further clarified that any software distributed exclusively under open-source licensing frameworks (including, but not expressly limited to, Next.js) shall remain explicitly excluded from the scope of this Comprehensive Agreement. By engaging with or accessing the Services, you hereby affirm comprehensive comprehension and unconditional acceptance of the terms articulated herein.
              </p>
              <br />
              <p>
                In the event an individual executes this Comprehensive Agreement on behalf of a corporate entity, commercial organization, or alternative legal construct, such individual expressly represents and warrants they possess requisite authorization to legally bind said entity to these contractual terms. In such circumstances, the term "you" shall be construed to reference said legal entity. Should such representative lack appropriate authorization, or fundamentally disagree with the provisions herein, said party is categorically prohibited from accepting this Agreement and consequently precluded from utilizing the Services.
              </p>
              <br />
              <p className="text-red-600 dark:text-red-400 font-semibold">
                IMPORTANT: PROSPECTIVE USERS ARE EMPHATICALLY ADVISED TO METICULOUSLY EXAMINE THE MUTUAL ARBITRATION PROVISIONS ARTICULATED SUBSEQUENTLY, AS SAID PROVISIONS DEFINITIVELY MANDATE THE RESOLUTION OF POTENTIAL DISPUTES WITH VELOCE THROUGH CONCLUSIVE AND LEGALLY BINDING ARBITRATION PROCEEDINGS. BY EXECUTING THIS AGREEMENT, YOU UNEQUIVOCALLY ACKNOWLEDGE COMPREHENSIVE REVIEW AND SUBSTANTIVE UNDERSTANDING OF ALL STIPULATIONS ENCOMPASSED WITHIN THE MUTUAL ARBITRATION CLAUSE.
              </p>
              <br />

              <h2 id="age-eligibility" className="text-2xl font-semibold mb-4">2. User Age Requirements</h2>
              <p>
                You certify that you are a person at least 16 years of age. Services may only be used or accessed through an electronic device controlled by you at all times. A valid Veloce account may only be created and maintained if you provide valid information in the signup process, and you regularly update such information to assure its accuracy.You shall be responsible for maintaining the confidentiality of login information associated with your account. Each user must have unique login credentials that must not be shared by multiple users. You are responsible for all activities that occur under your account.
              </p>

              <h2 id="temporary-use-license" className="text-2xl font-semibold mb-4">3. License for Temporary Use</h2>
              <p>
                During the period for which you are authorized to use the Services, and subject to your compliance with the terms of this Agreement, you are granted a personal, non-sublicensable, non-exclusive, non-transferable, limited license, to use the Services for your internal business or personal purposes according to the service capacity of your account. Any rights not expressly granted herein are reserved and no license or right to use any trademark of Veloce or any third-party is granted to you in connection with the Services.
              </p>

              <h2 id="your-content" className="text-2xl font-semibold mb-4">4. Ownership of Your Content</h2>
              <p>
                You are solely responsible for all software, code, data, information, feedback, suggestions, text, content and other materials that you upload, post, deliver, provide or otherwise transmit or store (hereafter "post(ing)") in connection with or relating to the Services ("Your Content"). You are responsible for maintaining the confidentiality of usernames and passwords associated with your account and for all activities that occur under your account. Veloce reserves the right to access your account in order to respond to your requests for technical support. By posting Your Content on or through the Services, you grant Veloce a worldwide, non-exclusive, royalty-free, fully paid, sublicensable and transferable license to use, copy, modify, reproduce, distribute, display, publish, store and perform Your Content as necessary to provide the Services and for security to protect the Services and third parties from fraud, malware, malicious files or content, viruses and the like. You further agree that Veloce may remove or disable any of Your Content at any time for any reason (including, but not limited to, upon receipt of claims or allegations from third-parties or authorities relating to Your Content), or for no reason at all; provided, that if you are a user of our Services in the European Economic Area (i) we will remove or disable Your Content or impose restrictions on your use of the Services in accordance with applicable laws including if it is illegal content, infringes the rights of third parties, or breaches this Agreement; (ii) if we remove, block or restrict your use of the Services or Your Content, you, and any third party that may have informed us about your use of the Services or Your Content, may contact us about our decision at our support site and we will review and consider your message with a view to promptly resolving any complaint and, if appropriate, we will explain any options you have to request another review.
              </p>

              <h2 id="hobby-plan" className="text-2xl font-semibold mb-4">5. Terms of the Hobby Plan</h2>
              <p>
                We offer a free hobby plan at our sole discretion. You shall only use the Services under a hobby plan for your personal or non-commercial use. We may change the terms and conditions applicable to the hobby plan or discontinue offering the hobby plan at any time. We reserve the right to disable or remove any project or website deployment on the hobby plan with or without notice at our sole discretion. We may shut down and terminate projects or deployments using the hobby plan without notice for any reason or no reason. We may shut down affected projects or deployments on the hobby plan in case of any delays or performance problems including, without limitation, those caused by a malicious attack on a project or deployment.
              </p>

              <h2 id="acceptable-use" className="text-2xl font-semibold mb-4">6. Acceptable Use Policy</h2>
              <p>
                By using the Services, including participation in the Veloce Community or any associated forums (if applicable), you agree to comply with the following terms:
              </p>
              <br />
              <ul className="list-disc pl-5">
                <li><strong>Lawful Use</strong>: You may only use the Services for lawful purposes.</li>
                <li><strong>Security and Integrity</strong>: You must not attempt to compromise the security or integrity of Veloce's systems, networks, or those of any third party, nor attempt to gain unauthorized access to any such systems or networks.</li>
                <li><strong>Illegal Goods and Services</strong>: You are prohibited from engaging in or facilitating the sale or distribution of illegal goods or services.</li>
                <li><strong>Impersonation</strong>: You must not impersonate any individual or organization, or falsely claim authority to act on behalf of another person or entity, including Veloce.</li>
                <li><strong>Automated Tools</strong>: You must not introduce any automated software, bots, scripts, or tools to create multiple accounts, generate automated searches, requests, or queries, or to extract data or content from Veloce's website.</li>
                <li><strong>Usage Restrictions</strong>: You may not bypass or misuse Veloce's usage limitations or guidelines, as outlined in Section 9 (Usage Restrictions) and Veloce's Fair Use Guidelines, including by creating multiple accounts.</li>
                <li><strong>Automated Access</strong>: Accessing Veloce's website using automated means, such as robots or scripts, is strictly prohibited.</li>
                <li><strong>Unsolicited Communications</strong>: You must not send unsolicited messages or use the Services to send spam, junk mail, or create misleading content, such as clickbait or click fraud schemes, as determined by Veloce.</li>
                <li><strong>Illegal or Harmful Content</strong>: You must not use the Services to create or distribute synthetic media or "deepfakes" that promote illegal activities, such as child sexual exploitation or abuse.</li>
                <li><strong>Reproducing Functionality</strong>: You may not use the Services to replicate the functionality of Veloce's Services, including its storage products.</li>
                <li><strong>Remote Storage</strong>: The Services may not be used primarily as a remote storage server or for the purpose of distributing downloadable content.</li>
                <li><strong>Resale or Transfer</strong>: You are prohibited from renting, leasing, lending, selling, or otherwise attempting to transfer access to Veloce's website or its software and documentation to any third party, including through framing or similar methods.</li>
                <li><strong>Name Squatting</strong>: You may not engage in name squatting, such as reserving usernames, team names, or deployment URLs for resale, barter, trade, or speculative purposes.</li>
                <li><strong>Interference</strong>: You must not interfere with or disrupt the Services or impose an undue burden on Veloce's website or its connected networks or services.</li>
                <li><strong>Proxying and Scraping</strong>: The Services or Veloce's infrastructure must not be used for proxying, web scraping, creating virtual private networks, or establishing virtual private servers.</li>
                <li><strong>Benchmarking</strong>: Benchmark tests on the Services are allowed, subject to the terms in this Acceptable Use Policy. If you publicly disclose the results of any tests, you must include all necessary details for others to replicate the tests.</li>
              </ul>
              <br />
              <p>
                The final determination of whether any account has violated these terms rests solely with Veloce. Violations by you or anyone acting under your account may lead to termination of access to the Services and removal of any projects or deployments, in addition to any other remedies Veloce deems necessary.
              </p>

              <h2 id="etiquette" className="text-2xl font-semibold mb-4">7. Etiquette Guidelines</h2>
              <p>
                Without limiting any other provisions of this Agreement, you agree not to use the Services for or in connection with any website (including links from a website) that contains content that is deemed objectionable, abusive, profane, hateful, or otherwise violates any applicable law, as determined at Veloce's sole discretion. You agree to indemnify and hold Veloce harmless from any damages, losses, liabilities, settlements, and expenses (including, without limitation, costs and attorneys' fees) resulting from any third-party claims or actions arising out of an alleged violation of the foregoing or any unauthorized use of the Services under this Agreement. While Veloce is not obligated to monitor your use of the Services, it may use tools to detect patterns of abuse and investigate any such instances. Following these investigations, Veloce may restrict or prohibit any use of the Services that it believes (or is alleged to believe) violates these terms. You acknowledge that Veloce may disable or terminate your access to the Services if it determines that any content violates this Agreement, including the Acceptable Use Policy, any applicable restrictions, Veloce's DMCA Policy, or as required by Veloce's hosting providers.
              </p>
              
              <h2 id="security-compliance" className="text-2xl font-semibold mb-4">8. Security and Compliance Standards</h2>
              
              <h3 id="general-security" className="text-xl font-medium mb-3">General Security Responsibilities</h3>
              <p className="mb-4">
                You are responsible for configuring Your Content, including any projects or deployments, in a manner that ensures no personal data or personal information is exposed during transmission, storage, or use without obtaining proper consent from individuals, as required by applicable laws. You agree to configure the Services in accordance with the provided Documentation and implement encryption as specified in the Documentation. Veloce performs regular backups of Your Content, but you are also responsible for maintaining your own backups. Veloce will not be held liable for any unauthorized access, use, corruption, deletion, destruction, or loss of Your Content, to the extent such issues result from your misconfigurations, insecurities in your website or project, malware, or malicious content in your website, Content, or project. In the event of any actual or suspected security incidents, vulnerabilities, violations of this Section 7, or issues related to the Services, you must immediately report the incident to security@veloce.sh.
              </p>

              <h3 id="pci-compliance" className="text-xl font-medium mb-3">PCI Compliance Requirements</h3>
              <p className="mb-4">
                Veloce is not a payment processor. If Your Content or Your Data is subject to the Payment Card Industry Data Security Standards (PCI DSS), you acknowledge that it is your responsibility to ensure compliance with PCI DSS requirements, as prescribed by the PCI Security Standards Council, and to monitor such compliance. You also agree to follow Veloce's Documentation for the proper implementation of the Services when processing payments.
              </p>

              <h3 id="hipaa-compliance" className="text-xl font-medium mb-3">HIPAA Compliance Obligations</h3>
              <p>
                You may not use the Services to store any Protected Health Information (PHI) or any information covered under the Health Insurance Portability and Accountability Act (HIPAA) unless you first obtain written approval from Veloce.
              </p>

              <h2 id="data-protection" className="text-2xl font-semibold mb-4">9. Data Protection Policies</h2>
              
              <h3 id="international-transfers-of-data" className="text-xl font-medium mb-3">International Data Transfers</h3>
              <p className="mb-4">
                If Your Content or Your Data (as defined below) is subject to applicable data protection or privacy laws, as outlined in Veloce's Data Processing Addendum ("DPA"), and is processed or stored by Veloce on your behalf in connection with the Services, you agree to the terms set forth in the DPA.
              </p>

              <h3 id="use-of-your-data" className="text-xl font-medium mb-3">Usage of Your Data</h3>
              <p className="mb-4">
                You retain full ownership of Your Data. Veloce may use and disclose Your Data solely as necessary to provide the Services to you, as well as for security purposes, including protecting the Services and third parties from fraud, illegal activities, abuse, malware, malicious content, viruses, and other similar threats. Veloce will not sell, disclose, or share Your Data with any third parties for any other purpose. Veloce will implement reasonable security measures (including technical, administrative, and physical safeguards) to prevent unauthorized access to or disclosure of the Services or Your Data.
              </p>

              <h3 id="aggregate-data" className="text-xl font-medium mb-3">Aggregate Data Usage</h3>
              <p>
                Veloce has the right to collect and analyze data related to the use and performance of the Services, excluding Your Data and any data derived from it. Veloce may use such data to improve and enhance the Services and for other development, diagnostic, and corrective purposes, both during and after the term of this Agreement. Veloce may also disclose this data in aggregate or de-identified form for business purposes.
              </p>

              <h2 id="usage-restrictions" className="text-2xl font-semibold mb-4">10. Restrictions on Usage</h2>
              <p>
                You agree not to, directly or indirectly: (i) sublicense, resell, rent, lease, transfer, assign, or commercially exploit the Services, or make the Services available to any third party; (ii) reverse engineer, decompile, disassemble, or attempt to uncover the source code, object code, or underlying structure, ideas, algorithms, or know-how related to the Services, except where allowed by law for interoperability purposes (and if so, you must first request the relevant information from Veloce); (iii) modify, translate, or create derivative works based on the Services (except as expressly permitted by Veloce or within the Services themselves), or attempt to gain unauthorized access to the Services or related systems; (iv) use the Services for timesharing, service bureau purposes, or for the benefit of any third party, or remove proprietary notices; (v) remove or alter any proprietary rights notices (including copyright notices) within the Services or documentation; (vi) violate any applicable laws or infringe third-party rights in connection with your use of the Services.
              </p>
              <p>
                You must comply with any codes of conduct, policies, or notices provided by Veloce in connection with the Services and promptly notify Veloce of any security breaches or issues. Additionally, you acknowledge that Veloce may establish practices and limits concerning the use of the Services, including limits on data retention, storage space, compute capacity, and network data transfer. Veloce reserves the right to change these practices and limits at any time in its sole discretion. Veloce's DMCA Policy is incorporated into this Agreement by reference.
              </p>

              <h2 id="support" className="text-2xl font-semibold mb-4">11. Support Services</h2>
              <p>
                Veloce may, at its discretion, provide commercially reasonable remote technical support services during normal business hours ("Support Services"), subject to Veloce's current Support Terms and Conditions.
              </p>

              <h2 id="electronic-communications" className="text-2xl font-semibold mb-4">12. Electronic Communication Consent</h2>
              <p>
                By using the Services, you consent to receiving electronic communications from Veloce, which may include notices regarding Service fees, transactional information, or other communications related to the Services. These communications may require your action to avoid service interruptions. Your account email address must be kept up to date, and you must ensure it is always responsive. You agree that any notices, agreements, disclosures, or other communications Veloce sends you electronically will satisfy any legal requirements, including the requirement that such communications be in writing.
              </p>

              <h2 id="representation-and-warranties" className="text-2xl font-semibold mb-4">13. Representations and Warranties</h2>
              
              <h3 id="representations" className="text-xl font-medium mb-3">Representations</h3>
              <p className="mb-4">
                You represent and warrant that: (i) you own all Your Content or have obtained all necessary permissions, rights, or licenses to post and use Your Content in connection with the Services, and to allow Veloce to perform its obligations under this Agreement; (ii) Your Content and any activities related to the Services do not and will not infringe any third-party intellectual property rights, privacy rights, or any other proprietary rights, and Your Content is not defamatory, obscene, unlawful, or offensive; and (iii) you will comply with Veloce's published policies and documentation and all applicable laws and regulations in using the Services.
              </p>

              <h3 id="mutual-warranty" className="text-xl font-medium mb-3">Mutual Warranty</h3>
              <p className="mb-4">
                Each party represents and warrants that it has the full legal right and power to enter into and perform its obligations under this Agreement without conflict with any other agreement or third-party consents.
              </p>

              <h2 id="indemnification" className="text-2xl font-semibold mb-4">14. Indemnification Agreement</h2>
              <p>
                You agree to indemnify and hold Veloce harmless from any claims, actions, or demands, including reasonable legal and accounting fees, arising from your breach of this Agreement, any infringement or misappropriation claims related to your websites or Your Content, or your use or misuse of the Services. Veloce will promptly notify you of any such claims and provide reasonable assistance, giving you the opportunity to assume control over defense and settlement. You are not responsible for any settlement that you do not approve, such approval not to be unreasonably withheld or delayed.
              </p>

              <h2 id="confidentiality" className="text-2xl font-semibold mb-4">Confidentiality; Proprietary Rights</h2>
              
              <h3 className="text-xl font-medium mb-3">Confidentiality</h3>
              <p className="mb-4">
                Each party (the "Receiving Party") acknowledges that the other party (the "Disclosing Party") may disclose business, technical, product, or financial information or data related to the Disclosing Party's business (referred to as "Proprietary Information"). Proprietary Information of Veloce includes non-public details about the features, functionality, and performance of the Services. Your Proprietary Information includes non-public personal data provided by you to Veloce for the provision of the Services and data you upload to the Services (collectively, "Your Data"). The Receiving Party agrees: (i) to take reasonable steps to protect such Proprietary Information, and (ii) not to use (except in the performance of the Services or as otherwise allowed herein) or disclose such Proprietary Information to any third party. The Disclosing Party agrees that the confidentiality obligations will not apply to information that (a) becomes publicly available after disclosure, (b) was in the Receiving Party's possession before disclosure, (c) was disclosed to the Receiving Party by a third party without confidentiality restrictions, or (d) was independently developed by the Receiving Party without using any Proprietary Information from the Disclosing Party. If the Receiving Party is compelled by law or a governmental body to disclose Proprietary Information, it must give the Disclosing Party reasonable notice, allowing time to seek a protective order or limit the disclosure.
              </p>

              <h3 className="text-xl font-medium mb-3">Company Ownership</h3>
              <p className="mb-4">
                Veloce retains all ownership, rights, and interests in (a) the Services, including any improvements, modifications, or enhancements made to them, and (b) all intellectual property rights related to the Services.
              </p>

              <h3 className="text-xl font-medium mb-3">Feedback</h3>
              <p className="mb-4">
                If you or any of your users provide suggestions or feedback regarding the Services, documentation, or other materials provided by Veloce ("Feedback"), you grant Veloce a perpetual, irrevocable, non-exclusive, royalty-free, fully paid-up, worldwide license to use, modify, or exploit the Feedback for any purpose, including sublicensing it through multiple tiers of sublicenses, under all applicable intellectual property rights.
              </p>

              <h3 className="text-xl font-medium mb-3">Customer Name</h3>
              <p className="mb-4">
                During the term of this Agreement, you grant Veloce a non-exclusive, royalty-free, fully paid-up license to use and display your trademarks, trade names, and logos on Veloce's marketing materials and websites, indicating that you are a customer of Veloce. Veloce will adhere to any trademark usage guidelines you provide. All goodwill arising from the use of your trademarks, trade names, and logos will benefit you.
              </p>

              <h2 id="payment" className="text-2xl font-semibold mb-4">15. Payment Terms</h2>
              
              <h3 className="text-xl font-medium mb-3">Plans</h3>
              <p className="mb-4">
                The Services are provided based on the plan level you select. Veloce offers a free hobby plan as well as paid self-service subscription plans ("self-service subscriptions"). For an enterprise license, you can contact Veloce directly. You may upgrade or downgrade to any other available plan at any time during your subscription, but a downgrade will only take effect on the next renewal date. For self-service subscriptions, any additional services or domain registrations will incur a fee, along with any applicable taxes. Fees will be charged to your provided payment account, according to the billing terms in place at the time the fee is due. <b>You agree and acknowledge that Veloce will automatically charge your payment account for: (i) the self-service subscription you have chosen, in advance, for each subscription term, along with any additional services added; (ii) any extra services or additions during the previous subscription term, in arrears; and (iii) domain registration purchases and up to thirty (30) days before each annual anniversary of your initial purchase. Your self-service subscription and additional services will automatically renew for the same term as the original subscription unless you cancel.</b> You represent and warrant that all payment information is accurate, and that you are authorized to use the payment method. You must promptly update your account with any changes to your payment information (such as a new billing address or credit card expiration date). If payment is not received or cannot be processed for any reason, Veloce reserves the right to suspend or terminate your access to the Services and terminate this Agreement. Additionally, for domain registrations, Veloce may not process the registration or may allow the domain registration to expire. All fees are non-refundable, unless otherwise stated in this Agreement.
              </p>

              <h3 className="text-xl font-medium mb-3">Payments</h3>
              <p className="mb-4">
                All payments must be made in U.S. currency, and within the United States. You are responsible for paying any applicable taxes, duties, and other charges, including backup withholding and similar fees. If Veloce is required to collect taxes on behalf of any jurisdiction, you will pay the appropriate amount directly to Veloce. If any payment owed to Veloce is subject to withholding taxes, you agree to increase your payment by the amount necessary to cover the withheld portion, ensuring that the full agreed-upon payment is received by Veloce. You will also reimburse Veloce for any pre-approved costs. Veloce reserves the right to modify its fees and payment terms at its discretion, but any changes will not take effect until the start of the next billing cycle. Veloce will provide written notice of any fee changes that affect the services you have purchased. Your continued use of the Services after a fee change will be deemed acceptance of the new fees.
              </p>

              <h2 id="term-and-termination" className="text-2xl font-semibold mb-4">16. Term and Termination Conditions</h2>
              
              <h3 className="text-xl font-medium mb-3">Term</h3>
              <p className="mb-4">
                Unless terminated earlier as provided below, this Agreement begins when you accept it and will remain in effect as long as the Services are being provided to you. Your hobby plan, self-service subscription, and any additional services will automatically renew for the same duration as the initial term unless you cancel in advance of the renewal date. You can cancel your account (or downgrade your Pro account to a hobby plan) at any time by sending a cancellation request to Veloce Support through the Help page. Termination will be effective at the start of the next renewal period. Veloce may also terminate your account and this Agreement at any time by giving thirty (30) days' notice to the administrative email address linked to your account. If you breach any terms of this Agreement, Veloce may terminate the Agreement with ten (10) days' notice, or two (2) days' notice in the case of nonpayment. Veloce has the right to immediately terminate the Agreement if you exceed usage limits, such as storage, compute capacity, or data transfer limits. Veloce may also terminate accounts that have been inactive for a long time or modify/discontinue the Services (or any part of them). Upon termination, Veloce may delete any of Your Content, and if Veloce terminates your account without cause, you will receive a pro-rated refund for any unearned prepaid amounts for self-service subscriptions.
              </p>

              <h3 className="text-xl font-medium mb-3">Survival</h3>
              <p className="mb-4">
                Certain sections of this Agreement, by their nature, will survive termination, including, but not limited to, Sections 15.1 and 15.2, as well as any accrued rights to payment, confidentiality obligations, warranty disclaimers, and limitations of liability.
              </p>

              <h3 className="text-xl font-medium mb-3">Effect of Termination</h3>
              <p className="mb-4">
                Upon termination of this Agreement for any reason: (i) the licenses granted under this Agreement will immediately end, and you and your users must stop using the Services; (ii) Veloce will stop providing Support Services; (iii) you must pay any outstanding fees to Veloce; and (iv) within fourteen (14) calendar days of termination, both parties must return or destroy all Proprietary Information of the other party in their possession, and may not keep any copies, except for one archival copy, which may be retained solely for compliance purposes.
              </p>

              <h2 id="disclaimer" className="text-2xl font-semibold mb-4">17. Disclaimer of Warranties</h2>
              <p>
                The Services and Support Services are provided "as is." Veloce disclaims all warranties, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Veloce does not guarantee that the Services or Deliverables will be uninterrupted or error-free, nor does it make any warranty regarding the outcomes you may achieve through the use of the Services or Deliverables.
              </p>

              <h2 id="limitation-of-liability" className="text-2xl font-semibold mb-4">18. Limitation of Liability Clause</h2>
              <p>
                Veloce's liability shall be limited to the maximum extent permitted by law.
              </p>

              <h2 id="miscellaneous" className="text-2xl font-semibold mb-4">19. Miscellaneous Provisions</h2>
              <p>
                Veloce may update this Agreement periodically by notifying you either through an email to the address associated with your account or by posting a notice on <a href="https://veloce.sh">https://veloce.sh</a>. You can always review the latest version of this Agreement at <a href="https://veloce.sh/terms">https://veloce.sh/terms</a>. The updated Agreement will take effect immediately once Veloce notifies you or posts the changes. If you continue to use the Services after the changes, it will be considered as acceptance of the updated terms. If you do not agree with any change, your only option is to stop using the Services and send a cancellation request to Veloce Support via the Help page.
                <br />
                If any part of this Agreement is deemed unenforceable or invalid, that part will be modified or removed to the least extent necessary to make the rest of the Agreement enforceable. You are not allowed to assign, transfer, or sublicense this Agreement without Veloce's prior written consent. However, Veloce may assign or transfer this Agreement at its discretion. Any unauthorized attempt to assign or transfer this Agreement will be considered void.
                <br />
                This Agreement constitutes the entire understanding between the parties and replaces all prior written or oral agreements, communications, or understandings regarding the subject matter. Any amendments must be in writing and signed by both parties, unless otherwise stated herein.
                <br />
                Veloce's failure to enforce any rights or provisions under this Agreement does not waive those rights. This Agreement does not create any agency, partnership, joint venture, or employment relationship, and neither party has the authority to bind the other in any respect.
                <br />
                In any legal action to enforce this Agreement, the prevailing party will be entitled to recover legal costs and attorney's fees.
                <br />
                All notices related to this Agreement must be in writing and will be considered delivered: (i) when received if personally delivered; (ii) when electronically confirmed if sent by email; (iii) the day after being sent via overnight delivery; or (iv) upon receipt if sent by certified or registered mail with return receipt requested.
                <br />
                Veloce will not be held liable for any delays or failures in performance caused by events outside its reasonable control, including, but not limited to, acts of God, terrorism, pandemics, labor strikes, government orders, acts of war, rebellion, fire, floods, explosions, or riots.
              </p>

              <h2 id="governing-law" className="text-2xl font-semibold mb-4">20. Governing Law and Dispute Resolution</h2>
              <p>
                This Agreement shall be governed by the laws of the jurisdiction in which Veloce operates.
              </p>

              <h2 id="previews" className="text-2xl font-semibold mb-4">21. Previews of Upcoming Features</h2>
              <p className="mb-4">
                Veloce may elect to provide certain Previews from time to time. Previews are provided "AS-IS", "WITH ALL FAULTS", and "AS AVAILABLE". Veloce's warranties, indemnities and SLA terms do not apply to Previews and Support Services are not provided for Previews. Veloce may change, discontinue or terminate your use of Previews at any time without notice. "Previews" means Services, releases, features, or functionality provided for preview, pre-release, evaluation, demonstration, beta, or similar uses and purposes.
              </p>

              <h2 id="schedule" className="text-2xl font-semibold mb-4">22. Schedule I: Additional Terms</h2>
              <p className="mb-4">
                Your use of the following Services is subject to the additional terms set forth below, as applicable:
              </p>

              <h3 className="text-xl font-medium mb-3">Domain Name Registration</h3>
              <p className="mb-4">
                By using or accessing the domain name reservation services, you acknowledge that you have read, understand, and agree to be bound by the Domain Name Registration and Services Addendum, which is hereby incorporated into this Agreement.
              </p>

              <h3 className="text-xl font-medium mb-3">Storage Products</h3>
              <p className="mb-4">
                If you use the Veloce Storage Products, including but not limited to Veloce KV or Veloce Postgres, the following sections of this Agreement will apply between you and Veloce, and references to the Services in these sections will also refer to Veloce KV and Veloce Postgres: Sections 8 (Data Protection), 15 (Payment of Fees), 16 (Term and Termination), 17 (Disclaimer), 18 (Limitation of Liability), 19 (Miscellaneous), and 20 (Governing Law; Disputes; Arbitration). You agree that (i) your use of and license to use Veloce KV is governed by the terms of the Upstash Terms of Service, and (ii) your use of and license to use Veloce Postgres is governed by the terms of the Neon Terms of Service.
              </p>

              <h3 className="text-xl font-medium mb-3">v0</h3>
              <p className="mb-4">
                By using or accessing v0, you acknowledge that you have read, understand, and agree to be bound by the terms of the v0 Agreement, which is incorporated into this Agreement.
              </p>

              <h3 className="text-xl font-medium mb-3">DORA</h3>
              <p className="mb-4">
                To the extent that your use of the Services is subject to the Digital Operational Resilience Act (DORA), you agree to the terms of the DORA Addendum.
              </p>
            </div>
          </div>

          {/* Table Of Contents Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <div className="bg-gray-50/50 dark:bg-gray-900/30 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-100">On this page</h2>
                <nav className="space-y-1 text-sm">
                  <a href="#introduction" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    1. Overview of Terms
                  </a>
                  <a href="#age-eligibility" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    2. User Age Requirements
                  </a>
                  <a href="#temporary-use-license" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    3. License for Temporary Use
                  </a>
                  <a href="#your-content" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    4. Ownership of Your Content
                  </a>
                  <a href="#hobby-plan" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    5. Terms of the Hobby Plan
                  </a>
                  <a href="#acceptable-use" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    6. Acceptable Use Policy
                  </a>
                  <a href="#etiquette" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    7. Etiquette Guidelines
                  </a>
                  <a href="#security-compliance" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    8. Security and Compliance Standards
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#general-security" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      General Security Responsibilities
                    </a>
                    <a href="#pci-compliance" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      PCI Compliance Requirements
                    </a>
                    <a href="#hipaa-compliance" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      HIPAA Compliance Obligations
                    </a>
                  </div>
                  <a href="#data-protection" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    9. Data Protection Policies
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#international-transfers-of-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      International Data Transfers
                    </a>
                    <a href="#use-of-your-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Usage of Your Data
                    </a>
                    <a href="#aggregate-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Aggregate Data Usage
                    </a>
                  </div>
                  <a href="#usage-restrictions" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    10. Restrictions on Usage
                  </a>
                  <a href="#support" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    11. Support Services
                  </a>
                  <a href="#electronic-communications" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    12. Electronic Communication Consent
                  </a>
                  <a href="#representation-and-warranties" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    13. Representations and Warranties
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#representations" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Representations
                    </a>
                    <a href="#mutual-warranty" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Mutual Warranty
                    </a>
                  </div>
                  <a href="#indemnification" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    14. Indemnification Agreement
                  </a>
                  <a href="#payment" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    15. Payment Terms
                  </a>
                  <a href="#term-and-termination" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    16. Term and Termination Conditions
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#term" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Term
                    </a>
                    <a href="#survival" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Survival
                    </a>
                    <a href="#effect-of-termination" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Effect of Termination
                    </a>
                  </div>
                  <a href="#disclaimer" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    17. Disclaimer of Warranties
                  </a>
                  <a href="#limitation-of-liability" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    18. Limitation of Liability Clause
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#limit-of-liability-and-waiver-of-consequential-damages" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Limit of Liability and Waiver of Consequential Damages
                    </a>
                    <a href="#limits" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Limits
                    </a>
                  </div>
                  <a href="#miscellaneous" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    19. Miscellaneous Provisions
                  </a>
                  <a href="#governing-law" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    20. Governing Law and Dispute Resolution
                  </a>
                  <a href="#previews" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    21. Previews of Upcoming Features
                  </a>
                  <a href="#schedule" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    22. Schedule I: Additional Terms
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Mobile table of contents */}
          <div className="lg:hidden mb-8">
            <div className="bg-gray-50/50 dark:bg-gray-900/30 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
              <h2 className="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-100">On this page</h2>
              <nav className="space-y-1 text-sm">
                  <a href="#introduction" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    1. Overview of Terms
                  </a>
                  <a href="#age-eligibility" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    2. User Age Requirements
                  </a>
                  <a href="#temporary-use-license" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    3. License for Temporary Use
                  </a>
                  <a href="#your-content" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    4. Ownership of Your Content
                  </a>
                  <a href="#hobby-plan" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    5. Terms of the Hobby Plan
                  </a>
                  <a href="#acceptable-use" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    6. Acceptable Use Policy
                  </a>
                  <a href="#etiquette" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    7. Etiquette Guidelines
                  </a>
                  <a href="#security-compliance" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    8. Security and Compliance Standards
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#general-security" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      General Security Responsibilities
                    </a>
                    <a href="#pci-compliance" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      PCI Compliance Requirements
                    </a>
                    <a href="#hipaa-compliance" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      HIPAA Compliance Obligations
                    </a>
                  </div>
                  <a href="#data-protection" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    9. Data Protection Policies
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#international-transfers-of-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      International Data Transfers
                    </a>
                    <a href="#use-of-your-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Usage of Your Data
                    </a>
                    <a href="#aggregate-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Aggregate Data Usage
                    </a>
                  </div>
                  <a href="#usage-restrictions" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    10. Restrictions on Usage
                  </a>
                  <a href="#support" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    11. Support Services
                  </a>
                  <a href="#electronic-communications" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    12. Electronic Communication Consent
                  </a>
                  <a href="#representation-and-warranties" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    13. Representations and Warranties
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#representations" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Representations
                    </a>
                    <a href="#mutual-warranty" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Mutual Warranty
                    </a>
                  </div>
                  <a href="#indemnification" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    14. Indemnification Agreement
                  </a>
                  <a href="#payment" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    15. Payment Terms
                  </a>
                  <a href="#term-and-termination" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    16. Term and Termination Conditions
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#term" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Term
                    </a>
                    <a href="#survival" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Survival
                    </a>
                    <a href="#effect-of-termination" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Effect of Termination
                    </a>
                  </div>
                  <a href="#disclaimer" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    17. Disclaimer of Warranties
                  </a>
                  <a href="#limitation-of-liability" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    18. Limitation of Liability Clause
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#limit-of-liability-and-waiver-of-consequential-damages" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Limit of Liability and Waiver of Consequential Damages
                    </a>
                    <a href="#limits" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Limits
                    </a>
                  </div>
                  <a href="#miscellaneous" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    19. Miscellaneous Provisions
                  </a>
                  <a href="#governing-law" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    20. Governing Law and Dispute Resolution
                  </a>
                  <a href="#previews" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    21. Previews of Upcoming Features
                  </a>
                  <a href="#schedule" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    22. Schedule I: Additional Terms
                  </a>
                </nav>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
} 