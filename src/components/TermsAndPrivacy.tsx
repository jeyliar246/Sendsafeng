import React from 'react';

const TermsAndPrivacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#ff00ff] to-[#00ff9d] text-transparent bg-clip-text">Terms and Conditions & Privacy Policy</h1>
      
      {/* Terms and Conditions Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#00ff9d]">Terms and Conditions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">1. Acceptance of Terms</h3>
            <p className="text-white/90">
              By accessing and using SendSafe, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service. These terms constitute a legally binding agreement between you and SendSafe regarding your use of our delivery and logistics services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">2. Service Description</h3>
            <p className="text-white/90">
              SendSafe is a delivery service platform that facilitates the sending of physical items and gift cards. We are not a payment platform, financial institution, or money transfer service. Our services include:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Username-based delivery services</li>
                <li>Same-day delivery options</li>
                <li>Bulk delivery services</li>
                <li>Inter-state delivery</li>
                <li>International shipping</li>
                <li>Gift card delivery (physical cards only)</li>
                <li>Package tracking and monitoring</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">3. Gift Card Service</h3>
            <p className="text-white/90">
              Our gift card feature is not a payment platform. It is a service that allows users to send physical gift cards with cash value. The actual monetary value is handled by the gift card issuer, not SendSafe. Important points regarding gift cards:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Gift cards are physical items delivered through our logistics network</li>
                <li>We do not handle or process any monetary transactions</li>
                <li>All gift card values are managed by the respective card issuers</li>
                <li>We are not responsible for gift card activation or redemption</li>
                <li>Users must comply with gift card issuer terms and conditions</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">4. User Responsibilities</h3>
            <p className="text-white/90">
              Users are responsible for:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Providing accurate and complete information for delivery</li>
                <li>Maintaining the security of their account credentials</li>
                <li>Complying with all applicable Nigerian laws and regulations</li>
                <li>Ensuring the legality of items being sent</li>
                <li>Proper packaging of items for delivery</li>
                <li>Accurate declaration of package contents and value</li>
                <li>Payment of all applicable duties and taxes</li>
                <li>Providing correct recipient information</li>
                <li>Ensuring items comply with weight and size restrictions</li>
                <li>Maintaining appropriate insurance coverage for valuable items</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">5. Prohibited Activities and Items</h3>
            <p className="text-white/90">
              Users are prohibited from:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Using the service for illegal purposes</li>
                <li>Attempting to use the service as a payment platform</li>
                <li>Sending prohibited or restricted items including:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Illegal drugs and controlled substances</li>
                    <li>Weapons and ammunition</li>
                    <li>Counterfeit goods</li>
                    <li>Hazardous materials</li>
                    <li>Perishable items without proper packaging</li>
                    <li>Items prohibited by Nigerian customs</li>
                    <li>Items that violate intellectual property rights</li>
                  </ul>
                </li>
                <li>Violating any applicable laws or regulations</li>
                <li>Providing false or misleading information</li>
                <li>Attempting to circumvent delivery restrictions</li>
                <li>Using the service for money laundering or fraud</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">6. Delivery Terms and Conditions</h3>
            <p className="text-white/90">
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Delivery times are estimates and not guaranteed</li>
                <li>We reserve the right to refuse service to any user</li>
                <li>Additional charges may apply for:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Remote area delivery</li>
                    <li>Special handling requirements</li>
                    <li>Customs duties and taxes</li>
                    <li>Storage fees for undelivered items</li>
                    <li>Return shipping costs</li>
                  </ul>
                </li>
                <li>Items must be properly packaged and labeled</li>
                <li>Recipients must provide valid identification</li>
                <li>We may require proof of delivery</li>
                <li>Failed delivery attempts may result in return to sender</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">7. Limitation of Liability</h3>
            <p className="text-white/90">
              SendSafe is not liable for:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Any financial losses related to gift cards</li>
                <li>Delays or issues with delivery partners</li>
                <li>Misuse of the service by users</li>
                <li>Any indirect or consequential damages</li>
                <li>Loss or damage to items during transit</li>
                <li>Delays caused by customs or regulatory authorities</li>
                <li>Force majeure events</li>
                <li>Acts of third parties</li>
                <li>Technical issues or system failures</li>
                <li>Incorrect information provided by users</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">8. Insurance and Claims</h3>
            <p className="text-white/90">
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Basic insurance coverage is provided for all shipments</li>
                <li>Additional insurance can be purchased for valuable items</li>
                <li>Claims must be filed within 30 days of delivery</li>
                <li>Documentation required for claims:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Proof of value</li>
                    <li>Photos of damage</li>
                    <li>Delivery receipt</li>
                    <li>Original packaging</li>
                  </ul>
                </li>
                <li>Claims are subject to investigation and verification</li>
                <li>Compensation is limited to declared value or insurance coverage</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[#00ff9d]">Privacy Policy</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">1. Information Collection</h3>
            <p className="text-white/90">
              In compliance with the Nigeria Data Protection Regulation (NDPR), we collect information necessary to provide our services, including:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Personal identification information:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Full name</li>
                    <li>Date of birth</li>
                    <li>National ID number</li>
                    <li>BVN (for business accounts)</li>
                  </ul>
                </li>
                <li>Contact details:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Physical address</li>
                    <li>Alternative contact information</li>
                  </ul>
                </li>
                <li>Delivery information:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Pickup and delivery addresses</li>
                    <li>Recipient details</li>
                    <li>Package specifications</li>
                    <li>Delivery preferences</li>
                  </ul>
                </li>
                <li>Transaction information:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Order history</li>
                    <li>Payment records</li>
                    <li>Delivery tracking data</li>
                    <li>Service usage patterns</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">2. Information Sharing</h3>
            <p className="text-white/90">
              We share necessary information with:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Delivery partners to facilitate secure transactions:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Name and contact information</li>
                    <li>Delivery addresses</li>
                    <li>Package details</li>
                    <li>Tracking information</li>
                  </ul>
                </li>
                <li>Service providers who assist in our operations:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Payment processors</li>
                    <li>Cloud storage providers</li>
                    <li>Customer service platforms</li>
                    <li>Analytics services</li>
                  </ul>
                </li>
                <li>Legal authorities when required by law:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Court orders</li>
                    <li>Regulatory requirements</li>
                    <li>Law enforcement requests</li>
                    <li>Customs authorities</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">3. Data Security</h3>
            <p className="text-white/90">
              We implement appropriate security measures to protect your information, including:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Encryption of sensitive data:
                  <ul className="list-disc ml-6 mt-2">
                    <li>End-to-end encryption for communications</li>
                    <li>Secure storage of personal information</li>
                    <li>Encrypted payment processing</li>
                    <li>Secure data transmission</li>
                  </ul>
                </li>
                <li>Secure data storage:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Access controls and authentication</li>
                    <li>Regular security audits</li>
                    <li>Data backup systems</li>
                    <li>Secure server infrastructure</li>
                  </ul>
                </li>
                <li>Regular security assessments:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Vulnerability testing</li>
                    <li>Penetration testing</li>
                    <li>Security compliance audits</li>
                    <li>Employee security training</li>
                  </ul>
                </li>
                <li>Access controls and authentication:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Multi-factor authentication</li>
                    <li>Role-based access control</li>
                    <li>Session management</li>
                    <li>Activity monitoring</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">4. User Rights Under NDPR</h3>
            <p className="text-white/90">
              Users have the right to:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Access their personal information:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Request a copy of their data</li>
                    <li>Review their information</li>
                    <li>Verify data accuracy</li>
                  </ul>
                </li>
                <li>Request corrections to their data:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Update personal information</li>
                    <li>Correct inaccuracies</li>
                    <li>Complete incomplete data</li>
                  </ul>
                </li>
                <li>Delete their account and associated data:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Request data deletion</li>
                    <li>Account deactivation</li>
                    <li>Data erasure</li>
                  </ul>
                </li>
                <li>Opt-out of marketing communications:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Email preferences</li>
                    <li>SMS notifications</li>
                    <li>Push notifications</li>
                  </ul>
                </li>
                <li>Data portability:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Export personal data</li>
                    <li>Transfer to other services</li>
                  </ul>
                </li>
                <li>Object to processing:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Direct marketing</li>
                    <li>Automated decision making</li>
                    <li>Profiling</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">5. Data Retention</h3>
            <p className="text-white/90">
              We retain user data for as long as necessary to provide our services and comply with legal obligations. Specific retention periods:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Account information: 7 years after account closure</li>
                <li>Transaction records: 7 years for tax purposes</li>
                <li>Delivery history: 2 years</li>
                <li>Communication records: 1 year</li>
                <li>Marketing preferences: Until opt-out</li>
                <li>Location data: 30 days</li>
                <li>Cookies and tracking data: 1 year</li>
              </ul>
              Users can request data deletion at any time, subject to legal requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">6. Changes to Policy</h3>
            <p className="text-white/90">
              We may update this privacy policy periodically. Users will be notified of any significant changes through:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>In-app notifications</li>
                <li>Email communications</li>
                <li>SMS alerts</li>
                <li>Website announcements</li>
              </ul>
              Users are encouraged to review the policy regularly for updates.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2 text-[#ff00ff]">7. Contact Information</h3>
            <p className="text-white/90">
              For privacy-related inquiries, contact our Data Protection Officer:
              <ul className="list-disc ml-6 mt-2 text-white/90">
                <li>Email: privacy@sendsafe.app</li>
                <li>Phone: +234 XXX XXX XXXX</li>
                <li>Address: [Your Office Address]</li>
                <li>Response time: Within 30 days</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 text-center">
        <p className="text-sm text-white/70">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TermsAndPrivacy; 