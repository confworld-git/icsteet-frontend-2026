import React from "react";
import "./Terms.css";
import { IoIosCheckmark } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import terms from "../../assets/Images/download3.jpg";

const Terms = () => {
  return (
    <div className="terms-and-conditions">
      <img loading="lazy" src={terms} alt="" />
      <div id="terms-and-conditions__container">
        <h1>Terms and Conditions</h1>
        <ul>
          <li>
            <LuDot />
            By registering for the conference, you hereby agree with the terms
            and conditions.
          </li>
          <li>
            <LuDot />
            The organization reserves the right to make alterations to the
            program, date and/or venue at any time without prior notice.
          </li>
          <li>
            <LuDot />
            The organization is not responsible for any loss or damage as a
            result of substitution, alteration, postponement or cancellation of
            an event due to causes beyond its control including without
            limitation, force majeure, natural disasters, sabotage, accident,
            trade or industrial disputes, terrorism, strikes or hostilities.
          </li>
          <li>
            <LuDot />
            The organization reserves the right and holds the sole discretion to
            cancel any conference at any time in case of any unavoidable and
            unforeseeable circumstances. The organizer will have no further
            liability to the client.
          </li>
          <li>
            <LuDot />
            Registrations remain valid for the event with new dates or for
            future editions if the conference has to be postponed by causes
            beyond organizer control. The refund policy is not applicable to
            this condition.
          </li>
          <li>
            <LuDot />
            In the event of cancellation, the organization will use reasonable
            and suitable alternative arrangements such as posting the news of
            cancellation on the appropriate event website to alert those who
            have booked or purchased tickets to attend the event.
          </li>
          <li>
            <LuDot />
            Delegates are responsible for checking this information prior to the
            event. We advised you to keep checking the website for updates of
            our conference.
          </li>
          <li>
            <LuDot />
            The organizers will not accept any liability for personal injuries
            or for loss or damage to property belonging to the delegates, either
            during, or as a result of the conference.
          </li>
        </ul>
      </div>
      <div>
        <h1>Privacy Policy</h1>
        <ul>
          <h1>1. Information</h1>
          <p>
            We collect personal information that you voluntarily provide to us
            when registering for conferences, subscribing to newsletters,
            submitting inquiries, or participating in surveys or forums on
            https://icsteet.com/ . This information may include:
          </p>
          <li>
            <IoIosCheckmark />
            Name
          </li>
          <li>
            <IoIosCheckmark />
            Email address
          </li>
          <li>
            <IoIosCheckmark />
            Contact number
          </li>
          <li>
            <IoIosCheckmark />
            Mailing address
          </li>
          <li>
            <IoIosCheckmark />
            Payment information
          </li>
          <li>
            <IoIosCheckmark />
            Any other information you provide voluntarily
          </li>
        </ul>
        <ul>
          <h1>2. How We Use Your Information</h1>
          <p>We use the information we collect for the following purposes:</p>
          <li>
            <IoIosCheckmark />
            To process registrations for events and conferences
          </li>
          <li>
            <IoIosCheckmark />
            To communicate with you regarding updates, announcements and
            relevant event information
          </li>
          <li>
            <IoIosCheckmark />
            To respond to inquiries or provide customer support
          </li>
          <li>
            <IoIosCheckmark />
            To manage website operations and improve our services
          </li>
          <li>
            <IoIosCheckmark />
            To process payments and billing for conference participation or
            services
          </li>
          <li>
            <IoIosCheckmark />
            For marketing purposes (only if you have given explicit consent)
          </li>
        </ul>
        <ul>
          <h1>3. Sharing of Information</h1>
          <p>
            We do not sell, trade or rent your personal information to third
            parties. However, we may share your information with:
          </p>
          <li>
            <IoIosCheckmark />
            Service providers and vendors assisting us with conference
            logistics, payment processing and website management.
          </li>
          <li>
            <IoIosCheckmark />
            Law enforcement agencies or governmental bodies when required by
            law.
          </li>
        </ul>
        <ul>
          <h1>4. Your Rights</h1>
          <p>You have the right to:</p>
          <li>
            <IoIosCheckmark />
            Access, update or delete your personal information.
          </li>
          <li>
            <IoIosCheckmark />
            Opt-out of marketing communications.
          </li>
          <li>
            <IoIosCheckmark />
            Request the restriction of processing of your data in certain
            circumstances. To exercise any of these rights, please contact us at
            info@icsteet.com
          </li>
        </ul>
        <ul>
          <h1>5. Changes to This Privacy Policy</h1>
          <p>
            We reserve the right to update this Privacy Policy at any time. Any
            changes will be posted on this page and we encourage you to review
            this page regularly to stay informed.
          </p>
        </ul>
        <ul>
          <h1>6. Contact Us</h1>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your personal information, please contact us at:
          </p>
          <li>
            <IoIosCheckmark />
            Email: info@icsteet.com
          </li>
          <li>
            <IoIosCheckmark />
            Phone: +91 8072381719
          </li>
        </ul>
      </div>
      <div className="pb-4">
        <h1>Program Slot Policy</h1>
        <p>
          No changes to allocated slots will be allowed once the official program schedule (Agenda) is released.
        </p>
        
      </div>
      <div>
        <h1>Cancellation Policy</h1>
        <p>
          If the registrant is unable to attend, please note the following
          cancellation policy, which takes into account advance payments made
          for venue, printing, shipping, hotels and other overheads:
        </p>
        <ul>
          <li>
            <IoIosCheckmark />
            50 Days Before Conference: 40% refundable
          </li>
          <li>
            <IoIosCheckmark />
            30-40 Days Before Conference: 35% refundable
          </li>
          <li>
            <IoIosCheckmark />
            Less Than 30 Days Before Conference: No refunds will be issued
          </li>
        </ul>
      </div>
      <div>
        <h1>Refund Policy</h1>
        <p>
          Transfer of Registration: Registration can be transferred to another
          event organized by the same organization of the registrant’s choice.
        </p>
        <p>
          Note: Refunds will be processed 2-4 weeks after the conference,
          excluding transaction charges. Refund/Cancellation Policy is not
          applicable if the conference is postponed due to natural disasters or
          unpredictable activities beyond organizers control including without
          limitation, force majeure, natural disasters, sabotage, accident,
          trade or industrial disputes, terrorism, strikes or hostilities.
        </p>
      </div>
      <div>
        <h1>VISA Information</h1>
        <p>
          Confworld Educational Research and Development Association (CERADA)
          will not directly contact embassies and consulates on behalf of visa
          applicants. All delegates or invitees should apply for a Business Visa
          only.
        </p>
        <p>
          Visa issues, including the inability to obtain a visa, do not fall
          under the consideration of the cancellation policy of the Confworld
          Educational Research and Development Association (CERADA).
        </p>
      </div>
    </div>
  );
};

export default Terms;
