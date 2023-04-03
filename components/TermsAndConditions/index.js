import React from "react";
import ConditionsCard from "./CondtionsCard";

import { BsDot } from "react-icons/bs";

const conditions = [
  {
    id: 1,
    title: "Win11 usage",
    description: `These Terms and Conditions, as well as all other rules, regulations, and terms of use referred to herein or provided by Win11 in relation to any Win11 Services, shall apply to any person ("User") accessing Win11 or the Win11 App (the "Win11 platform") for the purpose of participating in any of the various contests and games (including fantasy games), available on the Win11 platform ("Contest(s)".
  Win11 is free to change these terms and conditions, as well as any other rules, policies, or guidelines provided in connection with any Win11 Services, at any time by posting the updated information on Win11. By using Win11, the user agrees to all of the terms and conditions mentioned here and/or provided by Win11 in relation to any Win11 Services, as they may be updated from time to time. Win11 may, in its sole discretion, also notify the User of any changes or modifications to these Terms and Conditions, rules, regulations, and terms of use referenced herein or provided by Win11, by posting notifications online or sending an email to the User's registered email address.
  Additional rules and guidelines pertaining to that may apply to some Win11 Services offered on Win11. The additional conditions will take precedence over these Terms and Conditions to the extent they conflict with them.
  At its sole and absolute discretion:
  Access to all or any portion of Win11 or Win11 Platform Services by any User may be restricted, suspended, or terminated;
  alter, pause, or end the Win11 Platform Services entirely or in part;
  reject, relocate, or take away any content that a user may submit;
  Any content that is available on the Win11 Platform may be moved or removed;
  Deactivate or delete a User's account, along with all associated data and files;
  Set general guidelines and restrictions for using the Win11 Platform;
  Provide discounts to its users as it sees fit ("Cash Bonus"). The Cash Bonus Account is a separate account that will receive credit for all such discounts.
  Revisions to the roster of players participating in the relevant Sports Event may necessitate adding or removing players from the roster of players available for selection in a Contest;
  Assigns all User accounts covered by this agreement's rights and obligations to any third party.
  If a User violates these Terms and Conditions or Win11 reasonably believes that the User has violated these Terms and Conditions, or has used Win11 or the Win11 Services in an illegal or improper manner, Win11 may, in its sole discretion, and without prior notice to the User, restrict, suspend, or terminate the User's access to all or any portion of Win11 Contests or the Win11 Platform, deactivate or delete the User's account and all associated information on the account, delete any contest entries made by the User
  If Win11 charges its users a platform fee for any Win11 Services, Win11 shall promptly refund that platform fee if the User's account or Win11 Services are suspended or removed due to any negligence or shortcoming on the part of Win11, but not if such suspension or removal is brought about by:
  any violation or subpar performance by the User of any of the terms and conditions; or any situations outside of Win11's reasonable control.
  Users agree to hear from Win11 or any of its partners, licensors, or affiliates regarding announcements, administrative messages, and advertisements.
  Informational property
  Win11 contains a mixture of content produced by Win11, its associates, partners, licensors, partners, and/or users. Win11, its partners, licensors, and/or associates are the owners of the intellectual property rights ("Intellectual Property Rights") in all software that underlies Win11 and the Win11 Platform and in all published material on Win11, including (but not limited to) games, Contests, software, advertisements, written content, photographs, graphics, images, illustrations, marks, logos, audio or video clippings, and Flash animation. Users are not permitted to alter any materials or content on Win11, in whole or in part, publish, transmit, take part in the transfer or sale of, reproduce, create derivative works from, distribute, publicly perform, publicly display, or in any other way exploit them without Win11's express written consent.
  By sending a mail to the Win11 Helpdesk, users can ask for permission to use any Win11 content.
  All content (whether privately or publicly transmitted) that users upload, post, email, transmit, or otherwise make available on Win11 (hereinafter referred to as "Users' Content") is their sole responsibility. Each User affirms and guarantees that all Intellectual Property Rights in their Content are their own and that none of their Content infringes on the rights of any third parties. Additionally, users affirm and promise not to use or display any third-party names, logos, marks, labels, trademarks, copyrights, or other intellectual property on Win11. Users consent to hold Win11, its directors, employees, affiliates, and assigns harmless from any costs, damages, loss, or harm, including attorney fees and court costs, arising from any third-party claims that may be brought, including
  Users hereby grant Win11 and its partners, affiliates, licensors, and employees a non-exclusive, transferable, transferable, worldwide, royalty-free licence to use, reproduce, modify, publicly perform, publicly display, transfer, transmit, and/or publish Users' Content for any of the following purposes:
  showing user content on Win 11
  distributing Users' Content to other Users who want to download it or otherwise obtain it, whether electronically or through other media, and/or putting Users' Content in a remote database that End Users can access in exchange for a fee.
  Any format, platform, or technology used to distribute or store user content is subject to this licence.
  All names, logos, marks, labels, trademarks, copyrights, or other intellectual property rights on Win11(s) belonging to any individual (including User), entity, or third party are acknowledged as the property of the respective owners, and any disputes or claims regarding these names, logos, marks, labels, trademarks, copyrights, or intellectual property rights must be directed to the appropriate parties with notice to Win11.`,
  },
  {
    id: 2,
    title: "Sites, services, and products from third parties",
    description: `Links to other Internet sites that are owned and operated by third parties may be found on Win11. The terms, if any, that each of those websites posts govern how users may use each of those websites. Win11 has no control over any websites other than its own, and it is not liable for any content found on any such websites. The inclusion of third-party content by Win11 or links to third-party websites does not imply Win11's support for those third-party websites.
    Users' communications, deals, or other interactions with third parties, such as payment processors and providers of verification services, are solely between the User and that third party. Users are solely responsible for reading the terms and conditions, policies, and other service terms adopted or implemented by the third party before transacting with them or using their services/offers. Users' correspondence, transactions, and usage of the services/offers of the third party shall be subject to those terms and conditions, policies, and other service terms. User acknowledges and agrees that Win11 shall not be held liable or responsible for any loss or damage of any kind resulting from any such dealings or offers with third parties. Any inquiries, grievances, or claims regarding any third-party goods or services must be made to the
    Both content produced by Win11 and content supplied by outside sources are included in Win11. When using the Win11 Services offered on Win11, including when taking part in any of the contests held on Win11, Users should not rely on the accuracy, integrity, or quality of the content provided by third parties as Win11 does not guarantee such things.`,
  },
  {
    id: 3,
    title: "Privacy Policy",
    description: `Links to other Internet sites that are owned and operated by third parties may be found on Win11. The terms, if any, that each of those websites posts govern how users may use each of those websites. Win11 has no control over any websites other than its own, and it is not liable for any content found on any such websites. The inclusion of third-party content by Win11 or links to third-party websites does not imply Win11's support for those third-party websites.
  Users' communications, deals, or other interactions with third parties, such as payment processors and providers of verification services, are solely between the User and that third party. Users are solely responsible for reading the terms and conditions, policies, and other service terms adopted or implemented by the third party before transacting with them or using their services/offers. Users' correspondence, transactions, and usage of the services/offers of the third party shall be subject to those terms and conditions, policies, and other service terms. User acknowledges and agrees that Win11 shall not be held liable or responsible for any loss or damage of any kind resulting from any such dealings or offers with third parties. Any inquiries, grievances, or claims regarding any third-party goods or services must be made to the
  Both content produced by Win11 and content supplied by outside sources are included in Win11. When using the Win11 Services offered on Win11, including when taking part in any of the contests held on Win11, Users should not rely on the accuracy, integrity, or quality of the content provided by third parties as Win11 does not guarantee such things.`,
  },
  {
    id: 4,
    title: "User Conduct",
    description: `Users agree to follow these Terms and Conditions as well as all other policies, guidelines, and conditions governing how to use the Website. Win11 may, in its sole and absolute discretion, take the necessary corrective action if User violates these Terms and Conditions and all other rules, regulations, and terms of use, including but not limited to:
  limiting, suspending, or banning a User's access to all or a portion of the Win11 Services;
  deleting or deactivating a User's account, along with all associated data and files. If there is any money in the user's game account or winnings account that has not been used as of the date of deactivation or deletion, it will be transferred to the user's bank account on file with Win11, subject to any applicable processing fees (if any) for such transfers as described here;
  not presenting any prize(s) to such a user.
  Users affirm that at registration and at all other times they will provide true, accurate, current, and complete information (as required by Win11). Users additionally agree to keep their registration information up to date.
  A User may not open or manage more than one Win11 user account.
  Users certify that they can receive all communication from Win11 by adding Win11 to their "safe senders" list for emails and SMS messages. Win11 won't be held responsible if a user doesn't read an email or SMS because it was delivered to their junk or spam folder.
  Any password that Win11 issues to a User must not be shared with anyone else. User passwords may not be used by anyone else. Users are in charge of protecting the privacy of their passwords and accounts. Users agree to notify Win11 right away if they become aware of any unauthorised use of their accounts or passwords or any other security breach.
  Users consent to ending each session by logging out of their accounts. If the User does not adhere to these requirements, Win11 shall not be liable for any loss or damage that may result.
  Users agree not to engage in any activity that alters or interferes with Win11 Services and/or the Win11 experience, including the use of cheats, exploits, automation, software, bots, hacks, or any other unauthorised third party software.
  The technology or software that underpins Win11 or Win11's Services may not be copied, modified, rented, leased, loaned, sold, assigned, distributed, reverse-engineered, granted a security interest in, or otherwise transferred.
  Users acknowledge that they may not alter or cause to be altered any files or software that are a part of Win11's Services without Win11's express written consent.
  Users agree not to disrupt, overburden, or aid or assist in the disruption or overburdening of (a) any computer or server used to offer or support Win11 or the Win11’s Services (each a "Server"); or (2) the enjoyment of Win11 Services by any other User or person.
  Users agree not to launch, support, or take part in any attack, including without limitation the distribution of viruses, denial-of-service attacks, or other attempts to obstruct another person from using or enjoying Win11 Services.
  Users shall not attempt to gain unauthorised access to the User accounts, Servers, or networks connected to Win11 Services by any means other than the Win11-provided user interface, including but not limited to by attempting to circumvent or modify any security, technology, device, or software that underlies or is a component of Win11 Services, or by encouraging or assisting any other person to do so.
  The user is not permitted to publish any content that is obviously false and untrue and that has been written or published in any way with the intention of deceiving or harassing a person, entity, or agency for personal gain or to harm anyone.
  Without limiting the aforementioned, Users agree to refrain from using Win11 for the following activities:
  to act or communicate in any way that is obscene, offensive, indecent, racial, communal, anti-national, objectionable, defamatory, or abusive;
  to violate any other person's legal rights through harassment, stalking, threats, or other means;
  To publish, post, upload, e-mail, distribute, or otherwise disseminate any inappropriate, offensive, slanderous, illegal, infringing, pornographic, or otherwise objectionable content (collectively, "Transmit");
  To send files that are infected with malware, corrupted, or any other similar software or applications that could harm or negatively impact another person's computer, Win11, or any other software, hardware, or telecommunications equipment;
  without Win11's express written consent, to market, offer, or sell any goods or services for any commercial purpose on Win11;
  download any file that you know—or should know—cannot be legally obtained in such a way, recompile, disassemble, or otherwise alter our products;
  falsifying or erasing any author attributions, legal or other appropriate notices, or exclusive designations or labels of the source or the origin of software or other material;
  to prevent another user from using or enjoying any public space on our sites;
  to gather or keep private data about other users;
  to obstruct or interfere with Win11, servers, or networks;
  To pretend to be someone else, including a Win11 representative, or to otherwise misrepresent one's affiliation with another person or organization;
  to alter a user's presence on a Win11 system or to tamper with headers, identifiers, or other data in order to hide the source of any content transmitted through a Win11 system;
  any action that places a disproportionately heavy or unreasonable burden on our infrastructure;
  to take part in any unlawful activity. You agree to only send and receive messages and materials that are appropriate and pertinent to the specific Forum when using our bulletin board services, chat areas, news groups, forums, communities, and/or message or communication facilities (collectively, the "Forums").
  To engage in any action that threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting other nation.
  Win11 reserves the right, without prior notice to the User, to restrict usage of such names, which in Win11's opinion fall within any of the aforementioned categories and/or change such username and intimate information, if a User selects a username that, in Win11's considered opinion, is obscene, indecent, abusive, or that might subject Win11 to public disparagement or scorn, or a name that is an official team/league/franchise names and/or
  It is against the law and a violation of these terms and conditions to access Win11 without authorization. Users consent to only using the interface that Win11 provides for use in accessing Win11, and not by any other method. Users agree not to access, monitor, or copy any portion of our sites using automated methods, such as agents, robots, scripts, or spiders, unless those automated methods have been approved in advance and in writing by us.
  Use of Win11 is governed by current legislation and legal procedures. Nothing in these terms and conditions shall restrict Win11's right to submit information as may be required by governmental, court, and law enforcement authorities with respect to Users' use of Win11.
  Within forty-eight (48) hours of the contest's winner being announced, users can contact Win11 through the Helpdesk if they have any questions about a match or contest.
  Participants under the age of eighteen (18) are not permitted in any of the competitions, games, or other activities on the Win11 Platform. When gaining access to the Win11 Platform, the Users must disclose their actual age.
  Any user-generated content on the Win11 is not the responsibility of Win11. The user hereby attests that he or she is taking part in the contest solely for personal reasons and not in the course of their employment.`,
  },
  {
    id: 5,
    title: "Requirements for Participation:",
    description: `User consents to be bound by these Terms and Win11's decisions by participating in a Contest. Subject to the terms and conditions outlined below, the Company, in its sole discretion, reserves the right to disqualify any user from a Contest, refuse to award benefits or prizes, and request the return of any prizes if the user engages in unethical conduct that the Company deems improper, unfair, or otherwise detrimental to the operation of the Contest or is in any way harmful to other Users, including but not limited to:
  Falsifying one's own personal information, such as one's name, email address, bank account information, and/or any other information or documentation that Win11 may request in order to enter a contest and/or claim a prize or winning;
  using unauthorised credit/debit cards, payment wallet accounts, or other means to enter a contest or obtain a prize is considered financial fraud. It is expressly stated that the user bears the entire burden of proof in order to establish the contrary.
  collaborating with any other user(s) or taking part in syndicate play of any kind;
  any violation of the terms and conditions or the contest rules; using bots or other automated processes to earn points or prizes without authorization;
  Using automated methods to obtain, collect, or access any information from the Website or from any User for any purpose, including but not limited to harvesting bots, robots, parsers, spiders, or screen scrapers misuse of any kind of Cash Bonus, invite-a-friend program, or other offers or promotions;
  attempting to compromise any security measure or the computer programmes used to administer a contest; meddling in any way with these systems; obtaining other users' information without their express permission, knowledge, or use, as well as spamming other users (spamming includes, but is not limited to, sending unsolicited emails to users, bulk emailing Win11 users, and sending inappropriate email content to either selected users or the entire user base); or
  Abusing the website in any way, including by using "unparliamentary language, slang, or disrespectful words"
  It is clarified that in case a User is found to be in violation of this policy, Win11 reserves its right to initiate appropriate Civil/Criminal remedies as it may be advised other than forfeiture and/or recovery of prize money if any.`,
  },
  {
    id: 6,
    title: "Signing up for a competition",
    description: `Participants must provide the following details truthfully in order to register for the Contest(s):
  Full Name
  Team Name(s)
  E-mail address
  Password
  State of Residence
  Gender
  Date of birth
  Additionally, participants must attest that they have read and agree to abide by these Terms and Conditions.
  A Participant will not be able to sign up for any matches in the paid version of the Contest as detailed below if they indicate while entering their address that they are a resident of either Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, or Telangana.
  If the Participant is over the age of 18, they must enter the aforementioned information and click the "register" tab before receiving an email confirming their registration and containing their login details.`,
  },
  {
    id: 7,
    title: "Contest(s), Participation and Prizes",
    description: `The contest(s) may be made available on the Win11 platform as part of Win11's services. Individual users who wish to take part in the contest ("Participants") are invited to create their own fantasy teams ("Team/s") consisting of actual players from the sports.

  Actual match start time is before the official deadline:
  The deadline may be adjusted by Win11 up to ten minutes after the actual match start time. The match will be abandoned if the actual start time is more than 10 minutes past the scheduled end time. Win11 reserves the right to extend the deadline by up to 10 minutes or three bowled overs, whichever is less, prior to the scheduled start of the match.
  Win11 reserves the right to modify the deadline so that no more than three overs in the given match have been bowled by the time the deadline is reached if the official match time cannot be confirmed by Win11 through trustworthy and/or publicly available sources. All sports, excluding cricket-
  
  Actual match start time is after the official deadline:
  In the event of a delayed coin toss, a weather-related delay, a team's absence, a technical issue with the equipment, etc., Win11 reserves the right to extend the deadline or cancel the contest/game. Win11 reserves the right to cancel a particular round or change the round's deadline in certain particular, improbable circumstances that are beyond Win11's reasonable control, including but not limited to the ones listed below:
  
  Win11 will make an effort to update the User on any changes as described in the aforementioned paragraphs by sending communications via emails and/or SMS. At the conclusion of a designated match, match, or tournament of the Contest, teams are given points based on the real-life performances of cricket players, football players, basketball players, volleyball players, hockey players, baseball players, handball players, American football players, or kabaddi players (as applicable) (s). Winners of the Contest(s) will be the Participant(s) whose Team(s) received the highest combined score(s) ("Winners"). There may be more than one winner in some pre-specified contests, and the winners of those contests will receive their prizes in ascending order based on the final score their team received as a team during the designated match (s)
  The Contest(s) are currently offered on the Win11 platform in paid versions. By paying the pre-specified sum as specified on the applicable Contest page, users may enter the Contest(s). The term "pre-designated amount" refers to and includes the platform fee for using Win11 services and the participant's share of the prize pool, both of which are predetermined. The winner of the pre-designated prize, which is paid out of the prize money pool, as specified on the relevant Contest(s) page, shall be the Participant with the highest cumulative points at the conclusion of the pre-determined match.
  For the purpose of participating in Contest(s) related to a Sport Event across the Win11 Services, a Participant may create various Teams. However, Participants acknowledge and agree that they may enter only one Team in any Contest offered in relation to a Sport Event, unless Win11 specifically states otherwise with regard to any Contest ("Multiple Entry Contest"). A participant may enter more than one team into a single Multiple Entry Contest in the case of Multiple Entry Contest(s). Additionally, it is made explicitly clear that Win11 reserves the right to limit the maximum number of Teams that a single User account may create (for each contest format) or that a single User account may enter in a specific Multiple Entry Contest, in each case.
  A predetermined fee must be paid by the participant in order to take part in any contests run on the Win11 platform. When entering an address, a participant is not allowed to sign up for a match or contest if they indicate that they are from Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, or Telangana. They also are not allowed to take part in any paid version of the contest (s).
  The contest prize money shall be equally divided among all participants and deposited in the Win11 winning accounts of all participants, with the remaining amount being credited to the Cash Bonus accounts of such participants, in public contests with two members or more and where all participants entered the contest with the exact same teams, including the captain and vice-captain in such an event. The Company reserves the right to take whatever action it deems appropriate, including forfeiting the Cash Bonus Amount, against users who are found to be violating this policy. The purpose of indicating a player's inclusion in the final starting lineup in the starting lineup feature is only to inform and assist
  No points will be given to substitutes on the field for any contributions they make. However, according to the Fantasy Points System, "Concussion or COVID-19 or X Factor or Impact Player Substitutes" will ONLY receive four (4) points for entering a game in addition to points for any contributions they make (w.e.f Oct 9 2022).
  `,
  },
];

const TermsAndConditions = () => {
  return (
    <div className=" mt-[70px]  sm:mt-[100px] md:mt-[120px]">
      <h1 className=" font-[700] md:px-[40px] lg:px-[200px] text-center  text-[#00A547] text-[24px] mb-6  ">
        Terms and Conditions
      </h1>
      <div className="flex items-center md:px-[40px] lg:px-[200px]">
        <BsDot color="green" size={34} />
        <p className=" font-[700]  text-[#00A547] text-[24px] my-3  ">Win11</p>
      </div>
      <img
        className="h-[60px] w-[60px] md:h-[120px] md:w-[120px] lg:h-[165px] lg:w-[165px]-z-10 absolute right-0 "
        src="/cricketball.svg"
      />
      <img
        className="h-[60px] w-[60px] md:h-[120px] md:w-[120px] lg:h-[165px] lg:w-[165px] -z-10 absolute left-0 bottom-0 hidden lg:block "
        src="/rugb.svg"
      />

      <p className="md:px-[40px] lg:px-[200px] font-[400] px-4 sm:px-6 text-[#0B592A] text-[16px] my-5  ">
        The primary brand of Win11 Gaming Private Limited is Win11 ("Win11").
        Win11 operates through its applications online fantasy games based on
        cricket, football, basketball, f1 racing, soccer, baseball, kabaddi and
        investment prediction games. Win11 also operates its subpages and the
        Win11 App. When the term "Win11" is used in this text, it refers to both
        Win11 and the Win11 App collectively.
      </p>
      <div className="flex flex-col p-3 px-10 sm:px-16 w-full md:px-[40px] lg:px-[200px]  mb-[48px] md:mb-[100px] lg:mb-[20px] ">
        {conditions.map((item) => (
          <ConditionsCard
            title={item?.title}
            key={item?.id}
            description={item?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
