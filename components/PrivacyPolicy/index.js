import React from "react";
import ConditionsCard from "../TermsAndConditions/CondtionsCard";

const privacy = [
  {
    id: "1",
    title: "Use and purpose",
    description: `Users must complete the registration process by providing the following information in order to use certain services on the Portal:
    Username
    Password
    Email address Date of birth
    You may grant us permission to capture and record your device information, operating system information, network information, and location information in the course of providing you access to the Services, in order to give you access to the features offered through the Portal, to verify your identity, and to secure your account details. You might also be asked to provide more details, like your Permanent Account Number.
    In some cases, we may also gather sensitive personal data about you on the Portal (hereinafter, "SPI"). SPI refers to any personal information about you, including details about your physical, physiological, and mental health; your medical history; your biometric information; your sexual orientation; and your financial information, including details about the payment method(s) you use to make purchases, such as cardholder name, credit or debit card number(s) with expiration dates, banking information, wallet information, etc. This information is provided to you at the time of payment in order to help you finish the transaction quickly.
    Win11 does not gather any other SPI while providing the services, with the exception of any financial information that you choose to provide when paying for any services on the Portal. Except as otherwise stated in this Privacy Policy, as provided in a separate written agreement between Win11 and you, or as required by law, any SPI collected by Win11 shall not be disclosed to any third party without your express consent. It is made clear that this stipulation does not apply to publicly accessible information about you on the Portal, including SPI.
    By providing the email address or Facebook username of other users, Users may invite them to participate in any of the services while providing the services ("Invited Users"). After that, Win11 may make contact with the invited user using this information and invite them to join Win11 (if they are not already a user) and take part in the game to which they were invited. The terms of this privacy statement and the terms and conditions for using the portal will apply to the invited user's participation in any gameshall. By signing this document, the user affirms that the invited users have accepted and agreed to
    All necessary information will be used to provide services, including but not limited to the Services that the User has requested, and is specific to the Game/Services that the User wishes to access or participate in. We are able to enhance the Services and give you the most user-friendly gaming experience thanks to the data provided by the Users.
    In certain circumstances, Win11 may also disclose this information to its affiliates and third parties, such as when doing so will help us deliver the services you've requested, comply with legal obligations, avert fraud or other serious problems, or maintain the security of our network and services.`,
  },
  {
    id: "2",
    title: "Indicating or Sharing",
    description: `Win11 may also use third-party service providers it has hired for data analytics or other similar purposes to share the information you provide and data about how you use the Services and participate in the Games in order to store it, enhance the services, and better serve you.
    If we plan to use your personal information—information that can be used to identify the user and is not otherwise made available to the public—for any other purposes, we'll make sure to let you know beforehand. Additionally, you will be given the choice to refuse or withdraw your consent for any use not already mentioned.
    You expressly agree and grant Windows 11 permission to collect, use, and store this information by using the Portal. Win11 retains the right to divulge, transfer, and share the information it has obtained under this agreement with its own affiliates. Consumer information may be one of the business assets shared, disclosed, or transferred in the event that Win11 sells or transfers all or a portion of its business assets. By signing below, you formally authorize Win11 to disclose and transfer your information to such third parties. Win11 may provide its business partners with information that you provide, as well as information about how you use the services and play the game, in order to promote user engagement.`,
  },
  {
    id: "3",
    title: "Use of Cookies",
    description: `We use "cookies" or other similar electronic tools to gather information in order to give each visitor a special random number as a User Identification (User ID) and better understand their unique interests using the identified computer. This improves the effectiveness and usability of the portal for our users. Even if we assign a cookie to the user's computer, Windows has no way of knowing who the user is unless the user voluntarily identifies himself or herself (for example, through registration). Cookies can only contain data that the user voluntarily supplies and nothing else. Data on the user's hard drive cannot be read by a cookie. If the user clicks on one of their ad banners, Win11's advertisers may also add their own cookies to the user's browser.
    When a user accesses the Portal, Win11's web servers automatically record a minimal amount of data, including the user's IP address, about the user's computer's Internet connection. (The user's IP address is a number that informs computers connected to the Internet of the location from which to send data to the user, such as the web pages the user has viewed.) The user cannot be personally identified from their IP address. By using this information, Win11 can deliver web pages to users upon request, customize the Portal to their interests, monitor traffic within the Portal, and inform advertisers of the regions from which Win11's users are visiting.`,
  },
  {
    id: "4",
    title: "Information updating:",
    description: `If there are any updates, changes, or modifications to your information, you will notify Win11 right away. By logging into your Profile page on the Portal, you can also review, update, or modify your information and user preferences.`,
  },
  {
    id: "5",
    title: "Web links",
    description: `Links to other websites are also included in Win11. Such websites' privacy policies are in force, and Win11 has no control over them. The use of any information provided by the User is governed by the privacy policy of the operator of the website the User is visiting once the User leaves Win11's servers (the User can determine where he or she is by checking the URL in the User's browser's location bar). That policy might not be the same as Win11's. If the user is unable to access any of these sites' privacy policies via a link from the homepage, they may get in touch with them directly to learn more. Win11 disclaims all liability for these websites' content and privacy policies.`,
  },
  {
    id: "6",
    title: "Security techniques",
    description: `The database under the control of Win11 is where all data collected on Win11 is safely stored. The database is kept on servers protected by a firewall, and access to these servers is strictly controlled and password-protected based on need-to-know basis. We are aware that no security system is impenetrable, despite how effective ours are. As a result, neither the security of our database nor the safety of the information you provide while sending it to us over the Internet can be guaranteed. Additionally, anyone with Internet access will be able to access any information you include in a posting to the discussion areas. You acknowledge and accept, by using the Portal, that your information may be used or transferred outside of India.
    Additionally, Win11 agrees that the internet is a dynamic medium. Without providing you with any prior notice, we may periodically review and modify our privacy policy to reflect potential future changes. Regardless of what the new policy may be, we will always use any information we collect in accordance with the policy under which it was collected. You can always stay informed about the information we gather, how we use it, how we store it, and under what circumstances we disclose it by checking this page for updates to our privacy policy.`,
  },
  {
    id: "7",
    title: "Advertising",
    description: `To better understand our audience and demonstrate the value of advertising on the Portal, Win11 frequently provides information to its online advertisers in the form of aggregated traffic statistics for different pages on our website. After you register with Win11, we may occasionally contact you about updating your content so that we can offer features we think you'll find useful. On the Internet, there may or may not be a number of false emails, websites, blogs, etc. that claim to be from or affiliated with Win11. Frequently, our logo, images, links, content, or other information can be found in these emails, websites, blogs, etc. Some emails, websites, blogs, etc. call the user and ask for the user's login information, such as their password, or they inform the user that the user
    Requirements for Use:
    Win11 MAKES NO WARRANTY AS TO THE VIRUS-FREE CONDITION OF THIS PORTAL, ITS SERVERS, OR EMAILS SENT BY US OR ON OUR BEHALF. Win11 IS NOT RESPONSIBLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES, COMPENSATORY DAMAGEs, loss of data, goodwill, business opportunity, income or profit, loss of or damage to property, or claims of third parties resulting from the use of this portal. Win11 will never be responsible for any damages exceeding a total of 100 Indian rupees.`,
  },
  {
    id: "8",
    title: "Data Retention",
    description: `Your personal information may be kept and used as long as: I the pertinent purposes for use of your information outlined in this privacy policy are no longer applicable; (ii) we are no longer required to keep it by applicable law, regulations, contractual obligations, or legitimate business needs; and (iii) the keeping of your personal information is not necessary for the establishment, exercise, or defence of any legal claim.`,
  },
  {
    id: "9",
    title: "Deletion of user accounts and data",
    description: ``,
  },
  {
    id: "10",
    title: "Law and jurisdiction that apply",
    description: `By emailing hello@Win11.com with their written request, users have the right to request that Win11 delete their user accounts and personal information. We will make every effort to reply as soon as possible, but in any case, within one month of the following:
    Our receipt of your written request; or our receipt of any additional data we might need from you to fulfill your request, whichever comes first.
    You have the choice to ask for either of the following by writing to hello@win11.com as an alternative to having your account deleted:
    If your account is suspended, you will no longer be able to participate in paid contests on your User account, but you will still have access to other areas of the Portal;
    if your account is temporarily deactivated, you will no longer be able to log into the Portal, but you will be able to request reactivation of your account with all of your account information.
    You will lose access to the Portal and the Services, along with any user data and private information linked to your account, if you proceed with permanently deactivating your account. Users may email hello@Win11.com to request account restoration within six (6) months of the date Win11 notified them that their accounts had been deleted.
    We follow a deletion process when you ask us to delete your data, making sure it is safely and completely gone from our servers or is only kept in an anonymous form. We make an effort to protect information from deletion by mistake or malicious intent with our services. As a result, there might be a delay between your deletion request and the deletion of copies from our active and backup systems.`,
  },
  {
    id: "11",
    title: "Contact Information",
    description: `You can contact Win11 at hello@Win11.com with any inquiries or clarifications regarding this policy, as well as any complaints, comments, concerns, or feedback, or you can send a physical or regular letter to the following address:
    To: Win11 Team
    Win11 Gaming Private Limited,
    #125, Sai Lakshmi, 5th floor, 2nd Main Rd., beside Indian Bank, Old Madras Rd., KR Puram, Bangalore, KA 560036 IN`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="   relative w-full mt-[75px] sm:mt-[120px] mb-[16px] ">
      <h1 className=" mx-5 sm:mx-10 font-[600] sm:font-[700] text-center  text-[#00A547] text-[18px] sm:text-[24px] my-3 lg:mt-[175px] lg:mb-[40px] ">
        Privacy Policy
      </h1>
      <img
        className="h-[78px] w-[78px]  lg:h-[165px] lg:w-[165px] absolute right-0 -z-20"
        src="/cricketball.svg"
      />

      <p className="  px-5 sm:mx-10 text-[#0B592A] text-[16px] font-[400] lg:mx-[200px]  ">
        The web-portal Win11.com and partner website(s) and mobile
        application(s) (collectively referred to as the "Portal") are operated
        by Win11 Gaming Private Limited in India and provide fantasy games for
        cricket, football, basketball, kabaddi, f1 racing, soccer, and
        investment prediction (Win11 Gaming Private Limited referred to herein
        as "Win11" or "we" or "us" or "our").
      </p>

      <img
        className="h-[78px] w-[78px] -z-10 absolute left-0 mb-8 md:hidden"
        src="/rugb.svg"
      />

      <p className=" px-5 sm:mx-10 text-[#0B592A] text-[16px] font-[400] lg:mx-[200px]">
        This Privacy Policy applies to anyone using the Portal ("User" or "you"
        or "your") or any of its features, including participation in the
        various competitions, games (including fantasy games) ("Games"), and
        services ("Services") being offered on the Portal.
      </p>

      <p className=" px-5 sm:mx-10 text-[#0B592A] text-[16px] font-[400] lg:mx-[200px] my-3">
        This Privacy Policy applies to anyone using the Portal ("User" or "you"
        or "your") or any of its features, including participation in the
        various competitions, games (including fantasy games) ("Games"), and
        services ("Services") being offered on the Portal.
      </p>
      <img
        className="h-[78px] w-[78px]  absolute sm:hidden right-0 mb-8"
        src="/cricketball.svg"
      />
      <img
        className="h-[78px] w-[78px] absolute left-0 -z-10 hidden md:block lg:hidden"
        src="/basketballleft.svg"
      />

      <p className=" px-5 sm:mx-10 text-[#0B592A] text-[16px] font-[400] lg:mx-[200px] my-3">
        Win11 is committed to protecting its users' privacy in every way because
        it values it. Win11 offers a vast collection of services with the goal
        of providing its users with a rich and comprehensive internet
        experience. To learn more about Win11, kindly take the time to read the
        "About Us" section. The majority of the services are free, but some,
        such as Windows Live's online games, may require registration. Win11
        gathers information about Users in two ways: (i) data voluntarily
        provided by Users, and (ii) data automatically tracked while Users are
        navigating Win11.
      </p>
      <img
        className="h-[78px] w-[78px] lg:h-[165px] lg:w-[165px]  absolute left-0 -z-10 hidden lg:block"
        src="/rugb.svg"
      />

      <img
        className="h-[78px] w-[78px] sm:hidden -z-10 -translate-y-6 mb-4  absolute left-0  "
        src="/rugb.svg"
      />

      <p className=" px-5 sm:mx-10 text-[#0B592A] text-[16px] font-[400] lg:mx-[200px] ">
        Please read this privacy policy to understand how we will handle your
        personal information before submitting any data to the Portal. By using
        any portion of the Portal, you agree that your personal information will
        be collected, used, disclosed, and transferred for the purposes
        described in this privacy policy. You also agree that this information
        will be collected, processed, and maintained. Do not use the portal if
        you do not agree to this privacy statement. By using the portal in any
        way, you agree to this privacy statement and the collection, use, and
        disclosure of your personal
        <span></span> information in accordance with it. While you have the
        choice to withhold certain information from us, withdraw your approval
        to
      </p>

      <img
        className="h-[78px] w-[78px] lg:h-[165px] lg:w-[165px] absolute  -z-20  bottom-[840px] sm:hidden right-0 lg:block  lg:bottom-[430px]  "
        src="/basketball.svg"
      />

      <div className=" mb-8 px-10 sm:px-16  md:mb-[100px] mt-5 md:mt-10 lg:mx-[200px] ">
        {privacy.map((item) => (
          <ConditionsCard
            key={item?.id}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
