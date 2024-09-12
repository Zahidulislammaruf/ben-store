
const Privacy = () => {
    return (
        <div>
          <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <div className="prose">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>Welcome to Ben Stores Privacy Policy. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website .</p>

        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, and other contact details when you register an account, place an order, or subscribe to our newsletter.</p>

        {/* Add more sections as needed */}

        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:privacy@benstore.com" className="text-blue-500">privacy@benstore.com</a>.</p>
      </div>
    </div> 
        </div>
    );
};

export default Privacy;