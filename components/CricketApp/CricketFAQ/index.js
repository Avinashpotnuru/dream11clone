import ConditionsCard from "@/components/TermsAndConditions/CondtionsCard";
import React from "react";

const cricketAppData = [
  {
    id: "1",
    title: "How do I download the win11 Fantasy Cricket App?",
    description: `It's easy! Simply visit win11.co.in on your desktop or mobile browser. If you're an Android user, click here and enter your mobile number to receive an SMS with a download link, or give us a missed call for a link. For iOS users, search for win11 in your App Store and download the app. Want a step-by-step guide? Check out this video to see how it's done!`,
  },
  {
    id: "2",
    title: "I'm not receiving an OTP, what should I do?",
    description: `Don't worry, there could be a few reasons for this. You may have entered an incorrect mobile number, your network might not be strong enough, or your number may be registered for DND. If you've logged in using Facebook or Google with the same account/team name earlier, you can use these methods to log in on your Android phone without needing an OTP.`,
  },
  {
    id: "3",
    title: "Why should I download the win11 App for Fantasy Cricket?",

    description: `The win11 Fantasy Cricket App is a top choice for fantasy cricket enthusiasts. You'll be able to play various Cricket formats and challenge types using your cricketing skills, competing for amazing prizes. Plus, with 1000+ daily contests, you'll always have something to play.`,
  },
  {
    id: "4",
    title: "Does it cost to download the win11 App?",
    description: `Not at all! The win11 App is completely free to download.`,
  },
  {
    id: "5",
    title: "Is it safe to download the win11 app?",
    description: `Absolutely! Our payment gateway comes with 3D secure authentication to ensure the safety & security of all users. win11 supports and advocates transparency to ensure the trust for all users.`,
  },
  {
    id: "6",
    title:
      "I haven't received the registration email after I signed up on the win11 App.",
    description: `If you didn't receive a confirmation email after registering, then you may have entered an incorrect email address, please contact the Support team via the helpdesk to resolve this.`,
  },
  {
    id: "7",
    title: "Can I open more than one account on win11?",
    description: `Unfortunately, no. A User cannot register or operate with more than one User account at win11.`,
  },
  {
    id: "8",
    title:
      "I am under 18 years of age, can I participate in any Fantasy Cricket contests?",
    description: `Unfortunately, no. You must be 18 years or older to participate in any contests on the win11 platform.`,
  },
  {
    id: "9",
    title: "How do I register for a contest on the win11 App?",
    description: `To register for a contest, you'll need to provide your full name, team name(s), email address, password, state of residence, gender, and date of birth. Participants are also required to confirm that they have read and will abide by the terms and conditions. Once you've entered this information and clicked on the "register" tab, you'll receive an email confirming your registration and containing your login information.`,
  },
  {
    id: "10",
    title: "Is win11 the best fantasy cricket app to download?",
    description: `In a word, yes! With its safety, security, and enjoyable gameplay, win11 is a top choice for fantasy cricket enthusiasts. With 1000+ daily contests, you'll always have something to play and a chance to win big.`,
  },
  {
    id: "11",
    title: "Are there any promotions or offers available on win11?",
    description: `Yes, win11 frequently offers promotions and offers for its users to take advantage of. These can range from bonus credit points for new users, to special contests and giveaways. Keep an eye out for these promotions and offers, as they can give you an edge when building your fantasy team and increase your chances of winning big.`,
  },
  {
    id: "12",
    title: "Can I play fantasy cricket with my friends on win11?",
    description: `Absolutely! win11 offers the option to create private contests where you can invite your friends and compete against each other. You can also join public contests and compete against other users from around the world.`,
  },
  {
    id: "13",
    title:
      "How can I get help or support if I have any issues while using the win11 app?",
    description: `win11 has a dedicated support team that is available to help you with any issues you may have while using the app. You can contact the support team via the in-app helpdesk or through the website. The team will be happy to assist you with any questions or concerns you may have.`,
  },
  {
    id: "14",
    title: "Can I withdraw my winnings from win11?",
    description: `Yes, you can withdraw your winnings from win11. You will need to verify your identity and provide the necessary information before withdrawing your winnings. The withdrawal process is simple, fast and secure.`,
  },
  {
    id: "15",
    title: "Is Fantasy cricket legal in India?",
    description: `Yes, Fantasy cricket is a game of skill and is completely legal in India. The Supreme Court of India has ruled that Fantasy sports is a game of skill and does not fall under gambling or betting. However, some states in India have banned online fantasy sports, so it's important to check the laws in your specific state before playing. Additionally, it's important to note that players under the age of 18 are not allowed to participate in any contests on the win11 platform.`,
  },
];

const CricketFAQ = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <img
        className="h-[60px]  w-[60px] lg:h-[131px]  lg:w-[131px] -z-10 top-0  absolute  left-0"
        src="/cricketballleft.svg"
      />
      <div className="flex justify-around items-center p-2 w-[80%]">
        <img
          className="h-[80px] w-[77px] hidden sm:block xl:hidden "
          src="/CUPPPP.png"
        />
        <h1 className="text-[#0169B6] text-[28px] lg:text-[40px] text-center font-[700] my-3">
          Win 11 <span className="text-[#00A547]">FAQ</span>
        </h1>

        <img
          className="h-[80px] w-[77px] hidden sm:block xl:hidden"
          src="/CUPPPP.png"
        />
      </div>

      <div className="flex justify-around items-center w-[80%] xl:w-full  ">
        <img
          className="h-[174px] w-[162px] hidden xl:block "
          src="/CUPPPP.png"
        />
        <div className=" ">
          {cricketAppData.map((item) => (
            <ConditionsCard
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
        <img
          className="h-[174px] w-[162px] hidden xl:block  "
          src="/CUPPPP.png"
        />
      </div>
    </div>
  );
};

export default CricketFAQ;
