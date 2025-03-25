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

              <section id="age-eligibility" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Age and Eligibility</h2>
                <p>
                You certify that you are a person at least 16 years of age. Services may only be used or accessed through an electronic device controlled by you at all times. A valid Veloce account may only be created and maintained if you provide valid information in the signup process, and you regularly update such information to assure its accuracy.You shall be responsible for maintaining the confidentiality of login information associated with your account. Each user must have unique login credentials that must not be shared by multiple users. You are responsible for all activities that occur under your account.
                </p>
              </section>

              <section id="temporary-use-license" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Temporary Use License</h2>
                <p>
                During the period for which you are authorized to use the Services, and subject to your compliance with the terms of this Agreement, you are granted a personal, non-sublicensable, non-exclusive, non-transferable, limited license, to use the Services for your internal business or personal purposes according to the service capacity of your account. Any rights not expressly granted herein are reserved and no license or right to use any trademark of Veloce or any third-party is granted to you in connection with the Services.                </p>
              </section>

              <section id="your-content" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Your Content</h2>
                <p>
                You are solely responsible for all software, code, data, information, feedback, suggestions, text, content and other materials that you upload, post, deliver, provide or otherwise transmit or store (hereafter "post(ing)") in connection with or relating to the Services ("Your Content"). You are responsible for maintaining the confidentiality of usernames and passwords associated with your account and for all activities that occur under your account. Veloce reserves the right to access your account in order to respond to your requests for technical support. By posting Your Content on or through the Services, you grant Veloce a worldwide, non-exclusive, royalty-free, fully paid, sublicensable and transferable license to use, copy, modify, reproduce, distribute, display, publish, store and perform Your Content as necessary to provide the Services and for security to protect the Services and third parties from fraud, malware, malicious files or content, viruses and the like. You further agree that Veloce may remove or disable any of Your Content at any time for any reason (including, but not limited to, upon receipt of claims or allegations from third-parties or authorities relating to Your Content), or for no reason at all; provided, that if you are a user of our Services in the European Economic Area (i) we will remove or disable Your Content or impose restrictions on your use of the Services in accordance with applicable laws including if it is illegal content, infringes the rights of third parties, or breaches this Agreement; (ii) if we remove, block or restrict your use of the Services or Your Content, you, and any third party that may have informed us about your use of the Services or Your Content, may contact us about our decision at our support site and we will review and consider your message with a view to promptly resolving any complaint and, if appropriate, we will explain any options you have to request another review.                
                </p>
              </section>

              <section id="hobby-plan" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Hobby Plan</h2>
                <p>
                We offer a free hobby plan at our sole discretion. You shall only use the Services under a hobby plan for your personal or non-commercial use. We may change the terms and conditions applicable to the hobby plan or discontinue offering the hobby plan at any time. We reserve the right to disable or remove any project or website deployment on the hobby plan with or without notice at our sole discretion. We may shut down and terminate projects or deployments using the hobby plan without notice for any reason or no reason. We may shut down affected projects or deployments on the hobby plan in case of any delays or performance problems including, without limitation, those caused by a malicious attack on a project or deployment.
                </p>
              </section>

              <section id="acceptable-use" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Acceptable Use Policy</h2>
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
                  <li><strong>Usage Restrictions</strong>: You may not bypass or misuse Veloce’s usage limitations or guidelines, as outlined in Section 9 (Usage Restrictions) and Veloce’s Fair Use Guidelines, including by creating multiple accounts.</li>
                  <li><strong>Automated Access</strong>: Accessing Veloce’s website using automated means, such as robots or scripts, is strictly prohibited.</li>
                  <li><strong>Unsolicited Communications</strong>: You must not send unsolicited messages or use the Services to send spam, junk mail, or create misleading content, such as clickbait or click fraud schemes, as determined by Veloce.</li>
                  <li><strong>Illegal or Harmful Content</strong>: You must not use the Services to create or distribute synthetic media or "deepfakes" that promote illegal activities, such as child sexual exploitation or abuse.</li>
                  <li><strong>Reproducing Functionality</strong>: You may not use the Services to replicate the functionality of Veloce’s Services, including its storage products.</li>
                  <li><strong>Remote Storage</strong>: The Services may not be used primarily as a remote storage server or for the purpose of distributing downloadable content.</li>
                  <li><strong>Resale or Transfer</strong>: You are prohibited from renting, leasing, lending, selling, or otherwise attempting to transfer access to Veloce’s website or its software and documentation to any third party, including through framing or similar methods.</li>
                  <li><strong>Name Squatting</strong>: You may not engage in name squatting, such as reserving usernames, team names, or deployment URLs for resale, barter, trade, or speculative purposes.</li>
                  <li><strong>Interference</strong>: You must not interfere with or disrupt the Services or impose an undue burden on Veloce’s website or its connected networks or services.</li>
                  <li><strong>Proxying and Scraping</strong>: The Services or Veloce’s infrastructure must not be used for proxying, web scraping, creating virtual private networks, or establishing virtual private servers.</li>
                  <li><strong>Benchmarking</strong>: Benchmark tests on the Services are allowed, subject to the terms in this Acceptable Use Policy. If you publicly disclose the results of any tests, you must include all necessary details for others to replicate the tests.</li>
                </ul>
                <br />
                <p>
                  The final determination of whether any account has violated these terms rests solely with Veloce. Violations by you or anyone acting under your account may lead to termination of access to the Services and removal of any projects or deployments, in addition to any other remedies Veloce deems necessary.
                </p>
              </section>

              <section id="etiquette" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Etiquette</h2>
                <p>
                Without limiting any other provisions of this Agreement, you agree not to use the Services for or in connection with any website (including links from a website) that contains content that is deemed objectionable, abusive, profane, hateful, or otherwise violates any applicable law, as determined at Veloce's sole discretion. You agree to indemnify and hold Veloce harmless from any damages, losses, liabilities, settlements, and expenses (including, without limitation, costs and attorneys' fees) resulting from any third-party claims or actions arising out of an alleged violation of the foregoing or any unauthorized use of the Services under this Agreement. While Veloce is not obligated to monitor your use of the Services, it may use tools to detect patterns of abuse and investigate any such instances. Following these investigations, Veloce may restrict or prohibit any use of the Services that it believes (or is alleged to believe) violates these terms. You acknowledge that Veloce may disable or terminate your access to the Services if it determines that any content violates this Agreement, including the Acceptable Use Policy, any applicable restrictions, Veloce's DMCA Policy, or as required by Veloce's hosting providers.
                </p>
              </section>
              
              <section id="Veloce" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Security and Compliance</h2>
                
                <h3 className="text-xl font-medium mb-3">General</h3>
                <p className="mb-4">
                  You are responsible for configuring Your Content, including any projects or deployments, in a manner that ensures no personal data or personal information is exposed during transmission, storage, or use without obtaining proper consent from individuals, as required by applicable laws. You agree to configure the Services in accordance with the provided Documentation and implement encryption as specified in the Documentation. Veloce performs regular backups of Your Content, but you are also responsible for maintaining your own backups. Veloce will not be held liable for any unauthorized access, use, corruption, deletion, destruction, or loss of Your Content, to the extent such issues result from your misconfigurations, insecurities in your website or project, malware, or malicious content in your website, Content, or project. In the event of any actual or suspected security incidents, vulnerabilities, violations of this Section 7, or issues related to the Services, you must immediately report the incident to security@veloce.sh.
                </p>

                <h3 className="text-xl font-medium mb-3">PCI Compliance</h3>
                <p className="mb-4">
                  Veloce is not a payment processor. If Your Content or Your Data is subject to the Payment Card Industry Data Security Standards (PCI DSS), you acknowledge that it is your responsibility to ensure compliance with PCI DSS requirements, as prescribed by the PCI Security Standards Council, and to monitor such compliance. You also agree to follow Veloce’s Documentation for the proper implementation of the Services when processing payments.
                </p>

                <h3 className="text-xl font-medium mb-3">HIPAA Compliance</h3>
                <p>
                  You may not use the Services to store any Protected Health Information (PHI) or any information covered under the Health Insurance Portability and Accountability Act (HIPAA) unless you first obtain written approval from Veloce.
                </p>
              </section>

              <section id="data-protection" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
                
                <h3 className="text-xl font-medium mb-3">International Transfers of Data</h3>
                <p className="mb-4">
                  If Your Content or Your Data (as defined below) is subject to applicable data protection or privacy laws, as outlined in Veloce's Data Processing Addendum ("DPA"), and is processed or stored by Veloce on your behalf in connection with the Services, you agree to the terms set forth in the DPA.
                </p>

                <h3 className="text-xl font-medium mb-3">Use of Your Data</h3>
                <p className="mb-4">
                  You retain full ownership of Your Data. Veloce may use and disclose Your Data solely as necessary to provide the Services to you, as well as for security purposes, including protecting the Services and third parties from fraud, illegal activities, abuse, malware, malicious content, viruses, and other similar threats. Veloce will not sell, disclose, or share Your Data with any third parties for any other purpose. Veloce will implement reasonable security measures (including technical, administrative, and physical safeguards) to prevent unauthorized access to or disclosure of the Services or Your Data.
                </p>

                <h3 className="text-xl font-medium mb-3">Aggregate Data</h3>
                <p>
                  Veloce has the right to collect and analyze data related to the use and performance of the Services, excluding Your Data and any data derived from it. Veloce may use such data to improve and enhance the Services and for other development, diagnostic, and corrective purposes, both during and after the term of this Agreement. Veloce may also disclose this data in aggregate or de-identified form for business purposes.
                </p>
              </section>


              <section id="usage-restrictions" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Usage Restrictions</h2>
                <p>
                  You agree not to, directly or indirectly: (i) sublicense, resell, rent, lease, transfer, assign, or commercially exploit the Services, or make the Services available to any third party; (ii) reverse engineer, decompile, disassemble, or attempt to uncover the source code, object code, or underlying structure, ideas, algorithms, or know-how related to the Services, except where allowed by law for interoperability purposes (and if so, you must first request the relevant information from Veloce); (iii) modify, translate, or create derivative works based on the Services (except as expressly permitted by Veloce or within the Services themselves), or attempt to gain unauthorized access to the Services or related systems; (iv) use the Services for timesharing, service bureau purposes, or for the benefit of any third party, or remove proprietary notices; (v) remove or alter any proprietary rights notices (including copyright notices) within the Services or documentation; (vi) violate any applicable laws or infringe third-party rights in connection with your use of the Services.
                </p>
                <p>
                  You must comply with any codes of conduct, policies, or notices provided by Veloce in connection with the Services and promptly notify Veloce of any security breaches or issues. Additionally, you acknowledge that Veloce may establish practices and limits concerning the use of the Services, including limits on data retention, storage space, compute capacity, and network data transfer. Veloce reserves the right to change these practices and limits at any time in its sole discretion. Veloce's DMCA Policy is incorporated into this Agreement by reference.
                </p>
              </section>


              <section id="support" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Support</h2>
                <p>
                Veloce may, at its discretion, provide commercially reasonable remote technical support services during normal business hours ("Support Services"), subject to Veloce’s current Support Terms and Conditions.
                </p>
              </section>

              <section id="electronic-communications" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Electronic Communications</h2>
                <p>
                By using the Services, you consent to receiving electronic communications from Veloce, which may include notices regarding Service fees, transactional information, or other communications related to the Services. These communications may require your action to avoid service interruptions. Your account email address must be kept up to date, and you must ensure it is always responsive. You agree that any notices, agreements, disclosures, or other communications Veloce sends you electronically will satisfy any legal requirements, including the requirement that such communications be in writing.
                </p>
              </section>

              <section id="representation-and-warranties" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Representation and Warranties</h2>
                
                <h3 className="text-xl font-medium mb-3">Representations</h3>
                <p className="mb-4">
                  You represent and warrant that: (i) you own all Your Content or have obtained all necessary permissions, rights, or licenses to post and use Your Content in connection with the Services, and to allow Veloce to perform its obligations under this Agreement; (ii) Your Content and any activities related to the Services do not and will not infringe any third-party intellectual property rights, privacy rights, or any other proprietary rights, and Your Content is not defamatory, obscene, unlawful, or offensive; and (iii) you will comply with Veloce’s published policies and documentation and all applicable laws and regulations in using the Services.
                </p>

                <h3 className="text-xl font-medium mb-3">Use of Your Data</h3>
                <p className="mb-4">
                  Each party represents and warrants that it has the full legal right and power to enter into and perform its obligations under this Agreement without conflict with any other agreement or third-party consents.
                </p>
              </section>


              <section id="indemnification" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify and hold Veloce harmless from any claims, actions, or demands, including reasonable legal and accounting fees, arising from your breach of this Agreement, any infringement or misappropriation claims related to your websites or Your Content, or your use or misuse of the Services. Veloce will promptly notify you of any such claims and provide reasonable assistance, giving you the opportunity to assume control over defense and settlement. You are not responsible for any settlement that you do not approve, such approval not to be unreasonably withheld or delayed.
                </p>
              </section>

              <section id="confidentiality" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Confidentiality; Proprietary Rights</h2>
                
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
                  During the term of this Agreement, you grant Veloce a non-exclusive, royalty-free, fully paid-up license to use and display your trademarks, trade names, and logos on Veloce’s marketing materials and websites, indicating that you are a customer of Veloce. Veloce will adhere to any trademark usage guidelines you provide. All goodwill arising from the use of your trademarks, trade names, and logos will benefit you.
                </p>
              </section>

              <section id="payment" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Payment of Fees</h2>
                
                <h3 className="text-xl font-medium mb-3">Plans</h3>
                <p className="mb-4">
                  The Services will be provided according to the plan level you select. There is a free hobby plan and there are paid self-service subscription plans ("self-service subscriptions"). For an enterprise license, you may contact Veloce separately. You may opt to upgrade or downgrade to any other plan level that Veloce offers at any time during the period of your plan; provided that a downgrade will not be effective until the next renewal date. For self-service subscriptions, additional Services added to your self-service subscription, and domain registrations, you will be charged a fee and any applicable tax. Fees will be billed to the credit card or other payment account you provide in accordance with the billing terms in effect at the time a fee or charge is due and payable. <b>You acknowledge and agree that Veloce will automatically charge your credit card or other payment account on record with Veloce in connection with your use of the Services: (i) in advance of each self-service subscription term, for the self-service subscription you have selected and any additional Services added to your self-service subscription; (ii) in arrears for any additional Services you have used or added to your self-service subscription during the prior self-service subscription term; and (iii) on purchase of any domain registration and up to thirty (30) days prior to each annual anniversary of your purchase. The self-service subscription and any additional Services added to your self-service subscription will automatically-renew for the same term as the initial term.</b> You represent and warrant to Veloce that all of your payment information is true and that you are authorized to use the payment instrument. You will promptly update your account information with any changes (for example, a change in your billing address or credit card expiration date) that may occur. If payment is not received or cannot be charged to your credit card or other payment account for any reason in advance, Veloce reserves the right to either suspend or terminate your access to the Services and terminate this Agreement and for domain registrations, Veloce may not register the domain or may allow the domain registration to expire. All fees are non-refundable, except as expressly stated otherwise in this Agreement.
                </p>

                <h3 className="text-xl font-medium mb-3">Payments</h3>
                <p className="mb-4">
                All payments shall be made in the currency of, and within the borders of the United States. You will pay all applicable taxes, duties, withholdings, backup withholding and the like; when Veloce has the legal obligation to pay or collect such taxes, the appropriate amount shall be paid by you directly to Veloce. If all or any part of any payment owed to Veloce under this Agreement is withheld, based upon a claim that such withholding is required pursuant to the tax laws of any country or its political subdivisions and/or any tax treaty between the U.S. and any such country, such payment shall be increased by the amount necessary to result in a net payment to Veloce of the amounts otherwise payable under this Agreement. You will reimburse Veloce any pre-approved and agreed upon costs. Veloce may change its fees and payment terms at its discretion; provided however, that such changes will not take effect for you until the start of the next payment period. Veloce will provide written notice to you for any changes to the fees that affect the Services purchased by you. Your continued use of the Services after the price change becomes effective constitutes your agreement to pay the changed amount.
                </p>
              </section>


            </div>
          </div>

          {/* Table Of Contents Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <div className="bg-gray-50/50 dark:bg-gray-900/30 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                <h2 className="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-100">On this page</h2>
                <nav className="space-y-1 text-sm">
                  <a href="#introduction" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Introduction
                  </a>
                  <a href="#age-eligibility" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Age and Eligibility
                  </a>
                  <a href="#temporary-use-license" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Temporary Use License
                  </a>
                  <a href="#your-content" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Your Content
                  </a>
                  <a href="#hobby-plan" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Hobby Plan
                  </a>
                  <a href="#acceptable-use" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Acceptable Use
                  </a>
                  <a href="#etiquette" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Etiquette
                  </a>
                  <a href="#Veloce" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Security and Compliance
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#general-security" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      General
                    </a>
                    <a href="#pci-compliance" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      PCI Compliance
                    </a>
                    <a href="#hipaa-compliance" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      HIPAA Compliance
                    </a>
                  </div>
                  <a href="#data-protection" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Data Protection
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#international-transfers-of-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      International Transfers of Data
                    </a>
                    <a href="#use-of-your-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Use of Your Data
                    </a>
                    <a href="#aggregate-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Aggregate Data
                    </a>
                  </div>
                  <a href="#usage-restrictions" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Usage Restrictions
                  </a>
                  <a href="#support" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Support
                  </a>
                  <a href="#electronic-communications" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Electronic Communications
                  </a>
                  <a href="#representation-and-warranties" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Representation and Warranties
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
                    Indemnification
                  </a>
                  <a href="#payment" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Payments
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
                    Introduction
                  </a>
                  <a href="#age-eligibility" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Age and Eligibility
                  </a>
                  <a href="#temporary-use-license" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Temporary Use License
                  </a>
                  <a href="#your-content" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Your Content
                  </a>
                  <a href="#hobby-plan" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Hobby Plan
                  </a>
                  <a href="#acceptable-use" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Acceptable Use
                  </a>
                  <a href="#etiquette" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Etiquette
                  </a>
                  <a href="#Veloce" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Security and Compliance
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#general-security" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      General
                    </a>
                    <a href="#pci-compliance" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      PCI Compliance
                    </a>
                    <a href="#hipaa-compliance" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      HIPAA Compliance
                    </a>
                  </div>
                  <a href="#data-protection" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Data Protection
                  </a>
                  <div className="pl-3 border-l border-gray-200 dark:border-gray-700">
                    <a href="#international-transfers-of-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      International Transfers of Data
                    </a>
                    <a href="#use-of-your-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Use of Your Data
                    </a>
                    <a href="#aggregate-data" className="block text-gray-500 hover:text-primary-600 dark:text-gray-500">
                      Aggregate Data
                    </a>
                  </div>
                  <a href="#usage-restrictions" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Usage Restrictions
                  </a>
                  <a href="#support" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Support
                  </a>
                  <a href="#electronic-communications" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Electronic Communications
                  </a>
                  <a href="#representation-and-warranties" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Representation and Warranties
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
                    Indemnification
                  </a>
                  <a href="#payment" className="block text-gray-600 hover:text-primary-600 dark:text-gray-400">
                    Payments
                  </a>
                </nav>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
} 