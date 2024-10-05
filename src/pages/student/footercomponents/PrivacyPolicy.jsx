import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-screen-md mx-auto my-10 p-4 lg:p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">Privacy Policy</h1>
      <div className="space-y-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Introduction
        </h2>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Welcome to Ayinu-LabGuide. We are committed to protecting your privacy. This privacy policy explains how we handle any data collected through our platform, including information related to advertisements.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Information Collection
        </h2>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>Non-Personal Information:</strong> Our platform does not collect personal information. We do not require users to log in or provide personal details. We may collect non-personal data related to your visit, such as usage statistics and interaction data, to improve our services.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>Advertising Data:</strong> We use Google Ads on our platform. Google may collect data about your visits to our site and other sites to provide targeted advertisements.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Use of Information
        </h2>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>Service Improvement:</strong> Any non-personal data collected is used to enhance our platform’s performance.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>Advertising:</strong> Google uses the data collected to serve relevant ads based on your interests.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Information Sharing and Disclosure
        </h2>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>No Sharing:</strong> We do not share personal information with third parties. However, data collected by Google for advertising purposes is governed by Google’s privacy policies.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>Google Ads:</strong> Our platform uses Google Ads, which may place cookies on your device to collect data for advertising purposes. These cookies help deliver ads that are more relevant to your interests.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>Managing Cookies:</strong> While we do not set cookies ourselves, you can manage and control cookies through your browser settings. You can also review Google’s privacy policy to understand how Google uses cookies for advertising.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          User Rights
        </h2>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>No Personal Data:</strong> Since we do not collect personal information, there are no rights related to data access or deletion directly from us. For data related to ads, you can review and manage your Google ad settings.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Advertisements
        </h2>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          This Privacy Policy covers the use of cookies by Ayinu-LabGuide and does not cover the use of cookies by any advertisers.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Changes to the Privacy Policy
        </h2>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>Policy Updates:</strong> We may update this privacy policy periodically. Any changes will be posted on our site. Your continued use of the platform signifies acceptance of the updated policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Contact Information
        </h2>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          <strong>Contact Us:</strong> If you have any questions or concerns about this privacy policy, please contact us at labguide100@gmail.com.
        </p>
      </div>
      <button 
        onClick={() => window.history.back()} 
        className="mt-8 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Go Back
      </button>
    </div>
  );
};

export default PrivacyPolicyPage;
