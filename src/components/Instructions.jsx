import botImage from '../assets/images/botImage.png';

const Instructions = () => {
  return (
    <div className="container py-5">
      <div>
        <div className="font-semibold">Hi Team, Please find below flow to have a conversation with Bot.</div>
        <ol className="my-10 list-decimal">
          <li className="">
            Start with a traditional question for the bot. The bot will present you with options to choose from. After making a selection, the bot
            will provide the corresponding answer.
            <ol className="list-decimal px-5">
              <li>{`Send the message "Hi."`}</li>
              <li>Enter your name.</li>
              <li>
                The bot will present multiple options:
                <ul className="list-disc px-5">
                  <li>{`Select > Course Inquiry > Choose a course for details. The bot will provide information and then return to the main menu.`}</li>
                  <li>{`Select > Research Institute > Get details about research institutes. The bot will return to the main menu afterward.`}</li>
                  <li>{`Select > Our Selections > View selected students and receive a link to the page. The bot will return to the main menu.`}</li>
                  <li>{`Select > Directions > Obtain the latitude and longitude of a location. The bot will return to the main menu.`}</li>
                  <li>
                    {`Select > Talked to customer support >if "No" is selected > The bot will return to the main menu. > Choose "Yes" to talk to an expert, provide your email,`}{' '}
                    <strong> and the conversation ends here.</strong>
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            This is the interactive way to interact with the bot. Ask questions, and the bot will provide answers based on predefined data. The bot is
            trained solely on this data and cannot answer questions beyond the specified list. It is not connected to the internet.
            <div className="font-semibold">{`Select > Ask Eve > and now you can ask below questions`}</div>
            <ul className="list-decimal px-5">
              <li>Why should one choose CEBS?</li>
              <li>What is CEBS?</li>
              <li>What’s So Special About CEBS?</li>
              <li>What sets CEBS apart?</li>
              <li>Opportunities After IISER: Packages, Placements, PhD?</li>
              <li>How IISER Prepares You for a PhD?</li>
              <li>What After PhD?</li>
              <li>How to get into IISER?</li>
              <li>What is the most common career path for IISER graduates?</li>
              <li>Is it easy to get into an Ivy League PhD program after IISER?</li>
              <li>What are the funding options for PhD programs abroad?</li>
              <li>What are the salary expectations after a PhD in India vs. abroad?</li>
              <li>Can IISER graduates pursue careers outside academia and research? </li>
              <li>What are some government job opportunities for IISER graduates?</li>
              <li>Is the NEST exam harder than the NEET?</li>
              <li>How to get into IISc Bangalore after the 12th?</li>
              <li>What are the courses offered by IISc after the 12th?</li>
              <li>What are the eligibility criteria for admission to IISc after the 12th?</li>
              <li>Is Maths Compulsory in the IISER Aptitude Test?</li>
              <li>Do You have subject flexibility in IAT?</li>
              <li>Is Maths a Must?</li>
              <li>How to prepare well and ace the Mathematics section?</li>
              <li>Is Biology a compulsory in IISER Aptitude Test?</li>
              <li>Do you have the freedom to choose subjects in IAT?</li>
              <li>Is Biology a must for IIT-M and IISc Bangalore admission?</li>
              <li>Why Attempt All Subjects?</li>
              <li>How to Prepare if You’re Not Strong in Biology?</li>
            </ul>
          </li>
        </ol>

        <div>Please Find below flow diagram of bot.</div>
        <img src={botImage} alt="" />
      </div>
    </div>
  );
};

export default Instructions;
