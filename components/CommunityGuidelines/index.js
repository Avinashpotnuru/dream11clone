import React from "react";
import ConditionsCard from "../TermsAndConditions/CondtionsCard";

const community = [
  {
    id: 1,
    title: "Spam",
    description:
      "Spam is any unwanted, unsolicited actions, whether automated or manual, that negatively impact the communities on the Win11 Platform. Examples of spam include :Spam is any unwanted, unsolicited actions, whether automated or manual, that negatively impact the communities on the Win11 Platform. Examples of spam include:Posting, sharing, engaging with content, or creating accounts, groups, pages, or events at very high frequencies, either manually or automaticallyRedirecting users to another website by posting misleading content or impersonating well-known brandsLinking to harmful third-party content, such as malware or phishing websites",
  },
  {
    id: 2,
    title: "Misinformation or Scam",
    description: `You do not have to use your real name on the Dream11 Platform, however, your name, profile picture, team name cannot include:
    Characters from multiple languages;
    Symbols, numbers including without limitation mobile numbers, unusual capitalization, repeating characters or punctuation;
    Words or phrases in place of name;
    Offensive or suggestive words of any kind; or
    Names of brands associated with fantasy sports.
    That said, we do require users :
    to provide us with accurate and up to date account-related information.
    Not to impersonate others by using their images with the explicit aim to deceive people;
    Not to create accounts for the purpose of violating our guidelines or misleading others.
    Not to Use another person or organization’s name or details in a misleading manner;
    Not to post images, videos, clips, gifs and such other content that is likely to deceive the public to the content’s origin, if (i) the entity or an authorised representative object to the content; and/ or (ii) can establish a risk of harm to members of the public;
    Not to Create accounts for minors;
    Not to maintain multiple accounts;
    Not to Share an account with another person;
    Not to create another account after being banned from the Dream11 Platform;
    Not to create an account assuming to be or speak for another person or entity for whom you are not authorised to do so;
    Not to use another person’s name, username, image, brand, logo, or other personal information; and
    Not to Set up a user account using the name and image of a person, and then pretending that person is posting content or comments.`,
  },
  {
    id: 3,
    title: "Violent and Criminal Behaviour",
    description: `We remove any content that encourages violence or has the potential to contribute to real-world harm or attacks on anyone based on their race, ethnicity, national origin, sex, gender, gender identity, sexual orientation, religious affiliation, disabilities or diseases. We vehemently prohibit hate speech, bullying and harassment and misinformation that contributes to the risk of imminent violence or physical harm. We try to consider the language and context in order to distinguish casual statements from content that constitutes a credible threat to public or personal safety.
    Do not post any of the following:
    Statements of intent to commit violence or statements advocating violence;
    Content that encourages glorifies, incites, or calls for violence or physical harm against an individual or a group of people or animals;
    Threats that lead to serious injury towards private individuals, public figures, high-risk persons or high-risk groups;
    Content that praises or supports any criminal or terrorist organisations or individuals or any acts committed by them;
    Content that praises or supports hate crimes, organised violence, mass shooting, human trafficking groups etc.;
    Misinformation and unverifiable rumours that contribute to the risk of imminent violence or physical harm;
    Content encouraging participation in high-risk viral challenges;
    Content advocating vandalism, harm against property, theft etc.
    Content that encourages bribery, embezzlement, money laundering, scams or any other fraudulent activity;
    Content that promotes the selling of fantasy teams or convinces others to partake in any kind of monetary transactions;
    Content that facilitates or coordinates the exploitation of humans, including human trafficking;
    Content that encourages suicide, self-injury, self-mutilation including certain graphic imagery and real-time depictions of such acts;
    Display content that promotes drug consumption, or encourages others to make, use, or trade-in drugs or other illicit substances;
    Content that threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order.`,
  },
  {
    id: 4,
    title: "Harassment",
    description: `We do not tolerate harassment, threatening, or bullying of any individuals on the Dream11 Platform nor do we tolerate any groups dedicated to this behavior. Do not do any of the following on the Dream11 Platform:
    Repeatedly contact someone in an unwanted, unsolicited or sexually harassing manner;
    Target anyone by attacking them based on their status as a victim of sexual assault, sexual exploitation or domestic abuse;
    Threaten to release an individual's private phone number, residential address or email address;
    Abuse, use curse words or swear words in any language against any individual in a derogatory way or engage in targeted swearing;
    Make derogatory comments against other users or any other individuals;
    Create pages or groups that are dedicated to attacking an individual;
    Call for self-injury or suicide of a specific person or group of people;
    Post content that mocks premature death, serious or fatal disease or disability, starvation, physical violence, domestic violence or serious physical injury;
    Make calls for death, serious disease or disability, or physical harm to a specific person or group of people;
    Attack a specific person or group of people through derogatory terms related to sexual activity;
    Post content about a violent tragedy, or victims of violent tragedies, that includes claims that a violent tragedy did not occur.`,
  },
  {
    id: 5,
    title: "Hate Speech",
    description: `We remove content that contains credible threats or hate speech or content that incites violence or promotes hate based on identity or vulnerability or certain characteristics such as race, ethnicity, national origin, religious affiliation, sexual orientation, caste, sex, gender, gender identity and serious disease or disability.
    Do not post any of the following:
    Violent or dehumanizing speech, statements of inferiority, or calls for exclusion or segregation targeting a person or specific persons;
    Content mocking events or victims of hate crimes;
    Content that describes or negatively targets people with slurs;
    Calls for segregation or political, social or economic exclusion of specific persons on the basis of their identity;
    Expressions of contempt, dismissal, disgust or generalizations about the inferiority of specific persons on the basis of their identity.`,
  },
  {
    id: 6,
    title: "Offensive Language & Visually Inappropriate Content",
    description: `We have zero-tolerance for predatory behavior towards minors or posting sexual or suggestive content involving minors or someone who appears to be a minor. We remove content that depicts, threatens or promotes sexual violence, sexual assault or sexual exploitation. We remove content that displays, advocates for or coordinates sexual acts with non-consenting parties. Do not post any of the following:
    Child sexual abuse imagery, child pornography, and any other content, including fantasy content, that depicts encourages or promotes pedophilia, child sexual exploitation, or otherwise sexualizes minors or someone who appears to be a minor;
    Content that consists of any form of sexual touching, crushing, necrophilia or bestiality, or forced stripping or mocking victims of such acts;
    Non-consensual intimate images of a person or secretly taken non-commercial imagery of a real person's commonly sexualised body parts or of a person engaged in sexual activity;
    Details about any adult commercial sexual services or prostitution activities, including requesting, offering or asking for rates for escort services.
    Content that consists any nudity, pornography, whether consensual or non-consensual.
    Any sexually explicit or derogatory language is strictly prohibited`,
  },
  {
    id: 7,
    title: "Reporting",
    description: `Each of us is an important part of the Dream11 community. If you see any post, or comment or receive any message in your inbox that you think may violate these Community Guidelines, please report such Content by clicking on the Report button available on the app. Should you feel the need to communicate and share information about an offensive post or comment, you may choose to write to us at helpdesk@dream11.com. When reporting Content, try to provide as much information as possible, such as links, usernames, and descriptions of the content. The Dream11 team shall personally review the post or comment and shall provide warnings via emails, remove entire posts if they are found to violate our Community Guidelines, temporarily or permanently ban and/ or block users who post objectionable Content or report such behavior to relevant authorities, helplines and third party experts, at the sole discretion of Dream11. If users complain against any content posted by any user either as a post, private message or in a group message and frequent complaints are received against any user from different users at any point in time, such users shall be blocked from posting, commenting, messaging in group chats and sending direct messages or to other users on the platform for a period of fourteen (14) days from the date of receipt of the complaint. For the avoidance of doubt, it is pertinent to mention that Dream11 reserves the right to automatically block a user from commenting, posting in a group chat, sending direct messages on Dream11 Platform if it is observed that the user has violated Dream11’s Community Guidelines by sending an email to the registered email id of such user.. Notwithstanding anything to the contrary contained herein, if a user wishes to be unblocked then he/ she shall place a request at helpdesk@dream11.com. Please note that Dream11 shall have the right to review a user’s request for unblocking a user account on a case to case basis and any decision taken by Dream11 in this regard shall be final and at its sole discretion.`,
  },
  {
    id: 8,
    title: "Moderation",
    description: `In addition to moderation of Content through the user reporting mechanism. In case of groups, the administrators of the groups on the Dream11 Platform (“Group Admin”) shall have the power to remove any user found to be sharing any aforementioned prohibited content or otherwise violating these Community Guidelines. Group Admins may mute all other group members from sending messages by turning on the “Only Group Admins can send Message” mode. Dream11 may also report risky behaviour to relevant authorities, helplines and third party experts and block user access to the Dream11 Platform, at the sole discretion of Dream11.
    For more information, please read the Dream11 Terms and Conditions https://www.dream11.com/games/fantasy-cricket/termsandconditions and the Dream11 Privacy Policy https://www.dream11.com/about-us/privacypolicy available on the Dream11 Platform or contact Dream11 at helpdesk@dream11.com.
    Compliance report of action taken under the Intermediary Guidelines and Digital Media Ethics Code 2021.`,
  },
];

const CommunityGuideLines = () => {
  return (
    <div className="  mt-[58px] sm:mt-[64px] lg:mt-[100px]">
      <div className="">
        <h1 className="text-center text-[24px] font-[700] text-[#00A547] pt-[58px] px-5 sm:px-10 lg:px-[200px]  lg:pt-[58px] pb-[32px] my-4">
          Community <span className="text-[#0169B6]">Guidelines</span>
        </h1>
        <p className="text-[16px] font-[400] text-[#0B592A] my-3 px-5 sm:px-10 lg:px-[200px]">
          Dream11 is the flagship brand of Sporta Technologies Private Limited
          ("Dream11" or “We”). Dream11 is committed to creating a safe and open
          environment for expression and give people a voice on its social
          communities available on the Dream11 website and mobile app (“Dream11
          Platform”). Through these communities, you can post, comment, vote,
          discuss, learn, debate, support and connect with people who share your
          interests. These guidelines (“Community Guidelines”), set out below
          provide general guidance and an overview of what is and what is not
          allowed on the Dream11 Platform. These Community Guidelines apply to
          any content uploaded, hosted, transmitted or otherwise made available
          or communicated on our platform (“Content”). Use of the Dream11
          Platform constitutes the user's acceptance of these Community
          Guidelines as may be amended from time to time. Dream11 may, at its
          sole discretion, also notify the user of any change or modification in
          these Community Guidelines, by way of sending an email to the user's
          registered email address or posting notifications on the Dream11
          Platform.
        </p>
        <p className="text-[16px] font-[400] text-[#0B592A] my-3  px-5 sm:px-10 lg:px-[200px]">
          By using Dream11, you agree to these guidelines and our Terms of Use
          and Privacy Policy. We are committed to these Community Guidelines and
          we require you to be committed too. Violation of these Community
          Guidelines may result in deleted content, disabled accounts, or other
          restrictions including a complete ban from the Dream11 Platform. We
          may also notify law enforcement when we believe that there is a
          genuine risk of physical harm or a direct threat to public safety. Any
          action or decision taken by Dream11 for violation of these Community
          Guidelines shall be at Dream11’s sole discretion.
        </p>{" "}
        <p className="text-[16px] font-[400] text-[#0B592A] my-3  px-5 sm:px-10 lg:px-[200px]">
          Dream11 has sought to make these Community Guidelines as detailed as
          possible, however, this is not an exhaustive list of policies and all
          Content, if reported, shall be analysed independently based on the
          parameters mentioned in these Community Guidelines. We urge you that
          if you find Content that indirectly or directly violates these
          Community Guidelines, please report it to Dream11 in the manner set
          forth herein.
        </p>
      </div>
      <div className=" w-full relative bg-red-300">
        <img
          className="absolute h-[164px] w-[164px] hidden lg:block"
          src="/rugb.svg"
        />
      </div>

      <div className="mt-10  lg:mt-[100px] mb-6 relative">
        <p className="text-[20px]  px-5 sm:px-10 lg:px-[200px] font-[700] text-[#00A547]  ">
          Prohibited Content
        </p>
        <p className="text-[16px] font-[400] text-[#0B592A] my-6  px-5 sm:px-10 lg:px-[200px]">
          The following types of content are prohibited on the Dream11 Platform
          and may warrant action from Dream11.
        </p>
        <div className="mb-[50px] md:mb-[132px]   px-10 sm:px-14 lg:px-[200px]">
          {community.map((item) => (
            <ConditionsCard
              key={item?.id}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
        <img
          className="absolute h-[164px] w-[164px] right-0 hidden lg:block bottom-0"
          src="/basketball.svg"
        />
      </div>
    </div>
  );
};

export default CommunityGuideLines;
