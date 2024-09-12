
const Terms = () => {
    return (
        <div>
           <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Terms of Use</h1>
      <div className="prose">
        <p>Welcome to Ben Stores Terms of Use. These terms govern your access to and use of our website . By accessing or using our Website, you agree to be bound by these terms and our Privacy Policy. If you do not agree to these terms, please do not use our Website.</p>

        <h2 className="text-xl font-semibold">Use of Our Website</h2>
        <p>You may use our Website for lawful purposes and in accordance with these terms. You agree not to:</p>
        <ul>
          <li>Use our Website in any way that violates applicable laws or regulations</li>
          <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity</li>
          <li>Interfere with or disrupt the operation of our Website or servers</li>
          <li>Attempt to gain unauthorized access to any part of our Website or systems</li>
          <li>Engage in any activity that could damage, disable, overburden, or impair our Website</li>
        </ul>

        {/* Add more sections as needed */}

        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>If you have any questions or concerns about our Terms of Use, please contact us at <a href="mailto:terms@benstore.com" className="text-blue-500">terms@benstore.com</a>.</p>
      </div>
    </div>   
        </div>
    );
};

export default Terms;